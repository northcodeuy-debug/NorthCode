//components/comp_contacto.tsx

import React from 'react';
import { Menu } from 'lucide-react';

// Props para el componente ContactSelect
interface ContactSelectPaper {
  whatsappUrl: string;
}v

const ContactSection: React.FC<ContactSelectPaper> = ({ whatsappUrl }) => {
  const [contactoRef, contactoInView] = useFadeInOnScroll();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormMessage('Enviando mensaje...');

    // Validación simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setFormMessage('Por favor, completa todos los campos.');
        setIsFormSubmitting(false);
        return;
    }

    try {
      // Simula el envío a un servicio de backend o API.
      // En un proyecto real, reemplazarías esto con una llamada a la API (ej. fetch, axios).
      // Aquí, usamos un retraso de 1 segundo para simular la respuesta del servidor.
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormMessage('¡Gracias! Tu mensaje ha sido enviado correctamente.');
      // Reinicia el formulario
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormMessage('Ocurrió un error. Por favor, inténtalo de nuevo.');
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-black">
      <div ref={contactoRef} className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${contactoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Contáctanos</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          ¿Listo para comenzar tu proyecto? Llena el formulario o contáctanos directamente.
        </p>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Nombre completo" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Correo electrónico" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required value={formData.email} onChange={handleChange} />
            <input type="text" name="subject" placeholder="Asunto" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required value={formData.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Tu mensaje..." rows={5} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none" required value={formData.message} onChange={handleChange}></textarea>
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-bold transition-all duration-300 bg-red-600 text-white shadow-lg shadow-red-500/50 hover:bg-red-700 w-full"
              disabled={isFormSubmitting}
            >
              {isFormSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
          {formMessage && (
            <div className="mt-4 text-sm font-semibold animate-pulse" style={{ color: formMessage.includes('Gracias') ? '#10B981' : '#EF4444' }}>
              {formMessage}
            </div>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full px-8 py-3 rounded-full font-bold transition-all duration-300 bg-green-600 text-white hover:bg-green-700"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
