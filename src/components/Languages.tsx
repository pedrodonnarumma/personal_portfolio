import { Layers } from 'lucide-react';
import pythonIcon from '../icons/python-original.svg';
import javaIcon from '../icons/java-original.svg';
import typescriptIcon from '../icons/typescript-original.svg';
import sqlIcon from '../icons/azuresqldatabase-original.svg';
import springIcon from '../icons/spring-original.svg';
import reactIcon from '../icons/react-original.svg';
import dockerIcon from '../icons/docker-original.svg';
import gitIcon from '../icons/git-original.svg';
import linuxIcon from '../icons/linux-original.svg';
import awsIcon from '../icons/aws.svg';

interface LanguagesProps {
  language: string;
}

const Languages = ({ language }: LanguagesProps) => {
  const technologies = [
    { name: 'Python', icon: pythonIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Spring', icon: springIcon },
    { name: 'SQL', icon: sqlIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'AWS', icon: awsIcon },
    { name: 'Linux', icon: linuxIcon }
  ];

  return (
    <section 
      id="languages" 
      className="min-h-screen w-full flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <span className="glass mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl text-blue-300">
          <Layers className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-gradient text-center">
          {language === 'es' ? 'Lenguajes & Tecnologías' : 'Languages & Technologies'}
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="glass rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 hover:border-blue-400/40 hover:bg-white/[0.07] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <span className="text-slate-300 font-medium text-center text-xs sm:text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
