import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  jobTitle: "QA Automation Engineer",
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
  knowsAbout: ["Cypress", "Selenium", "JavaScript", "Test Automation", "CI/CD", "Cybersecurity"],
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0DTZV3851T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0DTZV3851T');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
