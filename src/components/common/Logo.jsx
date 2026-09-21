import React from 'react';
import './Logo.css';

/**
 * Componente Logo de GUNIBIT
 * Estructurado modularmente para permitir reemplazar el isotipo temporal
 * por el archivo/vector del logo oficial sin tocar la estructura del Navbar o Footer.
 *
 * @param {boolean} inverted - Si es true, ajusta los colores para fondos oscuros (ej: Footer)
 * @param {string} size - Tamaño: 'normal' (default) o 'small' o 'large'
 */
export const Logo = ({ inverted = false, size = 'normal', showTagline = true }) => {
  return (
    <div className={`gunibit-logo-brand ${inverted ? 'inverted' : ''} size-${size}`}>
      {/* ESPACIO AISLADO PARA EL ISOTIPO OFICIAL */}
      <div className="gunibit-logo-symbol" aria-hidden="true">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-icon-svg"
        >
          {/* Fondo geométrico con esquinas suavizadas */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            className="symbol-bg"
          />
          {/* Trazado tecnológico tipo circuito / hexágono de ingeniería */}
          <path
            d="M12 14C12 12.8954 12.8954 12 14 12H26C27.1046 12 28 12.8954 28 14V19H21V23H28V26C28 27.1046 27.1046 28 26 28H14C12.8954 28 12 27.1046 12 26V14Z"
            className="symbol-path"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Nodo central de conectividad / datos */}
          <circle cx="20" cy="20" r="2.5" className="symbol-node" />
          <line x1="12" y1="20" x2="17.5" y2="20" className="symbol-link" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="22.5" y1="20" x2="28" y2="20" className="symbol-link" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="20" r="1.5" className="symbol-terminal" />
          <circle cx="28" cy="20" r="1.5" className="symbol-terminal" />
        </svg>
      </div>

      {/* TEXTO DE MARCA */}
      <div className="gunibit-logo-typography">
        <div className="gunibit-logo-name">
          <span>GUNI</span><span className="name-accent">BIT</span>
          <span className="brand-dot">.</span>
        </div>
        {showTagline && (
          <span className="gunibit-logo-tagline">
            Ingeniería tecnológica integral
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
