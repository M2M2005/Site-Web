"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
    id: string;
    title: string;
    category: string;
    date: string;
    mainImage: string;
    description: string[];
    technologies: string[];
    keyPoints: string[];
    links?: { label: string; url: string }[];
    images?: string[];
    colSpan?: number;
    rowSpan?: number;
}

const projects: Project[] = [
    {
        id: "cypress-ecommerce",
        title: "Cypress E-Commerce",
        category: "Tests E2E | Projet Personnel",
        date: "Novembre 2025",
        mainImage: "/img/button_voir_details/shop-cypress/shop-cypress1.png",
        description: [
            "Projet de tests E2E avec Cypress pour tester un site web personnel de e-commerce.",
            "Tests couvrant le cycle complet : gestion des produits, authentification, panier, commandes et administration.",
            "Les tests couvrent l'ensemble du parcours utilisateur : création de produits par l'administrateur, inscription et connexion des utilisateurs, ajout au panier, passage de commande, suivi des statuts de commande et gestion des utilisateurs côté admin.",
        ],
        technologies: ["Cypress", "JavaScript", "Node.js"],
        keyPoints: [
            "Maîtrise des tests end-to-end avec Cypress",
            "Écriture de commandes Cypress personnalisées et réutilisables",
            "Automatisation de scénarios de tests complets",
        ],
        links: [
            { label: "GitHub", url: "https://github.com/M2M2005/shop-Cypress" },
            { label: "Vidéo démo", url: "https://www.youtube.com/watch?v=2esbW89tLiw" },
        ],
        images: [
            "/img/button_voir_details/shop-cypress/shop-cypress1.png",
            "/img/button_voir_details/shop-cypress/shop-cypress2.png",
            "/img/button_voir_details/shop-cypress/shop-cypress3.png",
            "/img/button_voir_details/shop-cypress/shop-cypress4.png",
        ],
        colSpan: 2,
        rowSpan: 2,
    },
    {
        id: "referendum",
        title: "Système de Référendums Sécurisés",
        category: "Développement d'Application | Universitaire",
        date: "Mai 2024",
        mainImage: "/img/button_voir_details/Referendum/referendum1.png",
        description: [
            "Système de référendums sécurisés permettant de gérer des votes cryptés et confidentiels avec l'algorithme Elgamal.",
            "J'ai également développé une suite de tests automatisés avec TestFX pour valider l'ensemble des parcours utilisateur.",
            "Ce projet s'articulait autour de deux axes majeurs : la cryptographie et la méthode agile.",
            "Nous avons sécurisé les référendums à l'aide de l'algorithme Elgamal. Parallèlement, afin d'assurer une bonne communication avec le client et de répondre au mieux à ses attentes, nous utilisions la méthode agile. Le projet était ainsi organisé en sprints de quatre semaines, et l'équipe se composait d'un Product Owner, d'un Scrum Master et de deux développeurs.",
            "J'ai conçu et développé seul une suite complète de tests automatisés avec TestFX. Ces tests simulent les interactions utilisateur sur l'interface JavaFX : connexion client et admin, création et suppression de référendums, parcours de vote complet, et vérification des résultats. Les tests sont paramétrés pour couvrir plusieurs scénarios de vote (Oui/Non/Égalité).",
        ],
        technologies: ["Java", "Cryptographie", "JavaFX", "TestFX"],
        keyPoints: [
            "Connexion des applications avec le serveur",
            "Implémentation des interfaces JavaFX",
            "Conception et développement seul de tests UI automatisés avec TestFX",
            "Automatisation des parcours utilisateur : connexion, vote, gestion admin",
            "Tests paramétrés couvrant plusieurs scénarios de vote (Voir vidéo)",
        ],
        links: [
            { label: "GitHub", url: "https://github.com/killianrms/Referendum" },
            { label: "Vidéo démo", url: "https://www.youtube.com/watch?v=F3I_4daMcuk" },
        ],
        images: [
            "/img/button_voir_details/Referendum/referendum1.png",
            "/img/button_voir_details/Referendum/referendum4.png",
            "/img/button_voir_details/Referendum/referendum2.png",
            "/img/button_voir_details/Referendum/referendum3.png",
            "/img/button_voir_details/Referendum/referendum5.png",
        ],
        colSpan: 1,
    },
    {
        id: "ecommerce",
        title: "Site E-Commerce de Parfums",
        category: "Développement Web | Projet Universitaire",
        date: "Novembre 2024",
        mainImage: "/img/button_voir_details/E-Commerce/E-Commerce0.png",
        description: [
            "Site e-commerce de vente de parfums développé en PHP avec architecture MVC et base de données MySQL.",
            "Gestion complète des utilisateurs, produits, paniers et commandes avec interface administrateur.",
            "Site permettant aux utilisateurs de parcourir une sélection de parfums, les ajouter au panier et passer commande.",
            "Interface utilisateur intuitive et panneau d'administration pour gérer produits et commandes. Architecture MVC (Modèle-Vue-Contrôleur).",
        ],
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
        keyPoints: [
            "Développement PHP (utilisateurs, produits, ventes)",
            "Conception et connexion à la base de données",
        ],
        links: [
            { label: "GitHub", url: "https://github.com/M2M2005/E-Commerce" },
        ],
        images: [
            "/img/button_voir_details/E-Commerce/E-Commerce0.png",
            "/img/button_voir_details/E-Commerce/E-Commerce2.png",
            "/img/button_voir_details/E-Commerce/E-Commerce1.png",
            "/img/button_voir_details/E-Commerce/E-Commerce3.png",
            "/img/button_voir_details/E-Commerce/E-Commerce4.png",
        ],
        colSpan: 1,
    },
    {
        id: "mediatheque",
        title: "Projet Médiathèque",
        category: "Développement Web | Projet Universitaire",
        date: "Mai 2025",
        mainImage: "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque1.png",
        description: [
            "Application web de gestion de médiathèque développée en JavaScript réactif.",
            "Gestion complète des emprunts, utilisateurs et retours de livres en temps réel.",
            "Application web pour gérer une médiathèque avec JavaScript réactif.",
            "Système complet de gestion des emprunts, utilisateurs et retours de livres avec interface dynamique et mise à jour en temps réel.",
        ],
        technologies: ["HTML", "CSS", "JS"],
        keyPoints: [],
        links: [
            { label: "GitHub", url: "https://github.com/M2M2005/ProjetMediatheque" },
        ],
        images: [
            "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque1.png",
            "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque2.png",
            "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque3.png",
            "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque4.png",
        ],
        colSpan: 1,
    },
    {
        id: "clicker",
        title: "Clicker Game",
        category: "Jeu Vidéo | Projet Personnel",
        date: "Juillet 2025",
        mainImage: "/img/button_voir_details/clicker-game/clicker-game2.png",
        description: [
            "Jeu de type \"clicker\" développé avec Angular où le joueur gagne des points et achète des améliorations progressives.",
            "Jeu développé en Angular avec interface réactive et animations immersives.",
            "Le joueur clique pour gagner des points puis achète des améliorations pour automatiser et accélérer les gains. Système de sauvegarde/chargement pour conserver la progression.",
        ],
        technologies: ["Angular", "TypeScript", "HTML", "CSS"],
        keyPoints: [],
        links: [
            { label: "Site web", url: "https://clicker-game.cyprienbons.com/" },
            { label: "GitHub", url: "https://github.com/M2M2005/Clicker-Game" },
        ],
        images: [
            "/img/button_voir_details/clicker-game/clicker-game1.png",
            "/img/button_voir_details/clicker-game/clicker-game2.png",
        ],
        colSpan: 1,
    },
    {
        id: "escalade",
        title: "Système de Scoring pour Compétition d'Escalade",
        category: "Sheets & Dev Web | Projet Personnel",
        date: "Actuellement",
        mainImage: "/img/button_voir_details/Competition_Escalade/competition_Escalade2.png",
        description: [
            "Système de calcul et affichage en temps réel des scores d'une compétition d'escalade sur page web.",
            "Calcul automatique des scores puis affichage temps réel sur page web via l'API Google Sheets (JavaScript).",
            "Boutons automatisés dans Sheets (Google Apps Script) pour créer des catégories, mettre à jour les formules et exporter les résultats en PDF. Système fonctionnel et utilisé en production.",
        ],
        technologies: ["Sheets", "Google Apps Script", "API Google Sheets", "JavaScript"],
        keyPoints: [],
        links: [
            { label: "Google Drive", url: "https://drive.google.com/drive/folders/1aXPQoZu6ZVLKaPpNFQsAJGHnI8vSY_jp?usp=sharing" },
            { label: "GitHub", url: "https://github.com/M2M2005/Site-Web" },
            { label: "Site web", url: "https://cobescalade.cyprienbons.com/" },
        ],
        images: [
            "/img/button_voir_details/Competition_Escalade/competition_Escalade2.png",
            "/img/button_voir_details/Competition_Escalade/competition_Escalade5.png",
            "/img/button_voir_details/Competition_Escalade/competition_Escalade3.png",
            "/img/button_voir_details/Competition_Escalade/competition_Escalade1.png",
            "/img/button_voir_details/Competition_Escalade/competition_Escalade4.png",
        ],
        colSpan: 1,
    },
    {
        id: "legendsbuster",
        title: "LegendsBuster",
        category: "Jeu Vidéo | Code Game Jam 2024",
        date: "Janvier 2024",
        mainImage: "/img/button_voir_details/LegendsBuster/legendsbuster3.png",
        description: [
            "Jeu vidéo de type plateformer \"die and retry\" développé en équipe lors de la Code Game Jam 2024 avec Unity.",
            "Première expérience avec Unity lors d'une game jam. Apprentissage des bases du développement de jeux vidéo.",
            "Conception complète des mécaniques de jeu et travail d'équipe pour relever les défis techniques dans un temps limité.",
        ],
        technologies: ["Unity"],
        keyPoints: [],
        links: [
            { label: "Google Drive", url: "https://drive.google.com/drive/folders/1kk-ehaBQmD1dpbDoX3wrNLLrJnqQw2BI?usp=drive_link" },
            { label: "Vidéo démo", url: "https://www.youtube.com/watch?v=Es5DpToufog" },
        ],
        images: [
            "/img/button_voir_details/LegendsBuster/legendsbuster3.png",
            "/img/button_voir_details/LegendsBuster/legendsbuster2.png",
            "/img/button_voir_details/LegendsBuster/legendsbuster1.png",
        ],
        colSpan: 1,
    },
];

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section
            id="projects"
            className="min-h-screen w-full bg-neutral-950 dark:bg-white py-20 px-4 md:px-6"
        >
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-neutral-950 mb-4">
                        Projets
                    </h2>
                    <div className="w-20 h-1 bg-white/20 dark:bg-neutral-950/20"></div>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-xl border border-white/10 dark:border-neutral-950/10 cursor-pointer
                                ${project.colSpan === 2 ? "md:col-span-2" : "col-span-1"}
                                ${project.rowSpan === 2 ? "md:row-span-2" : "row-span-1"}
                                hover:scale-[1.02] transition-all duration-300`}
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={project.mainImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent dark:from-white dark:via-white/60"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <div className="mb-3">
                                    <span className="text-xs font-semibold text-white/60 dark:text-neutral-950/60 uppercase tracking-wider">
                                        {project.category.split("|")[0].trim()}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white dark:text-neutral-950 mb-3 group-hover:text-white/90 dark:group-hover:text-neutral-950/90 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-white/80 dark:text-neutral-950/80 mb-4 line-clamp-2">
                                    {project.description[0]}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-white/10 dark:bg-neutral-950/10 backdrop-blur-sm rounded-full text-white dark:text-neutral-950"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 text-xs bg-white/10 dark:bg-neutral-950/10 backdrop-blur-sm rounded-full text-white dark:text-neutral-950">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-white dark:text-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sm font-semibold">Voir détails</span>
                                    <span>→</span>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-white/5 dark:bg-neutral-950/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="!rounded-lg max-w-5xl max-h-[90vh] overflow-hidden bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white p-0">
                    <div className="overflow-y-auto max-h-[90vh] p-6
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:bg-transparent
                        [&::-webkit-scrollbar-thumb]:bg-neutral-300
                        [&::-webkit-scrollbar-thumb]:dark:bg-neutral-700
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:hover:bg-neutral-400
                        [&::-webkit-scrollbar-thumb]:dark:hover:bg-neutral-600">
                        {selectedProject && (
                            <>
                            <DialogHeader className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <DialogTitle className="text-3xl md:text-4xl font-bold mb-3 pr-8">
                                            {selectedProject.title}
                                        </DialogTitle>
                                        <DialogDescription className="text-base text-neutral-600 dark:text-white/60 flex flex-wrap items-center gap-2">
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-white/10 rounded-full text-sm">
                                                {selectedProject.category.split("|")[0].trim()}
                                            </span>
                                            <span>•</span>
                                            <span>{selectedProject.date}</span>
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="space-y-8 mt-6">
                                {/* Main Image - Plus grande */}
                                <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl group">
                                    <Image
                                        src={selectedProject.mainImage}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Technologies en haut - Plus visibles */}
                                <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-6 border border-neutral-200 dark:border-white/10">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-4">
                                        Stack Technique
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-950/10 dark:border-white/10 rounded-md text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold flex items-center gap-2">
                                        <span className="w-1 h-6 bg-neutral-950 dark:bg-white rounded-full"></span>
                                        Description
                                    </h3>
                                    <div className="space-y-3 pl-4 border-l-2 border-neutral-200 dark:border-white/10">
                                        {selectedProject.description.map((para, i) => (
                                            <p key={i} className="text-neutral-700 dark:text-white/80 leading-relaxed text-base">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Points */}
                                {selectedProject.keyPoints.length > 0 && (
                                    <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-6 border border-neutral-200 dark:border-white/10">
                                        <h3 className="text-xl font-bold mb-4">Apports clés</h3>
                                        <ul className="space-y-3">
                                            {selectedProject.keyPoints.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center text-xs font-bold mt-0.5">
                                                        ✓
                                                    </span>
                                                    <span className="text-neutral-700 dark:text-white/80 leading-relaxed">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Galerie d'images améliorée */}
                                {selectedProject.images && selectedProject.images.length > 1 && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-neutral-950 dark:bg-white rounded-full"></span>
                                            Galerie
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedProject.images.slice(1).map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="relative h-56 md:h-64 rounded-lg overflow-hidden shadow-lg group cursor-pointer border border-neutral-200 dark:border-white/10"
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${selectedProject.title} screenshot ${i + 1}`}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Links avec icônes */}
                                {selectedProject.links && selectedProject.links.length > 0 && (
                                    <div className="border-t border-neutral-200 dark:border-white/10 pt-6">
                                        <h3 className="text-xl font-bold mb-4">Liens du projet</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.links.map((link) => (
                                                <Button
                                                    key={link.url}
                                                    asChild
                                                    className="bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-white/90"
                                                >
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2"
                                                    >
                                                        {link.label.toLowerCase().includes("github") && (
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                            </svg>
                                                        )}
                                                        {link.label.toLowerCase().includes("vidéo") && (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        )}
                                                        {link.label.toLowerCase().includes("site") && (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                            </svg>
                                                        )}
                                                        {!link.label.toLowerCase().includes("github") &&
                                                         !link.label.toLowerCase().includes("vidéo") &&
                                                         !link.label.toLowerCase().includes("site") && (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        )}
                                                        <span>{link.label}</span>
                                                    </a>
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
