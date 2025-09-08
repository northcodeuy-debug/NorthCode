//components/comp_Proyecto.tsx

import React from 'react';
import { Menu } from 'lucide-react';

import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

// ---- Sección Proyectos ----

// Define la estructura de un solo proyecto
interface ProjectsSectionMember {
    title: string;
    description: string;
    img: string;
    url: string;
}

// Props para el componente ProjectsSection
interface ProjectsSectionProps {
  projects: ProjectsSectionMember[];
}


// -ChatGPT Este carrucel no me suta se mueve solo y me gustaria que si se moviera
// pero quiero que si quiero poder deslisar con el dedo o arrastrarlo algo asi 
// ademas se esta rrompiendo se vueve bien pareo de a rrato como que se atrasa es 
// desir que no tiene como un diley y no es continuo ademas aparese al borde de la 
// pagina lo cual no es correcto , deberia capas tener un borde algo por el estilo


// ---- Componente ProjectsSection (Proyectos)  ------------
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [proyectosRef, proyectosInView] = useFadeInOnScroll(); // Referencia y estado de visibilidad para la sección "Proyectos"
  // Se duplica el array de e 4 para crear un efecto de carrusel infinito.
  const allProjects = [...projects, ...projects];

  return (
    <section id="proyectos" className="py-24 bg-gray-950">
      <style>
        {`
          @keyframes slide-right {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-carousel {
            animation: slide-right 45s linear infinite;
          }
        `}
      </style>
      <div ref={proyectosRef} className={`text-center transition-all duration-1000 transform ${proyectosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Nuestros Proyectos</h2>
        {/* Contenedor del carrusel con overflow oculto para que solo se vea la banda */}
        <div className="relative w-full overflow-hidden py-4">
          {/* La banda de proyectos que se mueve. Se duplican los elementos para el loop infinito. */}
          
          
          {/* Creo que es lo de las tarjetas */
          }
          <div className="flex animate-carousel">




            {/* ChatGPT-- Aca es donde quiero llmar a comp_proyecto-tarje para cargar la tajeta es para poder cmabir el estilo de la tarjeta y qeu el codigo sea mas escalable  */}


            {allProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 p-4"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:border-red-600">
                  <img src={project.img} alt={`Imagen del proyecto: ${project.title}`} className="w-full h-48 object-cover rounded-md mb-4" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}









            
          </div>
        </div>
      </div>
    </section>
  );
};




// cAMBIAR CARRUSEL POR CHATGPT

