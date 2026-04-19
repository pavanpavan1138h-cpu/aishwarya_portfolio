import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="container">
          <h2>Project not found</h2>
          <Link to="/portfolio" className="cta-button">Back to Portfolio</Link>
        </div>
      </main>
    );
  }

  // Filter out empty gallery strings
  const galleryImages = (project.gallery || []).filter(img => img && img.trim() !== '');

  return (
    <div className="project-detail-page">
      <div className="container">
        <div className="detail-header">
          <Link to="/portfolio" className="back-link">
            <span>&larr;</span> Back to Portfolio
          </Link>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-meta">
            <span>{project.category}</span>
          </div>
        </div>

        <div className="detail-main-image">
          <img src={project.image} alt={project.title} />
        </div>

        {galleryImages.length > 0 && (
          <div className="detail-gallery">
            {galleryImages.map((img, index) => (
              <div className="gallery-item" key={index}>
                <img src={img} alt={`${project.title} - View ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
