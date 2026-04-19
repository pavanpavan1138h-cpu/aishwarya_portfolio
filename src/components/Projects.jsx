import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Selected Works
        </motion.h2>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <Link to={`/project/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div 
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
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
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
