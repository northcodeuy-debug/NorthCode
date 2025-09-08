// .components/comp_elegirnos.tsx

import React from 'react';
import { Menu } from 'lucide-react';



// .components/comp_elegirnos.tsx

// --- Componente Porque elegirnos ---

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
          ¿Por qué elegir NorthCode?
        </h2>

        {/* Contenedor principal para las dos opciones de diseño */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Opción 2: Diseño moderno y visual */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg md:w-full">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Opción 2: Diseño moderno
            </h3>
            <div className="w-full h-56 rounded-xl mb-8 overflow-hidden bg-gray-700 flex items-center justify-center text-gray-400">
              [Aquí va una foto, por ejemplo de un equipo trabajando o un edificio moderno]
            </div>

            <p className="mb-6">
              En NorthCode creemos que una web no es solo un diseño, sino una herramienta que genera
              confianza, visibilidad y oportunidades reales de negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">🚀</span>
                <strong className="block">Velocidad</strong>
                <p className="text-sm text-gray-400">Entregamos webs listas en pocos días.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">🎨</span>
                <strong className="block">Diseño profesional</strong>
                <p className="text-sm text-gray-400">Interfaces modernas y adaptadas a celulares.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">💸</span>
                <strong className="block">Costo accesible</strong>
                <p className="text-sm text-gray-400">Planes flexibles que se ajustan a cada negocio.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">🤝</span>
                <strong className="block">Soporte cercano</strong>
                <p className="text-sm text-gray-400">Estamos en Artigas, pero con visión internacional.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">📈</span>
                <strong className="block">Experiencia real</strong>
                <p className="text-sm text-gray-400">Ya trabajamos con empresas en Montevideo y seguimos creciendo.</p>
              </div>
            </div>

            <p className="text-lg font-bold mt-6 text-center">
              Nos importa tu éxito, porque si tu empresa crece, nosotros también crecemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};