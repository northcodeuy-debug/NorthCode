//.Components/compo_nav.tsx
import React from 'react';
import { Menu } from 'lucide-react';


 // --- Componente Header (Navegación) ---
  
  // Es útil para que TypeScript entienda qué tipo de props espera cada componente.
  interface HeaderProps {
    toggleMobileMenu: () => void; // Una función que no recibe argumentos y no retorna nada.
    isMobileMenuOpen: boolean;    // Un valor booleano (true/false) que indica si el menú móvil está abierto.
    logo: string;                 // Una cadena de texto que representa la URL de la imagen del logo.
  }



  // ChatGPT -- Que es toggleMobileMenu

  // Componente para el encabezado (Header)
  const Header: React.FC<HeaderProps> = ({ toggleMobileMenu, isMobileMenuOpen, logo }) => (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <a href="#" className="flex items-center text-white text-xl font-bold space-x-2">
            <img src={logo} alt="Logo de NorthCode" className="w-10 h-10" /> 
            <span>NorthCode</span>
          </a>
       
        </div>

        {/* Enlaces de navegación */}
        <div className="hidden md:flex space-x-6 text-gray-300 font-semibold">
          <a href="#inicio" className="hover:text-red-600 transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-red-600 transition-colors">Nosotros</a>
          <a href="#proyectos" className="hover:text-red-600 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-red-600 transition-colors">Contacto</a>
        </div>
        <button
        onClick={toggleMobileMenu} 
        className="md:hidden text-white focus:outline-none"
        title="Abrir menú de navegación"
        arial-label="Abrir menú de navegación"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      <div className={`md:hidden bg-gray-900 text-white text-center py-4 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#inicio" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Inicio</a>
        <a href="#nosotros" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Nosotros</a>
        <a href="#proyectos" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Proyectos</a>
        <a href="#contacto" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Contacto</a>
      </div>
    </header>
  );