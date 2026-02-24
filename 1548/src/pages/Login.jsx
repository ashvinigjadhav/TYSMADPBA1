import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberedEmails, setRememberedEmails] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
   
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const lastEmail = localStorage.getItem("lastRegisteredEmail");
    
  
    const emails = registeredUsers.map(user => user.email);
    setRememberedEmails(emails);


    if (lastEmail && emails.includes(lastEmail)) {
      setForm(prev => ({ ...prev, email: lastEmail }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    

    if (e.target.name === "email" && rememberedEmails.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleEmailSelect = (email) => {
    setForm({ ...form, email: email });
    setShowSuggestions(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
     
      const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
      const user = registeredUsers.find(
        u => u.email === form.email && u.password === form.password
      );

      setLoading(false);

      if (user) {
        setIsLoggedIn(true);
     
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`Welcome back, ${user.firstName}! Login successful.`);
      } else {
        alert("Invalid email or password! Please check your credentials or register first.");
      }
    }, 1500);
  };

  const handleProtectedLinkClick = (e, route) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate(route);
    } else {
      alert("Please login first to access this feature!");
    }
  };

  const filteredEmails = rememberedEmails.filter(email =>
    email.toLowerCase().includes(form.email.toLowerCase())
  );

  return (
    <div className="login-page d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="login-container row g-0">

              <div className="col-lg-6 login-left">
                <div>
                  <div className="mb-4">
                    <i className="fas fa-heartbeat" style={{ fontSize: "4rem" }}></i>
                  </div>
                  <h2 className="fw-bold mb-3">Welcome to MediCare</h2>
                  <p className="mb-4">Your personal health record keeper and medicine tracker</p>

                  <div className="feature-highlight">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-upload me-3"></i>
                      <div>
                        <strong>Upload Records</strong>
                        <small className="d-block">Store medical documents safely</small>
                        <a 
                          href="#" 
                          className="text-white text-decoration-none"
                          onClick={(e) => handleProtectedLinkClick(e, "/health")}
                          style={{ cursor: 'pointer' }}
                        >
                          Upload Records {isLoggedIn && <i className="fas fa-check-circle ms-2"></i>}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="feature-highlight">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-bell me-3"></i>
                      <div>
                        <strong>Medicine Reminders</strong>
                        <small className="d-block">Never miss a dose again</small>
                        <a 
                          href="#" 
                          className="text-white text-decoration-none"
                          onClick={(e) => handleProtectedLinkClick(e, "/schedule")}
                          style={{ cursor: 'pointer' }}
                        >
                          Medicine Reminders {isLoggedIn && <i className="fas fa-check-circle ms-2"></i>}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="feature-highlight">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-calendar-times me-3"></i>
                      <div>
                        <strong>Expiry Tracking</strong>
                        <small className="d-block">Track medicine expiry dates</small>
                        <a 
                          href="#" 
                          className="text-white text-decoration-none"
                          onClick={(e) => handleProtectedLinkClick(e, "/basket")}
                          style={{ cursor: 'pointer' }}
                        >
                          Expiry tracking {isLoggedIn && <i className="fas fa-check-circle ms-2"></i>}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 login-form">
                <div className="text-center mb-4">
                  <h3 className="brand-logo">MediCare Login</h3>
                  <p className="text-muted">Access your health dashboard</p>
                </div>

                {!isLoggedIn ? (
                  <form onSubmit={handleLogin}>
                    <div className="mb-3 position-relative">
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
                          onFocus={() => rememberedEmails.length > 0 && setShowSuggestions(true)}
                          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                          value={form.email}
                          autoComplete="off"
                        />
                      </div>
                      
                  
                      {showSuggestions && filteredEmails.length > 0 && (
                        <div className="email-suggestions">
                          {filteredEmails.map((email, index) => (
                            <div
                              key={index}
                              className="email-suggestion-item"
                              onClick={() => handleEmailSelect(email)}
                            >
                              <i className="fas fa-user-circle me-2 text-pink"></i>
                              {email}
                            </div>
                          ))}
                        </div>
                      )}
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
                          placeholder="Enter your password"
                          onChange={handleChange}
                          value={form.password}
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
                          <i className="fas fa-spinner fa-spin me-2"></i>Logging in...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-sign-in-alt me-2"></i>Sign In to Dashboard
                        </>
                      )}
                    </button>

                    <div className="text-center">
                      <p className="text-muted mb-0">
                        Don't have an account? 
                        <Link to="/registration" className="text-pink text-decoration-none ms-1">
                          <strong>Create Account</strong>
                        </Link>
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="alert alert-success">
                      <i className="fas fa-check-circle me-2"></i>
                      <strong>Logged in as:</strong> {form.email}
                    </div>
                    <p className="text-success mb-3">
                      <i className="fas fa-unlock me-2"></i>
                      You can now access all features! Click on any feature link on the left.
                    </p>
                    <button
                      className="btn btn-outline-danger w-100 py-2 rounded-pill"
                      onClick={() => {
                        setIsLoggedIn(false);
                        localStorage.removeItem("currentUser");
                        setForm({ email: "", password: "" });
                      }}
                    >
                      <i className="fas fa-sign-out-alt me-2"></i>Logout
                    </button>
                  </div>
                )}

                <div className="text-center mt-3">
                  <Link to="/" className="text-muted text-decoration-none">
                    <i className="fas fa-arrow-left me-2"></i>Back to Home
                  </Link>
                </div>
              </div>
            </div>

            <div className="alert alert-success alert-dismissible fade show mt-3">
              <i className="fas fa-info-circle text-success"></i>
              <strong> Demo Mode</strong><br />
              <small>Register first, then use the same credentials to login</small>
              <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;