import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-col">
            <h3>DH Diferencial Home</h3>
            <p>Transformando sonhos em ambientes planejados com excelência, qualidade e design exclusivo há mais de 15 anos no mercado.</p>
          </div>

          <div className="footer-col">
            <h3>Contato</h3>
            <div className="contact-item">
              <Phone size={18} />
              <span>(11) 99999-9999</span>
            </div>
            <div className="contact-item">
              <Mail size={18} />
              <span>contato@diferencialhome.com.br</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>São Paulo e Grande SP</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>Siga-nos</h3>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook />
              </a>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DH Diferencial Home. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;