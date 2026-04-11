"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface LearningItem {
    title: string;
    content: string;
    projectName?: string;
}

export interface LearningSection {
    id: string;
    title: string;
    items: LearningItem[];
    composantes: string[];
    apprentissages: string[];
}

interface Props {
    badge: string;
    subtitle: string;
    data: LearningSection[];
}

export function ApprentissageLayout({ badge, subtitle, data }: Props) {
    return (
        <section className="min-h-screen w-full bg-white dark:bg-neutral-950 py-20 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-bold rounded-full">
                                    {badge}
                                </span>
                                <span className="text-neutral-600 dark:text-white/60 text-sm font-medium">
                                    {subtitle}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white mb-4">
                                Apprentissage Critique
                            </h1>
                            <div className="w-20 h-1 bg-neutral-950/20 dark:bg-white/20"></div>
                        </div>
                        <Link
                            href="/apprentissage"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-lg font-semibold hover:bg-neutral-800 dark:hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Revenir en arrière
                        </Link>
                    </div>
                </motion.div>

                <div className="space-y-16">
                    {data.map((section, sectionIndex) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                            id={section.id}
                        >
                            <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
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
                                            {item.projectName && (
                                                <span className="inline-block mb-3 px-2.5 py-1 text-xs font-semibold bg-neutral-200 dark:bg-white/10 text-neutral-700 dark:text-white/70 rounded-full">
                                                    {item.projectName}
                                                </span>
                                            )}
                                            <p className="text-neutral-700 dark:text-white/80 leading-relaxed">
                                                {item.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="lg:sticky lg:top-24 h-fit">
                                    <div className="bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-xl p-6 space-y-6">
                                        <h3 className="text-2xl font-bold">En détails</h3>

                                        <div>
                                            <h4 className="text-lg font-bold mb-3">Composantes essentielles :</h4>
                                            <ul className="space-y-2">
                                                {section.composantes.map((comp, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm opacity-90">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white dark:bg-neutral-950 flex-shrink-0"></span>
                                                        <span>{comp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-white/20 dark:border-neutral-950/20">
                                            <h4 className="text-lg font-bold mb-3">Apprentissages critiques :</h4>
                                            <ul className="space-y-2">
                                                {section.apprentissages.map((appr, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm opacity-90">
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
