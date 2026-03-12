"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnalysisBlock {
    id: string;
    label: string;
    content: string[];
}

interface ExperienceAnalysis {
    id: string;
    period: string;
    position: string;
    company: string;
    location: string;
    type: "stage" | "alternance";
    blocks: AnalysisBlock[];
}

const experiences: ExperienceAnalysis[] = [
    {
        id: "orchestra",
        period: "Février 2025 — Mars 2025 (8 semaines)",
        position: "Stage — Développeur QA",
        company: "Orchestra - TravelSoft",
        location: "Paris, France",
        type: "stage",
        blocks: [
            {
                id: "contexte",
                label: "Contexte et missions",
                content: [
                    "Orchestra - TravelSoft est un éditeur de solution SaaS destinée au secteur du tourisme. La plateforme permet aux agences de voyages de comparer et réserver des vols auprès de nombreuses compagnies aériennes. Mon stage s'est déroulé au sein de l'équipe QA, dans les locaux parisiens de l'entreprise.",
                    "Ma mission consistait à concevoir et implémenter des tests automatisés en Java avec Selenium pour valider l'intégration de nouvelles compagnies aériennes dans le logiciel. Concrètement, les tests comparaient automatiquement les données XML transmises par les compagnies (vols, bagages, suppléments tarifaires) avec ce qui s'affichait réellement sur l'interface web, sans aucune intervention humaine.",
                    "L'objectif était de structurer ces tests de façon générique, afin qu'un seul framework puisse être réutilisé pour toute nouvelle compagnie à intégrer.",
                ],
            },
            {
                id: "difficultes",
                label: "Difficultés rencontrées",
                content: [
                    "La première difficulté a été la prise en main d'une solution SaaS de grande envergure. Avant de pouvoir écrire le moindre test, il a fallu comprendre l'architecture globale du logiciel, les formats de données utilisés (IATA, XML), et les conventions internes de l'équipe.",
                    "C'était également ma première expérience dans une équipe QA professionnelle. Les méthodes de travail — gestion des tickets dans Jira, génération de rapports Allure, revues de code — étaient nouvelles pour moi et ont demandé une adaptation rapide.",
                    "Sur le plan personnel, travailler à Paris a représenté une découverte importante. Le rythme de la ville, très différent de Montpellier, est nettement plus intense. Cela m'a sorti de ma zone de confort, mais cette expérience s'est révélée très bénéfique : elle m'a confronté à un environnement professionnel stimulant et m'a appris à m'adapter rapidement à un nouveau cadre de vie.",
                ],
            },
            {
                id: "competences",
                label: "Compétences développées",
                content: [
                    "Sur le plan technique, j'ai acquis une maîtrise de Selenium WebDriver en Java pour l'automatisation de tests web, ainsi qu'une compréhension des formats d'échange de données dans le domaine aérien (XML IATA). J'ai également pris en main Allure pour la génération de rapports de tests visuels, et Jira pour le suivi des anomalies.",
                    "Sur le plan méthodologique, j'ai compris ce que signifie concevoir un framework de tests réutilisable et maintenable. La structuration générique des tests — pour qu'ils fonctionnent avec n'importe quelle compagnie aérienne — m'a initié aux bonnes pratiques de conception en QA.",
                ],
            },
            {
                id: "bilan",
                label: "Bilan",
                content: [
                    "Ce stage a été le point de départ de mon orientation vers la QA. En découvrant concrètement ce métier, j'ai réalisé qu'il correspondait à ma façon de penser : rigueur, goût du détail, et envie de comprendre les systèmes en profondeur avant de les tester.",
                    "L'expérience parisienne a aussi été formatrice humainement. Être immergé dans une grande ville active, loin de mes repères, m'a appris l'autonomie et la capacité d'adaptation — des qualités aussi importantes que les compétences techniques.",
                ],
            },
        ],
    },
    {
        id: "itesoft",
        period: "Septembre 2025 — Maintenant",
        position: "Alternance — Assistant Ingénieur QA",
        company: "ITESOFT",
        location: "Aimargues, France",
        type: "alternance",
        blocks: [
            {
                id: "contexte",
                label: "Contexte et missions",
                content: [
                    "ITESOFT est un éditeur de logiciels spécialisé dans la dématérialisation et la gestion de factures électroniques. La solution s'adresse à de grandes entreprises et couvre l'ensemble du cycle de vie d'une facture : réception, traitement automatisé, validation et archivage.",
                    "J'intègre l'équipe QA en tant qu'Assistant Ingénieur QA. Ma mission principale est de développer des tests automatisés avec Cypress pour assurer la non-régression de la solution. Je crée des scénarios qui simulent le comportement d'un utilisateur : dépôt de facture, validation, suivi de statut. Ces tests s'exécutent automatiquement à chaque nouvelle version pour détecter d'éventuelles régressions.",
                    "Je travaille également sur des workflows d'automatisation avec n8n, permettant de déclencher des séquences d'actions automatiques en réponse à des événements dans la solution. L'ensemble de ces développements s'effectue dans un environnement Docker, versionné sur GitLab.",
                ],
            },
            {
                id: "difficultes",
                label: "Difficultés rencontrées",
                content: [
                    "La principale difficulté a été l'intégration dans une base de code existante et complexe. Contrairement à un projet universitaire construit de zéro, rejoindre une solution logicielle en production implique de comprendre des conventions, une architecture et des dépendances déjà établies, sans pouvoir tout redécouvrir depuis le début.",
                    "L'environnement de travail structuré — daily meetings, Azure DevOps, sprints — demande aussi une organisation personnelle rigoureuse. Il faut être capable de planifier ses tâches, de rendre compte de son avancement et d'adapter ses priorités en fonction des décisions de l'équipe.",
                ],
            },
            {
                id: "competences",
                label: "Compétences développées",
                content: [
                    "Techniquement, j'ai approfondi Cypress pour les tests end-to-end, découvert n8n pour l'automatisation de workflows, et consolidé mon utilisation de Docker et GitLab dans un contexte professionnel réel.",
                    "J'ai aussi acquis une compréhension concrète de la gestion de projet en entreprise : utilisation d'Azure DevOps pour le suivi des épiques et user stories, communication via Microsoft Teams, et participation aux cérémonies agiles. Ces outils et pratiques ne sont pas enseignés en cours — les découvrir en situation réelle a été un apprentissage aussi important que les compétences techniques.",
                ],
            },
            {
                id: "bilan",
                label: "Bilan",
                content: [
                    "Cette alternance confirme et approfondit l'orientation initiée lors du stage Orchestra. Le fait d'évoluer dans une équipe QA structurée, sur une solution d'envergure, me permet de mesurer la réalité du métier au quotidien.",
                    "Le QA est un domaine peu présent dans les cursus universitaires, précisément parce qu'il n'est véritablement utile que dans des équipes travaillant sur des logiciels complexes. Y contribuer dès maintenant me donne une longueur d'avance significative, et renforce mon projet de poursuivre en Master spécialisé en qualité logicielle.",
                ],
            },
        ],
    },
];

