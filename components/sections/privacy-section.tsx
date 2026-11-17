"use client";

import { openConsentBanner } from "@/lib/consent";
import { useLanguage } from "@/lib/i18n";

const CONTACT_EMAIL = "contact@cyprienbons.com";

type Section = { title: string; paragraphs: string[]; items?: string[] };

const content: Record<"fr" | "en", { title: string; updated: string; manage: string; sections: Section[] }> = {
    fr: {
        title: "Mentions légales et politique de confidentialité",
        updated: "Dernière mise à jour : 17 novembre 2026",
        manage: "Gérer mes choix de cookies",
        sections: [
            {
                title: "Éditeur du site",
                paragraphs: [
                    "Ce site est un portfolio personnel édité à titre non professionnel par Cyprien Bons, également responsable de la publication.",
                    `Contact : ${CONTACT_EMAIL}`,
                ],
            },
            {
                title: "Hébergement",
                paragraphs: [
                    "Le site est hébergé par Cloudflare, Inc. (Cloudflare Pages), 101 Townsend St, San Francisco, CA 94107, États-Unis — www.cloudflare.com.",
                ],
            },
            {
                title: "Responsable du traitement",
                paragraphs: [
                    `Cyprien Bons est responsable des traitements de données personnelles réalisés sur ce site. Pour toute question : ${CONTACT_EMAIL}.`,
                ],
            },
            {
                title: "Formulaire de contact",
                paragraphs: [
                    "Données collectées : prénom, nom, adresse e-mail, objet et contenu du message.",
                    "Finalité : répondre à votre demande. Base légale : votre démarche volontaire de prise de contact et mon intérêt légitime à y répondre (article 6.1.f du RGPD).",
                    "Destinataires : moi uniquement. Les messages transitent par le service Formspree (Formspree, Inc., États-Unis), sous-traitant chargé de leur acheminement par e-mail. Ce transfert hors de l'Union européenne est encadré par les garanties contractuelles prévues par ce prestataire.",
                    "Durée de conservation : 3 ans maximum après notre dernier échange, sauf si une relation professionnelle en découle.",
                ],
            },
            {
                title: "Mesure d'audience (Google Analytics)",
                paragraphs: [
                    "Avec votre accord uniquement, le site utilise Google Analytics (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande) pour produire des statistiques de fréquentation : pages vues, durée de visite, type d'appareil, provenance géographique approximative.",
                    "Base légale : votre consentement (article 6.1.a du RGPD et article 82 de la loi Informatique et Libertés). Les données peuvent être transférées aux États-Unis ; Google est certifié au titre du Data Privacy Framework UE–États-Unis.",
                    "Cookies déposés : _ga et _ga_<identifiant>, conservés 13 mois maximum. Votre choix (acceptation ou refus) est lui-même mémorisé 6 mois, puis vous est redemandé.",
                    "Vous pouvez retirer votre consentement à tout moment avec le bouton ci-dessous ou le lien « Gérer les cookies » en bas de chaque page.",
                ],
            },
            {
                title: "Vidéos YouTube",
                paragraphs: [
                    "Certaines vidéos de projets sont hébergées sur YouTube. Elles ne sont chargées que lorsque vous cliquez sur « Charger la vidéo », via le domaine youtube-nocookie.com. YouTube (Google) peut alors déposer des cookies et collecter des données selon sa propre politique de confidentialité.",
                ],
            },
            {
                title: "Stockage local",
                paragraphs: [
                    "Le site enregistre dans votre navigateur (localStorage), sans les transmettre à quiconque, la langue choisie et votre choix concernant les cookies. Ces informations sont strictement nécessaires au fonctionnement du site et ne requièrent pas de consentement.",
                ],
            },
            {
                title: "Journaux techniques",
                paragraphs: [
                    "Comme tout hébergeur, Cloudflare traite des données techniques (adresse IP, navigateur, pages demandées) afin d'assurer la sécurité et la disponibilité du site.",
                ],
            },
            {
                title: "Vos droits",
                paragraphs: [
                    "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données :",
                ],
                items: [
                    "droit d'accès, de rectification et d'effacement ;",
                    "droit à la limitation du traitement et droit d'opposition ;",
                    "droit à la portabilité ;",
                    "droit de retirer votre consentement à tout moment ;",
                    "droit de définir des directives relatives au sort de vos données après votre décès.",
                ],
            },
            {
                title: "",
                paragraphs: [
                    `Pour exercer ces droits, écrivez à ${CONTACT_EMAIL}. Une réponse vous sera apportée dans un délai d'un mois.`,
                    "Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (www.cnil.fr).",
                ],
            },
            {
                title: "Propriété intellectuelle",
                paragraphs: [
                    "Les textes, images et documents de ce site sont la propriété de Cyprien Bons, sauf mention contraire (logos d'établissements et d'entreprises, qui appartiennent à leurs titulaires). Toute reproduction sans autorisation est interdite.",
                ],
            },
        ],
    },
    en: {
        title: "Legal notice and privacy policy",
        updated: "Last updated: November 17, 2026",
        manage: "Manage my cookie choices",
        sections: [
            {
                title: "Site publisher",
                paragraphs: [
                    "This website is a personal portfolio published on a non-professional basis by Cyprien Bons, who is also the publication director.",
                    `Contact: ${CONTACT_EMAIL}`,
                ],
            },
            {
                title: "Hosting",
                paragraphs: [
                    "The site is hosted by Cloudflare, Inc. (Cloudflare Pages), 101 Townsend St, San Francisco, CA 94107, United States — www.cloudflare.com.",
                ],
            },
            {
                title: "Data controller",
                paragraphs: [
                    `Cyprien Bons is the controller of the personal data processed on this site. For any question: ${CONTACT_EMAIL}.`,
                ],
            },
            {
                title: "Contact form",
                paragraphs: [
                    "Data collected: first name, last name, email address, subject and content of the message.",
                    "Purpose: replying to your request. Legal basis: your voluntary decision to get in touch and my legitimate interest in replying (Article 6(1)(f) GDPR).",
                    "Recipients: myself only. Messages go through the Formspree service (Formspree, Inc., United States), a processor that forwards them by email. This transfer outside the European Union is covered by the contractual safeguards provided by this provider.",
                    "Retention: at most 3 years after our last exchange, unless a professional relationship follows.",
                ],
            },
            {
                title: "Audience measurement (Google Analytics)",
                paragraphs: [
                    "Only with your consent, the site uses Google Analytics (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) to produce visit statistics: pages viewed, visit duration, device type, approximate location.",
                    "Legal basis: your consent (Article 6(1)(a) GDPR and Article 82 of the French Data Protection Act). Data may be transferred to the United States; Google is certified under the EU–US Data Privacy Framework.",
                    "Cookies set: _ga and _ga_<id>, kept for at most 13 months. Your choice (accept or refuse) is itself remembered for 6 months, then asked again.",
                    "You can withdraw your consent at any time with the button below or the “Manage cookies” link at the bottom of every page.",
                ],
            },
            {
                title: "YouTube videos",
                paragraphs: [
                    "Some project videos are hosted on YouTube. They are only loaded when you click “Load the video”, through the youtube-nocookie.com domain. YouTube (Google) may then set cookies and collect data under its own privacy policy.",
                ],
            },
            {
                title: "Local storage",
                paragraphs: [
                    "The site stores in your browser (localStorage), without sending them to anyone, the language you chose and your cookie choice. This information is strictly necessary for the site to work and does not require consent.",
                ],
            },
            {
                title: "Technical logs",
                paragraphs: [
                    "Like any host, Cloudflare processes technical data (IP address, browser, requested pages) to keep the site secure and available.",
                ],
            },
            {
                title: "Your rights",
                paragraphs: [
                    "Under the GDPR and the French Data Protection Act, you have the following rights over your data:",
                ],
                items: [
                    "right of access, rectification and erasure;",
                    "right to restriction of processing and right to object;",
                    "right to data portability;",
                    "right to withdraw your consent at any time;",
                    "right to give instructions about what happens to your data after your death.",
                ],
            },
            {
                title: "",
                paragraphs: [
                    `To exercise these rights, write to ${CONTACT_EMAIL}. You will receive a reply within one month.`,
                    "If you believe your rights are not respected, you can lodge a complaint with the CNIL (www.cnil.fr), the French data protection authority.",
                ],
            },
            {
                title: "Intellectual property",
                paragraphs: [
                    "The texts, images and documents on this site belong to Cyprien Bons, unless stated otherwise (school and company logos belong to their owners). Any reproduction without permission is prohibited.",
                ],
            },
        ],
    },
};

export function PrivacySection() {
    const { lang } = useLanguage();
    const c = content[lang];

    return (
        <section className="w-full py-16 px-4 md:px-6 bg-white dark:bg-neutral-950">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white mb-3">
                    {c.title}
                </h1>
                <p className="text-sm text-neutral-500 dark:text-white/50 mb-10">{c.updated}</p>

                <div className="space-y-8">
                    {c.sections.map((section, i) => (
                        <div key={i} className="space-y-3">
                            {section.title && (
                                <h2 className="text-xl font-semibold text-neutral-950 dark:text-white">
                                    {section.title}
                                </h2>
                            )}
                            {section.paragraphs.map((p, j) => (
                                <p key={j} className="text-neutral-700 dark:text-white/70 leading-relaxed">
                                    {p}
                                </p>
                            ))}
                            {section.items && (
                                <ul className="list-disc pl-6 space-y-1 text-neutral-700 dark:text-white/70">
                                    {section.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={openConsentBanner}
                    className="mt-10 rounded-lg px-5 py-3 text-sm font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity"
                >
                    {c.manage}
                </button>
            </div>
        </section>
    );
}
