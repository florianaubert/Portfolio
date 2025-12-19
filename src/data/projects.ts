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
    shortDescription: "Application web permettant la mise en place d’un système de vote en ligne sécurisé, développée en équipe dans le cadre du BUT Informatique.",
    fullDescription: "Ce projet consistait à concevoir et développer une application web complète intégrant un système de vote en ligne." +
        "L’objectif était de permettre à des utilisateurs de participer à des votes de manière sécurisée et structurée," +
        "avec une gestion des sessions, des résultats et des données associées." +
        "Le projet couvrait l’ensemble du cycle de développement : analyse du besoin, conception de la base de données," +
        "développement du front-end et du back-end, ainsi que les phases de tests et de validation." +
        "Une attention particulière a été portée à l’ergonomie de l’interface, à la cohérence des données" +
        "et au respect des bonnes pratiques de développement web.",
    context: "Projet réalisé dans le cadre du BUT Informatique, en équipe de quatre personnes." +
        "Le projet répondait à une commande académique formulée par un enseignant jouant le rôle de client," +
        "avec un besoin fonctionnel précis et des attentes à respecter." +
        "Le développement s’est appuyé sur la méthode Agile Scrum, avec une organisation en sprints," +
        "un suivi régulier de l’avancement et des ajustements en fonction des retours du client." +
        "Le projet était contraint par un calendrier imposé et par des exigences techniques," +
        "notamment en matière de structuration du code, de gestion des données et de collaboration en équipe.",
    learnings: [
        "Conception d’une application web complète",
        "Gestion et sécurisation des données en base de données",
        "Travail en équipe avec Git et gestion de versions",
        "Respect d’un cahier des charges et de délais imposés",
        "Meilleure compréhension du fonctionnement client / serveur",
        "Application de la méthode Agile Scrum"
    ],
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Git"],
    date: "2025-2026",
    duration: "4 mois",
    team: "4 personnes",
      image: "/sae-vote.png",
      contributions: ["Participation à la conception globale de l’architecture de l’application",
          "Conception et développement de la logique de vote (algorithmes)",
          "Création des formulaires de création et de modification des votes (front-end et back-end)",
          "Correction de bugs et amélioration de la stabilité du projet",
          "Collaboration avec l’équipe pour livrer une application fonctionnelle"
      ],
      methods: ["Organisation du projet selon la méthode Agile Scrum",
          "Découpage du travail en sprints avec définition des objectifs",
          "Utilisation d’un backlog pour prioriser les fonctionnalités",
          "Réunions régulières pour suivre l’avancement et ajuster le travail",
          "Collaboration via Git et GitHub pour le versioning et les revues de code"
      ],
      links: {
        github: "https://gitlabinfo.iutmontp.univ-montp2.fr/sae3a/projets/aubertf-prudhommet-guibalf-brossarde/sae3a-base",
      },
      gallery: ["/creationQuestion.png", "/detailQuestion.png", "/resultatQuestion.png"],
  },
  {
    id: "code-game-jam",
    title: "Code Game Jam",
    shortDescription: "Création d'un jeu vidéo en 24h lors d'une compétition de développement.",
    fullDescription: "Ce projet a été réalisé lors d’une Code Game Jam, un événement de développement intensif durant lequel " +
        "une équipe doit concevoir un jeu vidéo complet en un temps très limité." +
        "À partir d’un thème imposé, notre objectif était de produire un jeu fonctionnel intégrant des mécaniques de gameplay cohérentes et une expérience jouable." +
        "Le projet s’est concentré sur la mise en œuvre rapide des mécaniques de jeu, la gestion des interactions," +
        "et l’assemblage des différentes composantes du jeu (logique, graphismes et sons), tout en respectant une contrainte de temps forte.",
    context: "Projet réalisé lors d’une Code Game Jam, en équipe de cinq personnes, sur une durée de 24 heures." +
        "Le thème du jeu était révélé au début de l’événement, imposant une phase de conception très courte suivie d’un développement intensif." +
        "Le projet s’est déroulé dans un contexte de forte contrainte temporelle," +
        "nécessitant des choix techniques rapides, une bonne répartition des rôles et une communication efficace entre les membres de l’équipe.",
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
      methods: [
          "Répartition rapide des rôles au sein de l’équipe",
          "Définition des mécaniques principales dès le début du projet",
          "Intégration continue des fonctionnalités dans le projet global",
          "Communication constante pour ajuster les choix techniques"
      ],
      contributions: [
          "Développement de la logique principale du jeu",
          "Implémentation des systèmes de jeu côté code",
          "Optimisation et correction du code pour assurer un gameplay fluide",
          "Support technique à l’équipe pour l’intégration des éléments graphiques et sonores"
      ],
      image: "/jeu-CGJ.png",
      gallery: ["/meloKnight.png"],
      video: "/CGJ.mp4",
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
      gallery: ["/memo-NDI.png", "/laserGame-NDI.png", "/rpg-NDI.png", "/snake-NDI.png"],
      /*features?: string[];
      video?: string;*/
  },

  /*{
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
  }*/
];
