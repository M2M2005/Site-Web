"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, type Localized } from "@/lib/i18n";

interface Experience {
    id: string;
    period: Localized;
    position: Localized;
    company: string;
    location: string;
    image?: string;
    description: Localized<string[]>;
    technologies?: string[];
    keyPoints?: Localized<string[]>;
    links?: { label: Localized; url: string }[];
    images?: string[];
    videoCaption?: Localized;
    mention?: Localized;
    type: "work" | "education";
}

const texts = {
    fr: {
        title: "Parcours",
        analysisTag: "Stage · Alternance",
        analysisTitle: "Analyse de mes expériences professionnelles",
        analysisSubtitle: "Orchestra - TravelSoft & ITESOFT — contexte, missions, compétences, bilan",
        technologies: "Technologies :",
        educationKeyPoints: "Points clés :",
        workKeyPoints: "Apports clés :",
    },
    en: {
        title: "Background",
        analysisTag: "Internship · Work-study",
        analysisTitle: "Analysis of my professional experiences",
        analysisSubtitle: "Orchestra - TravelSoft & ITESOFT — context, missions, skills, review",
        technologies: "Technologies:",
        educationKeyPoints: "Key points:",
        workKeyPoints: "Key takeaways:",
    },
};

const experiences: Experience[] = [
    {
        id: "master",
        period: { fr: "Septembre 2026 - Maintenant", en: "September 2026 - Present" },
        position: { fr: "Master Informatique", en: "Master's in Computer Science" },
        company: "CNAM",
        image: "/img/cnam.png",
        location: "Montpellier, France",
        description: {
            fr: [
                "Étudiant en première année de Master Informatique, parcours Sécurité informatique, cybersécurité et cybermenaces, au CNAM de Montpellier.",
                "Formation suivie en alternance chez ITESOFT, pour approfondir la sécurité des systèmes et des applications tout en poursuivant mon activité en Quality Assurance.",
            ],
            en: [
                "First-year Master's student in Computer Science, specializing in IT security, cybersecurity and cyber threats, at the CNAM in Montpellier.",
                "A work-study program with ITESOFT, to deepen my knowledge of system and application security while continuing my Quality Assurance work.",
            ],
        },
        keyPoints: {
            fr: [
                "Parcours : Sécurité informatique, cybersécurité et cybermenaces",
                "En alternance chez ITESOFT",
            ],
            en: [
                "Track: IT security, cybersecurity and cyber threats",
                "Work-study at ITESOFT",
            ],
        },
        type: "education",
    },
    {
        id: "itesoft",
        period: { fr: "Septembre 2025 - Maintenant", en: "September 2025 - Present" },
        position: {
            fr: "Alternance - Assistant Ingénieur Quality Assurance",
            en: "Work-study - Quality Assurance Assistant Engineer",
        },
        company: "ITESOFT",
        location: "Aimargues, France",
        image: "/img/button_voir_details/ITESOFT/itesoft-logo.png",
        description: {
            fr: [
                "Actuellement en alternance chez ITESOFT, éditeur d'une solution de facturation électronique, j'occupe le poste d'Assistant Ingénieur Quality Assurance.",
                "Ma mission : développer des tests automatisés avec Cypress pour garantir la non-régression du logiciel à chaque version. Je réalise également des tests manuels sur les fonctionnalités complexes nécessitant une validation humaine.",
            ],
            en: [
                "I am currently a work-study Quality Assurance Assistant Engineer at ITESOFT, a software publisher of an electronic invoicing solution.",
                "My mission: develop automated tests with Cypress to prevent regressions in every software release. I also perform manual tests on complex features that require human validation.",
            ],
        },
        technologies: ["Cypress", "n8n", "gitLab", "Docker"],
        keyPoints: {
            fr: [
                "Développement de tests automatisés",
                "Réalisation de tests manuels",
            ],
            en: [
                "Development of automated tests",
                "Manual testing",
            ],
        },
        type: "work",
    },
    {
        id: "orchestra",
        period: {
            fr: "Février 2025 - Mars 2025 (8 semaines)",
            en: "February 2025 - March 2025 (8 weeks)",
        },
        position: {
            fr: "Stage - Développeur Quality Assurance",
            en: "Internship - Quality Assurance Developer",
        },
        company: "Orchestra - TravelSoft",
        location: "Paris, France",
        image: "/img/button_voir_details/Orchestra/orchestra-plateforme.jpg",
        description: {
            fr: [
                "Durant mon stage chez Orchestra - TravelSoft, éditeur de solution SaaS pour le secteur du tourisme, j'ai intégré l'équipe Quality Assurance en tant que développeur.",
                "Mission : concevoir des tests automatisés avec Selenium (Java) pour valider l'intégration de nouvelles compagnies aériennes. Les tests comparaient automatiquement les données XML (vols, bagages, suppléments) avec l'affichage web, sans intervention humaine.",
            ],
            en: [
                "During my internship at Orchestra - TravelSoft, a SaaS publisher for the travel industry, I joined the Quality Assurance team as a developer.",
                "Mission: design automated tests with Selenium (Java) to validate the integration of new airlines. The tests automatically compared the XML data (flights, baggage, extras) with what was displayed on the website, with no human intervention.",
            ],
        },
        technologies: ["Java", "Selenium", "XML", "Allure", "Jira"],
        keyPoints: {
            fr: [
                "Développement de tests automatisés",
                "Structuration générique des nouveaux tests",
            ],
            en: [
                "Development of automated tests",
                "Generic structure for new tests",
            ],
        },
        links: [
            {
                label: { fr: "Vidéo démo", en: "Demo video" },
                url: "https://www.youtube.com/watch?v=-nnQ908SqKk",
            }
        ],
        videoCaption: {
            fr: "Cette vidéo montre l'exécution d'un test Selenium : connexion à la plateforme, récupération des données affichées, puis comparaison automatique avec le fichier XML de la compagnie aérienne.",
            en: "This video shows a Selenium test running: logging in to the platform, retrieving the displayed data, then automatically comparing it with the airline's XML file.",
        },
        type: "work",
    },
    {
        id: "iut",
        period: { fr: "2023 - 2026", en: "2023 - 2026" },
        position: { fr: "BUT Informatique", en: "Bachelor's in Computer Science (BUT)" },
        company: "IUT Montpellier-Sète",
        location: "Montpellier, France",
        image: "/img/iut-Montpellier-cete.jpeg",
        description: {
            fr: [
                "BUT Informatique obtenu à l'IUT Montpellier-Sète.",
                "Parcours Réseau & CyberSécurité, qui m'a permis d'acquérir des bases solides en cybersécurité et en réseaux, tout en consolidant mes compétences en développement.",
            ],
            en: [
                "Bachelor's degree in Computer Science (BUT) earned at the IUT Montpellier-Sète.",
                "Networks & Cybersecurity track, which gave me a solid foundation in cybersecurity and networking while strengthening my development skills.",
            ],
        },
        keyPoints: {
            fr: ["Spécialité : Réseau & CyberSécurité"],
            en: ["Specialization: Networks & Cybersecurity"],
        },
        type: "education",
    },
    {
        id: "bac",
        period: { fr: "2020 - 2023", en: "2020 - 2023" },
        position: { fr: "Baccalauréat STI2D", en: "French Baccalaureate STI2D" },
        company: "Lycée Emmanuel d'Alzon",
        location: "Nîmes, France",
        mention: { fr: "Mention Assez Bien", en: "With honors (Assez Bien)" },
        image: "/img/d'alzon.png",
        description: {
            fr: [
                "Baccalauréat STI2D obtenu avec mention Assez Bien au Lycée Emmanuel d'Alzon.",
                "Ce parcours axé sur les sciences et technologies de l'industrie m'a permis de découvrir l'électronique, la mécanique et le développement, éveillant mon intérêt pour l'informatique et l'innovation technologique.",
            ],
            en: [
                "French Baccalaureate in Industrial Science and Technology (STI2D) earned with honors at the Lycée Emmanuel d'Alzon.",
                "This science and industrial technology program introduced me to electronics, mechanics and programming, sparking my interest in computer science and technological innovation.",
            ],
        },
        type: "education",
    },
];

