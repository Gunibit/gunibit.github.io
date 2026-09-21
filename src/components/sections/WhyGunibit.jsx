import React from 'react';
import { Award, Sliders, Clock, Users, CheckCircle2 } from 'lucide-react';
import { whyGunibitData } from '../../data/whyGunibitData';
import './WhyGunibit.css';

const iconMap = {
  Award,
  Sliders,
  Clock,
  Users
};

export const WhyGunibit = () => {
  return (
    <section id="nosotros" className="section gunibit-why-section">
      {/* Elementos decorativos sutiles de fondo tecnológico */}
      <div className="why-bg-grid" aria-hidden="true" />
      <div className="why-glow-accent" aria-hidden="true" />

      <div className="container why-container">
        {/* Encabezado con contraste para fondo oscuro */}
        <div className="section-header why-header">
          <span className="why-tag">VALOR DIFERENCIAL</span>
          <h2 className="why-title">Tecnología pensada para ti</h2>
          <p className="why-description">
            Combinamos conocimientos técnicos, experiencia y atención personalizada para
            desarrollar soluciones que realmente respondan a tus necesidades.
          </p>
        </div>

        {/* Grid de 4 Pilares */}
        <div className="why-features-grid">
          {whyGunibitData.map((item) => {
            const IconComponent = iconMap[item.iconName] || CheckCircle2;
            return (
              <div key={item.id} className="why-feature-card">
                <div className="why-feature-icon-box" aria-hidden="true">
                  <IconComponent size={24} />
                </div>
                <div className="why-feature-content">
                  <span className="why-feature-badge">{item.badge}</span>
                  <h3 className="why-feature-title">{item.title}</h3>
                  <p className="why-feature-text">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Declaración de compromiso de ingeniería Gunibit */}
        <div className="why-bottom-banner">
          <div className="banner-content">
            <span className="banner-dot" />
            <p>
              <strong>Enfoque Gunibit:</strong> No somos una simple tienda de computadores o servicio
              técnico genérico; actuamos como tu socio estratégico en ingeniería tecnológica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGunibit;
