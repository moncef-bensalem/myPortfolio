import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Utiliser notre hook personnalisé au lieu du contexte ThemeContext
import { useThemeHook } from '../hooks/useThemeHook';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Utiliser notre hook personnalisé
  const { theme, toggleTheme } = useThemeHook();
  const isDark = theme === 'dark';
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme is now managed by ThemeContext

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'moncef_bensalem_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo-container">
          <Link to="/" className="navbar-brand">
            <div className="logo-icon">M</div>
            <span>Moncef Bensalem</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span className="text-[#64ffda]">{`0${index + 1}. `}</span>
              {link.label}
              <div 
                className="nav-indicator" 
                style={{ width: location.pathname === link.path ? '100%' : '0%' }}
              />
            </Link>
          ))}
          <button onClick={handleDownloadCV} className="cv-button">
            <i className="fas fa-download"></i>
            <span>CV</span>
          </button>
        
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-[#64ffda]">{`0${index + 1}. `}</span>
              {link.label}
            </Link>
          ))}
          <button onClick={handleDownloadCV} className="cv-button mobile">
            <i className="fas fa-download"></i>
            <span>CV</span>
          </button>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
