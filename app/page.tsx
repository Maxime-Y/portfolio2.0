"use client";

import { useEffect, useState } from "react";
import HomePage from "./components/Home";
import Navigation from "./components/Navigation";
// import Navbar from "./components/Navbar";
import ProfilSection from "./components/ProfilSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/contact/ContactSection";


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
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

    </main>
  );
}
