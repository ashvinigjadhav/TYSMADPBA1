import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cart, user, logout } = useCart()
  const count = cart.reduce((s, i) => s + i.quantity, 0)

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm p-2">
        <div className="container-fluid container-xxl">
          <Link className="navbar-brand d-flex align-items-center nav-link" to="/">
            <img src="https://img.freepik.com/free-vector/shiny-diamond-jewelry-logo-vector-design-with-tagline-space_1017-44515.jpg" alt="Voro Logo" className="logo-img" />
            <h1 className="h3 mb-0 ms-2 text-primary">Voro</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/menu">Collections</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
            <div className="d-flex align-items-center auth-links">
              <Link to="/cart" className="btn btn-sm btn-outline-primary me-2 nav-link">
                <i className="fas fa-shopping-cart me-1"></i> Cart <span className="badge bg-primary ms-1">{count}</span>
              </Link>
              {user ? (
                <>
                  <span className="me-2">Hi, <strong>{user.username}</strong></span>
                  <button className="btn btn-sm btn-outline-secondary me-2" onClick={logout}>Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-sm btn-outline-secondary me-2 nav-link"><i className="fas fa-sign-in-alt me-1"></i> Login</Link>
                  <Link to="/register" className="btn btn-sm btn-primary nav-link"><i className="fas fa-user-plus me-1"></i> Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
