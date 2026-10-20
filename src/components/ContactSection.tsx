// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { Phone, Send } from 'lucide-react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export const ContactSection: React.FC = () => {
  const [ref, inView] = useFadeInOnScroll();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<string>('');

  const whatsappUrl = `https://wa.me/59898559058?text=${encodeURIComponent('¡Hola NorthCode! Me gustaría cotizar un proyecto web.')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('¡Mensaje enviado con éxito! Nos comunicaremos a la brevedad.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-black px-6 border-t border-white/5">
      <div ref={ref} className={`container mx-auto max-w-xl text-center space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Hablemos de tu idea</h2>
        <p className="text-gray-400 text-sm">Completa el formulario o escríbenos directamente a WhatsApp.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            required
            placeholder="Nombre completo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3.5 bg-zinc-900 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-red-600 transition-colors"
          />
          <input
            type="email"
            required
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3.5 bg-zinc-900 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-red-600 transition-colors"
          />
          <textarea
            required
            rows={4}
            placeholder="Cuéntanos brevemente sobre tu proyecto..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3.5 bg-zinc-900 border border-white/10 rounded-xl text-white text-sm outline-none focus:border-red-600 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>Enviar Consulta</span>
            <Send size={15} />
          </button>
        </form>

        {status && <p className="text-emerald-400 text-xs font-bold">{status}</p>}

        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            <Phone size={16} />
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};