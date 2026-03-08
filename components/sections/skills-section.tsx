"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface Skill {
    name: string;
    level: number;
    label?: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        title: "Langages de programmation",
        skills: [
            { name: "HTML/CSS", level: 100 },
            { name: "Java / JavaFX", level: 100 },
            { name: "SQL / PL SQL", level: 90 },
            { name: "PHP", level: 75 },
            { name: "JavaScript", level: 70 },
            { name: "C", level: 60 },
            { name: "Google Apps Script", level: 45 },
        ],
    },
    {
        title: "Outils",
        skills: [
            { name: "Suite Google", level: 100 },
            { name: "Jet Brain", level: 100 },
            { name: "GitHub", level: 100 },
            { name: "Linux", level: 95 },
            { name: "Excel", level: 95 },
            { name: "Jira", level: 80 },
        ],
    },
    {
        title: "Langues",
        skills: [
            { name: "Français", level: 100, label: "Natif" },
            { name: "Anglais", level: 35, label: "B2" },
        ],
    },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-6"
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-neutral-950 dark:text-white">
                    {skill.name}
                </span>
                <span className="text-sm text-neutral-600 dark:text-white/60">
                    {skill.label || `${skill.level}%`}
                </span>
            </div>
            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neutral-950 to-neutral-700 dark:from-white dark:to-white/80 rounded-full"
                />
            </div>
        </motion.div>
    );
}

export function SkillsSection() {
    return (
        <section
            id="skills"
            className="min-h-screen w-full bg-white dark:bg-neutral-950 py-20 px-4 md:px-6"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-950 dark:text-white mb-4">
                        Compétences
                    </h2>
                    <div className="w-20 h-1 bg-neutral-950/20 dark:bg-white/20"></div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-12">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            className="space-y-6"
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-8 pb-3 border-b border-neutral-950/10 dark:border-white/10">
                                {category.title}
                            </h3>

                            {/* Skills */}
                            <div>
                                {category.skills.map((skill, index) => (
                                    <SkillBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio d'apprentissage link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-neutral-700 dark:text-white/80 mb-4">
                        Le portfolio d'apprentissage détaille le lien entre les compétences de la troisième année de BUT et les projets réalisés.
                    </p>
                    <Link
                        href="/apprentissage"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-full font-semibold hover:bg-neutral-800 dark:hover:bg-white/90 transition-colors"
                    >
                        Voir le portfolio d'apprentissage
                        <span>→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
