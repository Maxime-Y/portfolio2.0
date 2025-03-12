"use client";

import { useEffect, useState } from "react";
import HomePage from "./components/Home";
import Navigation from "./components/Navigation";
// import Navbar from "./components/Navbar";
import ProfilSection from "./components/ProfilSection";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* Barre de navigation */}
      <Navigation />    
      {/* <Navbar /> */}

      <section id="Home">        
        <HomePage />
      </section>

      <section id="profil">
        <ProfilSection />
      </section>

      <section id="profil">
        <SkillsSection />
      </section>      

      <section
        id="projets"
        className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#E5E6DD]"
      >
        <h2 className="text-4xl font-bold mb-4">Projets</h2>
        <p>Contenu de la section projets...</p>
      </section>

      <section
        id="contact"
        className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#FFFFFF]"
      >
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p>Contenu de la section contact...</p>
      </section>

    </main>
  );
}
