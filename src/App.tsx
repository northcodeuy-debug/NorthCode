import React from 'react';

// Secciones modulares
import { Header } from './components/Heder.tsx';
import { Hero } from './components/Hero.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { SocialImpact } from './components/SocialImpact.tsx';
import { Vision } from './components/Vision.tsx';
import { TeamSection } from './components/team/TeamSection.tsx';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App(): React.JSX.Element {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-red-600 selection:text-white">
      {/* Cabecera Fija */}
      <Header />

      {/* Contenido Principal */}
      <main>
        <Hero />
        <WhyChooseUs />
        <SocialImpact />
        <Vision />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}