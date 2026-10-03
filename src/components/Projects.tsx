import { ChevronLeft, ChevronRight, FolderGit2, ImageIcon, X } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
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
  githubUrl?: string;
  images: string[];
}

const Projects = ({ language }: ProjectsProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<{ [key: number]: number }>({});
  const [modalImage, setModalImage] = useState<{
    images: string[];
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
      images: [innovaMap1, innovaMap2, innovaMap3, innovaMap4, innovaMap5]
    },
    {
      id: 2,
      title: 'BairesProp',
      titleEn: 'BairesProp',
      subtitle: 'Predictor de precios inmobiliarios',
      subtitleEn: 'Real estate price predictor',
      description: 'Sistema para predecir precios de una propiedad. Se realizó un Web Scraping de propiedades reales y se entrenó un modelo para obtener predicciones precisas.',
      descriptionEn: 'System for predicting property prices. Web scraping of real properties was performed and a model was trained to obtain accurate predictions.',
      technologies: ['Python', 'Streamlit', 'Google Maps API'],
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
      githubUrl: 'https://github.com/pedrodonnarumma/GreenAI',
      images: [greenAi1, greenAi2, greenAi3, greenAi4]
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen w-full flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-7xl w-full">
        <span className="glass mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl text-blue-300">
          <FolderGit2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-gradient text-center">
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
                    glass rounded-2xl p-4 sm:p-6 cursor-pointer
                    transition-all duration-700 ease-in-out
                    flex flex-col
                    sm:absolute sm:top-0 sm:left-0 sm:right-0
                    ${isHovered 
                      ? 'border-blue-400/40 shadow-2xl shadow-blue-500/20 min-h-full sm:h-[480px]' 
                      : 'shadow-lg sm:h-[280px]'
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
                              aria-label={language === 'es' ? 'Imagen anterior' : 'Previous image'}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                            >
                              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                              onClick={(e) => nextImage(project.id, project.images.length, e)}
                              aria-label={language === 'es' ? 'Imagen siguiente' : 'Next image'}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                            >
                              <ChevronRight className="w-5 h-5" aria-hidden="true" />
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
                          <ImageIcon className="w-12 h-12 text-slate-600" aria-hidden="true" />
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    {project.githubUrl && (
                    <div className="flex justify-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-2.5 glass hover:bg-white/10 hover:border-white/20 text-white text-sm font-medium rounded-lg transition-colors duration-200 min-w-[140px]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon className="w-4 h-4" />
                        {language === 'es' ? 'Código' : 'Code'}
                      </a>
                    </div>
                    )}
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
          className="fixed inset-0 z-50 bg-ink-950/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setModalImage(null)}
            aria-label={language === 'es' ? 'Cerrar' : 'Close'}
            className="absolute top-4 right-4 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors duration-200 z-10"
          >
            <X className="w-6 h-6" aria-hidden="true" />
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
                aria-label={language === 'es' ? 'Imagen anterior' : 'Previous image'}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                onClick={nextModalImage}
                aria-label={language === 'es' ? 'Imagen siguiente' : 'Next image'}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
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
