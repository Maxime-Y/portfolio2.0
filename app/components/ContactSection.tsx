"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll";
// import Particles from "./Animations/react-tsparticles";

export default function ProjectsSection() {
    return (

        <section
            id="projets"
            className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#E5E6DD]"
        >
            {/* <canvas className="particles-js-canvas-el" style={{ width: "100%", height: "100%" }} width="5120" height="2712"></canvas> */}
            <h2 className="text-4xl text-[#666666] font-bold mb-4"
                style={{ fontFamily: "var(--font-silkscreen)" }}
            >
                Contact
            </h2>
            <p>Contenu de la section contact</p>            
        </section>
    );
}
