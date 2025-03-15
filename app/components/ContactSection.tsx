"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message); // Affiche "Message envoyé avec succès"
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert(data.error); // Affiche l'erreur (ex: "Email invalide")
    }
  };

  return (
    <section id="contact" className="relative min-h-screen min-w-screen flex flex-col bg-[#E5E6DD] scroll-mt-0">
      {/* Titre */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-[#666666] text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "var(--font-silkscreen)" }}>
          Me contacter
          <span className="inline-block">
            <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>.</motion.span>
            <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}>.</motion.span>
            <motion.span className="display-dots" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}>.</motion.span>
          </span>
        </h2>

        {/* Conteneur principal avec animation */}
        <div className="max-w-4xl w-full flex flex-col lg:flex-row rounded-lg overflow-hidden bg-[#D9E0C1] gap-4">

          {/* Formulaire (arrive de la gauche au scroll) */}
          <motion.form
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <input name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="w-full p-3 border mb-4 rounded bg-gray-100 text-sm md:text-base" />
            <input type="email" name="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border mb-4 rounded bg-gray-100 text-sm md:text-base" />
            <input type="text" name="subject" required placeholder="Sujet" value={formData.subject} onChange={handleChange} className="w-full p-3 border mb-4 rounded bg-gray-100 text-sm md:text-base" />
            <textarea name="message" required placeholder="Votre message..." value={formData.message} onChange={handleChange} className="w-full p-3 border mb-4 rounded h-32 bg-gray-100 text-sm md:text-base" />
            <button type="submit" className="w-full px-4 py-2 bg-[#A4B350] hover:bg-[#8ca542] transition-colors text-white rounded text-sm md:text-base cursor-pointer">Envoyer</button>
          </motion.form>

          {/* Infos (arrivent de la droite au scroll) */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center justify-center p-6 md:p-8 bg-gray-100 w-full lg:w-1/2"
          >
            <h3 className="text-lg md:text-xl font-bold mb-4" style={{ fontFamily: "var(--font-silkscreen)" }}>Informations</h3>
            <p className="text-sm md:text-base">Email : yehia.maxime@hotmail.fr</p>
            <p className="text-sm md:text-base">Tel : 06.25.75.13.83</p>
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/maxime-yehia/" target="_blank">
                <FaLinkedin className="text-[#0077B5] text-3xl md:text-4xl hover:text-[#8ca542] transition-colors" />
              </a>
              <a href="https://github.com/Maxime-Y" target="_blank">
                <FaGithub className="text-[#333] text-3xl md:text-4xl hover:text-[#8ca542] transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer toujours collé en bas */}
      <footer className="w-full py-4 bg-[#F2F3EE] border-t border-gray-300 text-center">
        <p className="text-xs md:text-sm text-[#666666]">© 2025 Portfolio réalisé en Next.js. Tous droits réservés.</p>
      </footer>
    </section>
  );
}
