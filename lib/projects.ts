export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;       // short — for the card
  longDescription: string;   // detailed — for the project page
  tech: string[];
  link?: string;             // live demo
  github?: string;           // GitHub repo
  images?: string[];         // e.g. ['/projects/saas-dashboard/1.png']
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "personalb",
    year: "2024",
    title: "PersonalB",
    description:
      "Générateur de CV ATS. Extraction CV via IA, génération de CV optimisé ATS, IA vocale & textuelle d'entraînement aux entretiens.",
    longDescription: `PersonalB est une plateforme de génération de CV pensée pour maximiser le passage des filtres ATS (Applicant Tracking Systems). L'application extrait automatiquement les informations d'un CV existant grâce à l'IA, puis génère un document reformaté et optimisé selon les standards ATS.

Au-delà du CV, PersonalB intègre un assistant d'entraînement aux entretiens disponible en mode vocal et textuel. L'IA pose des questions ciblées, analyse les réponses et fournit un feedback structuré pour aider les candidats à se préparer efficacement.

L'objectif : transformer un profil brut en candidature compétitive, du CV au pitch oral.`,
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/Bastian130/personalB",
    featured: true,
    images: [
      "/PersonalB/1.png",
      "/PersonalB/2.png",
      "/PersonalB/3.png",
      "/PersonalB/4.png",
      "/PersonalB/5.png",
      "/PersonalB/6.png",
      "/PersonalB/station.jpg",
      "/PersonalB/1763251145170.jpeg",
      "/PersonalB/Untitled_1.1.2_1.66.3.jpg",
      "/PersonalB/Untitled_1.1.2_1.67.2.jpg",
    ],
  },
  {
    id: "area",
    year: "2024",
    title: "Area",
    description:
      "IFTTT / Zapier like. Automatisation de workflows avec connecteurs Gmail, Discord, GitHub, Outlook, Drive, OneDrive. Architecture microservices.",
    longDescription: `Area est une plateforme d'automatisation de workflows inspirée d'IFTTT et Zapier. Elle permet de connecter des services tiers entre eux via des règles If-This-Then-That définies par l'utilisateur.

Les connecteurs disponibles couvrent Gmail, Discord, GitHub, Outlook, Google Drive et OneDrive. L'architecture repose sur des microservices indépendants, chaque connecteur étant un service autonome exposant une API standardisée consommée par le moteur d'automations.

L'interface utilisateur permet de composer des workflows visuellement, de les tester et de suivre leur historique d'exécution en temps réel.`,
    tech: ["React", "Node.js", "Docker", "PostgreSQL", "OAuth2"],
    github: "https://github.com/danabenadel/Relay-platform",
    images: [
      "/relay/Screenshot_2025-11-02_at_14.18.45.png",
      "/relay/relay-2.png",
      "/relay/relay-3.png",
      "/relay/relay-4.png",
    ],
  },
  {
    id: "hackathon-vueling",
    year: "2024",
    title: "Hackathon Vueling — 2ème place",
    description:
      "App de traduction en temps réel pour faciliter les échanges multilingues entre équipage et passagers. 2ème place au hackathon Vueling.",
    longDescription: `Dans le cadre d'un hackathon organisé par la compagnie aérienne Vueling, notre équipe a conçu et développé en 48h une application de traduction en temps réel destinée à fluidifier les échanges entre l'équipage et les passagers de nationalités différentes.

L'application détecte automatiquement la langue parlée, traduit les messages instantanément et les affiche des deux côtés de la conversation. Elle cible les situations à forte contrainte : annonces de bord, urgences médicales, demandes de service.

Résultat : 2ème place sur l'ensemble des équipes participantes.`,
    tech: ["React Native", "TypeScript", "Translation API", "WebSockets"],
    images: [
      "/hackaton_vueling/image.jpg",
      "/hackaton_vueling/photo.jpg",
      "/hackaton_vueling/vueling.jpg",
    ],
  },
  {
    id: "jeb-incubator",
    year: "2023",
    title: "Jeb Incubator",
    description:
      "SaaS de mise en relation entre startups et investisseurs. Matching intelligent, espaces dédiés et gestion du pipeline de deals.",
    longDescription: `Jeb Incubator est une plateforme SaaS conçue pour connecter des startups en phase de levée de fonds avec des investisseurs qualifiés.

Le système de matching analyse le profil des startups (secteur, stade, montant recherché) et les critères des investisseurs pour suggérer des opportunités pertinentes de part et d'autre. Chaque utilisateur dispose d'un espace dédié pour gérer son pipeline : gestion des contacts, suivi des échanges, partage de documents confidentiels.

L'objectif est de réduire le temps et la friction liés à la mise en relation dans l'écosystème startup.`,
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    images: [
      "/JEB/image.png",
      "/JEB/jeb-2.png",
      "/JEB/jeb-3.png",
    ],
  },
  {
    id: "coachhub",
    year: "2024",
    title: "CoachHub",
    description:
      "Bureau de poche 5-en-1 pour coachs sportifs : programmation, messagerie, paiements, suivi de progression et gestion administrative.",
    longDescription: `CoachHub est une plateforme tout-en-un conçue pour les coachs sportifs qui souhaitent professionnaliser leur activité et sortir du chaos de la gestion multi-outils.

Elle regroupe cinq fonctionnalités essentielles au quotidien :

— Programmation Sportive : création et envoi de séances d'entraînement personnalisées avec bibliothèque d'exercices.
— Messagerie Privée : chat intégré pour centraliser les échanges et séparer vie professionnelle et personnelle (fini WhatsApp).
— Gestion des Paiements : système sécurisé pour encaisser les coachings et générer les factures automatiquement.
— Suivi de Progression : tableau de bord pour monitorer performances, charges et feedbacks des clients en temps réel.
— Gestion Administrative : espace centralisé pour piloter l'ensemble du business et des clients.`,
    tech: ["React Native", "Node.js", "Stripe", "PostgreSQL", "TypeScript"],
    github: "https://github.com/diego75009/coachHub",
    images: [
      "/CoachHub/acceuil.png",
      "/CoachHub/calendrier.png",
      "/CoachHub/dashboard.png",
    ],
  },
];
