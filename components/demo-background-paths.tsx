"use client";

import { BackgroundPaths } from "@/components/ui/background-paths"

export function DemoBackgroundPaths() {
    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <BackgroundPaths
            title="Cyprien Bons"
            subtitle="Alternant chez ITESOFT | BUT Informatique - Réseau & CyberSécurité"
            buttonText="Découvrir mon parcours"
            onButtonClick={handleScrollToAbout}
        />
    );
}
