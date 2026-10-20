// src/components/SocialImpact.tsx
import React from 'react';

export const SocialImpact: React.FC = () => (
  <section id="impacto-social" className="py-24 px-6 bg-zinc-900 text-white border-t border-white/5">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Impacto en la Comunidad</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Impulsando el talento joven de Artigas hacia la industria IT
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            NorthCode no es solo desarrollo web: es un puente de oportunidad. Formamos y empleamos a jóvenes locales en desarrollo de software, robótica e infraestructura digital.
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">✓ Capacitación práctica en proyectos y clientes reales.</li>
            <li className="flex items-center gap-2">✓ Creación de empleo tecnológico de alto valor en el norte de Uruguay.</li>
            <li className="flex items-center gap-2">✓ Descentralización de oportunidades laborales frente a la capital.</li>
          </ul>
        </div>
        <div className="h-80 rounded-3xl bg-zinc-800 border border-white/10 flex items-center justify-center p-8 text-center text-gray-500 font-medium">
          [ Espacio para fotografía del equipo / laboratorio de trabajo ]
        </div>
      </div>
    </div>
  </section>
);