import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ApprentissageSectionBut3 } from "@/components/sections/apprentissage-section-but3";

export const metadata = {
    title: "Apprentissage Critique BUT3 - Cyprien Bons",
    description: "Portfolio d'apprentissage critique de Cyprien Bons - Troisième année de BUT Informatique parcours DACS",
};

export default function ApprentissageBut3Page() {
    return (
        <>
            <Navigation />
            <main className="w-full pt-20">
                <ApprentissageSectionBut3 />
            </main>
            <Footer />
        </>
    );
}
