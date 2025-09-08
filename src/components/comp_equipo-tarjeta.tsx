//.components/comp_equipo-trabaja.tsx


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
        
        
        
              {/* chatgpt -- esto es lo que me guatarai sacar el la tarjeta me gitaria llamarlo desde comp_equipo.tsx */}
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-red-600">
              <img src={member.img} alt={`Foto de ${member.name}`} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-red-600" />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-red-500 font-medium">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.linkedin} className="transition-transform transform hover:scale-125 duration-200" aria-label={`LinkedIn de ${member.name}`}>
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a>
                <a href={member.github} className="transition-transform transform hover:scale-125 duration-200" aria-label={`GitHub de ${member.name}`}>
                  <Github className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a>
                <a href={member.mail} className="transition-transform transform hover:scale-125 duration-200" aria-label={`Email de ${member.name}`}>
                  <Mail className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a>
                {/* <a href={member.whatsapp} className="transition-transform transform hover:scale-125 duration-200" aria-label={`WhatsApp de ${member.name}`}>
                  <MessageSquareText className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a> */}
              </div>
            </div>
          ))}







        </div>
      </div>
    </section>
  );
};

