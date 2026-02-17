import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     
    localStorage.setItem("user", JSON.stringify(formData));

    setMessage("Account created! Redirecting to login...");
    
 
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-neutral-900 text-white">
      <div className="bg-neutral-900/90 p-8 rounded-lg max-w-md w-full border border-red-500/20">
        <h2 className="text-red-500 text-3xl text-center mb-4 font-bold">
          Create Account
        </h2>

        {message && (
          <div className="bg-green-900/50 text-green-300 p-3 mb-4 rounded text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1c1c1c] text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1c1c1c] text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-[#1c1c1c] text-white"
          />

          <button className="w-full bg-red-600 py-3 rounded font-semibold text-white">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-5 text-gray-400">
          Already have an account?
          <Link to="/login" className="text-red-500 ml-1">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
