import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PrivacySection } from "@/components/sections/privacy-section";

export const metadata = {
    title: "Mentions légales et confidentialité - Cyprien Bons",
    description: "Mentions légales, politique de confidentialité et gestion des cookies du portfolio de Cyprien Bons.",
    alternates: {
        canonical: "https://cyprienbons.com/confidentialite",
    },
};

export default function ConfidentialitePage() {
    return (
        <>
            <Navigation />
            <main className="w-full pt-20">
                <PrivacySection />
            </main>
            <Footer />
        </>
    );
}
