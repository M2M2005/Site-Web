"use client";

import { ApprentissageLayout, LearningSection } from "./apprentissage-layout";

const data: LearningSection[] = [
    {
        id: "realiser",
        title: "Réaliser des applications",
        items: [
            {
                title: "Respecter les contraintes imposées par le client",
                content: "Dans le cadre du projet Référendum, nous travaillions avec un client qui était notre professeur M. Laguillaumie. Nous avons démarré avec un cahier des charges papier, puis à chaque réunion, nous lui posions des questions pour vérifier que notre travail correspondait à ses attentes, avant de valider ou d'ajuster nos choix. Cette expérience m'a permis d'acquérir une vraie méthodologie pour respecter les contraintes d'un client tout au long du cycle de développement.",
                projectName: "Projet Référendum",
            },
            {
                title: "Appliquer des principes algorithmiques",
                content: "Sur les projets Médiathèque et Site E-commerce, nous avons mis en pratique des design patterns, des structures de données adaptées et des algorithmes appropriés pour répondre aux besoins techniques. Ces expériences m'ont permis de consolider mes connaissances en algorithmique et d'en maîtriser l'application concrète dans des projets réels.",
                projectName: "Médiathèque & Site E-commerce",
            },
            {
                title: "Veiller à la qualité du code et de la documentation",
                content: "Tout au long de mes projets de deuxième et troisième année, nous avons appliqué les principes Agile : réunions quotidiennes, gestion par branches, merge requests avec revues de code. Je me suis spécialisé dans la Qualité Assurance : sur le projet Référendum, j'ai développé des tests automatisés end-to-end déclenchés à chaque merge vers master via une pipeline CI/CD que j'ai mise en place. J'ai également créé des tests Cypress pour un site e-commerce personnel. Cette expertise s'est renforcée lors de mon alternance chez ITESOFT, où j'ai intégré l'équipe QA dès le 1er septembre 2025, axée sur les tests fonctionnels et l'automatisation CI/CD.",
                projectName: "Référendum & Alternance ITESOFT",
            },
            {
                title: "Choisir les ressources techniques appropriées",
                content: "Mon jugement technique s'est affiné tout au long du BUT. J'ai notamment tiré des leçons de choix peu adaptés, comme l'utilisation de JavaFX pour le projet Référendum, qui s'est révélé peu ergonomique et peu maintenable. Avec le recul, une interface web en JavaScript aurait été bien plus appropriée. Aujourd'hui, je suis capable d'évaluer et de sélectionner les technologies les plus pertinentes selon les contraintes et les objectifs d'un projet.",
                projectName: "Projet Référendum",
            },
        ],
        composantes: [
            "Respecter les contraintes imposées par le client",
            "Appliquer des principes algorithmiques",
            "Veiller à la qualité du code et de la documentation",
            "Choisir les ressources techniques appropriées",
        ],
        apprentissages: [
            "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT)",
            "Garantir la qualité et la maintenabilité du code",
            "Intégrer des contraintes métier dans le développement",
        ],
    },
    {
        id: "administrer",
        title: "Administrer des systèmes informatiques",
        items: [
            {
                title: "Sécuriser les systèmes d'information",
                content: "Dans le cadre du projet Référendum, nous avons mis en place un système de chiffrement des votes basé sur l'algorithme asymétrique ElGamal. Cette implémentation garantissait que les votes transmis au serveur étaient protégés contre toute interception ou altération, m'initiant aux enjeux concrets de la sécurisation des données sensibles.",
                projectName: "Projet Référendum",
            },
            {
                title: "Apporter une qualité de service optimale",
                content: "Durant mon stage puis mon alternance chez ITESOFT, j'ai intégré l'équipe QA dont la mission était de garantir la qualité de l'application. Mon rôle consistait à réaliser des tests fonctionnels et automatisés, à identifier et remonter les bugs et régressions, ainsi qu'à valider les correctifs apportés par les développeurs. Cette expérience m'a directement confronté aux exigences d'un service de qualité en environnement professionnel.",
                projectName: "Alternance ITESOFT",
            },
            {
                title: "Appliquer les normes et recommandations en matière d'architectures et de sécurité",
                content: "Tout au long de mes projets, j'ai veillé à respecter les bonnes pratiques de sécurité. Sur le projet Référendum, nous avons conçu une architecture sécurisée incluant des communications chiffrées, une gestion des accès par rôles et une validation stricte des entrées utilisateur. Ces expériences m'ont appris que les enjeux de sécurité sont propres à chaque projet et qu'une veille rigoureuse est indispensable pour construire des systèmes fiables.",
                projectName: "Projet Référendum",
            },
            {
                title: "Assurer la continuité des activités",
                content: "L'ensemble de mes projets est versionné sur GitHub ou GitLab, ce qui garantit la traçabilité et évite toute perte de travail. Avant chaque rendu, nous préparons systématiquement un plan de secours (vidéo de démonstration, version stable précédente). Tout au long de mon BUT, je n'ai rencontré qu'un seul incident majeur — une panne de la base de données de l'IUT — que j'ai su gérer efficacement en m'appuyant sur nos sauvegardes et nos procédures de continuité.",
                projectName: "Projets BUT",
            },
        ],
        composantes: [
            "Sécuriser les systèmes d'information",
            "Apporter une qualité de service optimale",
            "Appliquer les normes et recommandations en matière d'architectures et de sécurité",
            "Assurer la continuité des activités",
        ],
        apprentissages: [
            "Maintenir et faire évoluer un système d'information en conditions opérationnelles",
            "Mettre en œuvre une politique de sécurité au niveau de l'infrastructure",
            "Déployer et maintenir les réseaux d'une organisation",
        ],
    },
    {
        id: "collaborer",
        title: "Collaborer au sein d'une équipe informatique",
        items: [
            {
                title: "Rejoindre une démarche pluridisciplinaire",
                content: "Que ce soit dans mes projets universitaires, mon stage ou mon alternance, j'ai toujours su m'intégrer efficacement au sein d'équipes variées. J'ai veillé à créer du lien avec mes camarades et collaborateurs, contribuant à la fois à la productivité collective et à une bonne ambiance de travail. Mes tuteurs en entreprise ont régulièrement souligné mon implication, mon sérieux et mon comportement professionnel.",
                projectName: "Projets & Alternance ITESOFT",
            },
            {
                title: "Accompagner la mise en œuvre des évolutions informatiques",
                content: "J'ai toujours su m'adapter rapidement aux outils et processus de chaque environnement. Lors de mon stage et de mon alternance, j'ai dû prendre en main des outils internes à l'entreprise, mais aussi des outils professionnels comme Jira, Postman et Termius, que je n'avais pas utilisés à l'IUT. Cette capacité d'adaptation rapide m'a permis d'être opérationnel rapidement et de contribuer efficacement dès les premiers jours.",
                projectName: "Alternance ITESOFT",
            },
            {
                title: "Veiller au respect des obligations légales",
                content: "Bien que je n'aie pas été directement chargé de la conformité légale dans mes expériences professionnelles, j'ai acquis de solides bases dans ce domaine grâce au cours de droit suivi en dernière année. Je maîtrise les principales obligations applicables aux projets informatiques, notamment le RGPD et les règles relatives aux licences logicielles, ce qui me permet d'intégrer ces contraintes dans mes développements.",
            },
            {
                title: "Développer une communication efficace et collaborative",
                content: "Dans tous mes contextes de travail, j'ai utilisé des outils de communication adaptés à l'environnement : Discord pour les projets à l'IUT, Microsoft Teams en contexte professionnel. J'ai toujours maintenu une disponibilité constante — par message ou en appel — pour répondre aux questions de mes coéquipiers et les aider en cas de besoin. Cette réactivité a contribué à fluidifier la collaboration et à renforcer la cohésion d'équipe.",
                projectName: "Projets & Alternance ITESOFT",
            },
        ],
        composantes: [
            "Rejoindre une démarche pluridisciplinaire",
            "Accompagner la mise en œuvre des évolutions informatiques",
            "Veiller au respect des obligations légales",
            "Développer une communication efficace et collaborative",
        ],
        apprentissages: [
            "Encadrer une équipe informatique",
            "Identifier les enjeux de l'innovation numérique",
            "Accompagner la conduite du changement informatique",
        ],
    },
];

export function ApprentissageSectionBut3() {
    return <ApprentissageLayout badge="BUT3" subtitle="Troisième année — DACS" data={data} />;
}
