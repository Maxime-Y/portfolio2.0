"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Profil", "Compétences", "Projets", "Contact"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-4 right-6 flex items-center z-50">
      {/* ✅ Navigation Desktop (>=768px) - Onglets alignés à DROITE */}
      <ul className="hidden md:flex space-x-6 text-[#A0B43C] text-2xl">
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, x: 20 }} // ✅ Départ à droite
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2 + index * 0.3 }}
            href={`#${item.toLowerCase()}`}
            className="cursor-pointer hover:underline"
          >
            {item}
          </motion.a>
        ))}
      </ul>

      {/* ✅ Bouton Burger / Croix - Aligné à DROITE */}
      <motion.button
        className="md:hidden text-[#A0B43C] text-3xl focus:outline-none relative z-50 ml-4"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isOpen ? (
          <motion.span
            key="cross"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            ✖
          </motion.span>
        ) : (
          <motion.span
            key="burger"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            ☰
          </motion.span>
        )}
      </motion.button>

      {/* ✅ Menu Mobile à DROITE avec BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* ✅ Backdrop pour fermer en cliquant en dehors */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* ✅ Le Menu Mobile (maintenant aligné à DROITE) */}
            <motion.div
              initial={{ x: "100%" }} // ✅ Départ à droite
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[240px] h-full bg-[#EFF2D9]/80 shadow-lg z-40 flex flex-col items-start justify-center space-y-1 pr-6 md:hidden"
            >
              {/* ✅ Liste des onglets (animation séquencée) */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }} // ✅ Apparition de la droite
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                  className="w-full"
                >
                  {/* ✅ Texte de l'onglet */}
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="cursor-pointer text-2xl text-[#1a3e17] block py-3 pr-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>

                  {/* ✅ Trait séparateur bien centré */}
                  {index < navItems.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                      className="h-[2px] bg-[#A0B43C] opacity-75 self-end mr-2 w-[calc(100%-3rem)] mt-1 mb-1"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
