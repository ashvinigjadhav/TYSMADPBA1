import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Welcome to MediCare</h1>
          <p className="lead mb-4">
            Your personal health management solution<br />
            Manage health records, medication schedules, and medicine inventory in one place.
          </p>
          <div>
            <button 
              className="btn btn-light btn-lg me-3 rounded-pill px-4"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button 
              className="btn btn-outline-light btn-lg rounded-pill px-4"
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

     
      <section className="py-5 bg-light text-center">
        <div className="container">
          <blockquote className="blockquote">
            <p className="mb-0 fs-5 text-muted fst-italic">
              "Medicine is a science of uncertainty and an art of probability."
            </p>
          </blockquote>
        </div>
      </section>

      <section id="features" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Key Features</h2>
            <p className="text-muted">
              Everything you need for better health management
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card feature-card h-100 text-center p-4">
                <div className="icon-box">
                  <i className="fas fa-file-medical"></i>
                </div>
                <h5 className="text-pink">Health Records</h5>
                <p className="text-muted">
                  Store and manage all your medical records and health history securely.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card feature-card h-100 text-center p-4">
                <div className="icon-box">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h5 className="text-pink">Medication Schedule</h5>
                <p className="text-muted">
                  Set reminders and track your medication schedule efficiently.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card feature-card h-100 text-center p-4">
                <div className="icon-box">
                  <i className="fas fa-shopping-basket"></i>
                </div>
                <h5 className="text-pink">Medicine Basket</h5>
                <p className="text-muted">
                  Organize your medicine inventory and track expiry dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-5 stats-section text-center">
        <div className="container">
          <div className="row">
            {[
              { number: "10K+", label: "Happy Users" },
              { number: "50K+", label: "Health Records" },
              { number: "25K+", label: "Medications Tracked" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div className="col-md-3 mb-3" key={index}>
                <h3 className="fw-bold text-purple display-6">{stat.number}</h3>
                <p className="text-dark">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Start Your Health Journey?</h2>
          <p className="lead text-muted mb-4">
            Join thousands of users managing their health with MediCare
          </p>
          <button 
            className="btn btn-pink btn-lg rounded-pill px-4"
            onClick={handleGetStarted}
          >
            Sign Up Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
