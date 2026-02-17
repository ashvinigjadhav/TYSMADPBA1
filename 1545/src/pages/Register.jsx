import registerGif from "../assets/gifs/register.gif";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({ 
    name: "", 
    username: "",
    email: "", 
    phone: "",
    dob: "",
    gender: "",
    country: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  // ✅ Save user details locally
  localStorage.setItem("gameHubUser", JSON.stringify(form));
  alert("✅ Account Created Successfully!");

  // Redirect to login
  window.location.href = "/login";
};

  return (
    <div className="auth-page">
      <motion.div
        className="auth-info"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1>Create Your Gamer Profile 🎮🔥</h1>
        <p>Join <b>GameHub</b> and unlock your personal game world!</p>
        <img src={registerGif} alt="Register Animation" className="auth-illustration" />
      </motion.div>

      <motion.div
        className="auth-box shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="auth-logo mb-3">
          <Gamepad2 size={35} className="me-2" />
          <b>GameHub</b>
        </div>

        <h2 className="auth-title">Sign Up</h2>
        <p className="auth-sub">Become part of the next-gen gaming world 🕹️</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="auth-input"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="username"
            className="auth-input"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="auth-input"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            className="auth-input"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="dob"
            className="auth-input"
            value={form.dob}
            onChange={handleChange}
            required
          />

          <select
            name="gender"
            className="auth-input"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="country"
            className="auth-input"
            placeholder="Country"
            value={form.country}
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

          <input
            type="password"
            name="confirmPassword"
            className="auth-input"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">
            Create Account ✅
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="link-text">Login Here</Link>
        </p>
      </motion.div>
    </div>
  );
}
