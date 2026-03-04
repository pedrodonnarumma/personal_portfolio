import { useState } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState('en');
  const scrollContainerRef = useSmoothScroll();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div ref={scrollContainerRef} className="relative h-screen overflow-y-auto scroll-container">
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-gray-800  text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 font-semibold border border-blue-500"
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
