// src/components/Hero.tsx

import React from 'react';
import heroBackground from '../assets/backgrounds/hero-background.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center py-24 bg-zinc-950 overflow-hidden">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Capa de contraste oscura */}
      <div className="absolute inset-0 z-10 bg-black/75 backdrop-blur-[2px]" />

      {/* Contenido Frontal */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 space-y-8">
        <span className="inline-block px-4 py-1.5 bg-red-600/20 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-widest rounded-full">
          Agencia de Tecnología e Infraestructura IT
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight">
          Transformamos ideas en <br />
          <span className="text-red-600">experiencias digitales</span>.
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
          Desarrollo web a medida, arquitectura SaaS y soluciones de infraestructura en la frontera Uruguay-Brasil conectando con el mundo.
        </p>
        <div className="pt-4">
          <a
            href="#contacto"
            className="inline-block px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 bg-red-600 text-white shadow-xl shadow-red-600/30 hover:bg-red-700 hover:scale-105"
          >
            Comienza tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
};