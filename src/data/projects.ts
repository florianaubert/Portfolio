export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    context: string;
    learnings: string[];
    methods?: string[];
    contributions?: string[];
    features?: string[];
    gallery?: string[];
    video?: string;
    tags: string[];
    image?: string;
    links?: {
        github?: string;
        live?: string;
    };
    date: string;
    duration: string;
    team?: string;
}

export const projects: Project[] = [
  {
    id: "sae-web",
    title: "Projet Développement Web",
    shortDescription: "Application web complète développée dans le cadre d'un projet académique en équipe de 4.",
    fullDescription: "Dans le cadre de ce projet, nous avons développé une application web complète intégrant un système de vote en ligne. " +
        "Le projet a impliqué la mise en place d'une architecture MVC, la création d'une base de données relationnelle, et le développement d'une interface utilisateur responsive.",
    context: "Ce projet a été réalisé dans le cadre du BUT Informatique, en équipe de 4 personnes. " +
        "L'objectif était de mettre en pratique les compétences acquises en développement web, bases de données et gestion de projet.",
    learnings: [
      "Travail en équipe avec Git et méthodologie Agile",
      "Conception et modélisation de bases de données",
      "Développement front-end avec HTML, CSS et JavaScript",
      "Développement back-end avec PHP et MySQL",
      "Déploiement et mise en production"
    ],
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Git"],
    date: "2025-2026",
    duration: "4 mois",
    team: "4 personnes",
      image: "/img.png",
  },
  {
    id: "code-game-jam",
    title: "Code Game Jam",
    shortDescription: "Jeu vidéo créé en 24h lors d'une compétition de développement.",
    fullDescription: "Participation à une Code Game Jam où nous avons créé un jeu vidéo complet en seulement 24 heures. " +
        "Le thème imposé nous a poussé à faire preuve de créativité tout en respectant des contraintes techniques strictes.",
    context: "La Code Game Jam est un événement où des équipes de développeurs créent un jeu vidéo en temps limité autour d'un thème révélé au début de la compétition. " +
        "C'est un défi intense qui teste la créativité et les compétences techniques.",
    learnings: [
      "Gestion du temps et priorisation des features",
      "Développement rapide de prototypes",
      "Utilisation d'un moteur de jeu (GameMaker)",
      "Travail sous pression et prise de décisions rapides",
      "Game design et expérience utilisateur"
    ],
    tags: ["GameMaker", "GML", "Game Design", "Teamwork"],
    date: "2025",
    duration: "24 heures",
    team: "5 personnes",
      links: {
        live: "https://oxirus.itch.io/melo-knight",
      },
  },
  {
    id: "nuit-info",
    title: "Nuit de l'Info",
      shortDescription: "Application web développée en une nuit lors de la Nuit de l’Info, visant à sensibiliser au numérique libre, " +
          "responsable et durable à travers une approche pédagogique et interactive.",
      fullDescription: "Ce projet a été réalisé dans le cadre de la Nuit de l’Info, un hackathon national réunissant des étudiants en informatique autour d’un sujet imposé. " +
          "En une nuit, notre équipe a conçu et développé une application web visant à sensibiliser les utilisateurs aux enjeux de la dépendance aux Big Tech " +
          "et à promouvoir des alternatives numériques libres, responsables et durables.\n\n" +
          "L’application prend la forme d’un site web interactif permettant de découvrir la démarche NIRD (Numérique Inclusif, Responsable et Durable), " +
          "d’expliquer ses principes et de montrer comment un établissement scolaire peut progressivement réduire sa dépendance aux solutions propriétaires. " +
          "Le projet met l’accent sur la pédagogie, l’accessibilité et l’engagement des utilisateurs, malgré des contraintes fortes de temps.",
      context: "La Nuit de l’Info est un événement national annuel durant lequel des équipes d’étudiants disposent d’une seule nuit pour " +
          "développer une application web fonctionnelle autour d’un sujet imposé. L’édition à laquelle nous avons participé portait sur la démarche NIRD " +
          "(Numérique Inclusif, Responsable et Durable), qui vise à aider les établissements scolaires à réduire leur dépendance aux Big Tech, " +
          "à lutter contre l’obsolescence programmée et à promouvoir les logiciels libres.\n\nLe projet devait impérativement être mis en ligne à la fin de la nuit, " +
          "utiliser des ressources libres de droit et être diffusé sous licence libre. Le travail s’est déroulé en équipe, dans un contexte de forte contrainte temporelle, " +
          "nécessitant une organisation efficace, une priorisation rapide des fonctionnalités et une collaboration intensive.",
      learnings: [
      "Développement rapide et efficace",
      "Collaboration intensive en équipe",
      "Intégration d'APIs externes",
      "Gestion du stress et de la fatigue"
    ],
    tags: ["HTML/CSS", "Javascript", "Git", "Hackathon"],
    date: "2025",
    duration: "16 heures",
    team: "5 personnes",
      image: "/ndi.png",
      links: {
          github: "https://github.com/guibalf/NuitInfo",
          live: "https://webinfo.iutmontp.univ-montp2.fr/~guibalf/nuitinfo/",
      },
      contributions: ["Participation à la conception de l’architecture du site",
          "Développement du mémo pour apprendre en jouant",
          "Collaboration avec l’équipe pour finaliser une version fonctionnelle avant la deadline"],
      methods: ["Répartition rapide des rôles au sein de l’équipe",
          "Priorisation des fonctionnalités essentielles",
          "Développement sous forte contrainte de temps",
          "Utilisation de Git pour le travail collaboratif",
          "Communication permanente"],
  },
  {
    id: "projet-perso",
    title: "Projet Personnel",
    shortDescription: "Application développée en autonomie pour explorer de nouvelles technologies.",
    fullDescription: "Développement d'une application personnelle pour approfondir mes connaissances dans les technologies modernes du web. Ce projet m'a permis d'explorer React, TypeScript et les bonnes pratiques de développement front-end.",
    context: "En dehors des cours, j'ai voulu approfondir mes compétences en développant une application personnelle. Ce projet m'a permis d'explorer des technologies que je n'avais pas encore utilisées en cours.",
    learnings: [
      "Apprentissage autodidacte de React et TypeScript",
      "Architecture moderne et composants réutilisables",
      "Styling avec Tailwind CSS",
      "Gestion d'état et hooks React",
      "Déploiement sur des plateformes cloud"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    date: "2024",
    duration: "En cours",
    team: "Solo"
  }
];
