import { User } from 'lucide-react';
import Reveal from './Reveal';
interface AboutProps {
  language: string;
}

const About = ({ language }: AboutProps) => {
  return (
    <section 
      id="about" 
      className="min-h-screen w-full flex items-center justify-center px-4"
    >
      <div className="max-w-4xl w-full">
        <Reveal>
          <span className="glass mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl text-blue-300">
            <User className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-gradient text-center">
            {language === 'es' ? 'Sobre mí' : 'About me'}
          </h2>
        </Reveal>
        
        <Reveal delay={120}>
        <div className="glass rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300">
          <div className="text-base sm:text-lg text-slate-200 leading-relaxed text-center">
            {language === 'es' ? (
              <p>
                 Ingeniero de Sistemas con sólidos conocimientos de <span className="text-blue-400">Java, Python y 
                 desarrollo full-stack. </span>
                 Experiencia en análisis y diseño de sistemas escalables, ingeniería 
                 de datos y desarrollo de modelos de IA. 
                 Capacidad demostrada para liderar proyectos técnicos y 
                 trabajar eficazmente en equipo.
              </p>
            ) : (
              <p>
                Systems Engineer with strong fundamentals in <span className="text-blue-400">Java, Python, and Full-Stack development. </span> 
                Experienced in analysis and design of scalable systems, data engineering and AI models development. 
                Proven ability to lead technical projects and work effectively in 
                team environments.
              </p>
            )}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
