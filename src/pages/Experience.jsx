import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  { id: 1, role: '', company: '', desc: '' }, // Fill in your experience details
  { id: 2, role: '', company: '', desc: '' }, // Fill in your experience details
  { id: 3, role: '', company: '', desc: '' }, // Fill in your experience details
  { id: 4, role: '', company: '', desc: '' }, // Fill in your experience details
];

const educationData = [
  { id: 1, degree: '', university: '', desc: '' }, // Fill in your education details
];

const Experience = () => {
  return (
    <motion.div 
      className="experience-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience
        </motion.h1>
        <div className="experience-list">
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="glass-box experience-card" 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="experience-role">{item.role}</h3>
              </div>
              <h4 className="experience-company">{item.company}</h4>
              <p className="experience-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.h1 
          className="section-title education-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Education
        </motion.h1>
        <div className="experience-list">
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="glass-box experience-card education-card" 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="education-icon">🎓</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="experience-role">{item.degree}</h3>
              </div>
              <h4 className="experience-company">{item.university}</h4>
              <p className="experience-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
