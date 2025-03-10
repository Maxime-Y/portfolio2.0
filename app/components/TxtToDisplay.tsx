"use client";

import { useEffect, useState } from "react";

export default function TxtToDisplay() {
  const fullText = "Développeur Junior"; // ✅ Texte à afficher
  const [displayedText, setDisplayedText] = useState(""); // Texte affiché progressivement
  const [index, setIndex] = useState(0); // Index actuel
  const [isTypingStarted, setIsTypingStarted] = useState(false); // ✅ Démarrage différé
  const [speed, setSpeed] = useState(30); // ✅ Vitesse initiale (encore plus rapide)

  useEffect(() => {
    // ✅ Attendre 0.7s avant de commencer l'écriture
    const startTimeout = setTimeout(() => {
      setIsTypingStarted(true);
    }, 700);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!isTypingStarted || index >= fullText.length) return; // Bloque tant que le délai n'est pas passé

    const timeout = setTimeout(() => {
      setDisplayedText(fullText.substring(0, index + 1));
      setIndex((prevIndex) => prevIndex + 1);

      // ✅ On réduit la vitesse de 10ms à chaque lettre
      // ✅ Limite minimale de 5ms pour autoriser une écriture très rapide
      setSpeed((prevSpeed) => Math.max(5, prevSpeed - 10));

    }, speed);

    return () => clearTimeout(timeout);
  }, [index, fullText, isTypingStarted, speed]);

  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl sm:text-3xl text-black font-semibold">
        {displayedText}
      </h2>
    </div>
  );
}
