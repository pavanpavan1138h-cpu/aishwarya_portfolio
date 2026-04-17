import React from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Minimalist Haven',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: 2,
    title: 'Urban Oasis',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: 3,
    title: 'Timber Pavilion',
    category: 'Public Space',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2ea?q=80&w=2070&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: 4,
    title: 'Glass Retreat',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    year: '2022'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card fade-in">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="view-text">View Project</div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span className="dot">•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
