import React from 'react';
import { ArrowRight, CheckCircle, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
// IMPORTANTE: Verifique se o nome e a extensão do arquivo da sua logo estão corretos aqui
import logoImage from '../img/logo.png'; 

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    { icon: <CheckCircle />, text: 'Projeto 3D Personalizado' },
    { icon: <Award />, text: '15 Anos de Experiência' },
    { icon: <Clock />, text: 'Entrega no Prazo' },
  ];

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
              Móveis Planejados que <span className="highlight">Transformam</span> Espaços
            </h1>
            
            <p className="hero-subtitle">
              Projetos personalizados para quem busca <strong>qualidade</strong>, 
              <strong> funcionalidade</strong> e <strong>design exclusivo</strong>. 
              Do planejamento à instalação, com 15 anos de experiência no mercado.
            </p>
            
            <div className="hero-benefits">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="hero-buttons">
              <motion.button
                className="btn btn-primary"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento Grátis
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.button>
            </div>
            
            {/* A parte de "Atendimento em até 24h" foi removida daqui */}
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Logo inserida aqui */}
            <img 
              src={logoImage}
              alt="Logo DH Diferencial Home"
              className="hero-logo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;