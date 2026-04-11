import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ApprentissageHubSection } from "@/components/sections/apprentissage-hub-section";

export const metadata = {
    title: "Apprentissage Critique - Cyprien Bons",
    description: "Portfolio d'apprentissage critique de Cyprien Bons - BUT Informatique",
};

export default function ApprentissagePage() {
    return (
        <>
            <Navigation />
            <main className="w-full pt-20">
                <ApprentissageHubSection />
            </main>
            <Footer />
        </>
    );
}
