import { useState } from 'react';
import greenAi1 from '../images/greenAi.png';
import greenAi2 from '../images/greenAI2.png';
import greenAi3 from '../images/greenAI3.png';
import greenAi4 from '../images/greenAI4.png';
import innovaMap1 from '../images/InnovaMap.png';
import innovaMap2 from '../images/InnovaMap2.png';
import innovaMap3 from '../images/InnovaMap3.png';
import innovaMap4 from '../images/InnovaMap4.png';
import innovaMap5 from '../images/Innovamap5.png';

interface ProjectsProps {
  language: string;
}

interface Project {
  id: number;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  images: (string | any)[];
}

const Projects = ({ language }: ProjectsProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<{ [key: number]: number }>({});
  const [modalImage, setModalImage] = useState<{
    images: (string | any)[];
    currentIndex: number;
  } | null>(null);

  const nextImage = (projectId: number, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imagesLength
    }));
  };

  const prevImage = (projectId: number, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imagesLength) % imagesLength
    }));
  };

  const nextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalImage) {
      setModalImage({
        ...modalImage,
        currentIndex: (modalImage.currentIndex + 1) % modalImage.images.length
      });
    }
  };

  const prevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalImage) {
      setModalImage({
        ...modalImage,
        currentIndex: (modalImage.currentIndex - 1 + modalImage.images.length) % modalImage.images.length
      });
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'InnovaMAP',
      titleEn: 'InnovaMAP',
      subtitle: 'Sistema de vinculación estudiantil',
      subtitleEn: 'Student linking system',
      description: 'Plataforma para conectar empresas locales con estudiantes universitarios. Facilita la colaboración y el desarrollo de habilidades prácticas.',
      descriptionEn: 'Platform to connect local businesses with university students. Facilitates collaboration and the development of practical skills.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL','Docker','TypeScript','Python'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/tuusuario/proyecto3',
      images: [innovaMap1, innovaMap2, innovaMap3, innovaMap4, innovaMap5]
    },
    {
      id: 2,
      title: 'BairesProp',
      titleEn: 'BairesProp',
      subtitle: 'Predictor de precios inmobiliarios',
      subtitleEn: 'Real estate price predictor',
      description: 'Sistema para predecir precios de una propiedad. Se realizo un Web Scraping de propiedades reales y se entreno un modelo para obtener predicciones precisas.',
      descriptionEn: 'System for predicting property prices. Web scraping of real properties was performed and a model was trained to obtain accurate predictions.',
      technologies: ['Python', 'Streamlit', 'Google Maps API'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/pedrodonnarumma/BairesProp',
      images: []
    },
    {
      id: 3,
      title: 'GreenAI',
      titleEn: 'GreenAI',
      subtitle: 'Sistema clasificador de residuos',
      subtitleEn: 'Garbage Classification System',
      description: 'Sistema de identificación de residuos asistido por imagen. Proporciona la categoría del material, los puntos de reciclaje para optimizar el proceso de reciclaje y fomentar la economía circular.',
      descriptionEn: 'Image-assisted waste identification system. Provides material category and recycling points to optimize the recycling process and promote a circular economy.',
      technologies: ['Python', 'Streamlit', 'Google Maps API'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/pedrodonnarumma/GreenAI',
      images: [greenAi1, greenAi2, greenAi3, greenAi4]
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 px-4 py-20"
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white text-center">
          {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => {
            const isHovered = hoveredProject === project.id;
            const title = language === 'es' ? project.title : project.titleEn;
            const subtitle = language === 'es' ? project.subtitle : project.subtitleEn;
            const description = language === 'es' ? project.description : project.descriptionEn;

            return (
              <div
                key={project.id}
                className="relative sm:h-[480px]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`
                    bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm
                    border rounded-2xl p-4 sm:p-6 cursor-pointer
                    transition-all duration-700 ease-in-out
                    flex flex-col
                    sm:absolute sm:top-0 sm:left-0 sm:right-0
                    ${isHovered 
                      ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 min-h-full sm:h-[480px]' 
                      : 'border-slate-700/50 shadow-lg sm:h-[280px]'
                    }
                  `}
                >
                  {/* Normal State: Title + Tech Chips */}
                  <div className={`transition-all duration-700 ease-in-out ${isHovered ? 'hidden sm:opacity-0 sm:invisible' : 'block sm:opacity-100 sm:visible'}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mb-4">
                      {subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover State: Full Content */}
                  <div className={`sm:absolute sm:inset-0 sm:p-6 transition-all duration-700 ease-in-out ${isHovered ? 'block sm:opacity-100 sm:visible' : 'hidden sm:opacity-0 sm:invisible'}`}>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-xs mb-3">
                      {subtitle}
                    </p>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-4">
                      {description}
                    </p>

                    {/* Technology Chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Image Carousel */}
                    {project.images && project.images.length > 0 ? (
                      <div className="mb-4 h-32 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-lg overflow-hidden border border-slate-600/30 relative group/carousel">
                        <img 
                          src={project.images[carouselIndex[project.id] || 0]}
                          alt={`${title} - ${(carouselIndex[project.id] || 0) + 1}`}
                          className="w-full h-full object-cover cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalImage({
                              images: project.images,
                              currentIndex: carouselIndex[project.id] || 0
                            });
                          }}
                        />
                        
                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => prevImage(project.id, project.images.length, e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button
                              onClick={(e) => nextImage(project.id, project.images.length, e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            
                            {/* Dots Indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                              {project.images.map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                    (carouselIndex[project.id] || 0) === idx 
                                      ? 'bg-blue-400 w-3' 
                                      : 'bg-slate-400/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="mb-4 h-32 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-lg overflow-hidden border border-slate-600/30 relative">
                        <div className="absolute inset-0" style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.15) 1px, transparent 0)',
                          backgroundSize: '32px 32px'
                        }}></div>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex justify-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 min-w-[140px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        {language === 'es' ? 'Código' : 'Code'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Image */}
          <img 
            src={modalImage.images[modalImage.currentIndex]} 
            alt={`Preview ${modalImage.currentIndex + 1} of ${modalImage.images.length}`}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Navigation Arrows */}
          {modalImage.images.length > 1 && (
            <>
              <button
                onClick={prevModalImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextModalImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800/80 px-4 py-2 rounded-full text-white text-sm font-medium">
                {modalImage.currentIndex + 1} / {modalImage.images.length}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
