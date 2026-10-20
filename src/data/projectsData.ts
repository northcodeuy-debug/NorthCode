/**
 * @fileoverview Catálogo de Casos de Éxito y Proyectos en Producción (projectsData.ts)
 * 
 * Centraliza la información estática del portafolio corporativo de NorthCode,
 * desacoplando los datos de la capa de presentación (`ProjectsSection` y `ProjectCard`).
 * Cada entrada define el branding, la propuesta de valor y el hipervínculo activo.
 * 
 * @module data/projectsData
 */

// --- Contrato de Tipado Estricto ---
import type { ProjectItem } from '../types';

// --- Assets Gráficos y Logotipos de Clientes ---
import logoMGSoluciones from '../assets/proyectos/MGSoluciones.png';
import logoMColors from '../assets/proyectos/MontevideoColors.jpg';
import logoGuzzetti from '../assets/proyectos/Guzzetti.jpg';

/**
 * Colección inmutable de proyectos destacados desarrollados por la agencia.
 * 
 * @constant
 * @type {ProjectItem[]}
 */
export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'MG Soluciones IT',
    description: 
      'Plataforma web profesional orientada a empresas, destacando infraestructura cloud, ciberseguridad corporativa y pólizas de soporte técnico.',
    img: logoMGSoluciones,
    url: 'https://mgsolucionesit.com.uy/',
  },
  {
    id: 2,
    title: 'Montevideo Colors',
    description: 
      'Portal web institucional y vitrina de servicios para residencia estudiantil en Montevideo, integrando catálogo de comodidades y conversión directa a reservas.',
    img: logoMColors,
    url: 'https://www.montevideocolors.com.uy/',
  },
  {
    id: 3,
    title: 'Clínica Guzzetti - Arámbula',
    description: 
      'Sitio web médico-odontológico diseñado con foco en la confianza clínica, estética bucal integral y canalización de citas con especialistas.',
    img: logoGuzzetti,
    url: 'https://guzzettiarambulaodontologos.com/',
  },
];