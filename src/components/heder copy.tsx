import React from 'react';
import { Menu } from 'lucide-react';

/**
 * Define la estructura de las propiedades (props) que el componente Header espera recibir.
 * @typedef {object} HeaderProps
 * @property {() => void} toggleMobileMenu - Función para alternar el estado del menú móvil.
 * @property {boolean} isMobileMenuOpen - Booleano que indica si el menú móvil está abierto.
 * @property {string} logo - La URL del logo de la empresa.
 */

interface HeaderProps {
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  logo: string;
}

/**
 * Componente que renderiza el encabezado y la barra de navegación de la página.
 * Incluye la navegación principal para pantallas de escritorio y un menú colapsable para móviles.
 * @param {HeaderProps} props - Las propiedades pasadas al componente.
 */
const Header: React.FC<HeaderProps> = ({ toggleMobileMenu, isMobileMenuOpen, logo }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo de la empresa y nombre */}
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center text-white text-xl font-bold space-x-2">
            <img src={logo} alt="Logo de NorthCode" className="w-10 h-10 rounded-full" /> 
            <span>NorthCode</span>
          </a>
        </div>

        {/* Enlaces de navegación para escritorio */}
        <div className="hidden md:flex space-x-6 text-gray-300 font-semibold">
          <a href="#inicio" className="hover:text-red-600 transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-red-600 transition-colors">Nosotros</a>
          <a href="#proyectos" className="hover:text-red-600 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-red-600 transition-colors">Contacto</a>
        </div>
        
        {/* Botón para abrir el menú móvil */}
        <button
          onClick={toggleMobileMenu} 
          className="md:hidden text-white focus:outline-none"
          title="Abrir menú de navegación"
          aria-label="Abrir menú de navegación"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      
      {/* Menú móvil colapsable. La clase 'hidden' o 'block' controla la visibilidad. */}
      <div className={`md:hidden bg-gray-900 text-white text-center py-4 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#inicio" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Inicio</a>
        <a href="#nosotros" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Nosotros</a>
        <a href="#proyectos" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Proyectos</a>
        <a href="#contacto" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Contacto</a>
      </div>
    </header>
  );
};

export default Header;
