import React from 'react';
import { servicesData } from '../../data/servicesData';
import ServiceCard from './ServiceCard';
import './Services.css';

export const Services = () => {
  return (
    <section id="servicios" className="section gunibit-services-section">
      <div className="container">
        {/* Cabecera de Sección */}
        <div className="section-header">
          <span className="section-tag">NUESTRAS SOLUCIONES</span>
          <h2 className="section-title">Todo lo que necesitas, en un solo lugar</h2>
          <p className="section-description">
            Ofrecemos una amplia gama de servicios tecnológicos para mantener tus equipos, sistemas
            y proyectos siempre en marcha.
          </p>
        </div>

        {/* Grid Responsivo de Tarjetas */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
