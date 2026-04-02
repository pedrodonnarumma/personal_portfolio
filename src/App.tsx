import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="relative min-h-screen overflow-y-auto">
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 bg-gray-800 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 font-semibold border border-blue-500 text-sm sm:text-base"
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
