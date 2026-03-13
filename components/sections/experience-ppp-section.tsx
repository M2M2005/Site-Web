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
                    "Orchestra - TravelSoft est un éditeur de solution SaaS pour le secteur du tourisme, permettant aux agences de comparer et réserver des vols.",
                    "Mon stage s'est déroulé au sein de l'équipe QA, dans les locaux parisiens. Ma mission : concevoir des tests automatisés en Java avec Selenium pour valider l'intégration de nouvelles compagnies aériennes.",
                    "Les tests comparaient automatiquement les données XML (vols, bagages, suppléments) avec l'affichage web, sans intervention humaine. L'objectif était de structurer un framework générique, réutilisable pour toute nouvelle compagnie à intégrer.",
                ],
            },
            {
                id: "difficultes",
                label: "Difficultés rencontrées",
                content: [
                    "La première difficulté a été la prise en main d'une solution SaaS complexe. Avant d'écrire le moindre test, il fallait comprendre l'architecture globale, les formats IATA/XML et les conventions internes de l'équipe.",
                    "Première expérience en équipe QA professionnelle : découverte de Jira, Allure, revues de code. L'adaptation a été rapide mais exigeante.",
                    "Sur le plan personnel, travailler à Paris m'a sorti de ma zone de confort. Le rythme intense de la ville m'a confronté à un environnement professionnel stimulant et m'a appris l'autonomie et l'adaptation rapide.",
                ],
            },
            {
                id: "competences",
                label: "Compétences développées",
                content: [
                    "Compétences techniques : maîtrise de Selenium WebDriver (Java), compréhension des formats XML IATA, utilisation d'Allure (rapports visuels) et Jira (suivi des anomalies).",
                    "Compétences méthodologiques : conception d'un framework de tests réutilisable et maintenable, structuré pour fonctionner avec n'importe quelle compagnie aérienne. Initiation aux bonnes pratiques de conception en QA.",
                ],
            },
            {
                id: "bilan",
                label: "Bilan",
                content: [
                    "Ce stage a été le point de départ de mon orientation vers la QA. J'ai découvert un métier correspondant à ma façon de penser : rigueur, goût du détail et compréhension approfondie des systèmes.",
                    "L'expérience parisienne a été formatrice humainement : autonomie et capacité d'adaptation, qualités aussi importantes que les compétences techniques.",
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
                    "ITESOFT est un éditeur spécialisé dans la dématérialisation et la gestion de factures électroniques pour grandes entreprises. La solution couvre l'ensemble du cycle de vie : réception, traitement, validation et archivage.",
                    "Mission principale : développer des tests automatisés avec Cypress pour assurer la non-régression. Je crée des scénarios simulant le comportement utilisateur (dépôt, validation, suivi) qui s'exécutent automatiquement à chaque version.",
                    "Je développe également des workflows d'automatisation avec n8n pour déclencher des actions automatiques. L'ensemble s'effectue dans un environnement Docker versionné sur GitLab.",
                ],
            },
            {
                id: "difficultes",
                label: "Difficultés rencontrées",
                content: [
                    "Principale difficulté : intégrer une base de code complexe en production, avec conventions et architecture déjà établies. Contrairement à un projet universitaire construit de zéro, il faut s'adapter sans pouvoir tout redécouvrir.",
                    "L'environnement structuré (daily meetings, Azure DevOps, sprints) demande une organisation rigoureuse : planifier, rendre compte et adapter ses priorités selon les décisions de l'équipe.",
                ],
            },
            {
                id: "competences",
                label: "Compétences développées",
                content: [
                    "Compétences techniques : maîtrise approfondie de Cypress (tests E2E), découverte de n8n (workflows), consolidation de Docker et GitLab en contexte professionnel.",
                    "Gestion de projet : Azure DevOps (épiques, user stories), Microsoft Teams, cérémonies Agiles. Ces pratiques, non enseignées en cours, ont représenté un apprentissage aussi important que les compétences techniques.",
                ],
            },
            {
                id: "bilan",
                label: "Bilan",
                content: [
                    "Cette alternance confirme et approfondit l'orientation initiée chez Orchestra. Évoluer dans une équipe QA structurée sur une solution d'envergure me permet de mesurer la réalité du métier au quotidien.",
                    "Le QA, peu présent dans les cursus universitaires, n'est véritablement utile que sur des logiciels complexes. Y contribuer dès maintenant me donne une longueur d'avance et renforce mon projet de Master spécialisé en qualité logicielle.",
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
