import React from 'react';
import { Terminal, Server, ShieldCheck, Activity, Cpu, Database, CheckCircle2 } from 'lucide-react';
import './HeroVisual.css';

/**
 * Visual tecnológico de ingeniería para el Hero.
 * Diseñado con estética de consola de ingeniería, métricas de infraestructura
 * y arquitectura de conectividad limpia en la paleta azul marino + azul tecnológico.
 */
export const HeroVisual = () => {
  return (
    <div className="hero-visual-wrapper" aria-label="Consola de infraestructura y soluciones tecnológicas de Gunibit">
      {/* Fondo geométrico sutil de ingeniería */}
      <div className="tech-geometric-accent tech-grid" aria-hidden="true" />
      <div className="tech-glow-spot" aria-hidden="true" />

      {/* Tarjeta / Consola Principal de Ingeniería */}
      <div className="engineering-card-main">
        {/* Barra de cabecera de la consola */}
        <div className="console-header">
          <div className="console-window-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="console-title">
            <Terminal size={13} className="console-icon" />
            <span>gunibit-core // systems.status</span>
          </div>
          <div className="console-status-pill">
            <span className="status-indicator-dot" />
            <span>Online</span>
          </div>
        </div>

        {/* Cuerpo de la consola: Métricas y módulos activos */}
        <div className="console-body">
          {/* Fila de métricas clave */}
          <div className="metrics-row">
            <div className="metric-chip">
              <div className="metric-icon-wrap">
                <Server size={16} />
              </div>
              <div>
                <span className="metric-label">Infraestructura</span>
                <strong className="metric-val">100% Operativa</strong>
              </div>
            </div>

            <div className="metric-chip">
              <div className="metric-icon-wrap">
                <Cpu size={16} />
              </div>
              <div>
                <span className="metric-label">Rendimiento</span>
                <strong className="metric-val">Optimizado</strong>
              </div>
            </div>
          </div>

          {/* Bloque de código / diagnósticos de ingeniería */}
          <div className="console-code-block">
            <div className="code-line">
              <span className="code-keyword">const</span> <span className="code-var">gunibitEngine</span> = <span className="code-keyword">new</span> <span className="code-func">IntegratedTechnology</span>();
            </div>
            <div className="code-line">
              <span className="code-comment">// Inicializando módulos de soporte y desarrollo...</span>
            </div>
            <div className="code-line">
              <span className="code-var">gunibitEngine</span>.<span className="code-func">deploy</span>({'{'}
            </div>
            <div className="code-line indent">
              <span className="code-prop">web</span>: <span className="code-val">"responsive"</span>,
              <span className="code-prop">database</span>: <span className="code-val">"secured"</span>,
              <span className="code-prop">hardware</span>: <span className="code-val">"verified"</span>
            </div>
            <div className="code-line">
              {'}'});
            </div>
          </div>

          {/* Fila de estado de servicios */}
          <div className="services-status-list">
            <div className="service-status-tag">
              <CheckCircle2 size={13} className="check-icon" />
              <span>Soporte Técnico Activo</span>
            </div>
            <div className="service-status-tag">
              <Database size={13} className="check-icon" />
              <span>Respaldos Seguros</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Seguridad y Respaldo */}
      <div className="floating-badge badge-security">
        <div className="badge-icon-bubble">
          <ShieldCheck size={18} />
        </div>
        <div className="badge-content">
          <span className="badge-title">Seguridad Integral</span>
          <span className="badge-subtitle">Respaldo & Recuperación</span>
        </div>
      </div>

      {/* Floating Badge 2: Soporte y Rendimiento */}
      <div className="floating-badge badge-support">
        <div className="badge-icon-bubble blue">
          <Activity size={18} />
        </div>
        <div className="badge-content">
          <span className="badge-title">Ingeniería Continua</span>
          <span className="badge-subtitle">Soporte y Monitoreo</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
