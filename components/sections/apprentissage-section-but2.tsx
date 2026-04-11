"use client";

import { ApprentissageLayout, LearningSection } from "./apprentissage-layout";

const data: LearningSection[] = [
    {
        id: "optimiser",
        title: "Optimiser des applications",
        items: [
            {
                title: "Choisir des structures de données complexes adaptées au problème",
                content: "Dans le cadre du projet e-commerce, j'ai choisi une base de données relationnelle pour gérer efficacement les produits, utilisateurs et commandes, cette structure permettant de bien modéliser les liens entre ces entités. Cette expérience m'a permis d'acquérir une méthodologie d'évaluation des besoins pour choisir la structure de données la plus adaptée.",
                projectName: "Projet e-commerce",
            },
            {
                title: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
                content: "Dans le cadre du projet Référendum, j'ai mis en œuvre l'algorithme asymétrique ElGamal pour chiffrer les votes envoyés au serveur. Cette mise en pratique m'a permis de maîtriser l'application d'algorithmes de cryptographie pour sécuriser des informations sensibles, révélant l'importance fondamentale de la sécurité en développement.",
                projectName: "Projet Référendum",
            },
            {
                title: "Comprendre les enjeux et moyens de sécurisation des données et du code",
                content: "Sur le projet e-commerce, la sécurité des données était une priorité centrale. Ce projet m'a permis de développer ma capacité à identifier les vulnérabilités et à mettre en œuvre des mesures de protection adaptées : chiffrement, validation des entrées, prévention des injections SQL. C'est en affrontant ces enjeux concrets que j'ai pleinement intégré l'importance de la sécurisation.",
                projectName: "Projet e-commerce",
            },
            {
                title: "Évaluer l'impact environnemental et sociétal des solutions proposées",
                content: "À travers le projet LegendsBuster, j'ai pris conscience de l'impact environnemental de l'informatique et adopté une démarche éco-responsable : code optimisé, consommation énergétique réduite et taille minimale pour garantir une accessibilité maximale.",
                projectName: "LegendsBuster",
            },
        ],
        composantes: [
            "Formaliser et modéliser des situations complexes",
            "Recenser les algorithmes et les structures de données usuelles",
            "S'appuyer sur des schémas de raisonnement",
            "Justifier les choix et valider les résultats",
        ],
        apprentissages: [
            "Comprendre les enjeux et moyens de sécurisation des données et du code",
            "Anticiper les résultats de diverses métriques",
            "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application",
        ],
    },
    {
        id: "gerer",
        title: "Gérer des données de l'information",
        items: [
            {
                title: "Optimiser les modèles de données de l'entreprise",
                content: "Dans le cadre du projet Référendum, j'ai conçu des modèles de données adaptés en utilisant PlantUML pour réaliser des diagrammes de classes et de séquence, afin de bien formaliser les liens entre les entités du système.",
                projectName: "Projet Référendum",
            },
            {
                title: "Assurer la confidentialité des données",
                content: "Sur les projets Référendum et e-commerce, j'ai mis en place plusieurs mesures pour garantir la confidentialité des données : chiffrement des votes via ElGamal, gestion des accès par rôle, et hachage des mots de passe avec sel.",
                projectName: "Référendum & e-commerce",
            },
            {
                title: "Organiser la restitution de données à travers la programmation et la visualisation",
                content: "Sur le projet e-commerce, j'ai utilisé PHP pour créer des pages web dynamiques affichant les informations des produits et des utilisateurs, en structurant la restitution des données de manière lisible et adaptée aux besoins.",
                projectName: "Projet e-commerce",
            },
            {
                title: "Manipuler des données hétérogènes",
                content: "Durant mon stage chez Orchestra - Travelsoft, j'ai récupéré des données au format IATA (aérien) et je les ai comparées avec des données internes de l'entreprise. Cette expérience m'a permis de développer mes compétences en gestion et harmonisation de données hétérogènes provenant de sources multiples.",
                projectName: "Orchestra - Travelsoft",
            },
        ],
        composantes: [
            "Respecter les réglementations sur la vie privée et la protection des données personnelles",
            "Prendre en compte les enjeux économiques, sociétaux et écologiques du stockage de données",
            "S'appuyer sur des bases mathématiques",
            "Assurer la cohérence et la qualité",
        ],
        apprentissages: [
            "Lancer un nouveau projet",
            "Sécuriser des données",
            "Exploiter des données pour la prise de décisions",
        ],
    },
    {
        id: "conduire",
        title: "Conduire un projet",
        items: [
            {
                title: "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
                content: "Durant mon stage chez Orchestra - Travelsoft, j'ai analysé les processus internes de l'entreprise afin de comprendre leur système d'information et de proposer des améliorations pertinentes. Cette démarche m'a permis de développer une vision métier essentielle à tout projet de développement.",
                projectName: "Orchestra - Travelsoft",
            },
            {
                title: "Formaliser les besoins du client et de l'utilisateur",
                content: "Dans le cadre du projet Référendum, nous avons régulièrement échangé avec notre client pour comprendre ses besoins et valider que le système de vote répondait à ses attentes. Cette collaboration m'a permis de développer mes compétences en communication : poser les bonnes questions, reformuler pour valider la compréhension mutuelle et garantir l'alignement entre tous les acteurs du projet.",
                projectName: "Projet Référendum",
            },
            {
                title: "Identifier les critères de faisabilité d'un projet informatique",
                content: "Sur le projet e-commerce, j'ai évalué la faisabilité technique et économique en analysant les ressources nécessaires, les contraintes temporelles et budgétaires. Cette démarche m'a permis de valider la viabilité du projet avant de démarrer le développement.",
                projectName: "Projet e-commerce",
            },
            {
                title: "Définir et mettre en œuvre une démarche de suivi de projet",
                content: "Sur le projet e-commerce, j'ai utilisé les outils de gestion GitHub (issues, assignation de tâches, kanban) pour suivre l'avancement. Cette pratique m'a permis d'adopter une gestion rigoureuse du temps et des ressources, garantissant le respect des objectifs et des délais.",
                projectName: "Projet e-commerce",
            },
        ],
        composantes: [
            "Communiquer efficacement avec les différents acteurs d'un projet",
            "Respecter les règles juridiques et les normes en vigueur",
            "Sensibiliser à une gestion éthique, responsable, durable et interculturelle",
            "Adopter une démarche proactive, créative et critique",
        ],
        apprentissages: [
            "Lancer un nouveau projet",
            "Piloter le maintien d'un projet en condition opérationnelle",
            "Faire évoluer un système d'information",
        ],
    },
];

export function ApprentissageSectionBut2() {
    return <ApprentissageLayout badge="BUT2" subtitle="Deuxième année" data={data} />;
}
