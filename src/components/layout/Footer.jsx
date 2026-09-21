import React from 'react';
import { Phone, Mail, Layers } from 'lucide-react';
import Logo from '../common/Logo';
import './Footer.css';

// SVGs limpios para redes sociales (placeholders preparados para Fase 1)
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gunibit-footer-wrapper" role="contentinfo">
      <div className="container">
        {/* Bloque Superior del Footer */}
        <div className="footer-main-grid">
          {/* Columna de Marca */}
          <div className="footer-brand-col">
            <Logo inverted={true} size="normal" showTagline={true} />
            <p className="footer-tagline-text">
              Ingeniería tecnológica integral enfocada en el rendimiento, seguridad y continuidad
              operativa de tus proyectos y sistemas.
            </p>
            {/* Redes Sociales Placeholders */}
            <div className="footer-social-links" aria-label="Canales y redes sociales">
              <a
                href="#inicio"
                className="social-icon-btn"
                aria-label="LinkedIn de Gunibit (próximamente)"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#inicio"
                className="social-icon-btn"
                aria-label="GitHub de Gunibit (próximamente)"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="#inicio"
                className="social-icon-btn"
                aria-label="Twitter / X de Gunibit (próximamente)"
                title="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Columna Enlaces Rápidos */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Por qué Gunibit</a></li>
              <li><a href="#contacto">Contacto directo</a></li>
              <li><a href="#contacto">Soporte Técnico</a></li>
            </ul>
          </div>

          {/* Columna Servicios Principales */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Soluciones</h4>
            <ul className="footer-links-list">
              <li><a href="#servicios">Diseño y Desarrollo Web</a></li>
              <li><a href="#servicios">Bases de Datos y Respaldos</a></li>
              <li><a href="#servicios">Software y Sistemas</a></li>
              <li><a href="#servicios">Hardware y Ensamblado</a></li>
              <li><a href="#servicios">Recuperación de Información</a></li>
            </ul>
          </div>

          {/* Columna Datos de Contacto Oficiales */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contacto Oficial</h4>
            <div className="footer-contact-items">
              <div className="contact-detail-item">
                <Phone size={16} className="contact-icon" />
                <div>
                  <span className="detail-label">Teléfono / WhatsApp</span>
                  <a href="tel:+56920450797" className="detail-value">+56 9 2045 0797</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <Mail size={16} className="contact-icon" />
                <div>
                  <span className="detail-label">Correo Electrónico</span>
                  <a href="mailto:info@gunibit.cl" className="detail-value">info@gunibit.cl</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <Layers size={16} className="contact-icon" />
                <div>
                  <span className="detail-label">Área</span>
                  <span className="detail-value text-static">Recursos e informática</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque Inferior: Copyright y Legal */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <p>© {currentYear} <strong>GUNIBIT</strong>. Todos los derechos reservados.</p>
            <span className="engineering-sub">Ingeniería tecnológica integral</span>
          </div>

          <div className="footer-legal-links">
            <a href="#inicio" className="legal-link">Política de Privacidad</a>
            <span className="legal-separator" aria-hidden="true">•</span>
            <a href="#inicio" className="legal-link">Términos y Condiciones</a>
            <span className="legal-separator" aria-hidden="true">•</span>
            <a href="#contacto" className="legal-link">Mesa de Ayuda</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
