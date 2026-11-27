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
            { name: "Angular" },
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

interface SoftSkill {
    name: Localized;
    proof: Localized;
    link?: { href: string; label: Localized };
}

const itesoftLink = { href: "/experience#itesoft", label: { fr: "Voir ITESOFT", en: "See ITESOFT" } };
const letterLink = {
    href: "/docs/Recommandation_Cyprien_Bons_ITESOFT.pdf",
    label: { fr: "Confirmé par mon tuteur", en: "Confirmed by my supervisor (letter in French)" },
};

const softSkillsData: SoftSkill[] = [
    {
        name: { fr: "Travail en équipe", en: "Teamwork" },
        proof: {
            fr: "Référent Cypress d'une équipe QA de 5 · une arrivante formée (2 semaines, puis 3 mois de suivi)",
            en: "Cypress lead in a 5-person QA team · trained a new member (2 weeks, then 3 months of mentoring)",
        },
        link: letterLink,
    },
    {
        name: { fr: "Communication", en: "Communication" },
        proof: {
            fr: "5 à 10 tickets de bug par mois · cas complexes expliqués directement aux développeurs",
            en: "5 to 10 bug tickets a month · complex cases explained directly to developers",
        },
        link: letterLink,
    },
    {
        name: { fr: "Esprit critique", en: "Critical thinking" },
        proof: {
            fr: "Spécifications remises en question au regard du besoin réel du client",
            en: "Specifications challenged against the client's real needs",
        },
        link: itesoftLink,
    },
    {
        name: { fr: "Autonomie", en: "Autonomy" },
        proof: {
            fr: "Framework de tests Selenium conçu seul en 8 semaines · validation réduite de 10 jours à 10 minutes",
            en: "Selenium test framework built on my own in 8 weeks · validation cut from 10 days to 10 minutes",
        },
        link: { href: "/experience#orchestra", label: { fr: "Voir Orchestra", en: "See Orchestra" } },
    },
    {
        name: { fr: "Confiance en soi et gestion du stress", en: "Self-confidence and stress management" },
        proof: {
            fr: "Escalade depuis 2018, en compétition · sang-froid en hauteur et sécurité vérifiée avant chaque voie",
            en: "Climbing since 2018, including competitions · composure at height and safety checked before every route",
        },
        link: { href: "#about", label: { fr: "Voir l'escalade", en: "See climbing" } },
    },
    {
        name: { fr: "Sens de la sécurité", en: "Security mindset" },
        proof: {
            fr: "Certifié RGPD par la CNIL · portfolio mis en conformité · Master en cybersécurité",
            en: "GDPR-certified by the CNIL · portfolio brought into compliance · Master's in cybersecurity",
        },
        link: { href: "#certifications", label: { fr: "Voir la certification", en: "See the certificate" } },
    },
];

interface Certification {
    title: Localized;
    issuer: string;
    date: Localized;
    modules: { name: Localized; score: number; file: string }[];
}

const certificationsData: Certification[] = [
    {
        title: { fr: "MOOC « L'atelier RGPD »", en: "MOOC \"L'atelier RGPD\" (GDPR)" },
        issuer: "CNIL",
        date: { fr: "Décembre 2024", en: "December 2024" },
        modules: [
            { name: { fr: "Le RGPD et ses notions clés", en: "GDPR and its key concepts" }, score: 93, file: "/docs/certifications/CNIL_RGPD_Module_1.pdf" },
            { name: { fr: "Les principes de la protection des données", en: "Data protection principles" }, score: 88, file: "/docs/certifications/CNIL_RGPD_Module_2.pdf" },
            { name: { fr: "Les responsabilités des acteurs", en: "Responsibilities of stakeholders" }, score: 89, file: "/docs/certifications/CNIL_RGPD_Module_3.pdf" },
            { name: { fr: "Le DPO et les outils de la conformité", en: "The DPO and compliance tools" }, score: 93, file: "/docs/certifications/CNIL_RGPD_Module_4.pdf" },
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
    fr: { title: "Compétences", softSkills: "Soft skills", certifications:"Certifications", module: "Module", view: "Voir l'attestation" },
    en: { title: "Skills", softSkills: "Soft skills", certifications:"Certifications", module: "Module", view: "View certificate" },
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

                {/* Soft skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-8 pb-4 border-b-2 border-neutral-950/20 dark:border-white/20">
                        {t.softSkills}
                    </h3>

                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {softSkillsData.map((skill) => (
                            <li
                                key={skill.name.fr}
                                className="flex flex-col gap-2 p-5 bg-white dark:bg-neutral-900 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-800"
                            >
                                <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
                                    {skill.name[lang]}
                                </h4>
                                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                    {skill.proof[lang]}
                                </p>
                                {skill.link && (
                                    <a
                                        href={skill.link.href}
                                        {...(skill.link.href.endsWith(".pdf") && {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                        })}
                                        className="mt-auto pt-1 text-sm font-semibold text-neutral-950 dark:text-white underline underline-offset-4 decoration-neutral-950/30 dark:decoration-white/30 hover:decoration-current"
                                    >
                                        {skill.link.label[lang]} →
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    id="certifications"
                    className="mt-20 scroll-mt-24"
                >
                    <h3 className="text-2xl font-bold text-neutral-950 dark:text-white mb-8 pb-4 border-b-2 border-neutral-950/20 dark:border-white/20">
                        {t.certifications}
                    </h3>

                    {certificationsData.map((cert) => (
                        <div
                            key={cert.title.fr}
                            className="p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md border border-neutral-200 dark:border-neutral-800"
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
                                <h4 className="text-xl font-bold text-neutral-950 dark:text-white">
                                    {cert.title[lang]}
                                    <span className="font-semibold text-neutral-500 dark:text-neutral-400"> · {cert.issuer}</span>
                                </h4>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">{cert.date[lang]}</span>
                            </div>

                            <ul className="grid sm:grid-cols-2 gap-3">
                                {cert.modules.map((mod, i) => (
                                    <li key={mod.file}>
                                        <a
                                            href={mod.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={t.view}
                                            className="flex items-center justify-between gap-4 h-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-white hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-colors duration-300"
                                        >
                                            <span>
                                                <span className="block text-xs uppercase tracking-wide opacity-60">
                                                    {t.module} {i + 1}
                                                </span>
                                                <span className="font-semibold">{mod.name[lang]}</span>
                                            </span>
                                            <span className="text-lg font-bold tabular-nums">{mod.score}%</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
