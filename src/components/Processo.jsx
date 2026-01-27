import React from 'react';
import { motion } from 'framer-motion';

const Processo = () => {
  const steps = [
    { number: '01', title: 'Briefing', desc: 'Entendemos sua necessidade e estilo.' },
    { number: '02', title: 'Projeto 3D', desc: 'Visualização realista do seu ambiente.' },
    { number: '03', title: 'Produção', desc: 'Fabricação com materiais de alta qualidade.' },
    { number: '04', title: 'Instalação', desc: 'Montagem limpa e acabamento perfeito.' },
  ];

  return (
    <section id="processo" className="section processo">
      <div className="container">
        <motion.h2 
           className="section-title"
           initial={{ opacity: 0 }} 
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          Nosso Processo de Trabalho
        </motion.h2>
        <div className="processo-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processo;