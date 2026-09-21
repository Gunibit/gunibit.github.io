import React, { useState, useEffect } from 'react';
import { Headset, Menu, X } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      // Detección de sombra sutil al hacer scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detección de sección activa para indicador discreto
      const sections = ['inicio', 'servicios', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`gunibit-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container gunibit-navbar-container">
        {/* LOGO A LA IZQUIERDA */}
        <a href="#inicio" className="gunibit-navbar-brand" aria-label="Gunibit - Volver al inicio">
          <Logo size="normal" showTagline={false} />
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="gunibit-nav-desktop" aria-label="Navegación principal">
          <ul className="nav-links-list">
            <li>
              <a
                href="#inicio"
                className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
              >
                Inicio
                {activeSection === 'inicio' && <span className="active-dot" aria-hidden="true" />}
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`}
              >
                Servicios
                {activeSection === 'servicios' && <span className="active-dot" aria-hidden="true" />}
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className={`nav-link ${activeSection === 'nosotros' ? 'active' : ''}`}
              >
                Nosotros
                {activeSection === 'nosotros' && <span className="active-dot" aria-hidden="true" />}
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={`nav-link ${activeSection === 'contacto' ? 'active' : ''}`}
              >
                Contacto
                {activeSection === 'contacto' && <span className="active-dot" aria-hidden="true" />}
              </a>
            </li>
          </ul>
        </nav>

        {/* BOTÓN DESTACADO A LA DERECHA (DESKTOP) */}
        <div className="gunibit-navbar-actions">
          <Button
            href="#contacto"
            variant="support"
            size="sm"
            icon={<Headset size={16} />}
            className="navbar-support-btn"
          >
            Soporte Técnico
          </Button>

          {/* BOTÓN HAMBURGUESA MÓVIL */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div
        id="mobile-nav"
        className={`gunibit-nav-mobile ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-inner">
          <ul className="mobile-links-list">
            <li>
              <a
                href="#inicio"
                className={`mobile-link ${activeSection === 'inicio' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className={`mobile-link ${activeSection === 'servicios' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className={`mobile-link ${activeSection === 'nosotros' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className={`mobile-link ${activeSection === 'contacto' ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contacto
              </a>
            </li>
          </ul>

          <div className="mobile-cta-wrapper">
            <Button
              href="#contacto"
              variant="support"
              size="md"
              icon={<Headset size={18} />}
              onClick={closeMobileMenu}
              style={{ width: '100%' }}
            >
              Soporte Técnico
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
