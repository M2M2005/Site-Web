import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ApprentissageSection } from "@/components/sections/apprentissage-section";

export const metadata = {
    title: "Apprentissage Critique - Cyprien Bons",
    description: "Portfolio d'apprentissage critique de Cyprien Bons",
};

export default function ApprentissagePage() {
    return (
        <>
            <Navigation />
            <main className="w-full pt-20">
                <ApprentissageSection />
            </main>
            <Footer />
        </>
    );
}
