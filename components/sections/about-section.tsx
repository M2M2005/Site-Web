"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/components/sections/projects-section";
import { useLanguage } from "@/lib/i18n";

const texts = {
    fr: {
        title: "À propos",
        intro: "Diplômé d'un BUT Informatique (parcours Réseau & CyberSécurité) à l'IUT de Montpellier-Sète, je suis désormais en Master Informatique, parcours Sécurité informatique, cybersécurité et cybermenaces, au CNAM de Montpellier. J'y développe un esprit analytique et un sens aigu du détail. Cette rigueur me permet d'identifier rapidement les problèmes complexes et d'y apporter des solutions créatives.",
        work: "Actuellement en alternance chez ITESOFT au sein de l'équipe Quality Assurance, je conçois et améliore des processus de tests automatisés pour garantir la qualité des produits livrés. La Quality Assurance s'impose naturellement comme mon domaine de prédilection. Elle allie exigence technique et impact concret, où chaque test représente une garantie supplémentaire pour l'utilisateur final.",
        goal: "Mon objectif : allier la rigueur de la Quality Assurance et l'expertise en cybersécurité pour contribuer à des logiciels à la fois fiables et sûrs.",
        age: "Ans",
        projects: "Projets",
        experience: "Expérience",
        months: "mois",
        phone: "Tél:",
        downloadCv: "Télécharger mon CV",
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
        intro: "After earning a Bachelor's degree in Computer Science (BUT, Networks & Cybersecurity track) at the IUT of Montpellier-Sète, I am now studying for a Master's in Computer Science, specializing in IT security, cybersecurity and cyber threats, at the CNAM in Montpellier. There I am developing an analytical mindset and a keen eye for detail. This rigor helps me quickly identify complex problems and find creative solutions to them.",
        work: "Currently a work-study student at ITESOFT in the Quality Assurance team, I design and improve automated testing processes to ensure the quality of delivered products. Quality Assurance has naturally become my field of choice. It combines technical rigor with real-world impact, where every test is one more guarantee for the end user.",
        goal: "My goal: to combine the rigor of Quality Assurance with cybersecurity expertise to help build software that is both reliable and secure.",
        age: "Years old",
        projects: "Projects",
        experience: "Experience",
        months: "months",
        phone: "Phone:",
        downloadCv: "Download my CV",
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

                        {/* CV Download */}
                        <div className="pt-6">
                            <a
                                href="/docs/CV_BONS.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
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
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
