import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import Reveal from './Reveal';
interface ContactProps {
  language: string;
}

const Contact = ({ language }: ContactProps) => {
  return (
    <section 
      id="contact" 
      className="min-h-screen w-full flex items-center justify-center px-4"
    >
      <div className="max-w-4xl w-full text-center">
        <Reveal>
        <span className="glass mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl text-blue-300">
          <Send className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gradient">
          {language === 'es' ? 'Contáctame' : 'Contact Me'}
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
          {language === 'es' 
            ? '¿Tienes un proyecto en mente o simplemente quieres conectar? Me encantaría saber de ti.' 
            : 'Have a project in mind or just want to connect? I\'d love to hear from you.'}
        </p>
        </Reveal>
        
        <Reveal delay={150}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:pedrodonnarumma@gmail.com"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold border border-blue-400/40 hover:-translate-y-0.5 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 w-full sm:w-auto justify-center group"
          >
            <Mail className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" aria-hidden="true" />
            {language === 'es' ? 'Enviar Email' : 'Send Email'}
          </a>
          
          <a 
            href="https://www.linkedin.com/in/pedro-donnarumma-05317b30b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass hover:bg-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold hover:-translate-y-0.5 w-full sm:w-auto justify-center group"
          >
            <LinkedinIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            LinkedIn
          </a>
          
          <a 
            href="https://github.com/pedrodonnarumma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass hover:bg-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold hover:-translate-y-0.5 w-full sm:w-auto justify-center group"
          >
            <GithubIcon className="w-6 h-6 transition-transform duration-300 group-hover:-rotate-12" />
            GitHub
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
