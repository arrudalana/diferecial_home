import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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

  // Ítens do menu atualizados
  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#sobre' },
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
          {/* LOGO do Header */}
          <div className="logo" onClick={() => scrollToSection('#home')}>
            <div className="logo-text">
              <h1>DH <span>Diferencial Home</span></h1>
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="desktop-nav">
            <ul>
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => scrollToSection(item.href)}
                    className="nav-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#contato')}
            >
              <Phone size={18} />
              Solicitar Orçamento
            </button>
          </nav>

          {/* Menu Mobile Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
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
                    <button 
                      onClick={() => scrollToSection(item.href)}
                      className="nav-link"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button 
                    className="btn btn-primary full-width"
                    onClick={() => scrollToSection('#contato')}
                  >
                    <Phone size={18} />
                    Solicitar Orçamento
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