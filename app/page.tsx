"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TxtRotate from "./components/TxtRotate";
import TxtToDisplay from "./components/TxtToDisplay";
import PixelText from "./components/PixelText";
import Navigation from "./components/Navigation"; // ✅ Barre de navigation
import fond from "./public/fondecran4.jpg";
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
          style={{ objectFit: "cover", transform: "scaleX(-1)" }}
        />
      </div>

      

      {/* ✅ Effet d'écriture "Hello |" avec clignotement avant les mots */}
      <div className="mt-10 mb-10">
        <TxtRotate words={["World !", "Visiteur !", "Recruteur ?!"]} />
      </div>

      {/* ✅ Image qui apparaît en zoom-in */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image src={a} alt="Lapin blanc" width={200} height={200} className="mt-6 mb-10" />
      </motion.div>

      {/* ✅ Texte en mode apparition pixelisée */}
      <PixelText text="Maxime Yehia" />

      {/* ✅ Texte "Développeur Full-stack Junior" qui apparaît en douceur */}
      <div className="text-center mt-4 mb-8 min-h-[50px]">
        <h2 className="text-2xl sm:text-3xl text-black font-semibold">
        <TxtToDisplay />
        </h2>
      </div>          

      {/* ✅ Bouton avec fond transparent + bordures #A0B43C + police Silkscreen */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2.0, ease: "easeOut" }}
        className="mt-8 px-6 py-3 text-1xl text-[#A0B43C] border-2 border-[#A0B43C] bg-transparent rounded-lg hover:bg-[#A0B43C] hover:text-white cursor-pointer"
        style={{ fontFamily: "var(--font-silkscreen)" }} 
      >
        En savoir plus
      </motion.button>

      {/* ✅ Flèche animée */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
        className="mt-5 text-[#A0B43C] text-5xl animate-bounce cursor-pointer"
      >
        ↓
      </motion.div>
    </main>
  );
}
