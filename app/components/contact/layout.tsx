import FooterSection from "../FooterSection";

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenu de la page Contact */}
      <main className="flex-1">{children}</main>

      {/* Footer toujours en bas */}
      <FooterSection />
    </div>
  );
}
