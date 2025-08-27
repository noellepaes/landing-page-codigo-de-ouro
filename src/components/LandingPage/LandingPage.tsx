import React, { useState } from 'react';
import { Button } from '../Button';
import { CTAButton } from '../CTA';
import './LandingPage.css';
import iaImage from '../../assets/IA.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
                  <img src="/src/assets/treinamento-para-entrevistas.svg" alt="Treinamento para Entrevistas" />
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
                  <img src="/src/assets/otimizacao-de-perfil.svg" alt="Otimização de Perfil" />
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
                  icon={<FaWhatsapp />}
                >
                  Falar no WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://instagram.com/codigodeouro', '_blank')}
                  icon={<FaInstagram />}
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