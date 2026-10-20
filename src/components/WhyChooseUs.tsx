import React from 'react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    { icon: '🚀', title: 'Velocidad de Entrega', desc: 'Metodologías ágiles para entregar soluciones funcionales en tiempo récord.' },
    { icon: '🎨', title: 'Diseño UX/UI de Vanguardia', desc: 'Interfaces limpias, intuitivas y optimizadas al 100% para celulares.' },
    { icon: '💸', title: 'Precios Claros y Accesibles', desc: 'Modelos de inversión escalables adaptados al volumen de cada empresa.' },
    { icon: '🤝', title: 'Soporte y Cercanía Real', desc: 'Atención personalizada en Artigas con alcance y estándares internacionales.' },
    { icon: '📈', title: 'Experiencia y Rigor Técnico', desc: 'Proyectos en producción con clientes en Montevideo y el interior.' },
  ];

  return (
    <section id="por-que-elegirnos" className="py-24 px-6 bg-zinc-950 text-white border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 tracking-tight">
          ¿Por qué elegir <span className="text-red-600">NorthCode</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-zinc-900/60 p-6 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1">
              <span className="text-4xl mb-4 block">{c.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};