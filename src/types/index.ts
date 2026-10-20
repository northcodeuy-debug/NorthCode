// src/types/index.ts

/**
 * @fileoverview Definición de contratos e interfaces para el portal corporativo NorthCode.
 * @module types
 */

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  img: string;
  linkedin: string;
  github: string;
  mail: string;
  whatsapp?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
}