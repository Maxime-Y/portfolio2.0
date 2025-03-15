"use client";

import { useEffect, useState } from "react";

export default function TxtToDisplay() {
  const fullText = "Développeur Junior"; 
  const [displayedText, setDisplayedText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const [isTypingStarted, setIsTypingStarted] = useState(false); 
  const [speed, setSpeed] = useState(30); 

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTypingStarted(true);
    }, 700);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!isTypingStarted || index >= fullText.length) return; 

    const timeout = setTimeout(() => {
      setDisplayedText(fullText.substring(0, index + 1));
      setIndex((prevIndex) => prevIndex + 1);
      
      setSpeed((prevSpeed) => Math.max(5, prevSpeed - 10));

    }, speed);

    return () => clearTimeout(timeout);
  }, [index, fullText, isTypingStarted, speed]);

  return (
    <div className="text-center">
      <h2 className="text-[24px]         /* Par défaut, écrans < 480px */
                     xs:text-2xl          /* ≥ 480px: text-sm */
                     sm:text-2xl         /* ≥ 640px: text-lg */
                     md:text-2xl          /* ≥ 768px: text-xl */
                     lg:text-4xl      
                     text-[#A0B43C] font-semibold mb-5 min-h-[50px]">
        {displayedText}
      </h2>
    </div>
  );
}
