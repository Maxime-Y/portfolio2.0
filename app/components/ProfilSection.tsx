"use client";
import Image from "next/image";
import a from "../../public/a.png";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll";

export default function ProfilSection() {
  return (
    <section
      id="profil" className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#F2F3EE]/90"
    >
      {/* Conteneur global avec le fond qui englobe tout */}
      <div className="w-[800px] flex flex-col items-center p-5 bg-[#DAE0CA]/20 rounded-lg">
        <h2 className="text-[#666666] text-center text-3xl font-bold mb-8"
          style={{ fontFamily: "var(--font-silkscreen)" }}>
          A propos de moi
          <span className="inline-block">
            <motion.span
              className="display-dots"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >
              .
            </motion.span>
            <motion.span
              className="display-dots"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              .
            </motion.span>
            <motion.span
              className="display-dots"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              .
            </motion.span>
          </span>
        </h2>

        {/* Image incluse dans le même conteneur */}
        <div className="w-[150px] h-[150px] rounded-lg overflow-hidden border border-gray-300 mb-8">
          <Image
            src={a}
            alt="Ma photo"
            width={300}
            height={300}
            className="object-cover w-full h-full bg-[#D1D8AA] bg-opacity-50"
          />
        </div>

        {/* Texte */}
        <p className="text-[#666666] self-start text-xl max-w-3xl mb-2">
          Bonjour à toutes et tous,
        </p>
        <p className="text-[#666666] text-xl max-w-3xl mb-2">
          J'ai suivi une <span style={{ color: "#A4B350" }}>formation intensive de 7 mois</span> où j'ai découvert et approfondi
          mes connaissances en languages web. Cette expérience m’a ensuite conduit vers un
          <span style={{ color: "#A4B350" }}> stage chez Peppersoft</span>, qui m’a permis de relever de nombreux défis auxquels un développeur doit faire face au quotidien.
        </p>
        <p className="text-[#666666] text-xl max-w-3xl mb-2">
          De nature <span style={{ color: "#A4B350" }}>curieuse, enjouée et dynamique</span>, Je suis à la recherche d'une <span style={{ color: "#A4B350" }}>entreprise</span> qui me donnera la chance de vivre cette <span style={{ color: "#A4B350" }}>passion</span> et évoluer jour après jour.
        </p>
      </div>

      {/* Flèche pour scroller vers le bas */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
        onClick={() => scrollToSection("competences")}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer w-[50px] h-[90px] text-[#666666]"
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
          <g className="animate-bounce">
            <polyline points="8 12 12 16 16 12" />
          </g>
        </svg>
      </motion.div>
    </section>
  );
}
