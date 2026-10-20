/**
 * @fileoverview Punto de Entrada y Montaje de React 19 (main.tsx)
 * 
 * Inicializa el árbol de componentes en el DOM del navegador utilizando
 * la API concurrente `createRoot`. Habilita `StrictMode` para auditoría
 * de renderizado en desarrollo e inyecta la hoja de estilos global de Tailwind CSS.
 * 
 * @module main
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// --- Hojas de Estilo Globales (Directivas Tailwind CSS) ---
import './index.css';

// --- Componente Orquestador Principal de la Aplicación ---
import App from './App.tsx';

/* =============================================================================
   1. RESOLUCIÓN DEL NODO DE MONTAJE EN EL DOM
   ============================================================================= */
const rootElement = document.getElementById('root');

// Guardia de seguridad defensiva para evitar excepciones en runtime
if (!rootElement) {
  throw new Error(
    'Fallo crítico de inicialización: No se encontró el elemento contenedor "#root" en el DOM.'
  );
}

/* =============================================================================
   2. INICIALIZACIÓN DEL CLIENTE CONCURRENTE DE REACT
   ============================================================================= */
createRoot(rootElement).render(
  /**
   * <StrictMode> actúa como auditor en entorno de desarrollo:
   * - Ejecuta doble renderizado para detectar efectos secundarios impuros.
   * - Alerta sobre APIs obsoletas o patrones de concurrencia inseguros.
   * - No genera sobrecarga en la compilación final de producción.
   */
  <StrictMode>
    <App />
  </StrictMode>
);