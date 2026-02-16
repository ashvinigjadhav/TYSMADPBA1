import React, { useState } from 'react';
import './Project.css';

const Project = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A full-featured online shopping platform with payment integration',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      description: 'Cross-platform mobile app for team collaboration',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'design',
      description: 'Modern and responsive portfolio design',
      image: 'https://via.placeholder.com/400x300',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'web',
      description: 'Analytics dashboard for social media management',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'Chart.js', 'API'],
      link: '#'
    },
    {
      id: 5,
      title: 'Weather App',
      category: 'mobile',
      description: 'Real-time weather forecast application',
      image: 'https://via.placeholder.com/400x300',
      tags: ['Flutter', 'API'],
      link: '#'
    },
    {
      id: 6,
      title: 'Brand Identity Design',
      category: 'design',
      description: 'Complete branding package for startup company',
      image: 'https://via.placeholder.com/400x300',
      tags: ['Illustrator', 'Photoshop'],
      link: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={filter === 'web' ? 'active' : ''} 
            onClick={() => setFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={filter === 'mobile' ? 'active' : ''} 
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </button>
          <button 
            className={filter === 'design' ? 'active' : ''} 
            onClick={() => setFilter('design')}
          >
            Design
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.link} className="view-project">
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;