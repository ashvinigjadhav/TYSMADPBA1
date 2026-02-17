import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);

    // ✅ Restore cart if logged in and pending checkout exists
    const isLoggedIn = localStorage.getItem("gameHubLoggedIn");
    const pendingCheckout = JSON.parse(localStorage.getItem("pendingCheckout"));

    if (isLoggedIn && pendingCheckout) {
      setCartItems(pendingCheckout);
      localStorage.setItem("cart", JSON.stringify(pendingCheckout));
      localStorage.removeItem("pendingCheckout");
    }
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    if (updated.length === 0) {
      localStorage.removeItem("pendingCheckout");
    }
  };

  const totalPrice = cartItems.reduce((sum, game) => sum + game.price, 0);

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("gameHubLoggedIn");

    if (!isLoggedIn) {
      alert("⚠️ You must login before checkout!");

      localStorage.setItem("pendingCheckout", JSON.stringify(cartItems));

      navigate("/login");
      return;
    }

    navigate("/checkout", { state: { cartItems, total: totalPrice } });
  };

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <h2 className="fw-bold text-center mb-4">🛒 My Game Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center fs-5">
          Your game cart is empty 😢 <br /><br />
          <Link to="/" className="btn btn-primary">Browse Games</Link>
        </p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-dark text-center">
                <tr>
                  <th>Game</th>
                  <th>Price</th>
                  <th>Play</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((game) => (
                  <tr key={game.id} className="text-center">
                    <td className="d-flex align-items-center gap-3">
                      <img 
                        src={game.img}
                        alt={game.name}
                        style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" }}
                      />
                      <strong>{game.name}</strong>
                    </td>

                    <td className="fw-bold">
                      {game.price === 0 ? "Free" : `₹${game.price}`}
                    </td>

                    <td>
                      <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm">
                        Play ▶
                      </a>
                    </td>

                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => removeItem(game.id)}>
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: {totalPrice === 0 ? "Free" : `₹${totalPrice}`}</h4>

            <div className="d-flex gap-2">
              <Link to="/" className="btn btn-secondary">Continue Browsing 🎮</Link>
              <button className="btn btn-primary fw-bold" onClick={handleCheckout}>
                Proceed to Checkout ✅
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
 