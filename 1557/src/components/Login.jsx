import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const profile = JSON.parse(localStorage.getItem("MUZZ_PROFILE") || "{}");

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setMessage("Login successful! Redirecting...");

      setTimeout(() => {
         
        if (!profile.displayName) {
          navigate("/set-profile");
        } else {
          navigate("/home");
        }
      }, 700);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-neutral-900 text-white">
      <div className="bg-neutral-900/90 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-center text-red-500 text-3xl font-bold mb-4">
          Welcome Back
        </h2>

        {message && (
          <div
            className={`p-3 rounded mb-4 text-center ${
              message.includes("successful")
                ? "bg-green-900/50 text-green-300"
                : "bg-red-900/50 text-red-300"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1c1c1c] text-white rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1c1c1c] text-white rounded"
          />

          <button className="w-full bg-red-600 py-3 rounded text-lg font-semibold">
            Log In
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Don’t have an account?
          <Link to="/signup" className="text-red-500 ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
