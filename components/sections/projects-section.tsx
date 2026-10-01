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
import { useLanguage, type Localized } from "@/lib/i18n";

function getYouTubeId(url: string): string | null {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
}

type ProjectImage = { src: string; caption: Localized };

type LinkType = "github" | "video" | "website" | "drive";

const linkLabels: Record<LinkType, Localized> = {
    github: { fr: "GitHub", en: "GitHub" },
    video: { fr: "Vidéo démo", en: "Demo video" },
    website: { fr: "Site web", en: "Website" },
    drive: { fr: "Google Drive", en: "Google Drive" },
};

const texts = {
    fr: {
        title: "Projets",
        seeDetails: "Voir détails",
        techStack: "Stack Technique",
        description: "Description",
        team: "Équipe :",
        person: "personne",
        people: "personnes",
        duration: "Durée :",
        collaborators: "Collaborateurs :",
        challenges: "Difficultés rencontrées",
        keyPoints: "Apports clés",
        gallery: "Galerie",
        links: "Liens du projet",
    },
    en: {
        title: "Projects",
        seeDetails: "See details",
        techStack: "Tech Stack",
        description: "Description",
        team: "Team:",
        person: "person",
        people: "people",
        duration: "Duration:",
        collaborators: "Collaborators:",
        challenges: "Challenges",
        keyPoints: "Key takeaways",
        gallery: "Gallery",
        links: "Project links",
    },
};

