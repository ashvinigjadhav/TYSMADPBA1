import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems = [] } = location.state || {};
  const [restoredCart, setRestoredCart] = useState([]);

  // ✅ Always use correct cart (from state or restored)
  const displayCart = cartItems.length > 0 ? cartItems : restoredCart;

  // ✅ Dynamic total price with qty
  const totalAmount = displayCart.reduce(
    (sum, game) => sum + (game.price * (game.qty || 1)), 
    0
  );

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  // ✅ Check login + restore pending cart
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("gameHubLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const storedPending = JSON.parse(localStorage.getItem("pendingCheckout"));
    const savedCart = JSON.parse(localStorage.getItem("cart"));

    if (storedPending && cartItems.length === 0) {
      setRestoredCart(storedPending);
      localStorage.setItem("cart", JSON.stringify(storedPending));
      localStorage.removeItem("pendingCheckout");
    } 
    else if (!storedPending && savedCart && cartItems.length === 0) {
      setRestoredCart(savedCart);
    }
  }, [navigate, cartItems.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.username || !formData.email || !formData.address || !formData.city || !formData.pincode) {
      alert("⚠️ Please fill all details to continue.");
      return;
    }

    alert("🎉 Order Successful! Enjoy your games!");

    localStorage.removeItem("cart");
    localStorage.removeItem("pendingCheckout");

    navigate("/");
  };

  return (
    <div className="container mt-5 pt-4">
      <h2 className="fw-bold text-center mb-4">🛍️ Checkout</h2>

      <div className="row">

        {/* ✅ User Form */}
        <div className="col-md-6 mb-4">
          <h4 className="mb-3">Player Details 🎮</h4>
          <form>
            {/* unchanged form */}
            {["username","email","address","city","pincode"].map((field, i) => (
              <div className="mb-3" key={i}>
                <label className="form-label">{field.toUpperCase()}</label>
                {field === "address" ? (
                  <textarea
                    name={field}
                    className="form-control"
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder="House / Street / Area"
                  ></textarea>
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    className="form-control"
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field}`}
                  />
                )}
              </div>
            ))}
          </form>
        </div>

        {/* ✅ Order Summary */}
        <div className="col-md-6">
          <h4 className="mb-3">Order Summary 🧾</h4>

          {displayCart.length === 0 ? (
            <p>No games selected.</p>
          ) : (
            <ul className="list-group mb-3">
              {displayCart.map((game) => (
                <li 
                  key={game.id} 
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{game.name}</strong>
                    <p className="text-muted small mb-0">
                      {game.qty || 1} × {game.price === 0 ? "Free" : `₹${game.price}`}
                    </p>
                  </div>
                  <span>
                    {game.price === 0 ? "Free" : `₹${(game.price * (game.qty || 1))}`}
                  </span>
                </li>
              ))}

              <li className="list-group-item d-flex justify-content-between">
                <strong>Total</strong>
                <strong>{totalAmount === 0 ? "Free" : `₹${totalAmount}`}</strong>
              </li>
            </ul>
          )}

          <button 
            className="btn btn-primary w-100 fw-bold" 
            onClick={handlePlaceOrder}
          >
            ✅ Place Order & Play
          </button>
        </div>
      </div>
    </div>
  );
}
