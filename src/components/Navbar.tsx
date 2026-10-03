import { useEffect, useState } from 'react';

interface NavbarProps {
  language: string;
  onToggleLanguage: () => void;
}

const links = [
  { id: 'about', en: 'About', es: 'Sobre mí' },
  { id: 'languages', en: 'Stack', es: 'Stack' },
  { id: 'projects', en: 'Projects', es: 'Proyectos' },
  { id: 'contact', en: 'Contact', es: 'Contacto' },
];

const Navbar = ({ language, onToggleLanguage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // La barra toma el efecto de vidrio en cuanto el usuario empieza a bajar
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Marca como activa la sección que ocupa la franja central de la pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const languageButton = (
    <button
      onClick={onToggleLanguage}
      className="glass rounded-lg px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-300"
      aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className={`mx-auto w-full md:w-fit rounded-2xl transition-all duration-500 ${
          isMenuOpen
            ? 'glass-strong bg-ink-900/90'
            : isScrolled
              ? 'glass-strong'
              : 'border border-transparent'
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 md:gap-3 md:px-3 md:py-2.5">
          <a href="#hero" className="flex items-center text-white" aria-label="Pedro Donnarumma" onClick={() => setIsMenuOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 font-mono text-sm font-bold shadow-lg shadow-blue-600/30">
              PD
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeId === link.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'es' ? link.es : link.en}
              </a>
            ))}
            <span className="mx-2 h-5 w-px bg-white/10" />
            {languageButton}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {languageButton}
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label={language === 'es' ? 'Abrir menú' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 md:hidden ${
            isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-white/10 p-3">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  tabIndex={isMenuOpen ? undefined : -1}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 font-medium transition-colors ${
                    activeId === link.id ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {language === 'es' ? link.es : link.en}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
