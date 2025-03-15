"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scroll";

export default function ProfilSection() {
  return (
    <section
      id="profil" className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#F2F3EE]/90 scroll-mt-0"
    >
      {/* Conteneur global avec le fond qui englobe tout */}
      <div className="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl flex flex-col items-center p-5 bg-[#DAE0CA]/30 rounded-lg">
        <h2 className="text-[#666666] text-center text-3xl font-bold mb-4 mt-5 md:mt-8"
          style={{ fontFamily: "var(--font-silkscreen)" }}>
          A propos de moi
          <span className="inline-block">
            <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>.</motion.span>
            <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}>.</motion.span>
            <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}>.</motion.span>
          </span>
        </h2>

        <div className="relative w-[144px] h-[144px] flex items-center justify-center rounded-full mb-8">

          {/* Conteneur qui tourne (géré par Framer Motion) */}
          <motion.div
            animate={{ rotate: 360 }} // 🔥 Tourne en continu
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }} // 🔄 10 secondes par tour
            className="absolute inset-0 h-full w-full rounded-full"
          >
            {/* L'effet conique à l'intérieur */}
            <div className="w-full h-full rounded-full bg-[conic-gradient(transparent_20deg,#A4B350_120deg)]"></div>
          </motion.div>

          {/* Image au-dessus */}
          <div className="w-[140px] h-[140px] overflow-hidden border border-gray-300 rounded-full relative z-10">
            <Image
              src="/a.png"
              alt="Ma photo"
              width={300}
              height={300}
              className="object-cover w-full h-full bg-[#D1D8AA] bg-opacity-50 rounded-full"
            />
          </div>
        </div>

        {/* Texte */}
        <p className="text-[#666666] text-xl max-w-3xl mb-2">
          Passionné par le <span style={{ color: "#A4B350" }}>développement web</span>, j'ai décidé de me reconvertir dans ce domaine après plusieurs années dans la restauration.
        </p>
        <p className="text-[#666666] text-xl max-w-3xl mb-2">
          J'ai suivi une <span style={{ color: "#A4B350" }}>formation intensive de 7 mois</span> où j'ai découvert et approfondi
          mes connaissances en languages web. Cette expérience m’a ensuite conduit vers un
          <span style={{ color: "#A4B350" }}> stage chez Peppersoft</span>, acteur majeur dans le monde du marketing digital, qui m’a permis de relever de nombreux défis auxquels un développeur doit faire face au quotidien.
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
        className="hidden md:hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer w-8 h-14 text-[#666666]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <g className="animate-bounce">
            <polyline points="8 12 12 16 16 12" />
          </g>
        </svg>
      </motion.div>

    </section>
  );
}
