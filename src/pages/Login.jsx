import loginGif from "../assets/gifs/login.gif";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("gameHubUser"));

    if (!storedUser) {
      alert("⚠️ No account found. Please register first!");
      return;
    }

    if (storedUser.email === form.email && storedUser.password === form.password) {
  localStorage.setItem("gameHubLoggedIn", "true");

  // ✅ Force Navbar to update without refresh
  window.dispatchEvent(new Event("storage"));

  alert("✅ Login Successful!");


      // ✅ Check pending checkout
      const pending = JSON.parse(localStorage.getItem("pendingCheckout"));

      if (pending && pending.length > 0) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        pending.forEach(item => {
          const exists = cart.find(g => g.id === item.id);
          exists ? exists.qty++ : cart.push({ ...item, qty: 1 });
        });

localStorage.setItem("gameHubLoggedIn", "true");

// ✅ Force navbar to update login state
window.dispatchEvent(new Event("storage"));
        localStorage.removeItem("pendingCheckout");

        navigate("/checkout");
        return;
      }

      // ✅ Normal login → go to profile
      navigate("/profile");

    } else {
      alert("❌ Incorrect Email or Password!");
    }
  };

  return (
    <div className="auth-page">
      <motion.div
        className="auth-info"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1>Welcome Back 👋</h1>
        <p>Your gaming world is waiting. Log in & continue your journey!</p>

        <img src={loginGif} alt="Login Animation" className="auth-illustration" />
      </motion.div>

      <motion.div
        className="auth-box shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="auth-logo mb-3">
          <Gamepad2 size={35} className="me-2" />
          Game Hub
        </div>

        <h2 className="auth-title">Login</h2>
        <p className="auth-sub">Enter your details to continue</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="auth-input"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="auth-input"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">
            Login 🚀
          </button>
        </form>

        <p className="auth-footer">
          New here? <Link to="/register" className="link-text">Create Account</Link>
        </p>
      </motion.div>
    </div>
  );
}
