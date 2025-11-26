import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Globe, Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";

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
              <span className="text-foreground">Prénom Nom</span>
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
                <Link to="/about">
                  En savoir plus
                </Link>
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
            subtitle="Technologies et outils que j'utilise au quotidien"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "HTML/CSS", "JavaScript", "TypeScript", "React",
              "PHP", "MySQL", "Git", "Linux"
            ].map((skill, index) => (
              <div 
                key={skill}
                className="glass p-4 text-center rounded-lg hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-mono text-sm text-foreground">{skill}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/about">
                Plus sur mon parcours
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
