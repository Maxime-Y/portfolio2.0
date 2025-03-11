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

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      {/* ✅ Barre de navigation */}
      <Navigation />

      {/* ✅ Fond d'écran */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={fond}
          alt="Fond d'écran"
          fill
          className="object-fill opacity-70"
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
        className="px-3 py-3 
                   text-[12px]         
                   xs:text-sm          /* ≥ 480px: text-sm */
                   sm:text-sm          /* ≥ 640px: text-lg */
                   md:text-sm          /* ≥ 768px: text-xl */
                   lg:text-sm
                   mb-1 border-2 border-[#666666] bg-transparent rounded-lg cursor-pointer hidden-button fade-in button-hover-effect"
        style={{ fontFamily: "var(--font-silkscreen)" }}
      >
        <span className="text">Plus d'infos</span>
      </button>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
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
          {/* 1) Le trait fixe (sol) - NE PAS lui appliquer l'animation */}
          <line x1="4" y1="22" x2="20" y2="22" />

          {/* 2) Groupe animé pour le cercle + flèche */}
          <g className="animate-bounce">
            <circle cx="12" cy="12" r="10" />
            <polyline points="8 12 12 16 16 12" />
            <line x1="12" y1="8" x2="12" y2="16" />
          </g>
        </svg>
      </motion.div>
    </main>
  );
}
