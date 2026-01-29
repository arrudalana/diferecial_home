import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

// Import dos componentes
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';       
// import Processo from './components/Processo'; <-- REMOVIDO PARA NÃO DUPLICAR
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsappButton';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

function App() {
  return (
    <>
      <Helmet>
        <html lang="pt-br" />
        <title>Diferencial Home - Móveis Planejados em Cuiabá</title>
        <meta name="description" content="Móveis planejados desenvolvidos com precisão técnica e alto nível de detalhamento em Cuiabá e região." />
      </Helmet>
      
      <Analytics />
      
      <div className="App">
        <Header />
        <Hero />
        <Sobre />      {/* Contém "Quem Somos" e "Abordagem (Verde)" */}
        <Portfolio />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;