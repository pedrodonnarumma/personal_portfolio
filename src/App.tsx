import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="relative min-h-screen overflow-y-auto">
      <Background />

      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 glass-strong text-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl shadow-lg hover:bg-white/15 transition-colors duration-300 font-semibold text-sm sm:text-base"
      >
        {language === 'es' ? 'EN' : 'ES'}
      </button>

      {/* Sections */}
      <Hero language={language} />
      <About language={language} />
      <Languages language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;
