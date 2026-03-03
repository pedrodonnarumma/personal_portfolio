import { useEffect, useRef } from 'react';

export const useSmoothScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let isScrolling = false;
    let scrollTimeout: number;

    const resetScrolling = () => {
      isScrolling = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      const sections = scrollContainer.querySelectorAll('section');
      const currentScroll = scrollContainer.scrollTop;
      
      let targetSection: Element | null = null;
      
      if (e.deltaY > 0) {
        // Scroll hacia abajo
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i] as HTMLElement;
          if (section.offsetTop > currentScroll + 10) {
            targetSection = section;
            break;
          }
        }
      } else {
        // Scroll hacia arriba
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i] as HTMLElement;
          if (section.offsetTop < currentScroll - 10) {
            targetSection = section;
            break;
          }
        }
      }
      
      if (targetSection) {
        isScrolling = true;
        const targetPosition = (targetSection as HTMLElement).offsetTop;
        
        scrollContainer.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(resetScrolling, 800);
      }
    };

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(resetScrolling, 100);
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer.addEventListener('scrollend', handleScrollEnd);
    
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('scrollend', handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return scrollContainerRef;
};
