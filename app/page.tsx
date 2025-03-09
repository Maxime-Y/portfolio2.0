"use client";

import Image from "next/image";
import PixelText from "./components/PixelText";
import fond from "./public/fondecran4.jpg";
import lapin from "./public/lapin.png"; // 📌 Ajoute l’image du lapin ici

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Fond d'écran */}
      <div className="absolute inset-0 -z-10">
        <Image src={fond} alt="Fond d'écran" fill style={{ objectFit: "cover" }} />
      </div>

      {/* Texte en mode apparition pixelisée */}
      <PixelText text="Maxime Yehia" />

      {/* Image du lapin blanc */}
      <Image src={lapin} alt="Lapin blanc" width={100} height={100} className="mt-6" />

      {/* Bouton animé */}
      <button className="mt-4 text-[#000000] font-dancing-script text-5xl px-6 py-2 border border-[#000000] rounded-md animate-fadeIn">
        Suis le lapin blanc
      </button>

      {/* Flèche animée */}
      <div className="mt-5 text-[#000000] text-6xl animate-bounce">
        ↓
      </div>

      {/* Styles d'animation */}
      <style jsx>{`        
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in;
        }
      `}</style>
    </main>
  );
}
