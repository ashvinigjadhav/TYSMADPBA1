import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBookOpen, FaShoppingCart, FaEnvelope, FaSignInAlt, FaUserPlus } from "react-icons/fa";

function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: "#2E0854",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Logo / Title */}
      <h1 className="logo" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        E-Learning Marketplace
      </h1>

      {/* Navigation Links */}
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "25px",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaHome /> Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaInfoCircle /> About
            </Link>
          </li>

          <li>
            <Link
              to="/courses"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaBookOpen /> Courses
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaShoppingCart /> Cart
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaEnvelope /> Contact
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaSignInAlt /> Login
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FaUserPlus /> Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
