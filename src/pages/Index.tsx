import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Globe, Terminal, ChevronDown, GraduationCap, Target, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";

const timeline = [
  {
    year: "2024 - Présent",
    title: "BUT Informatique",
    location: "IUT de Montpellier",
    description: "Parcours RACDV : réalisation d'applications : conception, développement et validation"
  },
  {
    year: "2024",
    title: "Baccalauréat",
    location: "Lycée Jean Jaurès",
    description: "Spécialités Mathématiques et NSI. Mention Bien."
  }
];

const interests = [
    { icon: "🚴", label: "Cyclisme" },
    { icon: "⚽", label: "Football" },
    { icon: "🌍️", label: "Géographie" },
    { icon: "🎮", label: "Jeux de gestion & simulation" },
    { icon: "🥾", label: "Randonnées" }
];

const categories = [
    {
        title: "Langages & Frameworks",
        skills: [
            "Java",
            "Python",
            "PHP (MVC, backend)",
            "JavaScript",
            "HTML / CSS",
            "SQL (Oracle, modèle EA)"
        ]
    },
    {
        title: "Outils & Environnements",
        skills: [
            "Git",
            "Linux",
            "Notion",
            "Excel / Google Sheets"
        ]
    },
    {
        title: "Développement & Méthodologie",
        skills: [
            "Architecture MVC",
            "Conception orientée objet",
            "Méthodes Agiles (Scrum)"
        ]
    }
];

const futureProjects = [
  {
    title: "Alternance en développement",
    description: "Recherche d'une alternance pour ma 3ème année de BUT afin d'acquérir une expérience professionnelle significative."
  },
  {
    title: "Spécialisation Web/Mobile",
    description: "Approfondir mes compétences en développement d'applications web modernes et potentiellement mobiles."
  },
  {
    title: "Poursuite d'études ou emploi",
    description: "Après le BUT, envisager un master pour développer mes compétences."
  }
];

const Index = () => {
    return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            {/* Greeting */}
            <div className="animate-fade-in">
              <span className="font-mono text-primary text-sm md:text-base">
                Bonjour, je suis
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-slide-up" style={{ animationDelay: "100ms" }}>
              <span className="text-foreground">Florian Aubert</span>
              <br />
              <span className="text-muted-foreground">Étudiant en BUT Informatique</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "200ms" }}>
              Passionné par le développement web et les nouvelles technologies. 
              Actuellement en deuxième année de BUT Informatique, je construis 
              des projets qui allient <span className="text-primary">créativité</span> et <span className="text-primary">technique</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <Button variant="glow" size="lg" asChild>
                <Link to="/projects">
                  Voir mes projets
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#about">
                  En savoir plus
                </a>
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-4 pt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-sm">Frontend</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Database className="h-5 w-5 text-primary" />
                <span className="text-sm">Backend</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm">Web</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-sm">DevOps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
              <div className="order-2 lg:order-1 animate-slide-up">
              <div className="aspect-square max-w-md mx-auto bg-card/60 rounded-2xl overflow-hidden relative group border border-transparent hover:border-card/70 transition-all">
          {/* Image zone */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-transparent to-transparent p-6">
                  {/* Use the SVG in /public */}
                  <img
                      src="/logo-FA.svg"
                      alt="Logo FA — Florian Aubert"
                      className="w-3/4 h-3/4 object-contain"
                      aria-hidden={false}
                  />
              </div>

              {/* Soft overlay to keep text on top */}
              <div className="absolute inset-0 pointer-events-none" />

              {/* Footer text */}
              <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-sm text-primary mb-1">Florian Aubert</p>
                  <p className="text-muted-foreground text-sm">BUT Informatique - 2ème année</p>
              </div>
          </div>
        </div>

            {/* Bio */}
            <div className="order-1 lg:order-2 space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <SectionTitle title="À propos de moi" align="left" className="mb-6" />
              
              <p className="text-muted-foreground leading-relaxed">
                  Je m’appelle Florian Aubert et je suis actuellement étudiant en BUT Informatique à l’IUT de Montpellier.
                  Je m’intéresse à l’informatique depuis que je suis tout petit. Mon père travaillant déjà dans ce domaine,
                  j’ai rapidement eu envie de comprendre comment fonctionnaient les ordinateurs et les programmes.
                  Un stage d’observation m’a d’ailleurs conforté dans l’idée de suivre cette voie.
                  Les cours de NSI au lycée, ainsi que mon attrait pour la logique et l’algorithmique, ont renforcé mon envie d’approfondir mes connaissances.
                  J’ai ensuite intégré le BUT Informatique de Montpellier pour développer mes compétences techniques
                  à travers de nombreux projets réalisés au cours de ma formation.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                  Après mon BUT Informatique, je souhaite m’orienter vers un parcours mêlant développement logiciel et bases de données.
                  J’apprécie autant la conception et l’implémentation d’applications que la structuration, l’optimisation et la gestion des données qui les alimentent.
                  Je prévois de poursuivre mes études, afin de renforcer mes compétences en développement, modélisation, SQL,
                  optimisation des bases et architecture logicielle, avec l’objectif d’évoluer vers un poste technique polyvalent dans ces domaines.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Montpellier, France</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span className="text-sm">BUT Informatique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Centres d'intérêt"
            subtitle="Ce qui me passionne au quotidien"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div 
                key={interest.label}
                className="glass p-6 text-center rounded-xl hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-3xl mb-3 block">{interest.icon}</span>
                <span className="text-sm text-foreground">{interest.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Parcours de formation"
            subtitle="Mon cheminement académique"
          />

          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-sm text-primary">{item.year}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{item.location}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Projets récents"
            subtitle="Découvrez quelques-unes de mes réalisations en informatique"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.shortDescription}
                tags={project.tags}
                image={project.image}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                Voir tous les projets
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
        <section className="py-24">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Compétences"
                    subtitle="Technologies & savoir-faire que j'utilise au quotidien"
                />


                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                    {categories.map((cat, i) => (
                        <div
                            key={cat.title}
                            className="glass p-6 rounded-2xl animate-slide-up"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            <h3 className="text-lg font-semibold mb-4 text-primary/90">
                                {cat.title}
                            </h3>


                            <div className="space-y-2">
                                {cat.skills.map((skill, index) => (
                                    <div
                                        key={skill}
                                        className="bg-background/40 border border-border/40 rounded-lg p-3 text-sm font-mono hover:border-primary/50 transition-all duration-300"
                                        style={{ animationDelay: `${(i * 6 + index) * 40}ms` }}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* Future Projects */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Projets professionnels"
            subtitle="Ma vision pour l'avenir"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {futureProjects.map((project, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Envie de collaborer ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Je suis ouvert aux opportunités de stage, d'alternance ou simplement 
              à échanger sur des projets passionnants.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="glow" size="lg" asChild>
                <a href="mailto:florianaubert34@gmail.com">
                  Me contacter
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/CV-Aubert-Florian.pdf" download>
                  Télécharger mon CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
