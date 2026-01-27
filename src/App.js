import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

// Import dos componentes
import Header from './components/Header';
import Hero from './components/Hero';
// Processo removido daqui
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
        <title>DH Diferencial Home - Móveis Planejados</title>
      </Helmet>
      
      <Analytics />
      
      <div className="App">
        <Header />
        <Hero />
        {/* Seção Processo foi removida */}
        <Portfolio />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;