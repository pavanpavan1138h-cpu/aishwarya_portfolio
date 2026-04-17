import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
