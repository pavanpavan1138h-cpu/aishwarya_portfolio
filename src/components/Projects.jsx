import React from 'react';
import { motion } from 'framer-motion';
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
  },
  {
    id: 5,
    title: 'Modern Concrete Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1481253127861-534498168948?q=80&w=2073&auto=format&fit=crop',
    year: '2021'
  },
  {
    id: 6,
    title: 'Skyline Cultural Center',
    category: 'Public Space',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    year: '2020'
  },
  {
    id: 7,
    title: 'Nordic Cabin',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop',
    year: '2020'
  },
  {
    id: 8,
    title: 'Artisan Workshop',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    year: '2019'
  },
  {
    id: 9,
    title: 'Eco Retreat Phase I',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
    year: '2019'
  },
  {
    id: 10,
    title: 'Heritage Museum Renovation',
    category: 'Public Space',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    year: '2018'
  },
  {
    id: 11,
    title: 'The Atrium',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1541888081682-1df6bce1eb58?q=80&w=1954&auto=format&fit=crop',
    year: '2018'
  },
  {
    id: 12,
    title: 'Cliffside Villa',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    year: '2017'
  },
  {
    id: 13,
    title: 'Urban Loft',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    year: '2017'
  },
  {
    id: 14,
    title: 'Lakeside Pavilion',
    category: 'Public Space',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2ea?q=80&w=2070&auto=format&fit=crop',
    year: '2016'
  }
];

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
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
