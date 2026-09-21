import React from 'react';
import { Mail, Phone, ArrowRight, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import './CTA.css';

export const CTA = () => {
  return (
    <section id="contacto" className="section gunibit-cta-section">
      <div className="container">
        <div className="cta-card-box">
          {/* Acento decorativo */}
          <div className="cta-pattern" aria-hidden="true" />

          <div className="cta-content">
            <span className="cta-tag">CONTÁCTANOS</span>
            <h2 className="cta-title">¿Tienes un proyecto en mente?</h2>
            <p className="cta-description">
              Cuéntanos qué necesitas y encontremos juntos una solución tecnológica integral,
              robusta y adaptada a tu medida.
            </p>

            {/* Botones de acción */}
            <div className="cta-buttons">
              <Button
                href="mailto:info@gunibit.cl"
                variant="secondary"
                size="lg"
                icon={<Mail size={18} />}
                className="cta-btn-primary"
              >
                Contáctanos por Correo
              </Button>
              <Button
                href="#servicios"
                variant="outline"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="cta-btn-secondary"
              >
                Ver servicios
              </Button>
            </div>

            {/* Canales de contacto directo para accesibilidad inmediata */}
            <div className="cta-direct-channels">
              <a href="tel:+56920450797" className="direct-channel-item">
                <div className="channel-icon-wrap">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="channel-label">Llámanos o escríbenos</span>
                  <strong className="channel-value">+56 9 2045 0797</strong>
                </div>
              </a>

              <div className="channels-divider" aria-hidden="true" />

              <a href="mailto:info@gunibit.cl" className="direct-channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="channel-label">Correo de atención</span>
                  <strong className="channel-value">info@gunibit.cl</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
