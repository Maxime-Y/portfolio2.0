"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TxtRotate from "./components/TxtRotate";
import TxtToDisplay from "./components/TxtToDisplay";
import PixelText from "./components/PixelText";
import Navigation from "./components/Navigation"; // ✅ Barre de navigation
import fond from "./public/fondecran.jpg";
import a from "./public/a.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      {/* ✅ Barre de navigation */}
      <Navigation />

      {/* ✅ Fond d'écran */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={fond}
          alt="Fond d'écran"
          fill
          className="opacity-80"
        />
      </div>

      {/* ✅ Image qui apparaît en zoom-in */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={a} alt="Ma photo de profil" width={200} height={200} className="mt-6 mb-2" />
      </motion.div>

      {/* ✅ Effet d'écriture "Hello |" avec clignotement avant les mots */}
      <div className="mt-10 mb-10">
        <TxtRotate words={["World !", "Visiteur !", "Recruteur ?!"]} />
      </div>

      {/* ✅ Texte en mode apparition pixelisée */}
      <div
        className="          
          [transform:scale(0.4)]
          xs:[transform:scale(0.9)]
          sm:[transform:scale(0.6)]
          md:[transform:scale(1)]
        "
      >
        <PixelText text="Maxime Yehia" />
      </div>

      {/* ✅ Texte "Développeur Full-stack Junior" qui apparaît en douceur */}
      <div className="text-center mt-4 mb-10 min-h-[50px]">
        <h2 className="text-2xl sm:text-sm text-black font-semibold">
          <TxtToDisplay />
        </h2>
      </div>

      <button
        className="px-6 py-3 text-sm border-2 border-[#A0B43C] bg-transparent rounded-lg cursor-pointer hidden-button fade-in button-hover-effect"
        style={{ fontFamily: "var(--font-silkscreen)" }}
      >
        <span className="text">En savoir plus</span>
      </button>


      {/* ✅ Flèche animée */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 3, ease: "easeOut" }}
        className="mt-5 text-[#A0B43C] text-5xl animate-bounce cursor-pointer"
      >
        ↓
      </motion.div>
    </main>
  );
}
