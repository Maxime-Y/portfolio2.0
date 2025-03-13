"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../utils/scroll";
import Image from "next/image";
import home from "../../public/home.png";

const navItems = ["Profil", "Compétences", "Projets", "Contact"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full pt-2 pb-5 px-6 z-50 flex justify-between items-center transition-all duration-300
    ${scrolled
          ? "bg-[linear-gradient(180deg,#F2F3EE_75%,rgba(160,180,60,0.6))] shadow-[0px_0px_150px_5px_rgba(160,180,60,0.8)]"
          : "bg-transparent"
        }`}
    >

      {/* LOGO home */}
      <div className="left">
        {/* LOGO À GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Départ à gauche
          animate={{ opacity: 1, x: 0 }} // Arrivée normale
          transition={{ duration: 0.5, delay: 2.8 }} // Même délai que les onglets
          className="left"
        >
          <a onClick={() => scrollToSection("Home")} className="cursor-pointer">
            <Image
              src={home}
              alt="Logo home"
              width={40}
              height={40}
              className="object-contain filter invert-[30%] sepia-[5%] saturate-[200%] brightness-[80%] contrast-[120%]"
            />
          </a>
        </motion.div>

      </div>

      {/* NAVIGATION À DROITE */}
      <div className="right">
        <ul className="hidden md:flex space-x-6 text-[#666666] text-2xl">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.8 + index * 0.3 }}
              className="relative group cursor-pointer"
            >
              <a
                onClick={() => {
                  setIsOpen(false);
                  const id =
                    item === "Profil"
                      ? "profil"
                      : item === "Compétences"
                        ? "competences"
                        : item === "Projets"
                          ? "projets"
                          : item === "Contact"
                            ? "contact"
                            : item.toLowerCase();
                  scrollToSection(id);
                }}
                className="relative inline-block cursor-pointer"
              >
                {item}
                {/* Soulignement progressif */}
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#666666] transition-all duration-200 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* BOUTON BURGER */}
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

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop pour fermer */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Mobile */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[260px] h-full bg-[#F2F3EE]/80 shadow-lg z-40 flex flex-col items-center justify-center space-y-4 md:hidden"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.2 }}
                  className="w-full flex flex-col items-center"
                >
                  <a
                    onClick={() => {
                      setIsOpen(false);
                      const id =
                        item === "Profil"
                          ? "profil"
                          : item === "Compétences"
                            ? "competences"
                            : item === "Projets"
                              ? "projets"
                              : item === "Contact"
                                ? "contact"
                                : item.toLowerCase();
                      scrollToSection(id);
                    }}
                    className="cursor-pointer text-2xl block py-3 relative transition-all duration-250 text-[#666666] 
                            bg-gradient-to-r from-[#A0B43C] to-[#A0B43C] bg-[length:0%_100%] bg-left-bottom bg-no-repeat 
                            hover:bg-[length:100%_100%] bg-clip-text hover:text-[#A0B43C]"
                  >
                    {item}
                  </a>

                  {/* Trait séparateur */}
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
    </motion.nav>
  );
}
