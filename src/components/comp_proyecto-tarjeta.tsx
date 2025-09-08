// compo_proyecto-tarjeta.tsx
import React from 'react';
import { Menu } from 'lucide-react';






// chatGPT--  Esot qeuiro retornalro s emando los datos de el jeson que bien de comp_proyecto.tsx

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
