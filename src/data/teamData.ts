import type { TeamMember } from '../types';

import fotoAry from '../assets/equipo/ary-negro.jpg';
import fotoFacundo from '../assets/equipo/facundo.jpg';
import fotoMateo from '../assets/equipo/mateo.jpg';
import fotoEsteban from '../assets/equipo/esteban.jpg';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Facundo',
    role: 'Diseñador UX/UI',
    img: fotoFacundo,
    linkedin: 'https://www.linkedin.com/in/facundo-quir%C3%B3-salda%C3%B1a-bustamante-1225b5250/',
    github: 'https://github.com/thejokor16',
    mail: 'mailto:facugoqui@gmail.com',
  },
  {
    id: 2,
    name: 'Esteban',
    role: 'Backend Developer',
    img: fotoEsteban,
    linkedin: 'https://www.linkedin.com/in/esteban-silva-598110182/',
    github: 'https://github.com/Megamonster2YT',
    mail: 'mailto:silvaesteban309@gmail.com',
  },
  {
    id: 3,
    name: 'Ary',
    role: 'Infraestructura & CEO',
    img: fotoAry,
    linkedin: 'https://www.linkedin.com/in/ary-gimenez-2a42b5179/',
    github: 'https://github.com/AryGimenez',
    mail: 'mailto:argi.prog@gmail.com',
  },
  {
    id: 4,
    name: 'Mateo',
    role: 'Ventas, Marketing & Frontend',
    img: fotoMateo,
    linkedin: 'https://www.linkedin.com/in/mate-bds-46448a363/',
    github: 'https://github.com/MateoBas005',
    mail: 'mailto:matebsbastosdossantos@gmail.com',
  },
];