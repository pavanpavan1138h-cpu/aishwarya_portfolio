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

  const isGoogleDriveVideo = (url) => {
    return typeof url === 'string' && (url.includes('drive.google.com') || url.includes('docs.google.com'));
  };

  const getGoogleDrivePreviewUrl = (url) => {
    if (!url) return '';
    const fileIdMatch = url.match(/\/d\/([^/]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview?autoplay=1`;
    }
    return url;
  };

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
          {project.video ? (
            isGoogleDriveVideo(project.video) ? (
              <div className="detail-video-wrapper">
                <iframe 
                  src={getGoogleDrivePreviewUrl(project.video)} 
                  title={project.title}
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            ) : (
              <video 
                src={project.video} 
                poster={project.image}
                autoPlay 
                loop 
                muted 
                playsInline 
                className="detail-video"
              />
            )
          ) : (
            <img src={project.image} alt={project.title} />
          )}
        </div>

        <div className="detail-description">
          <p>
            This project represents a synthesis of modern form and functional elegance. 
            Crafted with meticulous attention to detail, it showcases our commitment to 
            architectural excellence and sustainable architectural principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
