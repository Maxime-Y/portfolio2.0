const rateLimitCache = new Map();

export default async function rateLimit(req) {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    // Définit les limites (5 requêtes max toutes les 15 minutes)
    const limit = 5;
    const windowMs = 15 * 60 * 1000;

    // Vérifie si l'IP est déjà dans le cache
    if (!rateLimitCache.has(ip)) {
        rateLimitCache.set(ip, []);
    }

    const requests = rateLimitCache.get(ip);
    requests.push(now);

    // Garde seulement les requêtes dans la fenêtre de temps
    const filteredRequests = requests.filter((timestamp) => now - timestamp < windowMs);
    rateLimitCache.set(ip, filteredRequests);

    // Bloque si trop de requêtes
    return { success: filteredRequests.length <= limit };
}
