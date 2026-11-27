import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExperiencePPPSection } from "@/components/sections/experience-ppp-section";

export const metadata = {
    title: "Analyse de l'expérience en entreprise - Cyprien Bons",
    description: "Analyse de mes expériences en entreprise : alternance chez ITESOFT et stage chez Orchestra - TravelSoft - Cyprien Bons",
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
