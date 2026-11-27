import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookieConsent } from "@/components/cookie-consent";
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
  metadataBase: new URL("https://cyprienbons.com"),
  title: "Cyprien Bons | Portfolio - Master CyberSécurité & Quality Assurance",
  description: "Portfolio de Cyprien Bons, étudiant en Master Informatique parcours Sécurité informatique, cybersécurité et cybermenaces au CNAM de Montpellier, actuellement en alternance chez ITESOFT en tant qu'Assistant Ingénieur Quality Assurance.",
  keywords: ["Cyprien Bons", "Portfolio", "Développeur", "Quality Assurance", "Master Informatique", "CyberSécurité", "CNAM", "BUT Informatique", "Cypress", "Selenium", "Java", "PHP"],
  authors: [{ name: "Cyprien Bons" }],
  creator: "Cyprien Bons",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://cyprienbons.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://cyprienbons.com",
    title: "Cyprien Bons | Portfolio",
    description: "Portfolio de Cyprien Bons - Étudiant en Master CyberSécurité & Assistant Ingénieur Quality Assurance",
    siteName: "Cyprien Bons Portfolio",
    images: [
      {
        url: "https://cyprienbons.com/img/cyprien.jpg",
        width: 400,
        height: 400,
        alt: "Cyprien Bons - QA Automation Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprien Bons | Portfolio",
    description: "Portfolio de Cyprien Bons - Étudiant en Master CyberSécurité & Assistant Ingénieur Quality Assurance",
    images: ["https://cyprienbons.com/img/cyprien.jpg"],
  },
  icons: {
    icon: "/img/Logo_CB.png",
    shortcut: "/img/Logo_CB.png",
    apple: "/img/Logo_CB.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cyprien Bons",
  url: "https://cyprienbons.com",
  image: "https://cyprienbons.com/img/cyprien.jpg",
  jobTitle: "Assistant QA Automation Engineer",
  worksFor: {
    "@type": "Organization",
    name: "ITESOFT",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "CNAM Montpellier",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "IUT Montpellier-Sète",
    },
  ],
  knowsAbout: ["Cypress", "Selenium", "JavaScript", "Test Automation", "CI/CD", "Cybersecurity", "RGPD", "GDPR", "Data Protection"],
  hasCredential: [
    ...[
      ["Module 1 : Le RGPD et ses notions clés", "CNIL_RGPD_Module_1.pdf"],
      ["Module 2 : Les principes de la protection des données", "CNIL_RGPD_Module_2.pdf"],
      ["Module 3 : Les responsabilités des acteurs", "CNIL_RGPD_Module_3.pdf"],
      ["Module 4 : Le DPO et les outils de la conformité", "CNIL_RGPD_Module_4.pdf"],
    ].map(([name, file]) => ({
      "@type": "EducationalOccupationalCredential",
      name: `MOOC L'atelier RGPD - ${name}`,
      credentialCategory: "certificate",
      dateCreated: "2024-12-21",
      url: `https://cyprienbons.com/docs/certifications/${file}`,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "CNIL - Commission Nationale de l'Informatique et des Libertés",
        url: "https://www.cnil.fr",
      },
    })),
  ],
  sameAs: [
    "https://www.linkedin.com/in/cyprien-bons/",
    "https://github.com/M2M2005",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="canonical" href="https://cyprienbons.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
