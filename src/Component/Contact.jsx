import React from 'react';
import './Contact.css';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>About</h3>
            <p>
              I'm a passionate web developer dedicated to creating beautiful, 
              functional, and user-centered digital experiences.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <span>in</span>
              </a>
              <a href="#" className="social-icon">
                <span>gh</span>
              </a>
              <a href="#" className="social-icon">
                <span>tw</span>
              </a>
              <a href="#" className="social-icon">
                <span>ig</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#post">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Consulting</a></li>
              <li><a href="#">SEO Optimization</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest updates and articles.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Contact;