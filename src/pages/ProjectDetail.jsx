import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectData } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Link to="/portfolio" className="cta-button">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="detail-header">
          <Link to="/portfolio" className="back-link">
            <span>&larr;</span> Back to Portfolio
          </Link>
          <motion.h1 
            className="detail-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
          <motion.div 
            className="detail-meta"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>{project.category}</span>
            <span className="dot">•</span>
            <span>{project.year}</span>
          </motion.div>
        </div>

        <motion.div 
          className="detail-main-image"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <img src={project.image} alt={project.title} />
        </motion.div>

        <motion.div 
          className="detail-description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>
            This project represents a synthesis of modern form and functional elegance. 
            Designed with meticulous attention to detail, it showcases our commitment to 
            architectural excellence and sustainable design principles.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
