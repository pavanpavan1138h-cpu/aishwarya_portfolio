import React from 'react';
import About from '../components/About';

const WhoWeAre = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="section-title" style={{ marginTop: '2rem' }}>About Me</h1>
      </div>
      <About />
    </div>
  );
};

export default WhoWeAre;
