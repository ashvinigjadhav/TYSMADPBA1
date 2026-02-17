import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";
import { getCart, removeFromCart, updateQty, clearCart, parseINR } from "../utils/cart";

export default function Cart() {
  const nav = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const [cart, setCart] = useState(getCart());
  const [message, setMessage] = useState("");

  useEffect(() => {
    setUser(getCurrentUser());
    setCart(getCart());
    const id = setInterval(() => setCart(getCart()), 500);
    return () => clearInterval(id);
  }, []);

  function handleRemove(id) {
    const updated = removeFromCart(id);
    setCart(updated);
  }

  function handleQtyChange(id, qty) {
    if (qty < 1) qty = 1;
    updateQty(id, qty);
    setCart(getCart());
  }

  function handleClear() {
    clearCart();
    setCart([]);
  }

  function handleCheckout() {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      setMessage("Please login or register before checking out.");
      nav("/login");
      return;
    }
    if (cart.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }
    nav("/checkout");
  }

  if (!user) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Please login to view your cart.</h2>
        <button
          onClick={() => nav("/login")}
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            background: "linear-gradient(90deg,#ff7b7b,#7b9eff)",
            color: "#051023",
            border: "none",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Your cart is empty</h2>
        <p style={{ color: "var(--muted)" }}>Browse the gallery and add artworks to buy.</p>
      </div>
    );
  }

  const total = cart.reduce((s, i) => s + parseINR(i.price) * (i.qty || 1), 0);

  return (
    <section style={{ padding: 32, maxWidth: 1000, margin: "0 auto" }}>
      <h2>Your Cart</h2>

      <div style={{ display: "grid", gap: 12 }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: 12,
              background: "rgba(255,255,255,0.02)",
              borderRadius: 10,
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              <div style={{ color: "var(--muted)" }}>{item.price}</div>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="number"
                min={1}
                max={10}
                value={item.qty || 1}
                onChange={(e) => handleQtyChange(item.id, Number(e.target.value))}
                style={{
                  width: 64,
                  padding: 6,
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              />
              <div style={{ fontWeight: 700 }}>
                ₹{(parseINR(item.price) * (item.qty || 1)).toLocaleString("en-IN")}
              </div>
              <button className="btn btn-outline" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 18,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: 800, fontSize: 18 }}>
          Total: ₹{total.toLocaleString("en-IN")}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-outline" onClick={handleClear}>
            Clear Cart
          </button>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {message && <div style={{ marginTop: 12, color: "lightgreen" }}>{message}</div>}
    </section>
  );
}