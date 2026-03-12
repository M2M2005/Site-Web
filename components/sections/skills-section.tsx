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
        title: "Langages",
        skills: [
            { name: "HTML/CSS" },
            { name: "Java / JavaFX" },
            { name: "SQL / PL SQL" },
            { name: "PHP" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "C" },
            { name: "Google Apps Script" },
            { name: "Bash" },
        ],
    },
    {
        title: "Tests & Qualité",
        skills: [
            { name: "Selenium" },
            { name: "Cypress" },
            { name: "Jira" },
            { name: "n8n" },
            { name: "Azure DevOps" },
        ],
    },
    {
        title: "DevOps",
        skills: [
            { name: "Docker" },
            { name: "GitLab" },
            { name: "GitHub" },
            { name: "CI/CD" },
            { name: "Node.js" },
            { name: "JetBrains" },
            { name: "Linux" },
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="w-full px-5 py-2.5 bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white rounded-xl text-base font-semibold hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-300 cursor-default shadow-md hover:shadow-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-950 dark:hover:border-white"
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
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-8 pb-4 border-b-2 border-neutral-950/20 dark:border-white/20">
                                {category.title}
                            </h3>

                            {/* Skills Badges */}
                            <div className="flex flex-col gap-3">
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
                    className="mt-20"
                >
                    <Link
                        href="/apprentissage"
                        className="group flex items-center justify-between w-full p-6 rounded-2xl border border-neutral-950/15 dark:border-white/15 hover:border-neutral-950/30 dark:hover:border-white/30 hover:bg-neutral-950/5 dark:hover:bg-white/5 transition-all duration-300"
                    >
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-1">
                                Portfolio Académique
                            </p>
                            <p className="text-xl font-bold text-neutral-950 dark:text-white">
                                Apprentissage Critique
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-white/60 mt-1">
                                Optimiser, Gérer, Conduire — compétences acquises et projets analysés
                            </p>
                        </div>
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                            →
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
