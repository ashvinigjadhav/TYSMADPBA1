import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const userExists = existingUsers.find(user => user.email === form.email);

    if (userExists) {
      alert("An account with this email already exists! Please login.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Store user data
      const newUser = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        registeredAt: new Date().toISOString()
      };

      existingUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));
      
      // Store last registered email for auto-fill
      localStorage.setItem("lastRegisteredEmail", form.email);

      setLoading(false);
      setIsRegistered(true);
      alert("Registration successful! You can now login with your credentials.");
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 1500);
  };

  const handleProtectedLinkClick = (e, route) => {
    e.preventDefault();
    if (isRegistered) {
      navigate(route);
    } else {
      alert("Please complete registration first to access this feature!");
    }
  };

  return (
    <div className="registration-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="login-container row g-0 shadow-lg">

              {/* Left Panel - Features */}
              <div className="col-lg-6 login-left">
                <div className="p-4">
                  <div className="text-center mb-4">
                    <i className="fas fa-heartbeat" style={{ fontSize: "4rem" }}></i>
                  </div>
                  <h2 className="fw-bold mb-3 text-center">Join MediCare</h2>
                  <p className="mb-4 text-center">Create your account to start managing your health records</p>

                  <div className="feature-highlight mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-upload me-3" style={{ fontSize: "1.5rem" }}></i>
                      <div>
                        <strong className="d-block">Upload Records</strong>
                        <small className="d-block">Store medical documents safely</small>
                        <a 
                          href="#" 
                          className="text-white text-decoration-none small"
                          onClick={(e) => handleProtectedLinkClick(e, "/health")}
                          style={{ cursor: 'pointer' }}
                        >
                          Upload Records {isRegistered && <i className="fas fa-check-circle ms-2"></i>}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="feature-highlight mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-bell me-3" style={{ fontSize: "1.5rem" }}></i>
                      <div>
                        <strong className="d-block">Medicine Reminders</strong>
                        <small className="d-block">Never miss a dose again</small>
                        <a 
                          href="#" 
                          className="text-white text-decoration-none small"
                          onClick={(e) => handleProtectedLinkClick(e, "/schedule")}
                          style={{ cursor: 'pointer' }}
                        >
                          Medicine Reminders {isRegistered && <i className="fas fa-check-circle ms-2"></i>}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="feature-highlight mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-calendar-times me-3" style={{ fontSize: "1.5rem" }}></i>
                      <div>
                        <strong className="d-block">Expiry Tracking</strong>
                        <small className="d-block">Track medicine expiry dates</small>
                        <a 
                          href="#" 
                          className="text-white text-decoration-none small"
                          onClick={(e) => handleProtectedLinkClick(e, "/basket")}
                          style={{ cursor: 'pointer' }}
                        >
                          Expiry tracking {isRegistered && <i className="fas fa-check-circle ms-2"></i>}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel - Registration Form */}
              <div className="col-lg-6 login-form bg-white">
                <div className="p-4">
                  <div className="text-center mb-4">
                    <h3 className="brand-logo">Create Account</h3>
                    <p className="text-muted">Register for your health dashboard</p>
                  </div>

                  {!isRegistered ? (
                    <form onSubmit={handleRegister}>
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="fas fa-user text-pink"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0"
                            name="firstName"
                            placeholder="Enter your first name"
                            onChange={handleChange}
                            value={form.firstName}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="fas fa-user text-pink"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0"
                            name="lastName"
                            placeholder="Enter your last name"
                            onChange={handleChange}
                            value={form.lastName}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="fas fa-envelope text-pink"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control border-start-0"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            value={form.email}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="fas fa-lock text-pink"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control border-start-0"
                            name="password"
                            placeholder="Create a password (min 6 characters)"
                            onChange={handleChange}
                            value={form.password}
                            required
                            minLength="6"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-pink w-100 py-2 mb-3 rounded-pill"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <i className="fas fa-spinner fa-spin me-2"></i>Creating Account...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-user-plus me-2"></i>Create Account
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center">
                      <div className="alert alert-success">
                        <i className="fas fa-check-circle me-2"></i>
                        <strong>Welcome, {form.firstName} {form.lastName}!</strong>
                        <br />
                        <small>{form.email}</small>
                      </div>
                      <p className="text-success mb-3">
                        <i className="fas fa-check-double me-2"></i>
                        Registration successful! Redirecting to login page...
                      </p>
                      <Link to="/login" className="btn btn-pink w-100 py-2 rounded-pill">
                        <i className="fas fa-sign-in-alt me-2"></i>Go to Login
                      </Link>
                    </div>
                  )}

                  <div className="text-center mt-3">
                    <p className="text-muted mb-2">
                      Already have an account? 
                      <Link to="/login" className="text-pink text-decoration-none ms-1">
                        <strong>Sign In</strong>
                      </Link>
                    </p>
                    <Link to="/" className="text-muted text-decoration-none">
                      <i className="fas fa-arrow-left me-2"></i>Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Alert */}
            <div className="alert alert-info alert-dismissible fade show mt-3">
              <i className="fas fa-info-circle me-2"></i>
              <strong>Registration Info:</strong> Your account will be saved locally. Use the same credentials to login.
              <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;