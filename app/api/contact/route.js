import { NextResponse } from "next/server";
import rateLimit from "@/utils/rateLimit"; // Pour limiter les requêtes

export async function POST(req) {
    try {
        // Vérifie si trop de requêtes ont été envoyées
        const limit = await rateLimit(req);
        if (!limit.success) {
            return NextResponse.json({ error: "Trop de requêtes. Réessaye plus tard." }, { status: 429 });
        }

        // Parse les données envoyées
        const { name, email, subject, message } = await req.json();

        // Vérification des champs requis
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
        }

        // Vérification de l'email (Regex basique)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Email invalide." }, { status: 400 });
        }

        // Nettoyage des entrées utilisateur (Éviter XSS)
        const sanitize = (str) => str.replace(/[<>]/g, ""); // Supprime < > pour éviter les injections HTML
        const safeName = sanitize(name);
        const safeEmail = sanitize(email);
        const safeSubject = sanitize(subject);
        const safeMessage = sanitize(message);

        // 🔥 Ici tu peux envoyer les données par email via un service comme Nodemailer ou Resend
        console.log({ safeName, safeEmail, safeSubject, safeMessage });

        // Réponse
        return NextResponse.json({ message: "Message envoyé avec succès." }, { status: 200 });

    } catch (error) {
        console.error("Erreur serveur :", error);
        return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
    }
}

// 🔒 Empêcher les autres méthodes HTTP (GET, PUT, DELETE, etc.)
export async function GET() {
    return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 });
}