function ModalCarousel({ images, title }: { images: ProjectImage[]; title: string }) {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
    const next = () => setCurrent((c) => (c + 1) % images.length);

    return (
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
                src={images[current].src}
                alt={`${title} ${current + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
            />
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                    >
                        ←
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                    >
                        →
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    i === current ? "bg-white" : "bg-white/40"
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

interface Project {
    id: string;
    title: Localized;
    category: Localized;
    typeProjet: Localized;
    nombrePersonnes: number;
    tempsRealisation: Localized;
    collaborateurs?: string[];
    date: Localized;
    mainImage: string;
    description: Localized<string[]>;
    technologies: string[];
    keyPoints: Localized<string[]>;
    challenges?: Localized<string[]>;
    links?: { type: LinkType; url: string }[];
    images?: ProjectImage[];
    videoCaption?: Localized;
    colSpan?: number;
    rowSpan?: number;
}

export const projects: Project[] = [
    {
        id: "cypress-ecommerce",
        title: { fr: "Cypress E-Commerce", en: "Cypress E-Commerce" },
        category: { fr: "Tests E2E | Projet Personnel", en: "E2E Testing | Personal Project" },
        typeProjet: { fr: "Personnel", en: "Personal" },
        nombrePersonnes: 1,
        tempsRealisation: { fr: "1 Mois", en: "1 month" },
        date: { fr: "Novembre 2025", en: "November 2025" },
        mainImage: "/img/button_voir_details/shop-cypress/shop-cypress1.png",
        description: {
            fr: [
                "Suite de tests E2E avec Cypress pour valider un site web de e-commerce développé en parallèle.",
                "Couverture complète du cycle utilisateur : création de produits (admin), inscription, connexion, gestion du panier, passage de commande et suivi des statuts.",
                "Chaque scénario teste une fonctionnalité critique, garantissant la fiabilité de l'application à chaque déploiement.",
            ],
            en: [
                "An E2E test suite built with Cypress to validate an e-commerce website developed alongside it.",
                "Full coverage of the user journey: product creation (admin), sign-up, login, cart management, checkout and order status tracking.",
                "Each scenario tests a critical feature, ensuring the application stays reliable with every deployment.",
            ],
        },
        technologies: ["Cypress", "JavaScript", "Node.js"],
        keyPoints: {
            fr: [
                "Maîtrise des tests end-to-end avec Cypress",
                "Écriture de commandes Cypress personnalisées et réutilisables",
                "Automatisation de scénarios de tests complets",
            ],
            en: [
                "Proficiency in end-to-end testing with Cypress",
                "Writing custom, reusable Cypress commands",
                "Automating complete test scenarios",
            ],
        },
        challenges: {
            fr: [
                "Gestion de l'asynchronisme dans Cypress : comprendre et maîtriser les mécanismes de retry et d'attente automatique pour des tests stables.",
                "Structuration des tests pour éviter les duplications : création de commandes personnalisées réutilisables pour maintenir un code de test maintenable.",
                "Gestion des états de l'application : réinitialiser la base de données entre chaque test pour garantir l'indépendance et la reproductibilité des scénarios.",
            ],
            en: [
                "Handling asynchrony in Cypress: understanding and mastering its retry and automatic waiting mechanisms to get stable tests.",
                "Structuring tests to avoid duplication: creating reusable custom commands to keep the test code maintainable.",
                "Managing application state: resetting the database between tests to keep scenarios independent and reproducible.",
            ],
        },
        links: [
            { type: "github", url: "https://github.com/M2M2005/shop-Cypress" },
            { type: "video", url: "https://www.youtube.com/watch?v=2esbW89tLiw" },
        ],
        videoCaption: {
            fr: "Cette vidéo présente l'exécution automatisée des tests Cypress couvrant l'ensemble du parcours utilisateur : connexion, ajout au panier, passage de commande et validation côté administrateur.",
            en: "This video shows the automated Cypress tests running through the entire user journey: login, adding to cart, checkout and validation on the admin side.",
        },
        images: [
            { src: "/img/button_voir_details/shop-cypress/shop-cypress1.png", caption: { fr: "Page accueil", en: "Home page" } },
            { src: "/img/button_voir_details/shop-cypress/shop-cypress2.png", caption: { fr: "Page connexion", en: "Login page" } },
            { src: "/img/button_voir_details/shop-cypress/shop-cypress3.png", caption: { fr: "Page Dashbord Administrateur - gestion produit", en: "Admin dashboard - product management" } },
            { src: "/img/button_voir_details/shop-cypress/shop-cypress4.png", caption: { fr: "Page achat produit", en: "Product purchase page" } },
        ],
        colSpan: 2,
        rowSpan: 2,
    },
    {
        id: "referendum",
        title: { fr: "Système de Référendums Sécurisés", en: "Secure Referendum System" },
        category: { fr: "Développement d'Application | Universitaire", en: "Application Development | University" },
        typeProjet: { fr: "Académique", en: "Academic" },
        nombrePersonnes: 4,
        tempsRealisation: { fr: "6 Mois", en: "6 months" },
        collaborateurs: ["Raphaël RIVAS", "Maël NICOLAS", "Killian RAMUS"],
        date: { fr: "Mai 2024", en: "May 2024" },
        mainImage: "/img/button_voir_details/Referendum/referendum1.png",
        description: {
            fr: [
                "Système de référendums sécurisés avec cryptographie Elgamal, développé en méthode Agile.",
                "Le projet alliait deux enjeux majeurs : sécuriser les votes via le chiffrement asymétrique et collaborer efficacement avec le client (Product Owner) à travers des sprints de quatre semaines.",
                "J'ai conçu une suite complète de tests automatisés avec TestFX, simulant les interactions utilisateur (connexion, vote, gestion admin) et couvrant plusieurs scénarios paramétrés (Oui/Non/Égalité). Cette démarche garantissait la fiabilité de l'application à chaque itération.",
            ],
            en: [
                "A secure referendum system using ElGamal cryptography, developed with an Agile methodology.",
                "The project combined two major challenges: securing votes with asymmetric encryption and working effectively with the client (Product Owner) through four-week sprints.",
                "I designed a complete automated test suite with TestFX, simulating user interactions (login, voting, admin management) and covering several parameterized scenarios (Yes/No/Tie). This approach ensured the application stayed reliable at every iteration.",
            ],
        },
        technologies: ["Java", "Cryptographie", "JavaFX", "TestFX"],
        keyPoints: {
            fr: [
                "Connexion des applications avec le serveur",
                "Implémentation des interfaces JavaFX",
                "Conception et développement seul de tests UI automatisés avec TestFX",
                "Automatisation des parcours utilisateur : connexion, vote, gestion admin",
                "Tests paramétrés couvrant plusieurs scénarios de vote (Voir vidéo)",
            ],
            en: [
                "Connecting the applications to the server",
                "Implementing the JavaFX interfaces",
                "Designing and developing automated UI tests with TestFX on my own",
                "Automating user journeys: login, voting, admin management",
                "Parameterized tests covering several voting scenarios (see video)",
            ],
        },
        challenges: {
            fr: [
                "Implémentation de l'algorithme Elgamal : première approche de la cryptographie asymétrique, comprendre le chiffrement et le déchiffrement de données sensibles.",
                "Coordination en méthode Agile : apprentissage de la gestion de projet en sprints, communication régulière avec le client (Product Owner) et ajustements itératifs.",
                "Tests automatisés avec TestFX : découverte du framework, simulation des interactions utilisateur sur JavaFX et gestion des délais d'attente pour les éléments d'interface.",
                "Synchronisation client-serveur : gérer les communications réseau et assurer la cohérence des données entre les différentes instances de l'application.",
            ],
            en: [
                "Implementing the ElGamal algorithm: a first approach to asymmetric cryptography, understanding how sensitive data is encrypted and decrypted.",
                "Agile coordination: learning sprint-based project management, communicating regularly with the client (Product Owner) and making iterative adjustments.",
                "Automated testing with TestFX: discovering the framework, simulating user interactions in JavaFX and handling wait times for UI elements.",
                "Client-server synchronization: managing network communication and keeping data consistent across the different application instances.",
            ],
        },
        links: [
            { type: "github", url: "https://github.com/killianrms/Referendum" },
            { type: "video", url: "https://www.youtube.com/watch?v=F3I_4daMcuk" },
        ],
        videoCaption: {
            fr: "Cette vidéo montre les tests automatisés TestFX en action : connexion client et admin, création d'un référendum, vote et vérification des résultats décryptés.",
            en: "This video shows the automated TestFX tests in action: client and admin login, creating a referendum, voting and checking the decrypted results.",
        },
        images: [
            { src: "/img/button_voir_details/Referendum/referendum1.png", caption: { fr: "Page connexion", en: "Login page" } },
            { src: "/img/button_voir_details/Referendum/referendum4.png", caption: { fr: "Page admin création référendum", en: "Admin page - referendum creation" } },
            { src: "/img/button_voir_details/Referendum/referendum2.png", caption: { fr: "Page scrutateur", en: "Scrutineer page" } },
            { src: "/img/button_voir_details/Referendum/referendum3.png", caption: { fr: "Page connexion scrutateur", en: "Scrutineer login page" } },
            { src: "/img/button_voir_details/Referendum/referendum5.png", caption: { fr: "Page vote référendum", en: "Referendum voting page" } },
        ],
        colSpan: 1,
    },
    {
        id: "ecommerce",
        title: { fr: "Site E-Commerce de Parfums", en: "Perfume E-Commerce Website" },
        category: { fr: "Développement Web | Projet Universitaire", en: "Web Development | University Project" },
        typeProjet: { fr: "Académique", en: "Academic" },
        nombrePersonnes: 2,
        tempsRealisation: { fr: "1 Mois", en: "1 month" },
        collaborateurs: ["Killian RAMUS"],
        date: { fr: "Novembre 2024", en: "November 2024" },
        mainImage: "/img/button_voir_details/E-Commerce/E-Commerce0.png",
        description: {
            fr: [
                "Site e-commerce de vente de parfums développé en PHP avec architecture MVC et base de données MySQL.",
                "Fonctionnalités complètes : parcours de produits, gestion du panier, passage de commande (utilisateur) et administration des produits et commandes (admin).",
                "Première mise en pratique de l'architecture MVC, de la sécurisation des données (requêtes préparées, hashage) et de la gestion des sessions.",
            ],
            en: [
                "An e-commerce website selling perfumes, built in PHP with an MVC architecture and a MySQL database.",
                "Full feature set: product browsing, cart management, checkout (user) and product and order management (admin).",
                "My first hands-on use of the MVC architecture, data security (prepared statements, hashing) and session management.",
            ],
        },
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
        keyPoints: {
            fr: [
                "Développement PHP (utilisateurs, produits, ventes)",
                "Conception et connexion à la base de données",
            ],
            en: [
                "PHP development (users, products, sales)",
                "Database design and connection",
            ],
        },
        challenges: {
            fr: [
                "Architecture MVC en PHP : première application du pattern Modèle-Vue-Contrôleur, séparation des responsabilités et organisation du code.",
                "Sécurisation de l'application : prévention des injections SQL avec requêtes préparées, hashage des mots de passe et gestion sécurisée des sessions.",
                "Gestion du panier et des commandes : maintenir la cohérence entre le panier en session et les données en base de données lors du processus d'achat.",
            ],
            en: [
                "MVC architecture in PHP: first use of the Model-View-Controller pattern, separation of concerns and code organization.",
                "Securing the application: preventing SQL injection with prepared statements, hashing passwords and managing sessions securely.",
                "Cart and order management: keeping the session cart consistent with the database during the purchase process.",
            ],
        },
        links: [
            { type: "github", url: "https://github.com/M2M2005/E-Commerce" },
        ],
        images: [
            { src: "/img/button_voir_details/E-Commerce/E-Commerce0.png", caption: { fr: "Page accueil", en: "Home page" } },
            { src: "/img/button_voir_details/E-Commerce/E-Commerce2.png", caption: { fr: "Page information profil", en: "Profile information page" } },
            { src: "/img/button_voir_details/E-Commerce/E-Commerce1.png", caption: { fr: "Page admin modification produit", en: "Admin page - product editing" } },
            { src: "/img/button_voir_details/E-Commerce/E-Commerce3.png", caption: { fr: "Page panier utilisateur", en: "User cart page" } },
            { src: "/img/button_voir_details/E-Commerce/E-Commerce4.png", caption: { fr: "Page modification information utilisateur", en: "User information editing page" } },
        ],
        colSpan: 1,
    },
    {
        id: "mediatheque",
        title: { fr: "Projet Médiathèque", en: "Media Library Project" },
        category: { fr: "Développement Web | Projet Universitaire", en: "Web Development | University Project" },
        typeProjet: { fr: "Académique", en: "Academic" },
        nombrePersonnes: 2,
        tempsRealisation: { fr: "1 Semaine", en: "1 week" },
        collaborateurs: ["Killian RAMUS"],
        date: { fr: "Mai 2025", en: "May 2025" },
        mainImage: "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque1.png",
        description: {
            fr: [
                "Application web de gestion de médiathèque développée en JavaScript réactif.",
                "Fonctionnalités : gestion des emprunts, suivi des utilisateurs et retours de livres, le tout avec mise à jour dynamique de l'interface en temps réel sans rechargement de page.",
                "Ce projet m'a permis de découvrir la programmation réactive et la synchronisation automatique entre les données et le DOM.",
            ],
            en: [
                "A media library management web application built with reactive JavaScript.",
                "Features: loan management, user tracking and book returns, all with a dynamic interface that updates in real time without reloading the page.",
                "This project introduced me to reactive programming and automatic synchronization between data and the DOM.",
            ],
        },
        technologies: ["HTML", "CSS", "JS"],
        keyPoints: { fr: [], en: [] },
        challenges: {
            fr: [
                "JavaScript réactif : mise à jour automatique de l'interface en temps réel lors des modifications de données sans rechargement de page.",
                "Gestion de l'état applicatif : synchroniser les données entre le DOM et la logique JavaScript pour refléter instantanément les emprunts et retours.",
                "Structure de données optimale : choisir et manipuler efficacement les structures JavaScript pour gérer les relations entre livres, utilisateurs et emprunts.",
            ],
            en: [
                "Reactive JavaScript: automatically updating the interface in real time when data changes, without reloading the page.",
                "Managing application state: synchronizing data between the DOM and the JavaScript logic to reflect loans and returns instantly.",
                "Choosing the right data structures: selecting and handling JavaScript structures efficiently to manage the relationships between books, users and loans.",
            ],
        },
        links: [
            { type: "github", url: "https://github.com/M2M2005/ProjetMediatheque" },
        ],
        images: [
            { src: "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque1.png", caption: { fr: "Page accueil", en: "Home page" } },
            { src: "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque2.png", caption: { fr: "Information des livres empruntés par un utilisateur", en: "Books borrowed by a user" } },
            { src: "/img/button_voir_details/Projet_Mediatheque/projet_mediatheque3.png", caption: { fr: "Information sur le livre emprunté", en: "Borrowed book details" } },
        ],
        colSpan: 1,
    },
    {
        id: "clicker",
        title: { fr: "Clicker Game", en: "Clicker Game" },
        category: { fr: "Jeu Vidéo | Projet Personnel", en: "Video Game | Personal Project" },
        typeProjet: { fr: "Personnel", en: "Personal" },
        nombrePersonnes: 1,
        tempsRealisation: { fr: "2 Semaine", en: "2 weeks" },
        date: { fr: "Juillet 2025", en: "July 2025" },
        mainImage: "/img/button_voir_details/clicker-game/clicker-game2.png",
        description: {
            fr: [
                "Jeu de type \"clicker\" développé avec Angular : le joueur clique pour gagner des points, puis achète des améliorations pour automatiser et accélérer les gains.",
                "Interface réactive avec animations immersives et système de sauvegarde/chargement (LocalStorage) pour conserver la progression entre les sessions.",
                "Ce projet m'a permis de découvrir Angular, ses composants, services et data binding tout en gérant les performances liées aux mises à jour fréquentes.",
            ],
            en: [
                "A \"clicker\" game built with Angular: the player clicks to earn points, then buys upgrades to automate and speed up their earnings.",
                "A reactive interface with immersive animations and a save/load system (LocalStorage) to keep progress between sessions.",
                "This project introduced me to Angular, its components, services and data binding, while handling the performance impact of frequent updates.",
            ],
        },
        technologies: ["Angular", "TypeScript", "HTML", "CSS"],
        keyPoints: { fr: [], en: [] },
        challenges: {
            fr: [
                "Découverte d'Angular : apprentissage du framework, des composants, des services et du data binding pour créer une application réactive.",
                "Gestion de la persistence des données : implémenter un système de sauvegarde/chargement avec le LocalStorage pour conserver la progression du joueur.",
                "Optimisation des performances : gérer les mises à jour fréquentes de l'interface (compteurs, animations) sans impacter la fluidité de l'application.",
            ],
            en: [
                "Discovering Angular: learning the framework, its components, services and data binding to build a reactive application.",
                "Data persistence: implementing a save/load system with LocalStorage to keep the player's progress.",
                "Performance optimization: handling frequent interface updates (counters, animations) without hurting the application's smoothness.",
            ],
        },
        links: [
            { type: "website", url: "https://clicker-game.cyprienbons.com/" },
            { type: "github", url: "https://github.com/M2M2005/Clicker-Game" },
        ],
        images: [
            { src: "/img/button_voir_details/clicker-game/clicker-game1.png", caption: { fr: "Page accueil", en: "Home page" } },
            { src: "/img/button_voir_details/clicker-game/clicker-game2.png", caption: { fr: "Page de jeu", en: "Game page" } },
        ],
        colSpan: 1,
    },
    {
        id: "escalade",
        title: { fr: "Système de Scoring pour Compétition d'Escalade", en: "Climbing Competition Scoring System" },
        category: { fr: "Sheets & Dev Web | Projet Personnel", en: "Sheets & Web Dev | Personal Project" },
        typeProjet: { fr: "Personnel", en: "Personal" },
        nombrePersonnes: 1,
        tempsRealisation: { fr: "2 Mois", en: "2 months" },
        date: { fr: "Actuellement", en: "Ongoing" },
        mainImage: "/img/button_voir_details/Competition_Escalade/competition_Escalade2.png",
        description: {
            fr: [
                "Système de calcul et affichage en temps réel des scores d'une compétition d'escalade, développé pour être utilisé en production lors de vraies compétitions.",
                "Calcul automatique des scores via Google Sheets (formules dynamiques) puis affichage temps réel sur page web via l'API Google Sheets (JavaScript).",
                "Boutons automatisés (Google Apps Script) pour créer les catégories, mettre à jour les formules et exporter les résultats en PDF, réduisant considérablement le temps de gestion manuel.",
            ],
            en: [
                "A system that calculates and displays climbing competition scores in real time, built to be used in production at real competitions.",
                "Scores are calculated automatically in Google Sheets (dynamic formulas), then displayed in real time on a web page through the Google Sheets API (JavaScript).",
                "Automated buttons (Google Apps Script) create categories, update formulas and export results to PDF, greatly reducing manual management time.",
            ],
        },
        technologies: ["Sheets", "Google Apps Script", "API Google Sheets", "JavaScript"],
        keyPoints: { fr: [], en: [] },
        challenges: {
            fr: [
                "Intégration API Google Sheets : comprendre l'authentification OAuth et la manipulation de données via l'API pour l'affichage temps réel sur le web.",
                "Google Apps Script : apprentissage du langage et de ses spécificités pour automatiser les tâches répétitives (création catégories, génération PDF).",
                "Fiabilité en production : gérer les cas limites et les erreurs potentielles car le système est utilisé lors de vraies compétitions d'escalade avec contraintes de temps.",
                "Formules dynamiques dans Sheets : créer des formules qui s'adaptent automatiquement aux nouvelles catégories et participants sans intervention manuelle.",
            ],
            en: [
                "Google Sheets API integration: understanding OAuth authentication and handling data through the API for real-time display on the web.",
                "Google Apps Script: learning the language and its specifics to automate repetitive tasks (creating categories, generating PDFs).",
                "Reliability in production: handling edge cases and potential errors, since the system is used at real climbing competitions under time pressure.",
                "Dynamic formulas in Sheets: creating formulas that automatically adapt to new categories and participants without manual intervention.",
            ],
        },
        links: [
            { type: "drive", url: "https://drive.google.com/drive/folders/1aXPQoZu6ZVLKaPpNFQsAJGHnI8vSY_jp?usp=sharing" },
            { type: "github", url: "https://github.com/M2M2005/CobEscalade" },
            { type: "website", url: "https://ceb.cyprienbons.com/" },
        ],
        images: [
            { src: "/img/button_voir_details/Competition_Escalade/competition_Escalade1.png", caption: { fr: "Site résultat", en: "Results website" } },
            { src: "/img/button_voir_details/Competition_Escalade/competition_Escalade2.png", caption: { fr: "Excel page information", en: "Spreadsheet - information page" } },
            { src: "/img/button_voir_details/Competition_Escalade/competition_Escalade3.png", caption: { fr: "Excel résultat", en: "Spreadsheet - results" } },
            { src: "/img/button_voir_details/Competition_Escalade/competition_Escalade4.png", caption: { fr: "Site résultat", en: "Results website" } },
            { src: "/img/button_voir_details/Competition_Escalade/competition_Escalade5.png", caption: { fr: "Excel insertion données", en: "Spreadsheet - data entry" } },
        ],
        colSpan: 1,
    },
    {
        id: "legendsbuster",
        title: { fr: "LegendsBuster", en: "LegendsBuster" },
        category: { fr: "Jeu Vidéo | Code Game Jam 2024", en: "Video Game | Code Game Jam 2024" },
        typeProjet: { fr: "Code Game Jam", en: "Code Game Jam" },
        nombrePersonnes: 5,
        tempsRealisation: { fr: "1 Jours", en: "1 day" },
        collaborateurs: ["Raphaël RIVAS", "Maël NICOLAS", "Killian RAMUS", "Vincent CALATRABA"],
        date: { fr: "Janvier 2024", en: "January 2024" },
        mainImage: "/img/button_voir_details/LegendsBuster/legendsbuster3.png",
        description: {
            fr: [
                "Jeu vidéo de type plateformer \"die and retry\" développé en équipe lors de la Code Game Jam 2024 avec Unity.",
                "Première expérience avec Unity : découverte des GameObjects, Components et Prefabs en 48h, avec conception complète des mécaniques de jeu.",
                "Challenge principal : développer un jeu complet en temps limité tout en coordonnant les tâches de l'équipe et en équilibrant la difficulté pour rendre le jeu challengeant sans être frustrant.",
            ],
            en: [
                "A \"die and retry\" platformer video game built as a team with Unity during the Code Game Jam 2024.",
                "My first experience with Unity: learning GameObjects, Components and Prefabs in 48 hours, while designing all the game mechanics.",
                "Main challenge: building a complete game in limited time while coordinating the team's tasks and balancing the difficulty so the game is challenging without being frustrating.",
            ],
        },
        technologies: ["Unity"],
        keyPoints: { fr: [], en: [] },
        challenges: {
            fr: [
                "Découverte de Unity : première expérience avec le moteur de jeu, apprentissage des concepts de GameObjects, Components et Prefabs en temps limité.",
                "Gestion du temps de la Game Jam : développer un jeu complet en 48h, prioriser les fonctionnalités essentielles et accepter de couper certaines idées.",
                "Travail d'équipe sous pression : coordonner les tâches, communiquer efficacement et intégrer le travail de chacun malgré les contraintes de temps.",
                "Mécaniques \"die and retry\" : équilibrer la difficulté pour rendre le jeu challengeant mais pas frustrant, tester et ajuster les niveaux.",
            ],
            en: [
                "Discovering Unity: my first experience with the game engine, learning the concepts of GameObjects, Components and Prefabs in limited time.",
                "Managing Game Jam time: building a complete game in 48 hours, prioritizing essential features and accepting to cut some ideas.",
                "Teamwork under pressure: coordinating tasks, communicating effectively and integrating everyone's work despite the time constraints.",
                "\"Die and retry\" mechanics: balancing the difficulty so the game is challenging but not frustrating, testing and adjusting the levels.",
            ],
        },
        links: [
            { type: "drive", url: "https://drive.google.com/drive/folders/1kk-ehaBQmD1dpbDoX3wrNLLrJnqQw2BI?usp=drive_link" },
            { type: "video", url: "https://www.youtube.com/watch?v=Es5DpToufog" },
        ],
        videoCaption: {
            fr: "Cette vidéo présente le gameplay de LegendsBuster, jeu platformer die and retry développé en équipe en 48h lors de la Code Game Jam 2024 avec Unity.",
            en: "This video shows the gameplay of LegendsBuster, a die and retry platformer built as a team in 48 hours with Unity during the Code Game Jam 2024.",
        },
        images: [
            { src: "/img/button_voir_details/LegendsBuster/legendsbuster3.png", caption: { fr: "Menu du jeu", en: "Game menu" } },
            { src: "/img/button_voir_details/LegendsBuster/legendsbuster2.png", caption: { fr: "Boss du jeu", en: "Game boss" } },
            { src: "/img/button_voir_details/LegendsBuster/legendsbuster1.png", caption: { fr: "Point de spawn", en: "Spawn point" } },
        ],
        colSpan: 1,
    },
];

export function ProjectsSection() {
    const { lang } = useLanguage();
    const t = texts[lang];
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
                        {t.title}
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
                                    alt={project.title[lang]}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent dark:from-white dark:via-white/60"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <div className="mb-3">
                                    <span className="text-xs font-semibold text-white/60 dark:text-neutral-950/60 uppercase tracking-wider">
                                        {project.category[lang].split("|")[0].trim()}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white dark:text-neutral-950 mb-3 group-hover:text-white/90 dark:group-hover:text-neutral-950/90 transition-colors">
                                    {project.title[lang]}
                                </h3>

                                <p className="text-sm text-white/80 dark:text-neutral-950/80 mb-4 line-clamp-2">
                                    {project.description[lang][0]}
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
                                    <span className="text-sm font-semibold">{t.seeDetails}</span>
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
                                            {selectedProject.title[lang]}
                                        </DialogTitle>
                                        <DialogDescription className="text-base text-neutral-600 dark:text-white/60 flex flex-wrap items-center gap-2">
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-white/10 rounded-full text-sm font-medium">
                                                {selectedProject.category[lang].split("|")[0].trim()}
                                            </span>
                                            <span>•</span>
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-white/10 rounded-full text-sm font-medium">
                                                {selectedProject.typeProjet[lang]}
                                            </span>
                                            <span>•</span>
                                            <span className="font-medium">{selectedProject.date[lang]}</span>
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="space-y-8 mt-6">
                                {/* Main Visual - Vidéo ou Carousel */}
                                {(() => {
                                    const youtubeLink = selectedProject.links?.find(
                                        (l) => getYouTubeId(l.url)
                                    );
                                    const videoId = youtubeLink ? getYouTubeId(youtubeLink.url) : null;

                                    if (videoId) {
                                        return (
                                            <div>
                                                <div className="w-full rounded-lg overflow-hidden shadow-2xl aspect-video">
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${videoId}`}
                                                        title={selectedProject.title[lang]}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        className="w-full h-full"
                                                    />
                                                </div>
                                                {selectedProject.videoCaption && (
                                                    <p className="mt-3 text-sm text-neutral-500 dark:text-white/50 italic">
                                                        {selectedProject.videoCaption[lang]}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    }

                                    if (selectedProject.images && selectedProject.images.length > 0) {
                                        return <ModalCarousel images={selectedProject.images} title={selectedProject.title[lang]} />;
                                    }

                                    return (
                                        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl group">
                                            <Image
                                                src={selectedProject.mainImage}
                                                alt={selectedProject.title[lang]}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    );
                                })()}

                                {/* Technologies en haut - Plus visibles */}
                                <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-6 border border-neutral-200 dark:border-white/10">
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-white/50 mb-4">
                                        {t.techStack}
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
                                        {t.description}
                                    </h3>
                                    <div className="space-y-3 pl-4 border-l-2 border-neutral-200 dark:border-white/10">
                                        {selectedProject.description[lang].map((para, i) => (
                                            <p key={i} className="text-neutral-700 dark:text-white/80 leading-relaxed text-base">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                    {/* Infos projet */}
                                    <div className="mt-6 bg-neutral-50 dark:bg-white/5 rounded-lg p-4 border border-neutral-200 dark:border-white/10">
                                        <div className="flex flex-wrap gap-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="text-neutral-500 dark:text-white/50 font-semibold">{t.team}</span>
                                                <span className="text-neutral-700 dark:text-white/80">{selectedProject.nombrePersonnes} {selectedProject.nombrePersonnes > 1 ? t.people : t.person}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-neutral-500 dark:text-white/50 font-semibold">{t.duration}</span>
                                                <span className="text-neutral-700 dark:text-white/80">{selectedProject.tempsRealisation[lang]}</span>
                                            </div>
                                        </div>
                                        {selectedProject.collaborateurs && selectedProject.collaborateurs.length > 0 && (
                                            <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-white/10">
                                                <span className="text-neutral-500 dark:text-white/50 font-semibold text-sm">{t.collaborators}</span>
                                                <div className="mt-2 flex flex-wrap gap-2">
                                                    {selectedProject.collaborateurs.map((collab, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/20 rounded-full text-xs text-neutral-700 dark:text-white/80"
                                                        >
                                                            {collab}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Challenges */}
                                {selectedProject.challenges && selectedProject.challenges[lang].length > 0 && (
                                    <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-6 border border-neutral-200 dark:border-white/10">
                                        <h3 className="text-xl font-bold mb-4">{t.challenges}</h3>
                                        <ul className="space-y-3">
                                            {selectedProject.challenges[lang].map((challenge, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center text-xs font-bold mt-0.5">
                                                        •
                                                    </span>
                                                    <span className="text-neutral-700 dark:text-white/80 leading-relaxed">
                                                        {challenge}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Key Points */}
                                {selectedProject.keyPoints[lang].length > 0 && (
                                    <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-6 border border-neutral-200 dark:border-white/10">
                                        <h3 className="text-xl font-bold mb-4">{t.keyPoints}</h3>
                                        <ul className="space-y-3">
                                            {selectedProject.keyPoints[lang].map((point, i) => (
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

                                {/* Galerie - uniquement si le projet a une vidéo (le carousel remplace sinon) */}
                                {selectedProject.images && selectedProject.images.length > 1 &&
                                 selectedProject.links?.some((l) => getYouTubeId(l.url)) && (
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                            <span className="w-1 h-6 bg-neutral-950 dark:bg-white rounded-full"></span>
                                            {t.gallery}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedProject.images.map((img, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => setZoomedImage(img.src)}
                                                    className="relative h-56 md:h-64 rounded-lg overflow-hidden shadow-lg group cursor-zoom-in border border-neutral-200 dark:border-white/10"
                                                >
                                                    <Image
                                                        src={img.src}
                                                        alt={img.caption[lang]}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    {/* Overlay légende au hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                                        <p className="text-white text-sm leading-snug font-medium">
                                                            {img.caption[lang]}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Links avec icônes */}
                                {selectedProject.links && selectedProject.links.length > 0 && (
                                    <div className="border-t border-neutral-200 dark:border-white/10 pt-6">
                                        <h3 className="text-xl font-bold mb-4">{t.links}</h3>
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
                                                        {link.type === "github" && (
                                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                            </svg>
                                                        )}
                                                        {link.type === "video" && (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        )}
                                                        {link.type === "website" && (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                            </svg>
                                                        )}
                                                        {link.type === "drive" && (
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        )}
                                                        <span>{linkLabels[link.type][lang]}</span>
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

                    {/* Lightbox - à l'intérieur du DialogContent pour éviter que Radix ferme le dialog */}
                    {zoomedImage && (
                        <div
                            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                            onClick={() => setZoomedImage(null)}
                        >
                            <div className="relative max-w-5xl max-h-full w-full h-full">
                                <Image
                                    src={zoomedImage}
                                    alt="Zoom"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <button
                                className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-white/70 transition-colors"
                                onClick={(e) => { e.stopPropagation(); setZoomedImage(null); }}
                            >
                                ✕
                            </button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
