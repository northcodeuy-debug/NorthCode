// src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-zinc-950 text-gray-500 py-10 text-center border-t border-white/5 text-xs">
    <div className="container mx-auto px-6 space-y-2">
      <p className="font-bold text-gray-400 uppercase tracking-widest">NorthCode</p>
      <p>© {new Date().getFullYear()} NorthCode — Impulsando tu visión. Todos los derechos reservados.</p>
    </div>
  </footer>
);