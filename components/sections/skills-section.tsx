"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Skill {
    name: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        title: "Langages de programmation",
        skills: [
            { name: "HTML/CSS" },
            { name: "Java / JavaFX" },
            { name: "SQL / PL SQL" },
            { name: "PHP" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "C" },
            { name: "Google Apps Script" },
        ],
    },
    {
        title: "Outils",
        skills: [
            { name: "Selenium" },
            { name: "Cypress" },
            { name: "Docker" },
            { name: "GitLab" },
            { name: "GitHub" },
            { name: "CI/CD" },
            { name: "Node.js" },
            { name: "Jet Brain" },
            { name: "Jira" },
            { name: "n8n" },
            { name: "Bash" },
            { name: "Linux" },
            { name: "Excel" },
        ],
    },
    {
        title: "Langues",
        skills: [
            { name: "Français (Natif)" },
            { name: "Anglais (B2)" },
        ],
    },
];

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-950 dark:text-white rounded-full text-sm font-medium hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-colors duration-200 cursor-default"
        >
            {skill.name}
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
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-6 pb-3 border-b border-neutral-950/10 dark:border-white/10">
                                {category.title}
                            </h3>

                            {/* Skills Badges */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, index) => (
                                    <SkillBadge key={skill.name} skill={skill} index={index} />
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
