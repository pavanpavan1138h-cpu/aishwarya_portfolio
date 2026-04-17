import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section id="home" className="hero-section">
      <motion.div 
        className="hero-bg"
        initial={{ scale: 1.1, filter: 'brightness(0)' }}
        animate={{ scale: 1, filter: 'brightness(1)' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600607688969-a5bfcdfb4fe5?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
        />
        <div className="hero-overlay"></div>
      </motion.div>
      <div className="container hero-content">
        <motion.div 
          className="hero-text-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-kicker">Architecture & Interior Design</motion.p>
          <motion.h1 variants={itemVariants} className="hero-title">
            Crafting <br /><span>Environments.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            Aishwarya — Creating sustainable, meaningful, and aesthetically profound spaces for modern living.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <Link to="/portfolio" className="cta-button">Explore Projects</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
