import type { Metadata } from "next";
import { Geist, Geist_Mono, Anta, Dancing_Script, Silkscreen } from "next/font/google";
import "./globals.css";
import BackToTopButton from "./components/Animations/BackToTopButton";
import Navigation from "./components/Navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400",
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Maxime Yehia",
  description: "Portfolio de Maxime Yehia"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anta.variable} ${dancingScript.variable} ${silkscreen.variable} antialiased`}
      >
        <Navigation />
        {/* <Navbar /> */}
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
