import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
// Se você estiver usando a logo da pasta img:
import logoImage from '../img/logo.png'; 

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Móveis planejados desenvolvidos com <span className="highlight">precisão técnica</span> e alto nível de detalhamento.
            </h1>
            
            <p className="hero-subtitle">
              Cada projeto parte da leitura do espaço, do uso real do ambiente e das decisões técnicas.
            </p>
            
            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Atendimento Personalizado
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Portfólio
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Se ainda não tiver a logo na pasta, vai aparecer o texto alternativo */}
            <img 
              src={logoImage}
              alt="Diferencial Home - Precisão Técnica"
              className="hero-logo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;