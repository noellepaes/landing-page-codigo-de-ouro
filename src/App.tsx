import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Footer } from './components/Footer';
import './styles/globals.css';
import iaImage from './assets/IA.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Check = () => (
    <svg viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12" /></svg>
  );

  return (
    <div className="App">
      <Header 
        onLogoClick={handleLogoClick}
        className={isScrolled ? 'header--scrolled' : ''}
      />

      {/* Top-right decorative figure (absolute) */}
      <div className="right-bg-figure--top" aria-hidden="true" />

      {/* Right decorative figure (absolute, not fixed) */}
      <div className="right-bg-figure--bottom" aria-hidden="true" />

      <LandingPage />

      {/* Offer Section */}
      <section className="offer">
        <div className="offer__container">
          <div className="offer__card">
            <div className="offer__left">
              <img src={iaImage} alt="Inteligência Artificial" className="offer__left-image" />
            </div>
            <div className="offer__right">
              <div className="offer__price">
                <div className="offer__price-small">por apenas</div>
                <div className="offer__price-big">80RS</div>
              </div>
              <ul className="offer__list">
                <li className="offer__list-item"><Check /> Ganhe tempo com preparo rápido e eficiente</li>
                <li className="offer__list-item"><Check /> Feedback inteligente para evoluir de verdade</li>
                <li className="offer__list-item"><Check /> Mais chances de contratação</li>
                <li className="offer__list-item"><Check /> Duas IAs focadas em você e no seu sucesso profissional</li>
              </ul>
              <a href="#contact" className="offer__button">
                {/* Reutilizar CTA padrão se preferir */}
                <button className="btn btn--primary btn--lg">Comece agora e garanta sua vaga</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
