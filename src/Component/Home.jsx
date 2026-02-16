import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <section id="home" className="home-section">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">Portfolio</div>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('blog')}>Blog</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-title fade-in-up">
            Hi, I'm <span className="highlight">KRUTIK TEJANI</span>
          </h1>
          <p className="hero-subtitle fade-in-up">
            Full Stack Developer & Creative Designer
          </p>
          <p className="hero-description fade-in-up">
            I build beautiful, functional websites and web applications
            that make a difference.
          </p>
          <div className="hero-buttons fade-in-up">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="hero-image fade-in">
          <div className="image-placeholder">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Home;