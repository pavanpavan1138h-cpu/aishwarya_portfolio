import React from 'react';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* We can show a snippet on the home page just to make it rich */}
      <Projects />
      <About />
    </>
  );
};

export default Home;
