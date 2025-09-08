//.components/comp_vision.tsx
import React from 'react';
import { Menu } from 'lucide-react';


// --- Sección Visión ---
const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Nuestra visión</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
          Queremos convertirnos en un referente tecnológico en la frontera Uruguay–Brasil,
          generando soluciones digitales innovadoras y creando oportunidades de empleo para jóvenes.
        </p>
        <p className="max-w-3xl mx-auto text-lg italic leading-relaxed">
          Soñamos con un futuro donde Artigas sea reconocido como un semillero de talento IT
          que exporta conocimiento y creatividad al mundo.
        </p>
      </div>
    </section>
  );
};