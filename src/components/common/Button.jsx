import React from 'react';
import './Button.css';

/**
 * Componente Botón reutilizable y accesible
 *
 * @param {'primary' | 'secondary' | 'outline' | 'support'} variant
 * @param {'sm' | 'md' | 'lg'} size
 * @param {React.ReactNode} icon - Icono SVG opcional (a la izquierda o derecha)
 * @param {'left' | 'right'} iconPosition
 * @param {string} href - Si se proporciona, renderiza una etiqueta <a>
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  onClick,
  className = '',
  type = 'button',
  ...rest
}) => {
  const buttonClass = `gunibit-btn gunibit-btn-${variant} gunibit-btn-${size} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClass} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;
