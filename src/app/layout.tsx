import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Marwa Guidara — Ingénieure en Informatique — Spécialisation IA",
  description: "Portfolio de Marwa Guidara, Ingénieure en Informatique — Spécialisation IA (RAG hybrides, NLP, Transformers, Full-Stack FastAPI, Spring Boot, Next.js). Sfax, Tunisie.",
  keywords: [
    "Marwa Guidara",
    "AI Engineer",
    "Ingénieure en Informatique",
    "Spécialisation IA",
    "RAG",
    "NLP",
    "Transformers",
    "PyTorch",
    "DeBERTa",
    "NLI",
    "Full-Stack",
    "FastAPI",
    "Spring Boot",
    "ISIMS Sfax",
    "Tunisie"
  ],
  authors: [{ name: "Marwa Guidara" }],
  openGraph: {
    title: "Marwa Guidara — Ingénieure en Informatique — Spécialisation IA",
    description: "Systèmes d'IA fiables, RAG hybrides avec évaluation NLI, grounding lexical et architectures Full-Stack.",
    type: "website",
    locale: "fr_FR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased selection:bg-indigo-500/30 selection:text-white bg-[#0D0F14] text-[#F5F3EF]">
        {children}
      </body>
    </html>
  );
}
