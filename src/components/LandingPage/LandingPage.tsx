import React, { useState } from 'react';
import { Button } from '../Button';
import { CTAButton } from '../CTA';
import './LandingPage.css';
import iaImage from '../../assets/IA.png';

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

  // FAQ state
  const faqs = [
    {
      question: 'Como as IAs funcionam na prática?',
      answer:
        'Elas simulam entrevistas e analisam seus documentos em tempo real, oferecendo sugestões personalizadas com base no seu perfil.'
    },
    {
      question: 'Preciso ter experiência na área para usar?',
      answer:
        'Não. A plataforma foi criada para iniciantes e profissionais. A IA guia você passo a passo e adapta as orientações ao seu nível atual.'
    },
    {
      question: 'Em quanto tempo vejo resultado?',
      answer:
        'Geralmente nas primeiras sessões. Após algumas simulações e ajustes no currículo/LinkedIn, você já percebe ganhos de clareza e confiança.'
    },
    {
      question: 'Posso usar quantas vezes quiser?',
      answer:
        'Sim. O uso é ilimitado durante o período contratado: você pode praticar entrevistas e refinar seus materiais quantas vezes precisar.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number>(0);
  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

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

      {/* FAQ Section (replaces Contact) */}
      <section id="contact" className="faq">
        <div className="container">
          <div className="faq__grid">
            <div className="faq__left">
              <div className="faq__kicker">TIRE SUAS DÚVIDAS</div>
              <h2 className="faq__title">Perguntas mais frequentes</h2>
              <p className="faq__subtitle">Separamos algumas perguntas e respostas que podem te ajudar na sua decisão.</p>
              <div className="faq__actions">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.02 2 11.3c0 2.9 1.44 5.49 3.7 7.19L5 22l3.7-1.1c1.03.29 2.12.45 3.3.45 5.52 0 10-4.52 10-10.05C22 6.02 17.52 2 12 2Zm0 18.11c-1.03 0-2-.17-2.9-.49l-.21-.07-2.11.62.61-2.02-.14-.21c-1.97-1.4-3.13-3.5-3.13-5.94 0-4.21 3.58-7.62 7.88-7.62s7.88 3.41 7.88 7.62-3.58 7.62-7.88 7.62Zm4.12-5.07c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.92-.34-1.75-1.1-.65-.58-1.09-1.29-1.22-1.51-.13-.22-.01-.33.1-.44.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.27-.02-.38-.05-.11-.5-1.21-.69-1.66-.18-.44-.36-.38-.5-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.05-.6.27-.2.22-.79.77-.79 1.89 0 1.12.81 2.2.92 2.35.11.15 1.58 2.49 3.84 3.39.54.23.96.37 1.28.47.54.17 1.03.15 1.41.09.43-.06 1.3-.53 1.48-1.05.18-.52.18-.96.13-1.05-.05-.09-.2-.15-.42-.26Z"/>
                    </svg>
                  }
                >
                  Falar no WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://instagram.com/codigodeouro', '_blank')}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10Zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5Zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5ZM18 7.2a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
                    </svg>
                  }
                >
                  Instagram
                </Button>
              </div>
            </div>

            <div className="faq__right">
              <div className="faq__accordion">
                {faqs.map((item, index) => {
                  const isOpen = index === openIndex;
                  return (
                    <div key={item.question} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                      <button className="faq__question" onClick={() => toggleFaq(index)}>
                        <span className="faq__question-text">{item.question}</span>
                        <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`} aria-hidden>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6,9 12,15 18,9" />
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq__answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="offer" id="offer">
        <div className="offer__container">
          <div className="offer__card">
            <div className="offer__left">
              <img src={iaImage} alt="Inteligência Artificial" className="offer__left-image" />
            </div>
            <div className="offer__right">
              <div className="offer__price">
                <div className="offer__price-small">Por apenas</div>
                <div className="offer__price-big">R$80,00</div>
              </div>
              <ul className="offer__list">
                <li className="offer__list-item">{checkIcon} Ganhe tempo com preparo rápido e eficiente</li>
                <li className="offer__list-item">{checkIcon} Feedback inteligente para evoluir de verdade</li>
                <li className="offer__list-item">{checkIcon} Mais chances de contratação</li>
                <li className="offer__list-item">{checkIcon} Duas IAs focadas em você e no seu sucesso profissional</li>
              </ul>
              <a href="#contact" className="offer__button">
                <button className="btn btn--primary btn--lg">Comece agora e garanta sua vaga</button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}; 