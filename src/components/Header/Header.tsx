import React, { useState } from 'react';
import { Button } from '../Button';
import './Header.css';
import icone from '../../assets/icone.png';

export interface HeaderProps {
  logo?: React.ReactNode;
  onLogoClick?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  onLogoClick,
  className = ''
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const menuIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const closeIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <header className={`header ${className}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo" onClick={onLogoClick}>
            {logo || (
              <div className="header__logo-container">
                <img
                  src={icone}
                  alt="Operação Código de Ouro"
                  className="header__logo-image"
                />
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <button
                  className="header__nav-link"
                  onClick={() => handleNavClick('home')}
                >
                  Início
                </button>
              </li>
              <li className="header__nav-item">
                <button
                  className="header__nav-link"
                  onClick={() => handleNavClick('platform-info')}
                >
                  Sobre
                </button>
              </li>
              <li className="header__nav-item">
                <button
                  className="header__nav-link"
                  onClick={() => handleNavClick('services')}
                >
                  Serviços
                </button>
              </li>
              <li className="header__nav-item">
                <button
                  className="header__nav-link"
                  onClick={() => handleNavClick('testimonials')}
                >
                  Depoimentos
                </button>
              </li>
              <li className="header__nav-item">
                <button
                  className="header__nav-link"
                  onClick={() => handleNavClick('contact')}
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header__actions">
            <Button 
              variant="primary" 
              size="md"
              onClick={() => handleNavClick('contact')}
              className="header__cta-button"
            >
              Começar Agora
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="header__menu-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? closeIcon : menuIcon}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`header__mobile-nav ${isMenuOpen ? 'header__mobile-nav--open' : ''}`}>
          <nav className="header__mobile-nav-content">
            <ul className="header__mobile-nav-list">
              <li className="header__mobile-nav-item">
                <button
                  className="header__mobile-nav-link"
                  onClick={() => handleNavClick('home')}
                >
                  Início
                </button>
              </li>
              <li className="header__mobile-nav-item">
                <button
                  className="header__mobile-nav-link"
                  onClick={() => handleNavClick('platform-info')}
                >
                  Sobre
                </button>
              </li>
              <li className="header__mobile-nav-item">
                <button
                  className="header__mobile-nav-link"
                  onClick={() => handleNavClick('services')}
                >
                  Serviços
                </button>
              </li>
              <li className="header__mobile-nav-item">
                <button
                  className="header__mobile-nav-link"
                  onClick={() => handleNavClick('testimonials')}
                >
                  Depoimentos
                </button>
              </li>
              <li className="header__mobile-nav-item">
                <button
                  className="header__mobile-nav-link"
                  onClick={() => handleNavClick('contact')}
                >
                  Contato
                </button>
              </li>
            </ul>
            <div className="header__mobile-actions">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => handleNavClick('contact')}
                className="header__mobile-cta-button"
              >
                Começar Agora
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="header__overlay"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}; 