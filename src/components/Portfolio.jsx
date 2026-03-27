import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  // Para cada imagem nova, basta copiar uma linha dessas, mudar o 'id', a 'category' e o link da 'image'.
  const portfolioItems = [
    { id: 1, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/38BCD1E5-B4B5-4DB6-8BCB-3A9844D8CCE6.JPG" },
    { id: 2, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/497B5780-24F0-4E79-95B4-FE6D2497C776.JPG" },
    { id: 3, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/55F89185-B273-41C4-A86F-D426799DFDD1.JPG" },
    { id: 4, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/96865988-4B0B-4045-83C6-69A5A69FD1EB.jpg" },
    { id: 5, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/E3BF77CC-9557-4D6D-85FF-FBE8AA3DB241.JPG" },
    { id: 6, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_6604.JPG" },
    { id: 7, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_6606.JPG" },
    { id: 8, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_6610.JPG" },
    { id: 9, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_6620.JPG" },
    { id: 10, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_6628.JPG" },
    { id: 11, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_9286.jpg" },
    { id: 12, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_9302.jpg" },
    { id: 13, category: "Cozinha", title: "Cozinha Planejada", image: "/portifolio/COZINHA/IMG_9328.jpg" },
    { id: 14, category: "Escritório", title: "Escritório", image: "/portifolio/ESCRITORIO/IMG_9218.jpg" },
    { id: 15, category: "Escritório", title: "Escritório", image: "/portifolio/ESCRITORIO/FBDA7231-80D7-4FC6-BCE4-4F6379B27A66.JPG" },
    { id: 16, category: "Escritório", title: "Escritório", image: "/portifolio/ESCRITORIO/E004A752-1B50-4F88-B3CF-1AA0DCEAEE90.JPG" },
    { id: 17, category: "Escritório", title: "Escritório", image: "/portifolio/ESCRITORIO/DFA06EC3-647D-4007-8BC6-18B9F3413770.JPG" },
    { id: 18, category: "Escritório", title: "Escritório", image: "/portifolio/ESCRITORIO/70A39D43-8ED1-4391-9B71-1A0C9D17F587.JPG" },
    { id: 19, category: "Home Office", title: "Bancada de Trabalho", image: "/portifolio/HOME OFFICE/A5F0C223-08EE-4BCB-A6D6-9573F7E7A670.JPG" },
    { id: 20, category: "Home Office", title: "Bancada de Trabalho", image: "/portifolio/HOME OFFICE/F3FF9101-E017-41F0-ABD3-C2AE7C3B3D59.JPG" },
    { id: 21, category: "Home Office", title: "Bancada de Trabalho", image: "/portifolio/HOME OFFICE/IMG_6632.JPG" },
    { id: 22, category: "Quarto", title: "Quarto Casal 01", image: "/portifolio/QUARTO/img 1.JPG" },
    { id: 23, category: "Quarto", title: "Quarto Casal 01", image: "/portifolio/QUARTO/img 2.JPG" },
    { id: 24, category: "Quarto", title: "Quarto Casal 02", image: "/portifolio/QUARTO/img 3.JPG" },
    { id: 25, category: "Quarto", title: "Quarto Casal 02", image: "/portifolio/QUARTO/img 4.JPG"},
    { id: 26, category: "Quarto", title: "Quarto Casal 03", image: "/portifolio/QUARTO/img 5.JPG"},
    { id: 27, category: "Quarto", title: "Quarto Casal 03", image: "/portifolio/QUARTO/img 6.JPG"},
    { id: 28, category: "Quarto", title: "Quarto Casal 04", image: "/portifolio/QUARTO/img 7.JPG"},
    { id: 29, category: "Quarto", title: "Quarto Casal 04", image: "/portifolio/QUARTO/img 8.JPG"},
    { id: 30, category: "Quarto", title: "Quarto Casal 05", image: "/portifolio/QUARTO/IMG_6587.JPG"},
    { id: 31, category: "Quarto", title: "Quarto Casal 06", image: "/portifolio/QUARTO/EFD557D6-2236-4992-98D5-F8F31881854A.JPG"},
    { id: 32, category: "Quarto", title: "Bancada Quarto", image: "/portifolio/QUARTO/C98DA4BF-9C3E-4B3B-8115-ADBE44646FFE.jpg"},
    { id: 33, category: "Recepção", title: "Recepção 01", image: "/portifolio/RECEPÇÃO/img 1.JPG" },
    { id: 34, category: "Recepção", title: "Recepção 01", image: "/portifolio/RECEPÇÃO/img 1.JPG" },
    { id: 35, category: "Recepção", title: "Recepção", image: "/portifolio/RECEPÇÃO/07627807-710D-415E-B30F-EC3B30056923.JPG" },
    { id: 36, category: "Recepção", title: "Recepção", image: "/portifolio/RECEPÇÃO/835121EE-7DA8-4BD5-8EA1-24BF641F11EC.JPG" },
    { id: 37, category: "Sala", title: "Painel de TV 01", image: "/portifolio/SALA/img 1.jpg" },
    { id: 38, category: "Sala", title: "Painel de TV 01", image: "/portifolio/SALA/img 2.jpg" },
    { id: 39, category: "Sala", title: "Painel de TV 02", image: "/portifolio/SALA/img 3.JPG" },
    { id: 40, category: "Sala", title: "Painel de TV 02", image: "/portifolio/SALA/img 4.JPG" },
    { id: 41, category: "Sala", title: "Painel de TV 03", image: "/portifolio/SALA/IMG_6589.JPG" },
    { id: 42, category: "Sala", title: "Painel de TV 04", image: "/portifolio/SALA/46D3C1DA-68C7-48D5-8A1C-B738A1FA9D65.JPG" },
    { id: 43, category: "Sala", title: "Painel de TV 05", image: "/portifolio/SALA/DE1DD34C-B043-4F29-A125-C915DAC2B4B2.JPG" },
    { id: 44, category: "Sala de Jantar", title: "Sala de Jantar", image: "/portifolio/SALA DE JANTAR/2BE150A0-CF39-4C92-AE47-A9747F5389B5.JPG" },
    { id: 45, category: "Sala de Jantar", title: "Sala de Jantar", image: "/portifolio/SALA DE JANTAR/6029DDF2-30E9-413B-B597-6A2627B4D200.JPG" },
    { id: 46, category: "Sala de Jantar", title: "Sala de Jantar", image: "/portifolio/SALA DE JANTAR/6F4B4E8E-EF84-435F-81A5-D237C7358A78.JPG" },
    { id: 47, category: "Sala de Jantar", title: "Sala de Jantar", image: "/portifolio/SALA DE JANTAR/90DBFE38-B5E8-492B-A071-501EEBE5017F.JPG"},
    { id: 48, category: "Sala de Jantar", title: "Sala de Jantar", image: "/portifolio/SALA DE JANTAR/D54E095E-1E2C-4A98-ACE5-03A641AF8165.JPG" },
  ];

  // Estas são as categorias:
  const categories = [
    'Todos', 
    'Cozinha', 
    'Escritório', 
    'Home Office', 
    'Quarto', 
    'Recepção', 
    'Sala', 
    'Sala de Jantar'
  ];

  const filteredItems = activeFilter === 'Todos' ? portfolioItems : portfolioItems.filter(i => i.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Portfólio Selecionado</h2>
        
        {/* Botões de Filtro */}
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`} 
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grade de Imagens */}
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <motion.div key={item.id} layout className="portfolio-card">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;