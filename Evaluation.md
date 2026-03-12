# Évaluation Portfolio - Cyprien Bons

> Note estimée globale : **37 / 60**
> *(basée sur une lecture du code source et du contenu rédigé)*

---

## 1. Nombre de réalisations — 4 / 5

**Ce qui est bien :**
- 7 projets présentés, largement au-dessus des 3 requis (Cypress E-Commerce, Référendum, E-Commerce, Médiathèque, Clicker Game, Escalade, LegendsBuster).
- La Code Game Jam est présente.

**Ce qui manque :**
- **La page d'analyse du stage (PPP) n'existe pas en tant que page dédiée.** La prof exige *"une page dédiée à l'analyse du stage en lien avec le travail réalisé en PPP"*. La page `/apprentissage` couvre des apprentissages critiques généraux mais ne traite pas explicitement le stage Orchestra comme une analyse PPP (bilan de compétences, auto-évaluation, projet professionnel).
- Ajouter une page `/stage` ou une section dans `/apprentissage` qui reprend la structure de la fiche PPP : contexte entreprise, missions, compétences développées, bilan personnel.

---

## 2. Présentation de soi — 4 / 7

**Ce qui est bien :**
- Photo, paragraphes sur le cursus, l'alternance, et l'objectif de Master en QA.
- Contact email et téléphone visibles.

**Ce qui manque :**
- **Les traits de personnalité sont absents.** Les 3 paragraphes actuels sont 100% factuels (études, poste, objectif). La prof demande de "mettre en avant ses traits de personnalité". Il faut ajouter : curiosité, rigueur, esprit d'équipe, passion pour les tests, etc.
- **Le projet post-BUT est trop bref.** Une phrase sur le Master QA ne suffit pas — développer : quel type de Master, dans quel domaine précis, pourquoi ce choix.
- La section "Escalade" dans À propos est un bon plus humain mais reste superficielle.

**Exemple d'ajout :**
> *"Rigoureux et curieux, j'aime comprendre les systèmes en profondeur avant de les tester. Le QA me correspond car il allie logique, méthode et communication avec les équipes de développement."*

---

## 3. Parcours et CV — 6 / 7

**Ce qui est bien :**
- Timeline complète (ITESOFT, Orchestra, IUT, Bac).
- CV téléchargeable depuis la nav, la section À propos et la section Contact.
- Période, entreprise, lieu, technologies bien renseignés.

**Ce qui manque :**
- Vérifier que le CV est bien **à jour** (inclut ITESOFT et Orchestra).
- Pas de mention du diplôme obtenu exactement pour le Bac (mention "Assez Bien" est là — OK).

---

## 4. Page Contact — 4 / 5

**Ce qui est bien :**
- Email, téléphone, formulaire de contact fonctionnel (Formspree).
- LinkedIn et GitHub présents.

**Ce qui manque :**
- **Pas de localisation géographique** (ex: "Basé à Nîmes / Montpellier"). Mineur mais attendu dans un profil pro.
- Seulement 2 réseaux sociaux. Si tu as un profil GitLab (ITESOFT utilise GitLab), l'ajouter serait un plus.

---

## 5. Analyse des réalisations — 8 / 15

**Ce qui est bien :**
- Chaque projet a un contexte, des technologies, des apports clés.
- La page Apprentissage Critique est bien structurée (3 compétences, items liés aux projets).
- Le rapport de stage Orchestra est maintenant accessible en PDF.

**Ce qui manque — critique :**
- **Pas de page dédiée à l'analyse de l'expérience professionnelle (fiche PPP).** C'est explicitement demandé. La page `/apprentissage` n'est pas suffisante car elle analyse des AC généraux, pas l'expérience entreprise.
- **Les analyses des projets sont trop courtes** pour 15 points. Actuellement ce sont des listes de bullets. Il faudrait pour chaque projet : le contexte (pourquoi ce projet ?), le rôle exact, les difficultés rencontrées, comment elles ont été surmontées, et les compétences développées concrètement.
- **Le stage Orchestra** a le plus de potentiel : il faut une analyse plus profonde (méthode de travail, relation avec l'équipe, apport du stage sur le projet professionnel).

**À faire :**
- Créer `/stage` ou une sous-section dédiée au stage avec la structure de la fiche "Analyser son expérience en entreprise".
- Enrichir les descriptions de projets dans le modal (contexte, difficultés, bilan).

---

## 6. Preuve de réalisation — 6 / 10

**Ce qui est bien :**
- Vidéos YouTube présentes pour Cypress, Référendum, LegendsBuster, Orchestra.
- Galeries d'images pour tous les projets.
- Rapport de stage PDF accessible.

**Ce qui manque :**
- **Les preuves ne sont pas "commentées".** La prof attend que chaque visuel soit accompagné d'un texte qui explique ce qu'il montre et en quoi il atteste d'une compétence. Ex : *"Cette capture montre le rapport Allure généré automatiquement après l'exécution des tests, attestant de la maîtrise des tests automatisés avec Selenium."*
- Ajouter sous chaque image ou vidéo dans le modal une légende explicative.

---

## 7. Ergonomie — 4.5 / 5

**Ce qui est bien :**
- Navigation fixe avec scroll-spy, menu mobile, transitions fluides.
- Design cohérent dark/light, animations Framer Motion.
- Bento grid pour les projets, timeline pour le parcours.
- Bouton CV accessible partout (nav, À propos, Contact).

**Point mineur :**
- La page `/apprentissage` n'est pas dans la navigation principale — difficile à trouver pour la prof.

---

## 8. Qualité rédactionnelle — 4 / 6

**Ce qui est bien :**
- Orthographe globalement correcte.
- Structure logique des sections.

**Problèmes identifiés :**
- **Langage trop familier** dans la page Apprentissage : *"Ça m'a beaucoup appris"*, *"pour pouvoir proposer"*, *"tout le monde était sur la même longueur d'onde"*.
- **Répétitions** : "J'ai appris à..." répété en début de presque toutes les phrases dans apprentissage.
- **Phrases trop courtes / juxtaposées** sans liaisons logiques (ex : dans la description du projet e-commerce).
- Le contenu de la section About est très sobre — enrichir le style.

---

## Résumé des priorités

| Priorité | Action | Impact |
|----------|--------|--------|
| 🔴 Critique | Créer page dédiée analyse stage PPP | +4 pts (critère 5) |
| 🔴 Critique | Commenter les preuves visuelles (légendes) | +3 pts (critère 6) |
| 🟠 Important | Ajouter traits de personnalité dans À propos | +2 pts (critère 2) |
| 🟠 Important | Enrichir les analyses de projets (contexte, difficultés) | +2 pts (critère 5) |
| 🟡 Moyen | Corriger le style rédactionnel dans Apprentissage | +1 pt (critère 8) |
| 🟡 Moyen | Ajouter la page Apprentissage dans la navigation | +0.5 pt (critère 7) |
| 🟢 Mineur | Localisation dans Contact | +0.5 pt (critère 4) |
