import React from 'react';
import './Footer.css';
import icone from '../../assets/icone.png';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  className = ''
}) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer__content">
        <div className="footer__text">
          © 2025. Todos os direitos reservados
        </div>
        <div className="footer__logo">
          <img
            src={icone}
            alt="Operação Código de Ouro"
            className="footer__logo-image"
          />
        </div>
      </div>
    </footer>
  );
}; 