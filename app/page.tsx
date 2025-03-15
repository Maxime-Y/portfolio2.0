"use client";

import HomePage from "./components/Home";
import ProfilSection from "./components/ProfilSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";


export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">      

      <section id="Home">        
        <HomePage />
      </section>

      <section id="profil">
        <ProfilSection />
      </section>

      <section id="profil">
        <SkillsSection />
      </section>      

      <section id="projets">
        <ProjectSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
