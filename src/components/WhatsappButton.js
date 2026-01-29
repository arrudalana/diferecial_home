import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5565993180004";

  return (
    <motion.div 
      className="whatsapp-button"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-link"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <style jsx>{`
        .whatsapp-button { position: fixed; bottom: 30px; right: 30px; z-index: 1000; }
        .whatsapp-link { 
          display: flex; align-items: center; justify-content: center;
          background: #25D366; color: white; width: 60px; height: 60px;
          border-radius: 50%; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }
        .whatsapp-link:hover { background: #128C7E; }
      `}</style>
    </motion.div>
  );
};

export default WhatsAppButton;