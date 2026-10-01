"use client";

import { BackgroundPaths } from "@/components/ui/background-paths"
import { useLanguage } from "@/lib/i18n";

const texts = {
    fr: {
        subtitle: "Alternant chez ITESOFT | Master Informatique - CyberSécurité",
        button: "Découvrir mon parcours",
    },
    en: {
        subtitle: "Work-study student at ITESOFT | Master's in Computer Science - Cybersecurity",
        button: "Discover my background",
    },
};

export function DemoBackgroundPaths() {
    const { lang } = useLanguage();
    const t = texts[lang];

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <BackgroundPaths
            title="Cyprien Bons"
            subtitle={t.subtitle}
            buttonText={t.button}
            onButtonClick={handleScrollToAbout}
        />
    );
}
