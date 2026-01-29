import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'A Empresa', href: '#sobre' },
    { label: 'Portfólio', href: '#portfolio' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('#home')}>
            <div className="logo-text">
              <h1>DH<span>Diferencial Home</span></h1>
            </div>
          </div>

          <nav className="desktop-nav">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button onClick={() => scrollToSection(item.href)} className="nav-link">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#contato')}
            >
              <MessageSquare size={18} />
              Entre em contato
            </button>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <ul>
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <button onClick={() => scrollToSection(item.href)} className="nav-link">
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button 
                    className="btn btn-primary full-width"
                    onClick={() => scrollToSection('#contato')}
                  >
                    Entre em contato
                  </button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;