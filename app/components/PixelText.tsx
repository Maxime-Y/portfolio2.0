"use client";

import { useEffect, useRef, useState } from "react";

export default function PixelText({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pixels, setPixels] = useState<{ x: number; y: number }[]>([]);
  const [visiblePixels, setVisiblePixels] = useState<{ x: number; y: number }[]>([]);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Configuration du canvas
    canvas.width = 800;
    canvas.height = 80;
    ctx.fillStyle = "black";
    ctx.font = "bold 100px Anta";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Écriture du texte sur le canvas
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Récupération des pixels non transparents
    let newPixels = [];
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < imageData.height; y += 4) {
      for (let x = 0; x < imageData.width; x += 4) {
        const index = (y * imageData.width + x) * 4;
        const alpha = imageData.data[index + 3];

        if (alpha > 128) {
          newPixels.push({ x, y });
        }
      }
    }

    setPixels(newPixels);
    setOpacity(1);
  }, [text]);

  useEffect(() => {
    if (pixels.length === 0) return;

    let isDisappearing = false;

    const loopInterval = setInterval(() => {
      if (isDisappearing) {
        setVisiblePixels((prev) => prev.slice(0, Math.max(prev.length - 30, 0))); // On enlève 30 pixels à chaque cycle
      } else {
        setVisiblePixels((prev) => [...pixels].slice(0, prev.length + 30)); // On affiche 30 pixels à chaque cycle
      }

      if (visiblePixels.length >= pixels.length) {
        isDisappearing = true;
      } else if (visiblePixels.length === 0) {
        isDisappearing = false;
        setPixels((prevPixels) => [...prevPixels].sort(() => Math.random() - 0.5)); // 🔥 Mélange à chaque reset !
      }
    }, 20); // Réglage de la vitesse d'apparition

    return () => clearInterval(loopInterval);
  }, [pixels]);

  return (
    <div
      className="relative w-[800px] h-[60px]"
      style={{
        opacity: opacity,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 opacity-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        {visiblePixels.map((pixel, index) => (
          <span
            key={index}
            className="absolute bg-black w-[5px] h-[5px]"
            style={{
              top: pixel.y,
              left: pixel.x,
              animation: `fadeInOut 1.5s infinite alternate ${index * 5}ms`,
            }}
          ></span>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
