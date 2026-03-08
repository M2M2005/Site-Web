# Portfolio de Cyprien Bons

Portfolio personnel moderne et interactif présentant mon parcours, mes projets et mes compétences en développement informatique.

## 🎯 Contexte

Ce portfolio a été réalisé pour améliorer ma visibilité professionnelle et mettre en avant mon savoir-faire en développement web. Il présente mon parcours en tant qu'alternant QA chez ITESOFT et étudiant en BUT Informatique parcours DACS (Réseau & CyberSécurité).

## ✨ Fonctionnalités

- **Page d'accueil** avec animation BackgroundPaths interactive
- **Section À propos** avec présentation personnelle et passion (escalade)
- **Section Parcours** avec timeline des expériences professionnelles et formation
- **Section Projets** avec grille Bento asymétrique et modals détaillés
- **Section Compétences** avec barres de progression animées
- **Section Contact** avec formulaire Formspree
- **Page Portfolio d'Apprentissage** détaillant les compétences BUT et projets
- **Navigation intelligente** avec détection de section active et smooth scroll
- **Mode sombre** supporté
- **Design responsive** (mobile, tablette, desktop)
- **Animations fluides** au scroll avec Framer Motion

## 🛠️ Technologies utilisées

### Framework & Langages
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**

### Bibliothèques UI
- **shadcn/ui** (Radix variant, Nova preset)
- **Framer Motion** (animations)
- **BackgroundPaths** (composant hero animé)
- **Lucide React** (icônes)

### Outils de développement
- **npm** (gestionnaire de paquets)
- **ESLint** (linting)
- **PostCSS** (CSS processing)

### Services externes
- **Formspree** (gestion des formulaires)
- **Next.js Image** (optimisation d'images)

## 📁 Structure du projet

```
portfolio/
├── app/                          # Next.js App Router
│   ├── apprentissage/           # Page portfolio d'apprentissage
│   │   └── page.tsx
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   └── globals.css              # Styles globaux
├── components/
│   ├── sections/                # Sections de page
│   │   ├── about-section.tsx
│   │   ├── apprentissage-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── experiences-section.tsx
│   │   ├── projects-section.tsx
│   │   └── skills-section.tsx
│   ├── ui/                      # Composants UI réutilisables
│   │   ├── background-paths.tsx
│   │   ├── button.tsx
│   │   └── dialog.tsx
│   ├── demo-background-paths.tsx
│   ├── navigation.tsx
│   └── footer.tsx
├── public/
│   ├── img/                     # Images du portfolio
│   └── docs/                    # Documents (CV)
└── lib/
    └── utils.ts                 # Utilitaires

```

## 🚀 Installation et démarrage

### Prérequis
- Node.js 18+
- npm

### Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Naviguer dans le dossier
cd portfolio

# Installer les dépendances
npm install
```

### Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build pour production

```bash
npm run build
npm start
```

## 📄 Pages

### Page d'accueil (`/`)
- **Hero** : Animation BackgroundPaths avec titre et CTA
- **À propos** : Présentation + passion escalade
- **Parcours** : Timeline expériences pro et formation
- **Projets** : 7 projets en grille Bento avec modals
- **Compétences** : Langages, outils, langues avec progression
- **Contact** : Formulaire avec Formspree

### Page Apprentissage (`/apprentissage`)
- **Optimiser des applications**
- **Gérer des données de l'information**
- **Conduire un projet**

Chaque section détaille les apprentissages critiques avec liens vers les projets correspondants.

## 🎨 Design

- **Palette de couleurs** : Noir/Blanc avec alternance par section
- **Typographie** : Geist Sans (système)
- **Bordures arrondies** : 1.5rem (personnalisable)
- **Animations** : Framer Motion pour les transitions et scroll
- **Glassmorphism** : Effets de flou sur certaines sections

## 📝 Configuration

### Personnalisation des couleurs

Les couleurs sont définies dans `app/globals.css` avec des variables CSS :

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --radius: 1.5rem;
  /* ... */
}
```

### Images

Placer les images dans `public/img/` avec la structure :
- `/img/cyprien.jpg` - Photo de profil
- `/img/button_voir_details/[projet]/` - Images des projets
- `/img/COBE-Logo.png` - Logo escalade

### Configuration Next.js

Le fichier `next.config.ts` autorise les images de toutes sources :

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
```

## 🌐 Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **GitHub Pages** (avec export statique)

### Déploiement Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 📧 Contact

**Cyprien Bons**
- Email : [contact@cyprienbons.com](mailto:contact@cyprienbons.com)
- Téléphone : 07 68 51 20 06
- LinkedIn : [linkedin.com/in/cyprien-bons](https://www.linkedin.com/in/cyprien-bons/)
- GitHub : [github.com/M2M2005](https://github.com/M2M2005)

## 🔗 Liens

- **Site web** : [cyprienbons.com](https://cyprienbons.com/)
- **Portfolio d'apprentissage** : [cyprienbons.com/apprentissage](https://cyprienbons.com/apprentissage)

## 📜 Licence

© 2026 Cyprien Bons - Tous droits réservés