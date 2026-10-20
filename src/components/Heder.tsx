// src/components/Heder.tsx

/**
 * @fileoverview Barra de Navegación Principal y Menú Móvil (Header)
 * 
 * Orquesta los accesos directos de navegación de la landing page corporativa de NorthCode.
 * Implementa fijación superior (fixed), efecto de desenfoque de fondo (backdrop-blur)
 * y un cajón colapsable optimizado para dispositivos móviles.
 * 
 * @module components/Header
 */

import React, { useState } from 'react';
// --- Iconografía Lucide ---
import { Menu, X } from 'lucide-react';
// --- Identidad Visual ---
import logo from '../assets/logo.png';

/**
 * Encabezado principal de la plataforma (`Header`).
 *
 * @component
 * @returns {JSX.Element} Barra de navegación fija con menú responsive.
 */
export const Header: React.FC = () => {
  /* ===========================================================================
     1. ESTADOS LOCALES DE INTERACCIÓN
     =========================================================================== */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  /**
   * Alterna la visibilidad del menú desplegable en resoluciones móviles.
   */
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  /* ===========================================================================
     2. RENDERIZADO VISUAL
     =========================================================================== */
  return (
    <header
      className={`
        /* --- Posición --- */
        fixed                        /* Anclado fijo en la parte superior */
        top-0                        /* Al ras superior */
        left-0                       /* Al ras izquierdo */
        z-50                         /* Capa superior sobre todas las secciones */

        /* --- Dimensiones --- */
        w-full                       /* Ocupa el 100% del ancho */

        /* --- Colores --- */
        bg-black/80                  /* Fondo negro translúcido al 80% */
        border-b                     /* Línea divisoria inferior */
        border-white/10              /* Tinte sutil translúcido */

        /* --- Estilo --- */
        backdrop-blur-lg             /* Efecto de vidrio esmerilado */
      `}
    >
      <nav
        className={`
          /* --- Posición --- */
          flex                         /* Layout flexible */
          items-center                 /* Centrado vertical */
          justify-between              /* Distribución a los extremos */
          mx-auto                      /* Centrado horizontal del contenedor */

          /* --- Dimensiones --- */
          container                    /* Contenedor estándar */
          px-6                         /* Padding horizontal */
          py-4                         /* Padding vertical */
        `}
      >
        {/* LOGO E IDENTIDAD CORPORATIVA */}
        <a
          href="#inicio"
          className={`
            /* --- Posición --- */
            flex
            items-center
            gap-3

            /* --- Texto --- */
            text-white
            text-xl
            font-black
            uppercase
            tracking-tight

            /* --- Animación --- */
            group                        /* Agrupador para microinteracción */
          `}
        >
          <img
            src={logo}
            alt="Logo de NorthCode"
            className={`
              /* --- Dimensiones --- */
              w-9
              h-9

              /* --- Estilo --- */
              object-contain

              /* --- Animación --- */
              transition-transform
              duration-300
              group-hover:scale-105
            `}
          />
          <span>
            North<span className="text-red-600">Code</span>
          </span>
        </a>

        {/* NAVEGACIÓN PRINCIPAL (DESKTOP) */}
        <div
          className={`
            /* --- Posición --- */
            hidden                       /* Oculto en móviles y tablets */
            md:flex                      /* Visible en pantallas medianas y grandes */
            items-center
            gap-8

            /* --- Colores --- */
            text-gray-300

            /* --- Texto --- */
            text-sm
            font-bold
          `}
        >
          <a
            href="#inicio"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Inicio
          </a>
          <a
            href="#por-que-elegirnos"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Por qué nosotros
          </a>
          <a
            href="#impacto-social"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Impacto Social
          </a>
          <a
            href="#nosotros"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Equipo
          </a>
          <a
            href="#proyectos"
            className="hover:text-red-500 transition-colors duration-200"
          >
            Proyectos
          </a>
          
          {/* Botón de Acción Directa (CTA) */}
          <a
            href="#contacto"
            className={`
              /* --- Dimensiones --- */
              px-4
              py-2

              /* --- Colores --- */
              bg-red-600
              hover:bg-red-700
              text-white

              /* --- Texto --- */
              text-xs
              font-bold
              uppercase
              tracking-wider

              /* --- Estilo --- */
              rounded-full

              /* --- Animación --- */
              transition-all
              duration-200
              hover:shadow-lg
              hover:shadow-red-600/30
            `}
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA / CERRAR (MOBILE) */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className={`
            /* --- Posición --- */
            flex
            items-center
            justify-center
            md:hidden                    /* Oculto en pantallas de escritorio */

            /* --- Dimensiones --- */
            p-2                          /* Área táctil de 8px */

            /* --- Colores --- */
            text-white

            /* --- Animación --- */
            transition-transform
            active:scale-90
          `}
          title={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MENÚ LATERAL DESPLEGABLE (MOBILE) */}
      {isMobileMenuOpen && (
        <div
          className={`
            /* --- Posición --- */
            block
            md:hidden

            /* --- Dimensiones --- */
            w-full
            py-6
            space-y-4

            /* --- Colores --- */
            bg-zinc-950/95
            border-b
            border-white/10

            /* --- Texto --- */
            text-center
            font-bold

            /* --- Animación --- */
            animate-in
            fade-in
            slide-in-from-top-4
            duration-200
          `}
        >
          <a
            href="#inicio"
            onClick={toggleMobileMenu}
            className="block py-2 text-white hover:text-red-500 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#por-que-elegirnos"
            onClick={toggleMobileMenu}
            className="block py-2 text-white hover:text-red-500 transition-colors"
          >
            Por qué nosotros
          </a>
          <a
            href="#impacto-social"
            onClick={toggleMobileMenu}
            className="block py-2 text-white hover:text-red-500 transition-colors"
          >
            Impacto Social
          </a>
          <a
            href="#nosotros"
            onClick={toggleMobileMenu}
            className="block py-2 text-white hover:text-red-500 transition-colors"
          >
            Equipo
          </a>
          <a
            href="#proyectos"
            onClick={toggleMobileMenu}
            className="block py-2 text-white hover:text-red-500 transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            onClick={toggleMobileMenu}
            className="block py-2 text-red-500 uppercase tracking-widest text-xs"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;