import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Ruler, PenTool, CheckSquare } from 'lucide-react';

const Processo = () => {
  const steps = [
    { 
      icon: <ClipboardList size={32} />,
      title: 'Leitura do espaço e necessidades', 
    },
    { 
      icon: <Ruler size={32} />,
      title: 'Desenvolvimento técnico do projeto',  
    },
    { 
      icon: <PenTool size={32} />,
      title: 'Definição de materiais e acabamentos',  
    },
    { 
      icon: <CheckSquare size={32} />,
      title: 'Acompanhamento da execução', 
    },
  ];

  return (
    <section className="section processo-tecnico" style={{background: 'var(--light)'}}>
      <div className="container">
        <div className="processo-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="step-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .processo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; }
        .step-item { position: relative; padding: 20px; background: white; border-radius: 4px; border: 1px solid #e0e0e0; transition: all 0.3s; }
        .step-item:hover { border-color: var(--accent); transform: translateY(-5px); }
        .step-icon { color: var(--primary); margin-bottom: 15px; }
        .step-item h3 { font-size: 1.1rem; color: var(--primary); margin-bottom: 8px; }
        .step-item p { font-size: 0.9rem; color: var(--gray); margin: 0; }
      `}</style>
    </section>
  );
};

export default Processo;