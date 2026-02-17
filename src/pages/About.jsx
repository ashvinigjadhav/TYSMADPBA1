import React from "react";
import { motion } from "framer-motion";
import { Rocket, Gamepad2, Brain, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="about-container py-5">

      {/* Hero Section */}
      <motion.div
        className="text-center about-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="about-title">
          About <span>Game Hub</span> 🎮
        </h1>
        <p className="about-sub">
          A smart, fun & interactive gaming world built for all players!
        </p>
      </motion.div>

      {/* Vision Cards */}
      <div className="container mt-5">
        <div className="row g-4">

          <motion.div
            className="col-md-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="about-card text-center p-4">
              <Rocket size={40} className="mb-3 icon" />
              <h5>Our Mission</h5>
              <p>
                To bring smart entertainment that improves skills, boosts thinking,
                and brings people together through fun & interactive games.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="about-card text-center p-4">
              <Brain size={40} className="mb-3 icon" />
              <h5>Skill + Fun</h5>
              <p>
                We blend learning & gaming — experience games that entertain and 
                sharpen your mind at the same time!
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-md-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="about-card text-center p-4">
              <Users size={40} className="mb-3 icon" />
              <h5>For Everyone</h5>
              <p>
                From beginners to pros — Game Hub is built for anyone who loves
                to play, explore, and compete!
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Developer Section */}
      <motion.div
        className="developer-box container text-center mt-5 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Gamepad2 size={55} className="mb-3 icon dev-icon" />
        <h2 className="dev-title">
          Meet the Developer 👇
        </h2>
        
        <h3 className="dev-name">Prathmesh Waghmare</h3>
        <p className="dev-role">Full-Stack Developer | Gamer | UI Enthusiast</p>

        <p className="dev-desc">
          I created Game Hub as a modern, interactive platform where people can enjoy, 
          learn, and unlock their gaming potential.  
          My goal is to build creative tech experiences that inspire & entertain!
        </p>
        
        {/* Connect Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="contact-dev-btn"
          onClick={() => document.getElementById("contactModal").style.display = "flex"}
        >
          <Sparkles size={18} className="me-2" /> Connect With Me
        </motion.button>

        {/* Contact Pop-Up Modal */}
        <div id="contactModal" className="contact-modal">
          <div className="contact-box">
            <h3>Contact Developer</h3>

            <p><strong>Name:</strong> Prathmesh Waghmare</p>
            <p><strong>Phone:</strong> <a href="tel:+91 9309208325">+91 9309208325</a></p>
            <p><strong>Email:</strong> <a href="mailto:prathmeshwaghmare289@gmail.com">prathmeshwaghmare289@gmail.com</a></p>

            <p><strong>LinkedIn:</strong>  
              <a href="https://www.linkedin.com/in/prathmesh-waghmare-54b1812a2" target="_blank" rel="noreferrer">
                Visit Profile
              </a>
            </p>

            <button 
              className="modal-close"
              onClick={() => document.getElementById("contactModal").style.display = "none"}
            >
              Close ✖
            </button>
          </div>
        </div>

      </motion.div>

    </div>
  );
}
