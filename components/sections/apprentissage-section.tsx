"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface LearningItem {
    title: string;
    content: string;
    projectLink?: string;
    projectName?: string;
}

interface LearningSection {
    id: string;
    title: string;
    items: LearningItem[];
    composantes: string[];
    apprentissages: string[];
}

const learningData: LearningSection[] = [
    {
        id: "optimiser",
        title: "Optimiser des applications",
        items: [
            {
                title: "Choisir des structures de données complexes adaptées au problème",
                content: "J'ai choisi une base de données relationnelle pour gérer efficacement les produits, utilisateurs et commandes, car elle permettait de bien lier ces éléments. Cette expérience m'a permis d'acquérir une méthodologie d'évaluation des besoins pour choisir la structure de données la plus adaptée.",
                projectLink: "#ecommerce",
                projectName: "projet e-commerce",
            },
            {
                title: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
                content: "J'ai utilisé Elgamal pour chiffrer les votes envoyés au serveur. Cette mise en pratique m'a permis de maîtriser l'application d'algorithmes de cryptographie pour sécuriser les informations sensibles, révélant ainsi l'importance fondamentale de la sécurité en développement.",
                projectLink: "#referendum",
                projectName: "projet référendum",
            },
            {
                title: "Comprendre les enjeux et moyens de sécurisation des données et du code",
                content: "La sécurité des données était cruciale. Ce projet m'a permis de développer ma capacité à identifier les vulnérabilités et à mettre en œuvre des mesures de protection adaptées : chiffrement, validation des entrées, prévention des injections SQL. C'est en affrontant ces enjeux concrets que j'ai pleinement intégré l'importance de la sécurisation.",
                projectLink: "#ecommerce",
                projectName: "projet e-commerce",
            },
            {
                title: "Évaluer l'impact environnemental et sociétal des solutions proposées",
                content: "Dans mes projets, j'ai pris conscience de l'impact environnemental de l'informatique. Le développement de LegendsBuster illustre cette démarche éco-responsable : code optimisé, consommation énergétique réduite et taille minimale pour garantir une accessibilité maximale.",
                projectLink: "#legendsbuster",
                projectName: "LegendsBuster",
            },
        ],
        composantes: [
            "Formaliser et modéliser des situations complexes",
            "Recenser les algorithms et les structures de données usuelles",
            "S'appuyer sur des schémas de raisonnement",
            "Justifier les choix et valider les résultats",
        ],
        apprentissages: [
            "Comprendre les enjeux et moyens de sécurisation des données et du code",
            "Anticiper les résultats de diverses métriques",
            "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application",
        ],
    },
    {
        id: "gerer",
        title: "Gérer des données de l'information",
        items: [
            {
                title: "Optimiser les modèles de données de l'entreprise",
                content: "J'ai conçu des modèles de données adaptés, en utilisant PlantUML pour des diagrammes de classes et de séquence afin de bien comprendre les liens entre les éléments.",
                projectLink: "#referendum",
                projectName: "projet référendum",
            },
            {
                title: "Assurer la confidentialité des données",
                content: "J'ai sécurisé les données sensibles en utilisant Elgamal pour les votes, en gérant les accès par rôle et en hachant les mots de passe avec du sel.",
                projectLink: "#referendum",
                projectName: "projets référendum et e-commerce",
            },
            {
                title: "Organiser la restitution de données à travers la programmation et la visualisation",
                content: "J'ai utilisé PHP pour créer des pages web dynamiques qui affichaient les infos des produits et des utilisateurs.",
                projectLink: "#ecommerce",
                projectName: "projet e-commerce",
            },
            {
                title: "Manipuler des données hétérogènes",
                content: "Pendant mon stage chez Orchestra - Travelsoft, j'ai récupéré des données au format IATA (aérien) et je les ai comparées avec des données internes de l'entreprise. Cette expérience m'a permis de développer mes compétences en gestion et harmonisation de données hétérogènes provenant de sources multiples.",
                projectLink: "#orchestra",
                projectName: "Orchestra - Travelsoft",
            },
        ],
        composantes: [
            "Respecter les réglementations sur le respect de la vie privée et la protection des données personnelles",
            "Respectant les enjeux économiques, sociétaux et écologiques de l'utilisation du stockage de données, ainsi que les différentes infrastructures",
            "S'appuyer sur des bases mathématiques",
            "Assurer la cohérence et la qualité",
        ],
        apprentissages: [
            "Lancer un nouveau projet",
            "Sécuriser des données",
            "Exploiter des données pour la prise de décisions",
        ],
    },
    {
        id: "conduire",
        title: "Conduire un projet",
        items: [
            {
                title: "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
                content: "Durant mon stage chez Orchestra - Travelsoft, pour mon projet de stage, j'ai dû mieux comprendre les processus de l'entreprise. Pour pouvoir proposer des améliorations sur le système d'information de l'entreprise.",
                projectLink: "#orchestra",
                projectName: "Orchestra - Travelsoft",
            },
            {
                title: "Formaliser les besoins du client et de l'utilisateur",
                content: "Nous devions communiquer avec le client pour bien comprendre ses besoins et s'assurer que le système de vote répondait à ses attentes. Cette collaboration m'a permis de développer mes compétences en communication : poser les questions pertinentes, reformuler pour valider la compréhension mutuelle et garantir l'alignement entre tous les acteurs du projet.",
                projectLink: "#referendum",
                projectName: "projet référendum",
            },
            {
                title: "Identifier les critères de faisabilité d'un projet informatique",
                content: "J'ai dû évaluer la faisabilité technique et économique du projet. Cette démarche m'a conduit à développer une approche structurée d'analyse des ressources nécessaires, des contraintes temporelles et budgétaires, afin de valider la viabilité du projet.",
                projectLink: "#ecommerce",
                projectName: "projet e-commerce",
            },
            {
                title: "Définir et mettre en œuvre une démarche de suivi de projet",
                content: "J'ai utilisé l'outil de gestion de projet sur GitHub pour suivre l'avancement du projet. La création d'issues et l'assignation de tâches m'ont permis de mettre en pratique une gestion rigoureuse du temps et des ressources, garantissant ainsi le respect des objectifs et des délais.",
                projectLink: "#ecommerce",
                projectName: "projet e-commerce",
            },
        ],
        composantes: [
            "Communiquer efficacement avec les différents acteurs d'un projet",
            "Respecter les règles juridiques et les normes en vigueur",
            "Sensibiliser à une gestion éthique, responsable, durable et interculturelle",
            "Adopter une démarche proactive, créative et critique",
        ],
        apprentissages: [
            "Lancer un nouveau projet",
            "Piloter le maintien d'un projet en condition opérationnelle",
            "Faire évoluer un système d'information",
        ],
    },
];

