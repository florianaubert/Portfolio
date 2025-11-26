export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  context: string;
  learnings: string[];
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
    title: "SAÉ Développement Web",
    shortDescription: "Application web complète développée dans le cadre d'une SAÉ en équipe.",
    fullDescription: "Dans le cadre de cette SAÉ, nous avons développé une application web complète permettant la gestion d'un système de réservation. Le projet a impliqué la mise en place d'une architecture MVC, la création d'une base de données relationnelle, et le développement d'une interface utilisateur responsive.",
    context: "Ce projet a été réalisé dans le cadre du BUT Informatique, en équipe de 4 personnes. L'objectif était de mettre en pratique les compétences acquises en développement web, bases de données et gestion de projet.",
    learnings: [
      "Travail en équipe avec Git et méthodologie Agile",
      "Conception et modélisation de bases de données",
      "Développement front-end avec HTML, CSS et JavaScript",
      "Développement back-end avec PHP et MySQL",
      "Déploiement et mise en production"
    ],
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Git"],
    date: "2024",
    duration: "2 mois",
    team: "4 personnes"
  },
  {
    id: "code-game-jam",
    title: "Code Game Jam",
    shortDescription: "Jeu vidéo créé en 48h lors d'une compétition de développement.",
    fullDescription: "Participation à une Code Game Jam où nous avons créé un jeu vidéo complet en seulement 48 heures. Le thème imposé nous a poussé à faire preuve de créativité tout en respectant des contraintes techniques strictes.",
    context: "La Code Game Jam est un événement où des équipes de développeurs créent un jeu vidéo en temps limité autour d'un thème révélé au début de la compétition. C'est un défi intense qui teste la créativité et les compétences techniques.",
    learnings: [
      "Gestion du temps et priorisation des features",
      "Développement rapide de prototypes",
      "Utilisation d'un moteur de jeu (Unity/Godot)",
      "Travail sous pression et prise de décisions rapides",
      "Game design et expérience utilisateur"
    ],
    tags: ["Unity", "C#", "Game Design", "Teamwork"],
    date: "2024",
    duration: "48 heures",
    team: "3 personnes"
  },
  {
    id: "nuit-info",
    title: "Nuit de l'Info",
    shortDescription: "Défi de programmation nocturne sur une thématique d'actualité.",
    fullDescription: "La Nuit de l'Info est un défi national de développement qui se déroule sur une nuit entière. Notre équipe a relevé plusieurs défis techniques tout en développant une application web sur le thème de la sensibilisation environnementale.",
    context: "Événement national réunissant des milliers d'étudiants en informatique. L'objectif est de développer une application web complète en une nuit sur un thème imposé, tout en relevant des défis annexes proposés par les sponsors.",
    learnings: [
      "Développement rapide et efficace",
      "Collaboration intensive en équipe",
      "Intégration d'APIs externes",
      "Présentation et pitch de projet",
      "Gestion du stress et de la fatigue"
    ],
    tags: ["React", "Node.js", "API", "Hackathon"],
    date: "2023",
    duration: "1 nuit",
    team: "5 personnes"
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
