"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const years = [
    {
        label: "BUT2",
        title: "Deuxième année",
        href: "/apprentissage/but2",
        competences: ["Optimiser des applications", "Gérer des données", "Conduire un projet"],
        description: "Compétences développées lors de la deuxième année, à travers les projets Référendum, E-commerce et le stage chez Orchestra - Travelsoft.",
    },
    {
        label: "BUT3",
        title: "Troisième année",
        href: "/apprentissage/but3",
        competences: ["Réaliser des applications", "Administrer des systèmes", "Collaborer en équipe"],
        description: "Compétences développées lors de la troisième année, parcours DACS, à travers les projets universitaires et l'alternance chez ITESOFT.",
    },
];

export function ApprentissageHubSection() {
    return (
        <section className="min-h-screen w-full bg-white dark:bg-neutral-950 py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-5xl">
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
                            <div className="w-20 h-1 bg-neutral-950/20 dark:bg-white/20 mb-6"></div>
                            <p className="text-neutral-600 dark:text-white/60 text-lg max-w-xl">
                                Retrouvez ici les apprentissages critiques développés au cours de mon BUT Informatique, année par année.
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-lg font-semibold hover:bg-neutral-800 dark:hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Revenir en arrière
                        </Link>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {years.map((year, index) => (
                        <motion.div
                            key={year.label}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Link href={year.href} className="group block h-full">
                                <div className="h-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 hover:border-neutral-400 dark:hover:border-white/30 hover:shadow-xl transition-all duration-300">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 mb-6">
                                        <span className="px-3 py-1 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-bold rounded-full">
                                            {year.label}
                                        </span>
                                        <span className="text-neutral-500 dark:text-white/50 text-sm font-medium">
                                            {year.title}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-600 dark:text-white/60 text-sm leading-relaxed mb-6">
                                        {year.description}
                                    </p>

                                    {/* Competences */}
                                    <ul className="space-y-2 mb-8">
                                        {year.competences.map((comp) => (
                                            <li key={comp} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-white/80">
                                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 dark:bg-white flex-shrink-0"></span>
                                                {comp}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white group-hover:gap-4 transition-all duration-300">
                                        Voir les apprentissages
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
