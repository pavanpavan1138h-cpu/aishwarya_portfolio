import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled glass-box' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          AISHWARYA<span>.ARCH</span>
        </div>
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#projects">Work</a>
          <a href="#about">Profile</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
