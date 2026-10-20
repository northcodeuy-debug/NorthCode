// src/components/projects/ProjectCard.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../../types';

export const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-80 sm:w-96 select-none group"
    draggable={false}
  >
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-5 overflow-hidden h-full transition-all duration-300 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10">
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-zinc-950">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          draggable={false}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">{project.title}</h3>
          <ExternalLink size={16} className="text-gray-500 group-hover:text-red-500 transition-colors" />
        </div>
        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{project.description}</p>
      </div>
    </div>
  </a>
);
