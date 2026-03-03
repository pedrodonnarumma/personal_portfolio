interface AboutProps {
  language: string;
}

const About = ({ language }: AboutProps) => {
  return (
    <section 
      id="about" 
      className="min-h-screen w-full flex items-center justify-center bg-slate-900 snap-start px-4"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold mb-12 text-white text-center">
          {language === 'es' ? 'Sobre mí' : 'About me'}
        </h2>
        
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-600/40 rounded-lg shadow-xl p-8 hover:border-gray-500/60 transition-all duration-300">
          <div className="text-lg text-slate-200 leading-relaxed text-center">
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
      </div>
    </section>
  );
};

export default About;
