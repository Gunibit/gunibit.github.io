import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyGunibit from './components/sections/WhyGunibit';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="gunibit-app">
      {/* Enlace accesible para lectores de pantalla y navegación por teclado */}
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>

      {/* Navegación Principal */}
      <Navbar />

      {/* Contenido Principal de la Landing Page */}
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Services />
        <WhyGunibit />
        <CTA />
      </main>

      {/* Pie de Página */}
      <Footer />
    </div>
  );
}

export default App;