export function ApprentissageSection() {
    return (
        <section className="min-h-screen w-full bg-white dark:bg-neutral-950 py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white mb-4">
                                Apprentissage Critique
                            </h1>
                            <div className="w-20 h-1 bg-neutral-950/20 dark:bg-white/20"></div>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-lg font-semibold hover:bg-neutral-800 dark:hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Revenir en arrière
                        </Link>
                    </div>
                </motion.div>

                {/* Learning Sections */}
                <div className="space-y-16">
                    {learningData.map((section, sectionIndex) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                            id={section.id}
                        >
                            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
                                {/* Main Content */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-2 h-12 bg-neutral-950 dark:bg-white rounded-full"></div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white">
                                            {section.title}
                                        </h2>
                                    </div>

                                    {section.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="bg-neutral-50 dark:bg-white/5 rounded-xl p-6 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300"
                                        >
                                            <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-neutral-700 dark:text-white/80 leading-relaxed">
                                                {item.projectName && (
                                                    <>
                                                        Pour le{" "}
                                                        <Link
                                                            href={`/${item.projectLink}`}
                                                            className="text-neutral-950 dark:text-white font-semibold underline hover:no-underline"
                                                        >
                                                            {item.projectName}
                                                        </Link>
                                                        , {item.content}
                                                    </>
                                                )}
                                                {!item.projectName && item.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Sidebar Details */}
                                <div className="lg:sticky lg:top-24 h-fit">
                                    <div className="bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-xl p-6 space-y-6">
                                        <h3 className="text-2xl font-bold">En détails</h3>

                                        <div>
                                            <h4 className="text-lg font-bold mb-3">
                                                Composantes essentielles :
                                            </h4>
                                            <ul className="space-y-2">
                                                {section.composantes.map((comp, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm opacity-90"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-950 flex-shrink-0"></span>
                                                        <span>{comp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-white/20 dark:border-neutral-950/20">
                                            <h4 className="text-lg font-bold mb-3">
                                                Apprentissages critiques :
                                            </h4>
                                            <ul className="space-y-2">
                                                {section.apprentissages.map((appr, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm opacity-90"
                                                    >
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-950 flex-shrink-0"></span>
                                                        <span>{appr}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
