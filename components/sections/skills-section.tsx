"use client";

import { motion } from "framer-motion";
import { useLanguage, type Localized } from "@/lib/i18n";

interface Skill {
    name: string | Localized;
}

interface SkillCategory {
    title: Localized;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        title: { fr: "Langages", en: "Languages" },
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
        title: { fr: "Tests & Qualité", en: "Testing & Quality" },
        skills: [
            { name: "Selenium" },
            { name: "Cypress" },
            { name: "Jira" },
            { name: "n8n" },
            { name: "Azure DevOps" },
        ],
    },
    {
        title: { fr: "DevOps", en: "DevOps" },
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
        title: { fr: "Langues", en: "Spoken languages" },
        skills: [
            { name: { fr: "Français (Natif)", en: "French (Native)" } },
            { name: { fr: "Anglais (B2)", en: "English (B2)" } },
        ],
    },
];

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
    const { lang } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="w-full px-5 py-2.5 bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white rounded-xl text-base font-semibold hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-all duration-300 cursor-default shadow-md hover:shadow-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-950 dark:hover:border-white"
        >
            {typeof skill.name === "string" ? skill.name : skill.name[lang]}
        </motion.div>
    );
}

const texts = {
    fr: { title: "Compétences" },
    en: { title: "Skills" },
};

export function SkillsSection() {
    const { lang } = useLanguage();
    const t = texts[lang];

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
                        {t.title}
                    </h2>
                    <div className="w-20 h-1 bg-neutral-950/20 dark:bg-white/20"></div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title.fr}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        >
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-8 pb-4 border-b-2 border-neutral-950/20 dark:border-white/20">
                                {category.title[lang]}
                            </h3>

                            {/* Skills Badges */}
                            <div className="flex flex-col gap-3">
                                {category.skills.map((skill, index) => (
                                    <SkillBadge key={index} skill={skill} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
