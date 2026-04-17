import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1600607688969-a5bfcdfb4fe5?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content fade-in">
        <div className="hero-text-wrapper">
          <p className="hero-kicker">Architecture & Interior Design</p>
          <h1 className="hero-title">
            Crafting <br /><span>Environments.</span>
          </h1>
          <p className="hero-subtitle">
            Aishwarya — Creating sustainable, meaningful, and aesthetically profound spaces for modern living.
          </p>
          <div className="hero-actions">
            <Link to="/portfolio" className="cta-button">Explore Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
