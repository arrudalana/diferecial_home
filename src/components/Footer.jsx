import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          {/* Coluna 1: Marca */}
          <div className="footer-col">
            <h3>Diferencial Home</h3>
            <p className="footer-subtitle">Móveis Planejados</p>
            <p className="footer-desc">
              Desenvolvimento de projetos com precisão técnica e acabamento diferenciado em Cuiabá.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className="footer-col">
            <h3>Fale Conosco</h3>
            <div className="contact-list">
              <a href="tel:+5565993180004" className="contact-link">
                <Phone size={16} /> (65) 99318-0004
              </a>
              <a href="mailto:diferencialhomecba@gmail.com" className="contact-link">
                <Mail size={16} /> diferencialhomecba@gmail.com
              </a>
              <div className="contact-link">
                <MapPin size={16} /> Cuiabá e região
              </div>
            </div>
          </div>

          {/* Coluna 3: Redes */}
          <div className="footer-col">
            <h3>Acompanhe</h3>
            <a href="https://instagram.com/diferencialhome" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Instagram size={20} /> @diferencialhome
            </a>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Diferencial Home. Todos os direitos reservados.</p>
        </div>
      </div>

      <style jsx>{`
        .footer-section { background: var(--secondary); color: white; padding: 60px 0 0; }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 50px;
          text-align: center; /* Centraliza tudo */
        }

        .footer-col h3 { color: var(--accent); font-size: 1.2rem; margin-bottom: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .footer-subtitle { font-weight: 700; color: white; margin-bottom: 10px; }
        .footer-desc { color: #ccc; font-size: 0.9rem; line-height: 1.6; max-width: 300px; margin: 0 auto; }

        .contact-list { display: flex; flex-direction: column; gap: 12px; align-items: center; }
        .contact-link { display: flex; align-items: center; gap: 10px; color: #ccc; text-decoration: none; transition: 0.3s; font-size: 0.95rem; }
        .contact-link:hover { color: var(--accent); }

        .social-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.1); padding: 10px 20px;
          border-radius: 30px; color: white; text-decoration: none; transition: 0.3s;
        }
        .social-btn:hover { background: var(--accent); color: var(--primary); }

        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 20px; text-align: center; color: #888; font-size: 0.85rem; }
      `}</style>
    </footer>
  );
};

export default Footer;