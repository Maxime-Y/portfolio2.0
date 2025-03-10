"use client";

import { useEffect, useState } from "react";

const TxtToDisplay = () => {
  const fullText = "Développeur Junior"; // ✅ Texte à afficher
  const [displayedText, setDisplayedText] = useState(""); // Texte affiché progressivement
  const [index, setIndex] = useState(0); // Index actuel
  const [isTypingStarted, setIsTypingStarted] = useState(false); // ✅ Démarrage différé après 2s
  const [speed, setSpeed] = useState(50); // ✅ Vitesse initiale (plus rapide)

  useEffect(() => {
    // ✅ Attendre 2s avant de commencer l'écriture
    const startTimeout = setTimeout(() => {
      setIsTypingStarted(true);
    }, 700);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!isTypingStarted || index >= fullText.length) return; // ✅ Bloque tant que les 2s ne sont pas passées

    const timeout = setTimeout(() => {
      setDisplayedText(fullText.substring(0, index + 1));
      setIndex((prevIndex) => prevIndex + 1);
      
      // ✅ Accélération plus rapide : réduction de 10ms à chaque lettre
      setSpeed((prevSpeed) => Math.max(15, prevSpeed - 10)); // ✅ Minimum 15ms pour garder une fluidité

    }, speed); // ✅ Ajustement dynamique

    return () => clearTimeout(timeout);
  }, [index, fullText, isTypingStarted, speed]); 

  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl sm:text-3xl text-black font-semibold">
        {displayedText}
      </h2>
    </div>
  );
};

export default TxtToDisplay;
