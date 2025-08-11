import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Footer } from './components/Footer';
import './styles/globals.css';


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


      <Footer />
    </div>
  );
}

export default App;
