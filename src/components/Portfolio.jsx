import React, { useState } from 'react';
import { ZoomIn, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const portfolioItems = [
    { id: 1, category: "Cozinhas", title: "Cozinha Moderna", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" },
    { id: 2, category: "Closets", title: "Closet Suite", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
    { id: 3, category: "Escritórios", title: "Home Office", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  ];

  const categories = ['Todos', 'Cozinhas', 'Closets', 'Escritórios'];
  const filteredItems = activeFilter === 'Todos' ? portfolioItems : portfolioItems.filter(i => i.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Portfólio Selecionado</h2>
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button key={cat} className={`filter-btn ${activeFilter === cat ? 'active' : ''}`} onClick={() => setActiveFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <motion.div key={item.id} layout className="portfolio-card">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="portfolio-content"><h3>{item.title}</h3></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;