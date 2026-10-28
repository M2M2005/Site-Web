"use client";

import { useState, useEffect, useCallback } from "react";
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
    fr: { downloadCv: "Télécharger CV", switchLanguage: "Changer de langue", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
    en: { downloadCv: "Download CV", switchLanguage: "Switch language", openMenu: "Open menu", closeMenu: "Close menu" },
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

    // Intersection Observer for active section detection
    useEffect(() => {
        if (pathname !== "/") return;

        const sectionIds = navItems
            .filter(item => !item.isPage)
            .map(item => item.href.substring(1));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [pathname]);

    // Scroll detection for navbar background
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isMobileMenuOpen]);

    const scrollToSection = useCallback((href: string, isPage?: boolean) => {
        if (isPage) {
            router.push(href);
            setIsMobileMenuOpen(false);
            return;
        }

        // Fix: proper URL format for hash navigation from other pages
        if (pathname !== "/") {
            router.push(`/${href}`);
            setIsMobileMenuOpen(false);
            return;
        }

        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false);
    }, [pathname, router]);

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
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                                aria-label={isMobileMenuOpen ? texts[lang].closeMenu : texts[lang].openMenu}
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
                                    aria-hidden="true"
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
                <motion.div
                    id="mobile-menu"
                    initial={false}
                    animate={isMobileMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    className={`md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/10 overflow-hidden ${
                        !isMobileMenuOpen && "pointer-events-none"
                    }`}
                    aria-hidden={!isMobileMenuOpen}
                >
                    <div className="container mx-auto px-4 py-4 space-y-2">
                        {navItems.map((item) => {
                            const isActive = !item.isPage && activeSection === item.href.substring(1);
                            const isCurrentPage = item.isPage && pathname === item.href;
                            return (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href, item.isPage)}
                                    tabIndex={isMobileMenuOpen ? 0 : -1}
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
            </motion.nav>

            {/* Add id to hero section */}
            <div id="hero" className="absolute top-0 left-0" />
        </>
    );
}
