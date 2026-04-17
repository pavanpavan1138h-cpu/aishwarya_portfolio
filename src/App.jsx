import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import TheTeam from './pages/TheTeam';
import PortfolioPage from './pages/PortfolioPage';
import Publications from './pages/Publications';
import Competition from './pages/Competition';
import ContactPage from './pages/ContactPage';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/our-team" element={<TheTeam />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
