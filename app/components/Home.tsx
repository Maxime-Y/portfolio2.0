import Image from "next/image";
import fond from "../../public/fondecran.jpg";
import TxtRotate from "./Animations/TxtRotate";
import TxtToDisplay from "./Animations/TxtToDisplay";
import PixelText from "./Animations/PixelText";
import { motion } from "framer-motion";
import Computer from "./Animations/Computer";
import { scrollToSection } from "../../utils/scroll";

export default function Home() {
    return (
        <section
            id="Home"
            className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#F2F3EE]/60"
        >
            {/* Fond d'écran */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src={fond}
                    alt="Fond d'écran"
                    fill
                    className="object-fill opacity-100"
                />
            </div>

            {/* Effet d'écriture "Hello |" */}
            <div>
                <TxtRotate words={["World !", "Visiteur !", "Recruteur ?!"]} />
            </div>

            {/* Animation ordinateur */}
            <div className="min-h-[300px]">
                <Computer />
            </div>

            {/* Texte pixelisée */}
            <div
                className="
          [transform:scale(0.4)]
          sm:[transform:scale(0.5)]
          md:[transform:scale(0.6)]
          lg:[transform:scale(0.7)]
          xl:[transform:scale(0.9)]
          2xl:[transform:scale(1)]
          mb-3
        "
            >
                <PixelText text="Maxime Yehia" />
            </div>

            {/* Texte "Développeur Full-stack Junior" */}
            <div>
                <h2>
                    <TxtToDisplay />
                </h2>
            </div>

            {/* bouton plusd'infos */}
            <button
                onClick={() => scrollToSection("profil")}
                className="px-3 py-3 
                   text-[12px]         
                   xs:text-sm          /* ≥ 480px: text-sm */
                   sm:text-sm          /* ≥ 640px: text-lg */
                   md:text-sm          /* ≥ 768px: text-xl */
                   lg:text-sm
                   mb-5 border-1 border-[#666666] bg-transparent rounded-lg cursor-pointer hidden-button fade-in button-hover-effect"
                style={{ fontFamily: "var(--font-silkscreen)" }}
            >
                <span className="text">Plus d'infos</span>
            </button>

            {/* Flèche pour scroller vers le bas */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
                onClick={() => scrollToSection("profil")}
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