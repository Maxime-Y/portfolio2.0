"use client";

import { useEffect, useState } from "react";

interface TxtRotateProps {
  words: string[]; // Liste des mots à afficher
  typingSpeed?: number; // Vitesse de frappe
  deletingSpeed?: number; // Vitesse d'effacement
  delayBetweenWords?: number; // Temps avant le changement de mot
}

const TxtRotate = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500,
}: TxtRotateProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [startTyping, setStartTyping] = useState(false); // ✅ Bloque l'écriture pendant 5s

  useEffect(() => {
    // ✅ Attendre 5s avant de commencer l'écriture
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, 4000);

    return () => clearTimeout(delayTimeout);
  }, []);

  useEffect(() => {
    if (!startTyping) return; // ✅ Bloque l'animation tant que le délai n'est pas passé

    let timeout: NodeJS.Timeout;

    // Effet de frappe et d'effacement
    const updateText = () => {
      const fullText = words[currentWordIndex];

      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      }

      let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && displayedText === fullText) {
        nextSpeed = delayBetweenWords;
        timeout = setTimeout(() => setIsDeleting(true), nextSpeed);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }

      timeout = setTimeout(updateText, nextSpeed);
    };

    timeout = setTimeout(updateText, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, startTyping]);

  // Gestion du clignotement du curseur "|"
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Clignote toutes les 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span
      className="text-[#A0B43C] 
                 text-[15px]        
                 xs:text-sm          
                 sm:text-lg          
                 md:text-xl          
                 lg:text-2xl 
                 relative"
      style={{ fontFamily: "var(--font-silkscreen)" }} 
    >
      Hello {startTyping ? displayedText : ""} 
      <span
        className="absolute"
        style={{
          marginLeft: "3px",
          color: "#4A4A4A", 
          visibility: cursorVisible ? "visible" : "hidden",
        }}
      >
        |
      </span>
    </span>
  );  
};

export default TxtRotate;
