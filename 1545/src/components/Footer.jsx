import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const submitNewsletter = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email.");
      return;
    }
    alert(`Thanks — ${email} subscribed to Game Hub newsletter!`);
    setEmail("");
  };

  return (
    <footer className="gv-footer">
      <div className="gv-footer-top container">
        {/* Column 1: Brand + desc */}
        <div className="gv-col gv-brand">
          <div className="gv-logo">🎮 <span className="gv-logo-text">Game Hub</span></div>
          <p className="gv-desc">
            Play, learn and level up — curated mini-games and brain-boosting fun for everyone.
          </p>
          <div className="gv-socials" aria-label="Follow Game Hub">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="gv-col">
          <h4>Quick Links</h4>
          <nav className="gv-links" aria-label="Quick links">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </div>

        {/* Column 3: Resources */}
        <div className="gv-col">
          <h4>Resources</h4>
          <nav className="gv-links" aria-label="Resources links">
            <Link to="/contact">Help Center</Link>
            <Link to="/about">Developers</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </nav>
        </div>

        {/* Column 4: Newsletter */}
        <div className="gv-col">
          <h4>Stay in the loop</h4>
          <p className="small">Get new game drops, tips & offers — delivered monthly.</p>

          <form className="gv-newsletter" onSubmit={submitNewsletter}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn-sub">Subscribe</button>
          </form>

          <p className="gv-minor small">
            By subscribing you agree to our <Link to="/privacy">privacy policy</Link>.
          </p>
        </div>
      </div>

      <div className="gv-footer-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="copyright">
            © {new Date().getFullYear()} Game Hub • Built by <strong>Prathmesh Waghmare</strong>
          </div>

          <div className="gv-made small">
            Designed with ♥ — bright, friendly and accessible UI
          </div>
        </div>
      </div>
    </footer>
  );
}
