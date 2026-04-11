import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ApprentissageSectionBut2 } from "@/components/sections/apprentissage-section-but2";

export const metadata = {
    title: "Apprentissage Critique BUT2 - Cyprien Bons",
    description: "Portfolio d'apprentissage critique de Cyprien Bons - Deuxième année de BUT Informatique",
};

export default function ApprentissageBut2Page() {
    return (
        <>
            <Navigation />
            <main className="w-full pt-20">
                <ApprentissageSectionBut2 />
            </main>
            <Footer />
        </>
    );
}
