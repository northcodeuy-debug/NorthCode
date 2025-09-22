// --- Comentarios importantes ---
// Aquí puedes agregar comentarios sobre la estructura y funcionalidad de tu aplicación.

// Aquí se define el componente Header usando una función flecha (arrow function).
// React.FC<HeaderProps> indica que es un componente de React que recibe props del tipo HeaderProps.
// Entre paréntesis van los props desestructurados: { toggleMobileMenu, isMobileMenuOpen, logo }.
// El símbolo => define la función flecha, que retorna el JSX (estructura visual del componente).

// --- Codigo a revisar para mejorar carrusel ---
// --- Componente ProjectsSection (Carrusel mejorado e infinito con drag) ---
// import React, { useRef, useEffect, useState } from 'react';

// const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
//   const [proyectosRef, proyectosInView] = useFadeInOnScroll();
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // Duplicamos los proyectos para el loop visual
//   const allProjects = [...projects, ...projects, ...projects];

//   // Loop infinito real: cuando el scroll llega al final, lo reseteamos al inicio
//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     const handleScroll = () => {
//       const maxScroll = carousel.scrollWidth / 3; // 1/3 porque triplicamos
//       if (carousel.scrollLeft >= maxScroll * 2) {
//         carousel.scrollLeft = maxScroll;
//       } else if (carousel.scrollLeft <= 0) {
//         carousel.scrollLeft = maxScroll;
//       }
//     };

//     carousel.addEventListener('scroll', handleScroll);
//     // Al montar, posicionamos en el centro
//     carousel.scrollLeft = carousel.scrollWidth / 3;

//     return () => {
//       carousel.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Drag con mouse
//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true);
//     setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
//     setScrollLeft(carouselRef.current?.scrollLeft || 0);
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging || !carouselRef.current) return;
//     const x = e.pageX - carouselRef.current.offsetLeft;
//     const walk = (x - startX) * 1.5; // velocidad
//     carouselRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => setIsDragging(false);
//   const handleMouseLeave = () => setIsDragging(false);

//   return (
//     <section id="proyectos" className="py-24 bg-gray-950">
//       <style>
//         {`
//           .no-select { user-select: none; }
//         `}
//       </style>
//       <div ref={proyectosRef} className={`text-center transition-all duration-1000 transform ${proyectosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//         <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Nuestros Proyectos</h2>
//         <div className="relative w-full overflow-hidden py-4">
//           <div
//             ref={carouselRef}
//             className={`flex gap-4 overflow-x-scroll no-scrollbar cursor-grab no-select animate-none`}
//             style={{ scrollBehavior: 'auto' }}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseLeave}
//           >
//             {allProjects.map((project, index) => (
//               <a
//                 key={index}
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-shrink-0 w-80 p-4"
//                 draggable={false}
//               >
//                 <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:border-red-600">
//                   <img src={project.img} alt={`Imagen del proyecto: ${project.title}`} className="w-full h-48 object-cover rounded-md mb-4" draggable={false} />
//                   <div className="text-left">
//                     <h3 className="text-xl font-bold text-white">{project.title}</h3>
//                     <p className="text-gray-400 mt-2">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




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