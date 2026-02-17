import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Room", path: "/room/general" },
  ];

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <nav
      className="
        w-full
        bg-black 
        text-white 
        px-8 py-4 
        flex   items-center justify-between
        shadow-md
        fixed     
      "
    >
       
      <div className="flex items-center space-x-2">
        <img
          src="https://i.pinimg.com/1200x/52/67/d4/5267d4279700b5716652fbf756062e4e.jpg"
          alt="Muzz Logo"
          className="w-10 h-10 bg-white p-1 rounded"
        />
        <span className="text-xl font-semibold text-red-500">Muzz</span>
      </div>

      
      <div className="space-x-6 text-gray-300 text-lg">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-red-500 transition ${
              location.pathname === item.path ? "text-white font-medium" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

         
        {!isLoggedIn ? (
          <Link to="/login" className="text-red-500 font-semibold">
            Login
          </Link>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              localStorage.removeItem("MUZZ_PROFILE");
               
              window.location.href = "/landing";
            }}
            className="text-red-500 font-semibold"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
