// src/components/projects/ProjectsSection.tsx
import React, { useRef, useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projectsData';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

export const ProjectsSection: React.FC = () => {
  const [ref, inView] = useFadeInOnScroll();
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicamos x3 para asegurar scroll continuo
  const duplicatedProjects = [...projects, ...projects, ...projects];

  // Auto-scroll pasivo suave
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isMouseDown) {
        slider.scrollLeft += 0.8; // Velocidad de desplazamiento
        if (slider.scrollLeft >= (slider.scrollWidth / 3) * 2) {
          slider.scrollLeft = slider.scrollWidth / 3;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMouseDown]);

  // Manejo de Drag con Mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="proyectos" className="py-24 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div ref={ref} className={`text-center space-y-4 mb-12 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Portfolio</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Nuestros Proyectos</h2>
        <p className="text-sm text-gray-400">Desliza para explorar algunos de nuestros trabajos en producción.</p>
      </div>

      {/* Contenedor del Carrusel con máscara de degradé en los extremos */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Esfumado izquierdo */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        {/* Esfumado derecho */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={() => setIsMouseDown(false)}
          onMouseUp={() => setIsMouseDown(false)}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none py-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedProjects.map((p, idx) => (
            <ProjectCard key={`${p.id}-${idx}`} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};