import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Link to="/" className="logo">
          AISHWARYA<span>.ARCH</span>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          
          <div className="dropdown">
            <span className="dropdown-trigger">
              Profile <ChevronDown size={14} className="dropdown-icon" />
            </span>
            <div className="dropdown-menu glass-box">
              <Link to="/about-me" className={location.pathname === '/about-me' ? 'active' : ''}>About Me</Link>
              <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
            </div>
          </div>

          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>

          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
