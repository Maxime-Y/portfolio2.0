"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scroll";
// import Particles from "./Animations/react-tsparticles";

export default function ProjectsSection() {
    return (

        <section
            id="projets"
            className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#E5E6DD]/90"
        >
            {/* <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }} width="5120" height="2712"></canvas> */}
            <h2 className="text-[#666666] text-center text-3xl font-bold mb-8"
                style={{ fontFamily: "var(--font-silkscreen)" }}>
                Me contacter
                <span className="inline-block">
                    <motion.span
                        className="display-dots"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        className="display-dots"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        className="display-dots"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        .
                    </motion.span>
                </span>
            </h2>
            <p>Contenu de la section contact</p>
        </section>
    );
}
