import React from 'react';
import About from '../components/About';
import Experience from './Experience';

const WhoWeAre = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="section-title" style={{ marginTop: '2rem' }}>About Me</h1>
      </div>
      <About />
      <Experience />
    </div>
  );
};

export default WhoWeAre;
