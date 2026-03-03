import { useState, useEffect } from 'react';
import cvEnglish from '../files/CV_Pedro_Donnarumma_Systems_Engineer.pdf';
import cvSpanish from '../files/CV_Pedro_Donnarumma_Ingeniero_Sistemas.pdf';

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const text = language === 'es' ? 'Ingeniero en sistemas' : 'Systems Engineer';

  useEffect(() => {
    setDisplayedText('');
    setIsTypingComplete(false);
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80); // 100ms por carácter

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
      className="min-h-screen w-full flex items-center justify-center bg-slate-950 snap-start relative"
    >
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 text-white">
          {language === 'es' ? '¡Hola! Soy PEDRO DONNARUMMA' : '¡Hi! I\'m PEDRO DONNARUMMA'}
        </h1>
        <p className="text-2xl text-blue-400 mb-8 font-mono">
          <span className="text-blue-400">&gt;</span> {displayedText}
          <span className={`inline-block w-0.5 h-6 bg-blue-400 ml-1 ${isTypingComplete ? 'animate-blink' : 'animate-blink'}`}></span>
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-8">
          <a 
            href="https://github.com/pedrodonnarumma" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold border border-gray-700 hover:border-gray-600 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {language === 'es' ? 'Perfil de GitHub' : 'GitHub Profile'}
          </a>
          
          <a 
            href={language === 'es' ? cvSpanish : cvEnglish}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold border border-blue-500 hover:border-blue-400 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {language === 'es' ? 'Descargar CV' : 'Download Resume'}
          </a>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
