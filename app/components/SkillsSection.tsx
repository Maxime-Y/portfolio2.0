"use client";
import { motion } from "framer-motion";
import SkillBar from "./Animations/SkillBar";
import Image from "next/image";
import { scrollToSection } from "../utils/scroll";
import cvPreview from "../../public/cv.png";

export default function SkillsSection() {
    return (
        <section
            id="competences"
            className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[url('../public/fondecran2.jpg')] bg-cover bg-center"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#F2F3EE]/80"></div>

            {/* Conteneur principal */}
            <div className="relative z-10 w-full max-w-6xl flex flex-col items-center min-h-[70vh]">
                <h2 className="text-[#666666] text-center text-3xl font-bold mb-4 mt-4"
                    style={{ fontFamily: "var(--font-silkscreen)" }}>
                    Compétences
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

                {/* Wrapper flex pour séparer les deux colonnes */}
                <div className="flex flex-col lg:flex-row w-full flex-1">

                    {/* Colonne gauche : skills */}
                    <div className="flex flex-col items-center justify-start w-full lg:w-1/2 px-4 py-4 text-center">
                        {/* Container plus compact pour les skills */}
                        <div className="w-full max-w-3xl space-y-4">
                            {/* Grille pour Front-end & Back-end côte à côte */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Front-end */}
                                <div className="space-y-1">
                                    <h3
                                        className="text-lg font-bold text-[#666666] mb-2"
                                        style={{ fontFamily: "var(--font-silkscreen)" }}
                                    >
                                        Front-end
                                    </h3>
                                    <SkillBar skillName="Angular" level={80} barColor="#A4B350" />
                                    <SkillBar skillName="Javascript/Typescript" level={70} barColor="#A4B350" />
                                    <SkillBar skillName="Vue.js" level={40} barColor="#A4B350" />
                                    <SkillBar skillName="CSS/SCSS" level={85} barColor="#A4B350" />
                                    <SkillBar skillName="Bootstrap" level={85} barColor="#A4B350" />
                                    <SkillBar skillName="TailwindCss" level={70} barColor="#A4B350" />
                                </div>

                                {/* Back-end */}
                                <div className="space-y-1">
                                    <h3
                                        className="text-lg font-bold text-[#666666] mb-2"
                                        style={{ fontFamily: "var(--font-silkscreen)" }}
                                    >
                                        Back-end
                                    </h3>
                                    <SkillBar skillName="PHP Symfony" level={85} barColor="#A4B350" />
                                    <SkillBar skillName="Next.js" level={50} barColor="#A4B350" />
                                    <SkillBar skillName="Node.js" level={70} barColor="#A4B350" />
                                    <SkillBar skillName="MySQL / PostgreSQL" level={80} barColor="#A4B350" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="space-y-1">
                                    <h3
                                        className="text-lg font-bold text-[#666666] mb-2"
                                        style={{ fontFamily: "var(--font-silkscreen)" }}
                                    >
                                        Outils
                                    </h3>
                                    <SkillBar skillName="Git" level={80} barColor="#A4B350" />
                                    <SkillBar skillName="Wordpress" level={90} barColor="#A4B350" />
                                    <SkillBar skillName="Workbench" level={70} barColor="#A4B350" />
                                </div>

                                <div className="space-y-1">
                                    <h3
                                        className="text-lg font-bold text-[#666666] mb-2"
                                        style={{ fontFamily: "var(--font-silkscreen)" }}
                                    >
                                        Design
                                    </h3>
                                    <SkillBar skillName="Figma" level={70} barColor="#A4B350" />
                                    <SkillBar skillName="Photoshop" level={65} barColor="#A4B350" />
                                    <SkillBar skillName="Krita" level={80} barColor="#A4B350" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite : CV + bouton */}
                    <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4 py-4">
                        {/* Lien cliquable pour ouvrir le CV */}
                        <a href="/cv.png" target="_blank" rel="noopener noreferrer" className="w-[380px] h-[480px] mb-4 -mt-1">
                            <div className="w-full h-full overflow-hidden border border-gray-400 shadow-lg rounded-lg mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                                <Image
                                    src={cvPreview}
                                    alt="Aperçu du CV"
                                    width={300}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </a>

                        {/* Bouton pour télécharger */}
                        <a
                            href="/cv.png"
                            download
                            className="px-3 py-2 text-xs xs:text-sm sm:text-sm md:text-sm lg:text-sm
                            border-2 border-[#666666] bg-transparent rounded-lg cursor-pointer hidden-button fade-in button-hover-effect"
                            style={{ fontFamily: "var(--font-silkscreen)" }}
                        >
                            <span className="text">Télécharger le CV</span>
                        </a>

                    </div>

                </div>
            </div>

            {/* Flèche pour scroller vers la section Projets */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
                onClick={() => scrollToSection("projets")}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer w-[50px] h-[90px] text-[#666666]"
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
