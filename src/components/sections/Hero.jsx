import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../common/Button';
import HeroVisual from './HeroVisual';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="inicio" className="gunibit-hero-section">
      <div className="container hero-container">
        {/* COLUMNA IZQUIERDA: MENSAJE PRINCIPAL */}
        <div className="hero-content fade-in-up">
          {/* Eyebrow / Tag Superior */}
          <div className="hero-badge">
            <Sparkles size={14} className="hero-badge-icon" />
            <span>TECNOLOGÍA QUE FUNCIONA</span>
          </div>

          {/* Título Principal */}
          <h1 className="hero-title">
            Soluciones tecnológicas para <span className="highlight-text">tu mundo</span>
          </h1>

          {/* Bajada / Descripción */}
          <p className="hero-description">
            En Gunibit ofrecemos servicios de ingeniería tecnológica integral, adaptados a tus
            necesidades, ya seas una persona, emprendedor o empresa.
          </p>

          {/* Botones de Acción */}
          <div className="hero-actions">
            <Button
              href="#servicios"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="hero-btn-primary"
            >
              Nuestros Servicios
            </Button>
            <Button
              href="#contacto"
              variant="outline"
              size="lg"
              className="hero-btn-secondary"
            >
              Contáctanos
            </Button>
          </div>

          {/* Micro-propuestas de valor para confianza inmediata */}
          <div className="hero-trust-list">
            <div className="trust-item">
              <CheckCircle size={15} className="trust-icon" />
              <span>Soporte confiable</span>
            </div>
            <div className="trust-item">
              <CheckCircle size={15} className="trust-icon" />
              <span>Soluciones a medida</span>
            </div>
            <div className="trust-item">
              <CheckCircle size={15} className="trust-icon" />
              <span>Ingeniería integral</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: ELEMENTO VISUAL */}
        <div className="hero-visual-col fade-in delay-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
