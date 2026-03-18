import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyprien Bons | Portfolio - Étudiant en Informatique & Quality Assurance",
  description: "Portfolio de Cyprien Bons, étudiant en BUT Informatique parcours Réseau & CyberSécurité, actuellement en alternance chez ITESOFT en tant qu'Assistant Ingénieur Quality Assurance.",
  keywords: ["Cyprien Bons", "Portfolio", "Développeur", "Quality Assurance", "Quality Assurance", "BUT Informatique", "Réseau & CyberSécurité", "Cypress", "Selenium", "Java", "PHP"],
  authors: [{ name: "Cyprien Bons" }],
  creator: "Cyprien Bons",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cyprienbons.com",
    title: "Cyprien Bons | Portfolio",
    description: "Portfolio de Cyprien Bons - Étudiant en Informatique & Assistant Ingénieur Quality Assurance",
    siteName: "Cyprien Bons Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprien Bons | Portfolio",
    description: "Portfolio de Cyprien Bons - Étudiant en Informatique & Assistant Ingénieur Quality Assurance",
  },
  icons: {
    icon: "/img/Logo_CB.png",
    shortcut: "/img/Logo_CB.png",
    apple: "/img/Logo_CB.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
