import React from 'react';
import { Globe, Database, Code2, Cpu, Headset, ShieldCheck, ArrowUpRight } from 'lucide-react';
import './ServiceCard.css';

// Mapeo seguro de iconos
const iconMap = {
  Globe,
  Database,
  Code2,
  Cpu,
  Headset,
  ShieldCheck
};

export const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <article className="gunibit-service-card" style={{ animationDelay: `${index * 0.08}s` }}>
      {/* Contenedor del Icono SVG */}
      <div className="service-card-header">
        <div className="service-icon-box" aria-hidden="true">
          <IconComponent size={26} className="service-icon-svg" />
        </div>
        <span className="service-category-tag">{service.category}</span>
      </div>

      {/* Contenido Principal */}
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
      </div>

      {/* Pie de tarjeta con microindicador de acción */}
      <div className="service-card-footer">
        <a href="#contacto" className="service-action-link" aria-label={`Consultar por ${service.title}`}>
          <span>Saber más</span>
          <ArrowUpRight size={16} className="action-arrow" />
        </a>
      </div>
    </article>
  );
};

export default ServiceCard;
