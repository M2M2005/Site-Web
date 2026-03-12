import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExperiencePPPSection } from "@/components/sections/experience-ppp-section";

export const metadata = {
    title: "Analyse de l'expérience en entreprise - Cyprien Bons",
    description: "Analyse de mon expérience en alternance chez ITESOFT - Cyprien Bons",
};

export default function ExperiencePage() {
    return (
        <>
            <Navigation />
            <main className="w-full pt-20">
                <ExperiencePPPSection />
            </main>
            <Footer />
        </>
    );
}
