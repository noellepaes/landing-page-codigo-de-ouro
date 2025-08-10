import React from 'react';
import { Button } from '../Button';
import { CTAButton } from '../CTA';
import './LandingPage.css';
import bg from '../../assets/background.png';

export interface LandingPageProps {
  className?: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  className = ''
}) => {
  const handleGetStarted = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SVG Icons
  const starIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );

  const checkIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
  );

  const arrowRightIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12,5 19,12 12,19"></polyline>
    </svg>
  );

  return (
    <main className={`landing-page ${className}`}>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Prepare-se para conquistar sua próxima vaga com a força de duas IAs inteligentes e especializadas.
              </h1>
              <p className="hero__subtitle">
                Para treinar suas entrevistas e outra para otimizar seu currículo e LinkedIn — tudo para impressionar recrutadores e acelerar sua contratação.
              </p>
              <div className="hero__actions">
                <CTAButton label="Começar agora" size="xl" onClick={handleGetStarted} />
              </div>
            </div>
            <div className="hero__visual">
              <div className="hero__image-placeholder">
                <div className="hero__golden-element"></div>
                <div className="hero__code-lines">
                  <div className="code-line code-line--1"></div>
                  <div className="code-line code-line--2"></div>
                  <div className="code-line code-line--3"></div>
                  <div className="code-line code-line--4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Info Section */}
      <section id="platform-info" className="platform-info">
        <div className="container">
          <div className="platform-info__content">
            <h2 className="platform-info__title">Sobre a plataforma</h2>
            <div className="platform-info__description">
              <p>Transformando a preparação para o mercado com inteligência artificial</p>
            </div>
            <div className="platform-info__video">
              <iframe
                src="https://www.youtube.com/embed/AGjeiiv32BM"
                title="Vídeo da Plataforma"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works__content">
            <h2 className="how-it-works__title">COMO FUNCIONA</h2>
            <div className="how-it-works__description">
              <p>Explore nossa IA</p>
            </div>
            <div className="how-it-works__cards">
              <div className="how-it-works__card">
                <div className="how-it-works__card-image">
                  <img src="/src/assets/treinamento-para-entrevistas.png" alt="Treinamento para Entrevistas" />
                </div>
                <div className="how-it-works__card-content">
                  <h3 className="how-it-works__card-title">Treinamento para Entrevistas</h3>
                  <p className="how-it-works__card-description">
                    Treine entrevistas de forma prática e personalizada. Nossa IA simula situações reais de recrutamento, faz perguntas estratégicas e fornece feedback detalhado sobre suas respostas, postura e comunicação. Tudo para que você se sinta mais seguro e preparado no grande dia.
                  </p>
                </div>
              </div>
              <div className="how-it-works__card">
                <div className="how-it-works__card-image">
                  <img src="/src/assets/otimizacao-de-perfil.png" alt="Otimização de Perfil" />
                </div>
                <div className="how-it-works__card-content">
                  <h3 className="how-it-works__card-title">Otimização de Perfil</h3>
                  <p className="how-it-works__card-description">
                    Otimize seu currículo e perfil do LinkedIn com inteligência artificial. A ferramenta analisa suas experiências, identifica pontos de melhoria e sugere ajustes para destacar suas habilidades, atrair recrutadores e aumentar suas chances de conquistar a vaga desejada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nossos Serviços</h2>
            <p className="section-subtitle">
              Oferecemos soluções completas para todas as suas necessidades digitais.
            </p>
          </div>
          <div className="services__grid">
            <div className="service-card">
              <div className="service-card__header">
                <h3 className="service-card__title">Desenvolvimento Web</h3>
                <p className="service-card__description">
                  Sites e aplicações web responsivas e modernas.
                </p>
              </div>
              <ul className="service-card__features">
                <li className="service-card__feature">
                  {checkIcon}
                  <span>React & TypeScript</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Design Responsivo</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>SEO Otimizado</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Performance Premium</span>
                </li>
              </ul>
            </div>
            
            <div className="service-card service-card--featured">
              <div className="service-card__badge">Mais Popular</div>
              <div className="service-card__header">
                <h3 className="service-card__title">E-commerce Completo</h3>
                <p className="service-card__description">
                  Loja online completa com sistema de pagamentos integrado.
                </p>
              </div>
              <ul className="service-card__features">
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Dashboard Administrativo</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Pagamentos Seguros</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Gestão de Estoque</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Analytics Integrado</span>
                </li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-card__header">
                <h3 className="service-card__title">Aplicativo Mobile</h3>
                <p className="service-card__description">
                  Apps nativos para iOS e Android com performance superior.
                </p>
              </div>
              <ul className="service-card__features">
                <li className="service-card__feature">
                  {checkIcon}
                  <span>React Native</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Push Notifications</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>Offline Support</span>
                </li>
                <li className="service-card__feature">
                  {checkIcon}
                  <span>App Store Deploy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">O que nossos clientes dizem</h2>
            <p className="section-subtitle">
              Histórias reais de transformação digital e sucesso.
            </p>
          </div>
          <div className="testimonials__grid">
            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="testimonial-card__star">
                    {starIcon}
                  </span>
                ))}
              </div>
              <blockquote className="testimonial-card__quote">
                "O Código de Ouro transformou completamente nossa presença digital. 
                Nosso faturamento online aumentou 300% em apenas 6 meses!"
              </blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">MC</div>
                <div className="testimonial-card__info">
                  <cite className="testimonial-card__name">Maria Clara</cite>
                  <span className="testimonial-card__role">CEO, TechStart</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="testimonial-card__star">
                    {starIcon}
                  </span>
                ))}
              </div>
              <blockquote className="testimonial-card__quote">
                "Profissionalismo excepcional! Entregaram exatamente o que prometeram, 
                no prazo e com qualidade superior."
              </blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">RS</div>
                <div className="testimonial-card__info">
                  <cite className="testimonial-card__name">Roberto Silva</cite>
                  <span className="testimonial-card__role">Diretor, InnovaCorp</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-card__rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="testimonial-card__star">
                    {starIcon}
                  </span>
                ))}
              </div>
              <blockquote className="testimonial-card__quote">
                "A melhor decisão que tomamos foi contratar o Código de Ouro. 
                Suporte incrível e resultados que superam expectativas!"
              </blockquote>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">AF</div>
                <div className="testimonial-card__info">
                  <cite className="testimonial-card__name">Ana Ferreira</cite>
                  <span className="testimonial-card__role">Fundadora, DigitalPlus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__text">
              <h2 className="contact__title">
                Pronto para transformar sua ideia em realidade?
              </h2>
              <p className="contact__description">
                Entre em contato conosco e descubra como podemos elevar 
                seu negócio ao próximo nível com soluções digitais de excelência.
              </p>
              <div className="contact__info">
                <div className="contact__item">
                  <span className="contact__label">📧 Email:</span>
                  <span className="contact__value">contato@codigodeouro.com</span>
                </div>
                <div className="contact__item">
                  <span className="contact__label">📱 WhatsApp:</span>
                  <span className="contact__value">+55 (11) 99999-9999</span>
                </div>
                <div className="contact__item">
                  <span className="contact__label">⏰ Horário:</span>
                  <span className="contact__value">Seg-Sex, 9h às 18h</span>
                </div>
              </div>
            </div>
            <div className="contact__actions">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                icon={arrowRightIcon}
                iconPosition="right"
                className="contact__button"
              >
                Iniciar Conversa
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('mailto:contato@codigodeouro.com', '_blank')}
                className="contact__button"
              >
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}; 