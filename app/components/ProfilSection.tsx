"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import a from "../public/a.png";
import { scrollToSection } from "../utils/scroll";

export default function ProfilSection() {
  return (
    <section id="profil" className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#F2F3EE]/70">
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
  );
}
