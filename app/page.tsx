"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TxtRotate from "./components/TxtRotate";
import TxtToDisplay from "./components/TxtToDisplay";
import PixelText from "./components/PixelText";
import Navigation from "./components/Navigation"; // ✅ Barre de navigation
import fond from "./public/fondecran.jpg";
import LottieAnimation from "./components/ordinateur";
import a from "./public/a.png";
import { motion } from "framer-motion";
import { scrollToSection } from "./utils/scroll";


export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-x-hidden">
      {/* ✅ Barre de navigation */}
      <Navigation />

      <section
        id="accueil"
        className="relative min-h-screen flex flex-col items-center justify-center"
      >

        {/* ✅ Fond d'écran */}
        <div className="fixed inset-0 -z-10">
          <Image
            src={fond}
            alt="Fond d'écran"
            fill
            className="object-fill opacity-80"
          />
        </div>

        {/* ✅ Effet d'écriture "Hello |" avec clignotement avant les mots */}
        <div className="mb-7">
          <TxtRotate words={["World !", "Visiteur !", "Recruteur ?!"]} />
        </div>

        <div className="mb-7 min-h-[300px]">
          <LottieAnimation />
        </div>

        {/* ✅ Texte en mode apparition pixelisée */}
        <div
          className="
          [transform:scale(0.4)]
          sm:[transform:scale(0.5)]
          md:[transform:scale(0.6)]
          lg:[transform:scale(0.7)]
          xl:[transform:scale(0.9)]
          2xl:[transform:scale(1)]
          mb-3
        "
        >
          <PixelText text="Maxime Yehia" />
        </div>

        {/* ✅ Texte "Développeur Full-stack Junior" qui apparaît en douceur */}
        <div>
          <h2>
            <TxtToDisplay />
          </h2>
        </div>

        <button
          onClick={() => scrollToSection("profil")}
          className="px-3 py-3 
                   text-[12px]         
                   xs:text-sm          /* ≥ 480px: text-sm */
                   sm:text-sm          /* ≥ 640px: text-lg */
                   md:text-sm          /* ≥ 768px: text-xl */
                   lg:text-sm
                   mb-5 border-2 border-[#666666] bg-transparent rounded-lg cursor-pointer hidden-button fade-in button-hover-effect"
          style={{ fontFamily: "var(--font-silkscreen)" }}
        >
          <span className="text">Plus d'infos</span>
        </button>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
          onClick={() => scrollToSection("profil")}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 cursor-pointer w-[50px] h-[90px] text-[#666666]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* 2) Groupe animé pour le cercle + flèche */}
            <g className="animate-bounce">             
              <polyline points="8 12 12 16 16 12" />              
            </g>
          </svg>
        </motion.div>
      </section>
      <section id="profil" className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#F2F3EE]/80">
      <div className="w-[200px] h-[200px] rounded-lg overflow-hidden border border-gray-300 mb-10">
          <Image
            src={a}
            alt="Ma photo"
            width={300}
            height={200}
            className="object-cover w-full h-full bg-[#666666] bg-opacity-50"
          />
        </div>
        <h2 className="text-[#666666] text-3xl font-bold mb-8"
          style={{ fontFamily: "var(--font-silkscreen)" }}
        >A propos de moi</h2>   
        <p className="text-[#666666] text-2xl max-w-3xl mb-4">
          Je suis un développeur junior passionné par l'informatique et les nouvelles technologies. 
          J'aime apprendre et relever de nouveaux défis. Je suis à la recherche d'une entreprise 
          qui me permettra de mettre en pratique mes compétences et d'évoluer dans un environnement 
          professionnel.
          De nature curieuse, je suis toujours à la recherche de nouvelles technologies et de nouvelles
          méthodes de travail. J'aime travailler en équipe et partager mes connaissances avec les autres.
        </p>  
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          onClick={() => scrollToSection("profil")}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 cursor-pointer w-[50px] h-[90px] text-[#666666]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* 2) Groupe animé pour le cercle + flèche */}
            <g className="animate-bounce">             
              <polyline points="8 12 12 16 16 12" />              
            </g>
          </svg>
        </motion.div>   
      </section>
    </main>
  );
}
