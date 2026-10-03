import { ArrowDown, Download } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { useState, useEffect } from 'react';
import cvEnglish from '../files/Resume - Pedro Donnarumma.pdf';
import cvSpanish from '../files/CV - Pedro Donnarumma.pdf';

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const [displayedText, setDisplayedText] = useState('');
    
  const text = language === 'es' ? 'Ingeniero en Sistemas' : 'Systems Engineer';

  useEffect(() => {
    setDisplayedText('');
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [text]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex items-center justify-center relative"
    >
      <div className="text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient animate-fade-up">
          {language === 'es' ? '¡Hola! Soy PEDRO DONNARUMMA' : 'Hi! I\'m PEDRO DONNARUMMA'}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-8 font-mono animate-fade-up" style={{ animationDelay: '150ms' }}>
          <span className="text-blue-400">&gt;</span> {displayedText}
          <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-blink"></span>
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '300ms' }}>
          <a 
            href="https://github.com/pedrodonnarumma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 glass hover:bg-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold hover:-translate-y-0.5 w-full group sm:w-auto"
          >
            <GithubIcon className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12" />
            {language === 'es' ? 'Perfil de GitHub' : 'GitHub Profile'}
          </a>
          
          <a 
            href={language === 'es' ? cvSpanish : cvEnglish}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold border border-blue-400/40 hover:-translate-y-0.5 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 w-full sm:w-auto group"
          >
            <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            {language === 'es' ? 'Descargar CV' : 'Download Resume'}
          </a>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
        style={{ animationDelay: '600ms' }}
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-8 h-8" aria-hidden="true" />
      </button>
    </section>
  );
};

export default Hero;