export function ExperiencesSection() {
    const { lang } = useLanguage();
    const t = texts[lang];

    return (
        <section
            id="experiences"
            className="min-h-screen w-full bg-white dark:bg-neutral-950 py-20 px-4 md:px-6"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white mb-4">
                        {t.title}
                    </h2>
                    <div className="w-20 h-1 bg-neutral-950/20 dark:bg-white/20"></div>
                </motion.div>

                {/* Bouton analyse expériences */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: 0.2}}
                    className="mb-16"
                >
                    <Link
                        href="/experience"
                        className="group flex items-center justify-between w-full p-6 rounded-2xl border border-neutral-950/15 dark:border-white/15 hover:border-neutral-950/30 dark:hover:border-white/30 hover:bg-neutral-950/5 dark:hover:bg-white/5 transition-all duration-300"
                    >
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-1">
                                {t.analysisTag}
                            </p>
                            <p className="text-xl font-bold text-neutral-950 dark:text-white">
                                {t.analysisTitle}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-white/60 mt-1">
                                {t.analysisSubtitle}
                            </p>
                        </div>
                        <span
                            className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                            →
                        </span>
                    </Link>
                </motion.div>

                <div className="relative">
                    {/* Timeline vertical line */}
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950/20 dark:from-white/20 dark:via-white/40 dark:to-white/20 hidden md:block"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: index * 0.2}}
                                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Left side (or right on odd items) */}
                                <div
                                    className={`${
                                        index % 2 === 0 ? "md:text-right" : "md:order-2"
                                    }`}
                                >
                                    <div
                                        className={`inline-block bg-neutral-950/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-neutral-950/10 dark:border-white/10 hover:border-neutral-950/20 dark:hover:border-white/20 transition-all duration-300 hover:shadow-xl ${
                                            index % 2 === 0
                                                ? "md:ml-auto"
                                                : "md:mr-auto"
                                        }`}
                                    >
                                        {/* Period badge */}
                                        <div
                                            className={`inline-block px-4 py-2 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-semibold mb-4 ${
                                                index % 2 === 0
                                                    ? "md:float-right md:ml-4"
                                                    : "md:float-left md:mr-4"
                                            }`}
                                        >
                                            {exp.period[lang]}
                                        </div>

                                        <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-2 clear-both">
                                            {exp.position[lang]}
                                        </h3>
                                        <p className="text-lg font-semibold text-neutral-700 dark:text-white/80 mb-1">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-neutral-600 dark:text-white/60 mb-2">
                                            {exp.location}
                                        </p>
                                        {exp.mention && (
                                            <p className="text-sm text-neutral-600 dark:text-white/60 mb-6 font-medium">
                                                {exp.mention[lang]}
                                            </p>
                                        )}
                                        {!exp.mention && <div className="mb-4"/>}

                                        {/* Description */}
                                        <div className="space-y-3 mb-6">
                                            {exp.description[lang].map((para, i) => (
                                                <p
                                                    key={i}
                                                    className="text-neutral-700 dark:text-white/80 leading-relaxed"
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        {exp.technologies && exp.technologies.length > 0 && (
                                            <div className="mb-4">
                                                <p className="text-sm font-semibold text-neutral-950 dark:text-white mb-2">
                                                    {t.technologies}
                                                </p>
                                                <div
                                                    className={`flex flex-wrap gap-2 ${
                                                        index % 2 === 0
                                                            ? "md:justify-end"
                                                            : "md:justify-start"
                                                    }`}
                                                >
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 bg-neutral-950/10 dark:bg-white/10 rounded-full text-sm text-neutral-950 dark:text-white"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Key points */}
                                        {exp.keyPoints && exp.keyPoints[lang].length > 0 && (
                                            <div className="border-t border-neutral-950/10 dark:border-white/10 pt-4">
                                                <p className="text-sm font-semibold text-neutral-950 dark:text-white mb-2">
                                                    {exp.type === "education" ? t.educationKeyPoints : t.workKeyPoints}
                                                </p>
                                                <ul
                                                    className={`space-y-1 ${
                                                        index % 2 === 0
                                                            ? "md:text-right"
                                                            : ""
                                                    }`}
                                                >
                                                    {exp.keyPoints[lang].map((point, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-neutral-700 dark:text-white/80"
                                                        >
                                                            {index % 2 === 0 ? (
                                                                <span>
                                                                    {point}{" "}
                                                                    <span className="hidden md:inline">
                                                                        •
                                                                    </span>
                                                                    <span className="md:hidden">
                                                                        • {point}
                                                                    </span>
                                                                </span>
                                                            ) : (
                                                                <span>• {point}</span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Links */}
                                        {exp.links && exp.links.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {exp.links.map((link) => {
                                                    const isInternal = link.url.startsWith("/");
                                                    return (
                                                        <a
                                                            key={link.url}
                                                            href={link.url}
                                                            {...(!isInternal && {
                                                                target: "_blank",
                                                                rel: "noopener noreferrer"
                                                            })}
                                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-950/30 dark:border-white/30 text-sm font-medium text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-colors duration-200"
                                                        >
                                                            {link.label[lang]} →
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right side (or left on odd items) - Image */}
                                <div
                                    className={`${
                                        index % 2 === 0 ? "md:order-2" : ""
                                    } flex justify-center`}
                                >
                                    {(() => {
                                        if (exp.image) {
                                            // Affichage en carré avec fond blanc pour les expériences professionnelles (logos)
                                            if (exp.type === "work") {
                                                return (
                                                    <div
                                                        className="w-64 h-64 bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-950/10 dark:border-white/10 flex items-center justify-center shadow-lg">
                                                        <div className="relative w-full h-full">
                                                            <Image
                                                                src={exp.image}
                                                                alt={`${exp.company} logo`}
                                                                width={256}
                                                                height={256}
                                                                className="object-contain w-full h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            // Affichage normal pour les formations (photos de bâtiments)
                                            return (
                                                <div className="w-full max-w-md">
                                                    <Image
                                                        src={exp.image}
                                                        alt={exp.company}
                                                        width={400}
                                                        height={300}
                                                        className="object-cover rounded-2xl border border-neutral-950/10 dark:border-white/10 shadow-lg w-full"
                                                    />
                                                </div>
                                            );
                                        }

                                        return null;
                                    })()}
                                </div>

                                {/* Timeline dot */}
                                <div
                                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-950 dark:bg-white rounded-full border-4 border-white dark:border-neutral-950 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
