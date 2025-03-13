"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll";
// import Particles from "./Animations/react-tsparticles";

export default function ProjectsSection() {
    return (

        <section
            id="projets"
            className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#DBE2CA]/90"
        >
            {/* <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }} width="5120" height="2712"></canvas> */}
            <h2 className="text-4xl text-[#666666] font-bold mb-4"
                style={{ fontFamily: "var(--font-silkscreen)" }}
            >
                Projets
            </h2>
            <p>Contenu de la section projets......</p>
            {/* Flèche pour scroller vers le bas */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
                onClick={() => scrollToSection("contact")}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer w-[50px] h-[90px] text-[#666666] z-10"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                >
                    <g className="animate-bounce">
                        <polyline points="8 12 12 16 16 12" />
                    </g>
                </svg>
            </motion.div>
        </section>
    );
}
