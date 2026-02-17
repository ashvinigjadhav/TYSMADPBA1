import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../utils/auth";

export default function Header() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/"); // go to home after logout
    window.location.reload(); // ensures full re-render
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="mark">AP</div>
        <div>
          <div style={{ fontWeight: 700 }}>Aarav Patel</div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>
            Painter & Illustrator — Pune, India
          </div>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/exhibitions">Exhibitions</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        {!user && (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/cart">Cart</NavLink>
            <button
              onClick={handleLogout}
              style={{
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}