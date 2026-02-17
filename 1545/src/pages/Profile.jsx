import React, { useEffect, useState } from "react";
import { Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLogged = localStorage.getItem("gameHubLoggedIn");
    const storedUser = JSON.parse(localStorage.getItem("gameHubUser"));

    if (!isLogged || !storedUser) {
      window.location.href = "/login";
      return;
    }

    setUser(storedUser);
  }, []);

  const logout = () => {
localStorage.removeItem("gameHubLoggedIn");
window.dispatchEvent(new Event("storage"));
    alert("👋 Logged out successfully!");
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      <motion.div
        className="profile-card shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="profile-header">
          <Gamepad2 size={40} />
          <h2>{user.username}'s Gamer Profile 🎮</h2>
        </div>

        <div className="profile-info">
          <p><b>Full Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>DOB:</b> {user.dob}</p>
          <p><b>Gender:</b> {user.gender}</p>
          <p><b>Country:</b> {user.country}</p>
        </div>

        <button className="auth-btn logout-btn" onClick={logout}>
          Logout 🚪
        </button>
      </motion.div>
    </div>
  );
}
