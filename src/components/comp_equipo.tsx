//.components/comp_equipo.tsx


import React from 'react';
import { Menu } from 'lucide-react';





// Props para el componente TeamSection
interface TeamSectionProps {
  teamMembers: TeamMember[]; // <- ¡Este es el cambio clave!
};


// Componente para la sección del equipo 
// ChatGPt -- Esto hay que separarlo en las tarjeta y la seccion contenedora de las mismas 


// ChatGpt pasar por aca el json de eqipo para generar la tarjeta como ago para pasarle el json asi lo puedo llamarlo de App.tsx  

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  const [nosotrosRef, nosotrosInView] = useFadeInOnScroll(); // Referencia y estado de visibilidad para la sección "Nosotros"
  return (
    <section id="nosotros" className="py-24 bg-black">
      <div ref={nosotrosRef} className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${nosotrosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Conoce a nuestro equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapa de miembros del equipo - Crea los diferentes DIV con los datos del equipo */}
        
        
            {/* ChatGPT-- aca tendria que ir la referencia a comp_equipo y cargarle los datos no se si pasarle el  */}

        </div>
      </div>
    </section>
  );
};

