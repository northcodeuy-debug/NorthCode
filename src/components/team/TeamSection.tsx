// src/components/team/TeamSection.tsx
import React from 'react';
import { TeamCard } from './TeamCard';
import { teamMembers } from '../../data/teamData';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';

export const TeamSection: React.FC = () => {
  const [ref, inView] = useFadeInOnScroll();

  return (
    <section id="nosotros" className="py-24 bg-black px-6 border-t border-white/5">
      <div ref={ref} className={`container mx-auto max-w-6xl transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-3xl sm:text-5xl font-black text-white text-center mb-16 tracking-tight">
          Conoce a nuestro <span className="text-red-600">equipo</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
