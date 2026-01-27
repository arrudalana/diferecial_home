import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substitua pelo seu número
  const message = "Olá! Gostaria de solicitar um orçamento para móveis planejados.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      className="whatsapp-button"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-link"
        aria-label="Entre em contato pelo WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="whatsapp-text">Orçar pelo WhatsApp</span>
      </a>

      <style jsx>{`
        .whatsapp-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
        }
        
        .whatsapp-link {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          padding: 16px 24px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
        }
        
        .whatsapp-link:hover {
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
          transform: translateY(-3px);
        }
        
        .whatsapp-text {
          font-size: 1rem;
          white-space: nowrap;
        }
        
        @media (max-width: 768px) {
          .whatsapp-button {
            bottom: 20px;
            right: 20px;
          }
          
          .whatsapp-link {
            padding: 14px 20px;
          }
          
          .whatsapp-text {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default WhatsAppButton;