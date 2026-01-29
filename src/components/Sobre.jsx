import React from 'react';
import { motion } from 'framer-motion';
import { ScanLine, PenTool, Layers, ClipboardCheck } from 'lucide-react';

const Sobre = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="sobre" className="section-wrapper">
      
      {/* BLOCO 1: QUEM SOMOS (Visual Premium) */}
      <div className="block-sobre">
        <div className="container">
          <div className="sobre-grid">
            
            {/* Título Esquerdo */}
            <motion.div className="sobre-header" {...fadeInUp}>
              <h2 className="title-primary">
                Quem <br />
                <span className="title-highlight">Somos</span>
              </h2>
              <div className="title-decoration"></div>
            </motion.div>

            {/* Texto Direito */}
            <motion.div className="sobre-content" {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="lead-text">
                Diferencial Home: A união entre técnica e estética.
              </h3>
              
              <p className="text-body">
                A Diferencial Home é uma empresa especializada em móveis planejados sob medida, com foco em precisão técnica, detalhamento e acabamentos diferenciados. Atuamos em Cuiabá e região desenvolvendo projetos pensados a partir do uso real dos espaços, com acompanhamento cuidadoso de cada etapa do processo.
              </p>

              <div className="info-box">
                <span className="info-line"></span>
                <p>Atuação em <strong>Cuiabá e região</strong>, garantindo acompanhamento próximo.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* BLOCO 2: ABORDAGEM (Fundo Verde + Cartões Verdes) */}
      <div className="block-abordagem">
        <div className="container">
          
          <motion.div className="abordagem-header" {...fadeInUp}>
            <h2 className="title-light">Nossa Abordagem</h2>
            <p className="intro-text">
              “Projetos sob medida não seguem fórmulas prontas. Cada ambiente exige critério técnico, atenção aos detalhes e execução correta.”
            </p>
          </motion.div>

          <div className="cards-grid">
            <div className="tech-card">
              <ScanLine size={32} className="card-icon"/>
              <h3>Leitura do espaço e necessidades</h3>
            </div>
            <div className="tech-card">
              <PenTool size={32} className="card-icon"/>
              <h3>Desenvolvimento técnico do projeto</h3>
            </div>
            <div className="tech-card">
              <Layers size={32} className="card-icon"/>
              <h3>Definição de materiais e acabamentos</h3>
            </div>
            <div className="tech-card">
              <ClipboardCheck size={32} className="card-icon"/>
              <h3>Acompanhamento da execução</h3>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* --- QUEM SOMOS --- */
        .block-sobre { padding: 100px 0; background: white; }
        .sobre-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: center; }
        
        .small-tag { text-transform: uppercase; letter-spacing: 3px; font-size: 0.75rem; font-weight: 700; color: var(--accent); display: block; margin-bottom: 10px; }
        .title-primary { font-family: 'Playfair Display', serif; font-size: 3rem; line-height: 1.1; color: var(--primary); margin: 0; }
        .title-highlight { color: var(--accent); font-style: italic; }
        .title-decoration { width: 60px; height: 3px; background: var(--primary); margin-top: 25px; }

        .lead-text { font-size: 1.4rem; color: var(--dark); margin-bottom: 20px; font-weight: 600; }
        .text-body { font-size: 1.05rem; line-height: 1.7; color: var(--gray); margin-bottom: 25px; }
        
        .info-box { border-left: 3px solid var(--accent); padding-left: 20px; }
        .info-box p { color: var(--primary); margin: 0; font-weight: 500; }

        /* --- ABORDAGEM --- */
        .block-abordagem { padding: 100px 0; background-color: var(--primary); color: white; text-align: center; }
        .small-tag.light { color: var(--accent); opacity: 0.9; }
        .title-light { font-size: 2.2rem; color: white; margin-bottom: 15px; }
        .intro-text { font-size: 1.2rem; font-style: italic; opacity: 0.8; max-width: 700px; margin: 0 auto 50px; }

        .cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        
        .tech-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 30px 20px;
          border-radius: 8px;
          transition: all 0.3s;
          display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;
        }
        .tech-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-5px); border-color: var(--accent); }
        .card-icon { color: var(--accent); margin-bottom: 15px; }
        .tech-card h3 { font-size: 1rem; font-weight: 500; margin: 0; line-height: 1.4; color: white; }

        @media (max-width: 992px) {
            .sobre-grid { grid-template-columns: 1fr; }
            .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
            .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Sobre;