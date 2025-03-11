"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Profil", "Compétences", "Projets", "Contact"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-4 right-6 flex items-center z-50">
      {/* ✅ Navigation Desktop (>=768px) - Onglets alignés à DROITE */}
      <ul className="hidden md:flex space-x-6 text-[#666666] text-2xl">
        {navItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.5 + index * 0.3 }} 
            className="relative group cursor-pointer"
          >
            <a href={`#${item.toLowerCase()}`} className="relative inline-block">
              {item}
              {/* ✅ Soulignement progressif en CSS */}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#666666] transition-all duration-200 group-hover:w-full"></span>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* ✅ Bouton Burger / Croix - Aligné à DROITE */}
      <motion.button
        className="md:hidden text-[#666666] text-3xl focus:outline-none relative z-50 ml-4 cursor-pointer"
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
              className="fixed top-0 right-0 w-[260px] h-full bg-[#FAFBEF]/80 shadow-lg z-40 flex flex-col items-center justify-center space-y-4 md:hidden"
            >
              {/* ✅ Liste des onglets (animation séquencée) */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }} // ✅ Apparition de la droite
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                  className="w-full flex flex-col items-center"
                >
                  {/* ✅ Texte de l'onglet CENTRÉ */}
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="cursor-pointer text-2xl block py-3 relative transition-all duration-250 text-[#666666] 
                              bg-gradient-to-r from-[#A0B43C] to-[#A0B43C] bg-[length:0%_100%] bg-left-bottom bg-no-repeat 
                              hover:bg-[length:100%_100%] bg-clip-text hover:text-[#A0B43C]"
                  >
                    {item}
                  </a>

                  {/* ✅ Trait séparateur qui commence au début du texte */}
                  {index < navItems.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                      className="h-[2px] bg-[#A0B43C] opacity-75 w-[70%] mt-1 mb-1"
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
