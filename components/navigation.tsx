"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useLanguage, type Lang, type Localized } from "@/lib/i18n";

const navItems: { name: Localized; href: string; isPage?: boolean }[] = [
    { name: { fr: "Accueil", en: "Home" }, href: "#hero" },
    { name: { fr: "À propos", en: "About" }, href: "#about" },
    { name: { fr: "Parcours", en: "Background" }, href: "#experiences" },
    { name: { fr: "Projets", en: "Projects" }, href: "#projects" },
    { name: { fr: "Compétences", en: "Skills" }, href: "#skills" },
    { name: { fr: "Contact", en: "Contact" }, href: "#contact" },
    { name: { fr: "CV", en: "CV" }, href: "/cv", isPage: true },
];

const texts = {
    fr: { downloadCv: "Télécharger CV", switchLanguage: "Changer de langue" },
    en: { downloadCv: "Download CV", switchLanguage: "Switch language" },
};

function LanguageToggle({ lightText }: { lightText: boolean }) {
    const { lang, setLang } = useLanguage();
    const languages: Lang[] = ["fr", "en"];

    return (
        <div
            role="group"
            aria-label={texts[lang].switchLanguage}
            className={`flex items-center rounded-lg border p-0.5 text-xs font-semibold ${
                lightText
                    ? "border-white/20 dark:border-neutral-950/20"
                    : "border-neutral-950/15 dark:border-white/20"
            }`}
        >
            {languages.map((code) => (
                <button
                    key={code}
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`px-2 py-1 rounded-md uppercase transition-all duration-200 ${
                        lang === code
                            ? lightText
                                ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white"
                                : "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950"
                            : lightText
                            ? "text-white/60 dark:text-neutral-950/60 hover:text-white dark:hover:text-neutral-950"
                            : "text-neutral-600 dark:text-white/60 hover:text-neutral-950 dark:hover:text-white"
                    }`}
                >
                    {code}
                </button>
            ))}
        </div>
    );
}

export function Navigation() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { lang } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Only detect active section on home page
            if (pathname === "/") {
                // Si on est tout en haut de la page, forcer la section hero comme active
                if (window.scrollY < 100) {
                    setActiveSection("hero");
                    return;
                }

                const sections = navItems.map((item) =>
                    document.querySelector(item.href === "#hero" ? "#hero" : item.href)
                );
                const scrollPosition = window.scrollY + 100;

                sections.forEach((section, index) => {
                    if (section) {
                        const sectionTop = (section as HTMLElement).offsetTop;
                        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

                        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                            setActiveSection(navItems[index].href.substring(1));
                        }
                    }
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const scrollToSection = (href: string, isPage?: boolean) => {
        // If it's a page link (like /cv), navigate directly
        if (isPage) {
            router.push(href);
            setIsMobileMenuOpen(false);
            return;
        }

        // If we're not on home page, navigate to home first
        if (pathname !== "/") {
            router.push(`/${href}`);
            setIsMobileMenuOpen(false);
            return;
        }

        const targetId = href === "#hero" ? "hero" : href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 80; // Height of the navbar
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    };

    // Determine if we should use light text (on dark background) or dark text (on light background)
    const isOnHomePage = pathname === "/";
    const useLightText = isOnHomePage && !isScrolled;

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled || !isOnHomePage
                        ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection("#hero")}
                            className={`text-xl font-bold transition-colors ${
                                useLightText
                                    ? "text-white dark:text-neutral-950"
                                    : "text-neutral-950 dark:text-white"
                            }`}
                        >
                            Cyprien Bons
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                {navItems.map((item) => {
                                    const isActive = !item.isPage && activeSection === item.href.substring(1);
                                    const isCurrentPage = item.isPage && pathname === item.href;
                                    return (
                                        <button
                                            key={item.href}
                                            onClick={() => scrollToSection(item.href, item.isPage)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                isActive || isCurrentPage
                                                    ? useLightText
                                                        ? "bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white"
                                                        : "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950"
                                                    : useLightText
                                                    ? "text-white/60 dark:text-neutral-950/60 hover:text-white dark:hover:text-neutral-950 hover:bg-white/10 dark:hover:bg-neutral-950/10"
                                                    : "text-neutral-600 dark:text-white/60 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10"
                                            }`}
                                        >
                                            {item.name[lang]}
                                        </button>
                                    );
                                })}
                            </div>

                            <LanguageToggle lightText={useLightText} />
                        </div>

                        {/* Mobile: Language + Menu Button */}
                        <div className="md:hidden flex items-center gap-2">
                            <LanguageToggle lightText={useLightText} />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`p-2 transition-colors ${
                                    useLightText
                                        ? "text-white dark:text-neutral-950"
                                        : "text-neutral-950 dark:text-white"
                                }`}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/10"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-2">
                            {navItems.map((item) => {
                                const isActive = !item.isPage && activeSection === item.href.substring(1);
                                const isCurrentPage = item.isPage && pathname === item.href;
                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => scrollToSection(item.href, item.isPage)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                                            isActive || isCurrentPage
                                                ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950"
                                                : "text-neutral-600 dark:text-white/60 hover:bg-neutral-100 dark:hover:bg-white/10"
                                        }`}
                                    >
                                        {item.name[lang]}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </motion.nav>

            {/* Add id to hero section */}
            <div id="hero" className="absolute top-0 left-0" />
        </>
    );
}
