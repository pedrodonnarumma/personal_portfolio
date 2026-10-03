import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import Navbar from './components/Navbar';

function App() {
  const [language, setLanguage] = useState('en');
  const [isSwitchingLanguage, setIsSwitchingLanguage] = useState(false);

  // Fundido corto: el texto se apaga, cambia de idioma y vuelve a aparecer
  const toggleLanguage = () => {
    if (isSwitchingLanguage) return;
    setIsSwitchingLanguage(true);
    window.setTimeout(() => {
      setLanguage(prev => prev === 'es' ? 'en' : 'es');
      setIsSwitchingLanguage(false);
    }, 180);
  };

  return (
    <div className="relative min-h-screen">
      <Background />

      <Navbar language={language} onToggleLanguage={toggleLanguage} />

      <main className={`transition-opacity duration-200 ${isSwitchingLanguage ? 'opacity-0' : 'opacity-100'}`}>
        <Hero language={language} />
        <About language={language} />
        <Languages language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}

export default App;
