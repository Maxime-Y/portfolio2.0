"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scroll";

const projects = [
    { title: "Portfolio", image: "/portfolio2.png", description: "Premier portfolio", details: "Premier portfolio crée en Html, Css et Javascript." },
    { title: "Pokedex", image: "/pokedex.jpg", description: "Repertoire de pokemons", details: "Repertoire dynamique faisant appel à une API externe pour afficher les détails de chaque pokémon." },
    { title: "Bibliothèque numérique", image: "/bibli.jpg", description: "Mangathèque", details: "Catalogue en PHP permettant de lister et gérer une collection de mangas numériques." },
    { title: "Donkey Car", image: "/car.jpg", description: "Location de voitures", details: "Plateforme de location de voitures en PHP natif et POO." },    
    { title: "Site de rencontre", image: "/dating2.png", description: "Page actualités et promotions", details: "Site de rencontre ciblant un public haut de gamme réalisé en Symfony et Angular." },  
    { title: "Help Center Peppersoft", image: "/help1.png", description: "Amélioration de l'interface", details: "Refonte et Modernisation de l'interface du Help Center permettant une meilleure expérience utilisateur." },  
];

export default function ProjectSection() {
    return (
        <section
            id="projets"
            className="relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-[#DBE2C7] scroll-mt-0"
        >
            <h2 className="text-[#666666] text-center text-2xl md:text-3xl font-bold mb-6 mt-14 md:mt-20"
                style={{ fontFamily: "var(--font-silkscreen)" }}>
                Mes projets
                <span className="inline-block">
                    <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>.</motion.span>
                    <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}>.</motion.span>
                    <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}>.</motion.span>
                </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:px-8 max-w-6xl w-full mb-16 pb-5">
                {projects.map((project, index) => {
                    // Déterminer l'animation selon l'index
                    let animation: { opacity: number; x?: number; scale?: number } = { opacity: 0 }; // Type bien défini

                    if (index % 3 === 0) animation = { opacity: 0, x: -100 }; // Cartes de gauche (3 colonnes)
                    if (index % 3 === 2) animation = { opacity: 0, x: 100 };  // Cartes de droite (3 colonnes)
                    if (index % 3 === 1) animation = { opacity: 0, scale: 0.8 }; // Cartes du milieu (Zoom-in)

                    if (projects.length % 3 === 2 && index % 2 === 0) animation = { opacity: 0, x: -100 }; // Gauche (2 colonnes)
                    if (projects.length % 3 === 2 && index % 2 === 1) animation = { opacity: 0, x: 100 };  // Droite (2 colonnes)

                    if (projects.length % 2 === 1 && index % 2 === 0) animation = { opacity: 0, x: -100 }; // Alternance en 1 colonne
                    if (projects.length % 2 === 1 && index % 2 === 1) animation = { opacity: 0, x: 100 };

                    return (
                        <motion.a
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block bg-white rounded-lg overflow-hidden"
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            initial={animation}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.2 }} // Animation seulement une fois quand visible à 20%
                        >
                            <div className="w-full aspect-[16/9]">
                                <Image src={project.image} alt={project.title} width={600} height={300} className="object-fill w-full h-full" />
                            </div>
                            <div className="p-4 bg-[#F2F3EE]/90">
                                <h3 className="text-lg md:text-xl font-semibold text-[#333]">{project.title}</h3>
                                <p className="text-sm md:text-base text-[#666]">{project.description}</p>
                            </div>
                            {/* Description détaillée qui apparaît progressivement */}
                            <div className="absolute inset-0 bg-[#333]/93 text-white flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-sm md:text-base">{project.details}</p>
                            </div>
                        </motion.a>
                    );
                })}
            </div>

            {/* Flèche pour scroller vers la section contact */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
                onClick={() => scrollToSection("contact")}
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
