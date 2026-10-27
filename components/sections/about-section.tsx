"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/components/sections/projects-section";
import { useLanguage } from "@/lib/i18n";

const texts = {
    fr: {
        title: "À propos",
        intro: "Ingénieur QA Automation chez ITESOFT avec plus d'un an d'expérience dans la conception et l'implémentation de tests automatisés end-to-end pour logiciels d'entreprise. Je me spécialise dans l'automatisation de tests avec Cypress et JavaScript, avec une expertise supplémentaire en Selenium et frameworks de test basés sur Java.",
        work: "Chez ITESOFT, j'ai mené l'industrialisation des workflows de tests automatisés, implémenté des pipelines CI/CD intégrant les tests Cypress avec Node.js. Durant mon stage à Orchestra à Paris, j'ai développé des suites de tests automatisés avec Selenium et Java pour le logiciel de gestion de voyages. Je suis actuellement en Master Cybersécurité et Réseaux au CNAM Montpellier, après avoir obtenu mon BUT Informatique à l'IUT de Montpellier.",
        goal: "Passionné par la qualité logicielle et l'automatisation des tests, je cherche à approfondir mon expertise en test automation, cybersécurité et pratiques DevOps pour contribuer à la création de systèmes robustes et fiables.",
        age: "Ans",
        projects: "Projets",
        experience: "Expérience",
        months: "mois",
        phone: "Tél:",
        downloadCv: "Voir mon CV",
        climbingTitle: "Escalade",
        climbingPeriod: "2018 - Maintenant",
        climbing: [
            "J'ai commencé l'escalade en 2018 au club de Bellegarde. Ce sport m'a permis de me dépasser et de me surpasser.",
            "J'ai eu l'opportunité de participer à des compétitions et à des événements liés à l'escalade, ce qui m'a aidé à développer mon esprit d'équipe et mon sens de la compétition.",
            "Ce sport m'a permis de prendre conscience de mes responsabilités envers les autres.",
        ],
    },
    en: {
        title: "About",
        intro: "QA Automation Engineer at ITESOFT with over a year of experience designing and implementing end-to-end automated tests for enterprise software. I specialize in Cypress and JavaScript test automation, with additional expertise in Selenium and Java-based testing frameworks.",
        work: "At ITESOFT, I led the industrialization of automated testing workflows, implementing CI/CD pipelines that integrated Cypress tests with Node.js. During my internship at Orchestra in Paris, I built automated test suites using Selenium and Java for travel management software. I am currently pursuing a Master's in Cybersecurity and Networks at CNAM Montpellier, after earning my BUT in Computer Science from IUT Montpellier.",
        goal: "Passionate about software quality and test automation, I'm seeking to deepen my expertise in test automation, cybersecurity, and DevOps practices to contribute to building robust and reliable systems.",
        age: "Years old",
        projects: "Projects",
        experience: "Experience",
        months: "months",
        phone: "Phone:",
        downloadCv: "View my CV",
        climbingTitle: "Climbing",
        climbingPeriod: "2018 - Present",
        climbing: [
            "I started climbing in 2018 at the Bellegarde club. This sport has pushed me to go beyond my limits.",
            "I had the opportunity to take part in climbing competitions and events, which helped me develop my team spirit and my competitive drive.",
            "This sport has also made me aware of my responsibilities towards others.",
        ],
    },
};

// Calcul automatique de l'âge
function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Calcul automatique de l'expérience en mois
function calculateExperienceMonths(startDate: Date): number {
    const today = new Date();
    const months = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());
    return months;
}

export function AboutSection() {
    const { lang } = useLanguage();
    const t = texts[lang];
    const age = calculateAge(new Date(2005, 8, 17)); // 17/09/2005 (mois en JS: 0=janvier, 8=septembre)
    const experienceMonths = calculateExperienceMonths(new Date(2025, 8, 1)) + 2; // 01/09/2025 (ITESOFT) + 2 mois de stage (Orchestra)
    const projectsCount = projects.length; // Compte automatiquement les projets

    const stats = [
        { label: t.age, value: age },
        { label: t.projects, value: projectsCount },
        { label: t.experience, value: experienceMonths, unit: t.months },
    ];

    return (
        <section
            id="about"
            className="min-h-screen w-full bg-neutral-950 dark:bg-white py-20 px-4 md:px-6 flex items-center"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-neutral-950 mb-4">
                        {t.title}
                    </h2>
                    <div className="w-20 h-1 bg-white/20 dark:bg-neutral-950/20"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center items-center"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 dark:from-neutral-950/20 dark:to-neutral-950/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                            <div className="relative overflow-hidden rounded-2xl border-4 border-white/10 dark:border-neutral-950/10 shadow-2xl">
                                <Image
                                    src="/img/cyprien.jpg"
                                    alt="Cyprien Bons"
                                    width={400}
                                    height={500}
                                    className="object-cover w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-white/90 dark:text-neutral-950/90 leading-relaxed">
                            {t.intro}
                        </p>

                        <p className="text-lg text-white/90 dark:text-neutral-950/90 leading-relaxed">
                            {t.work}
                        </p>

                        <p className="text-lg text-white/90 dark:text-neutral-950/90 leading-relaxed">
                            {t.goal}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 dark:bg-neutral-950/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-neutral-950/10 text-center hover:border-white/20 dark:hover:border-neutral-950/20 transition-all duration-300"
                                >
                                    <div className="text-3xl font-bold text-white dark:text-neutral-950 mb-1">
                                        {stat.value}
                                        {stat.unit && <span className="text-xl ml-1">{stat.unit}</span>}
                                    </div>
                                    <div className="text-sm text-white/60 dark:text-neutral-950/60 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact info */}
                        <div className="pt-6 space-y-3 border-t border-white/10 dark:border-neutral-950/10">
                            <div className="flex items-center gap-3 text-white/80 dark:text-neutral-950/80">
                                <span className="font-semibold">Email:</span>
                                <a
                                    href="mailto:contact@cyprienbons.com"
                                    className="hover:text-white dark:hover:text-neutral-950 transition-colors"
                                >
                                    contact@cyprienbons.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-white/80 dark:text-neutral-950/80">
                                <span className="font-semibold">{t.phone}</span>
                                <a
                                    href="tel:+33768512006"
                                    className="hover:text-white dark:hover:text-neutral-950 transition-colors"
                                >
                                    07 68 51 20 06
                                </a>
                            </div>
                        </div>

                        {/* CV Link */}
                        <div className="pt-6">
                            <a
                                href="/cv"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white rounded-lg font-semibold hover:bg-white/90 dark:hover:bg-neutral-950/90 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                {t.downloadCv}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Passion Escalade */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20"
                >
                    <div className="bg-white/5 dark:bg-neutral-950/5 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-neutral-950/10 p-8 md:p-12 hover:border-white/20 dark:hover:border-neutral-950/20 transition-all duration-300">
                        <div className="space-y-4">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold text-white dark:text-neutral-950 mb-2">
                                    {t.climbingTitle}
                                </h3>
                                <p className="text-white/60 dark:text-neutral-950/60 font-semibold">
                                    {t.climbingPeriod}
                                </p>
                            </div>

                            <div className="space-y-3 text-white/90 dark:text-neutral-950/90 leading-relaxed">
                                {t.climbing.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