export function ExperiencePPPSection() {
    return (
        <section className="min-h-screen w-full bg-white dark:bg-neutral-950 py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white mb-4">
                                Analyse des expériences
                            </h1>
                            <div className="w-20 h-1 bg-neutral-950/20 dark:bg-white/20"></div>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-lg font-semibold hover:bg-neutral-800 dark:hover:bg-white/90 transition-all duration-300 shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Retour
                        </Link>
                    </div>
                    <p className="text-lg text-neutral-600 dark:text-white/60 leading-relaxed max-w-2xl">
                        Analyse détaillée de mon stage chez Orchestra - TravelSoft et de mon alternance chez ITESOFT, deux expériences complémentaires qui ont forgé mon orientation vers la QA.
                    </p>
                </motion.div>

                {/* Expériences */}
                <div className="space-y-28">
                    {experiences.map((exp, expIndex) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            id={exp.id}
                        >
                            {/* En-tête expérience */}
                            <div className="flex items-start gap-5 mb-10 pb-8 border-b border-neutral-950/10 dark:border-white/10">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-neutral-950 dark:bg-white flex items-center justify-center">
                                    <span className="text-white dark:text-neutral-950 font-bold text-lg">
                                        {expIndex + 1}
                                    </span>
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                                            exp.type === "stage"
                                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                                : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                        }`}>
                                            {exp.type === "stage" ? "Stage" : "Alternance"}
                                        </span>
                                        <span className="text-sm text-neutral-500 dark:text-white/50">{exp.period}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-neutral-950 dark:text-white">{exp.company}</h2>
                                    <p className="text-neutral-600 dark:text-white/60 mt-1">{exp.position} · {exp.location}</p>
                                </div>
                            </div>

                            {/* Blocs d'analyse */}
                            <div className="space-y-10">
                                {exp.blocks.map((block, blockIndex) => (
                                    <motion.div
                                        key={block.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: blockIndex * 0.08 }}
                                    >
                                        <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-4 flex items-center gap-3">
                                            <span className="w-6 h-6 rounded-full border-2 border-neutral-950 dark:border-white flex items-center justify-center text-xs font-bold text-neutral-950 dark:text-white flex-shrink-0">
                                                {blockIndex + 1}
                                            </span>
                                            {block.label}
                                        </h3>
                                        <div className="pl-9 space-y-3 border-l-2 border-neutral-950/10 dark:border-white/10 ml-3">
                                            {block.content.map((para, i) => (
                                                <p key={i} className="text-neutral-700 dark:text-white/80 leading-relaxed">
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 pt-8 border-t border-neutral-950/10 dark:border-white/10 flex flex-wrap gap-4 justify-between items-center"
                >
                    <Link
                        href="/apprentissage"
                        className="inline-flex items-center gap-2 text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white transition-colors font-medium"
                    >
                        Voir aussi : Apprentissage Critique →
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-950/20 dark:border-white/20 text-neutral-950 dark:text-white rounded-lg font-medium hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-colors"
                    >
                        ← Retour au portfolio
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
