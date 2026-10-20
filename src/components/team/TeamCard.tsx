/**
 * @fileoverview Tarjeta de Perfil Profesional del Equipo (TeamCard.tsx)
 * 
 * Renderiza la fotografía, nombre, cargo técnico y canales de contacto 
 * profesional (LinkedIn, GitHub y Correo) de cada integrante de NorthCode.
 * 
 * @module components/team/TeamCard
 */

import React from 'react';
// --- Iconografía Lucide (Solo iconos de utilidad) ---
import { Mail } from 'lucide-react';
// --- Tipado Estricto ---
import type { TeamMember } from '../../types';

/* =============================================================================
   SUB-COMPONENTES: ISOTIPOS VECTORIALES DE MARCAS (SVGs Nativos)
   ============================================================================= */

/**
 * Isotipo vectorial oficial de GitHub.
 */
const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Isotipo vectorial oficial de LinkedIn.
 */
const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* =============================================================================
   COMPONENTE PRINCIPAL: TEAM CARD
   ============================================================================= */

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div
      className={`
        /* --- Posición --- */
        flex
        flex-col
        items-center
        text-center

        /* --- Dimensiones --- */
        p-6

        /* --- Colores --- */
        bg-zinc-900
        border
        border-white/10
        shadow-xl

        /* --- Estilo --- */
        rounded-2xl
        group

        /* --- Animación --- */
        transition-all
        duration-300
        hover:scale-105
        hover:border-red-600
      `}
    >
      {/* Fotografía de Perfil con Marco Iluminado */}
      <img
        src={member.img}
        alt={`Foto de ${member.name}`}
        className={`
          /* --- Dimensiones --- */
          w-24
          h-24
          mb-4

          /* --- Colores --- */
          border-2
          border-red-600/50
          group-hover:border-red-600

          /* --- Estilo --- */
          rounded-full
          object-cover

          /* --- Animación --- */
          transition-colors
          duration-300
        `}
      />

      {/* Nombre y Rol Profesional */}
      <h3
        className={`
          /* --- Colores --- */
          text-white

          /* --- Texto --- */
          text-xl
          font-bold
          tracking-tight
        `}
      >
        {member.name}
      </h3>

      <p
        className={`
          /* --- Posición --- */
          mt-1

          /* --- Colores --- */
          text-red-500

          /* --- Texto --- */
          text-xs
          font-semibold
          uppercase
          tracking-wider
        `}
      >
        {member.role}
      </p>

      {/* Enlaces a Redes y Contacto */}
      <div
        className={`
          /* --- Posición --- */
          flex
          justify-center
          items-center

          /* --- Dimensiones --- */
          gap-4
          mt-6
        `}
      >
        {/* LinkedIn */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`LinkedIn de ${member.name}`}
            className={`
              /* --- Colores --- */
              text-gray-400
              hover:text-red-500

              /* --- Animación --- */
              transition-colors
              duration-200
              hover:scale-110
            `}
          >
            <LinkedinIcon size={18} />
          </a>
        )}

        {/* GitHub */}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub de ${member.name}`}
            className={`
              /* --- Colores --- */
              text-gray-400
              hover:text-red-500

              /* --- Animación --- */
              transition-colors
              duration-200
              hover:scale-110
            `}
          >
            <GithubIcon size={18} />
          </a>
        )}

        {/* Correo Electrónico */}
        {member.mail && (
          <a
            href={member.mail}
            aria-label={`Correo de ${member.name}`}
            className={`
              /* --- Colores --- */
              text-gray-400
              hover:text-red-500

              /* --- Animación --- */
              transition-colors
              duration-200
              hover:scale-110
            `}
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;