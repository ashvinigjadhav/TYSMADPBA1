import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 82 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm a passionate developer</h3>
            <p>
              With over 5 years of experience in web development, I specialize in 
              creating responsive, user-friendly websites and applications. My journey 
              in tech started with a curiosity about how things work on the internet, 
              and it has evolved into a full-blown passion for creating digital experiences.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies and best practices. When I'm not coding, you can 
              find me exploring new frameworks, contributing to open-source projects, or 
              sharing my knowledge through blog posts and tutorials.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>30+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;