import { GraduationCap, Heart, Target, Calendar, MapPin, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";

const About = () => {
  const timeline = [
    {
      year: "2023 - Présent",
      title: "BUT Informatique",
      location: "IUT de [Ville]",
      description: "Formation en développement, bases de données, réseaux et gestion de projet."
    },
    {
      year: "2023",
      title: "Baccalauréat",
      location: "Lycée [Nom]",
      description: "Spécialités Mathématiques et NSI. Mention [X]."
    }
  ];

  const interests = [
    { icon: "💻", label: "Développement Web" },
    { icon: "🎮", label: "Jeux Vidéo" },
    { icon: "🎵", label: "Musique" },
    { icon: "📚", label: "Tech & Innovation" },
    { icon: "🏃", label: "Sport" },
    { icon: "🌍", label: "Voyages" }
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
      description: "Après le BUT, envisager une école d'ingénieur ou intégrer directement le monde professionnel."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="aspect-square max-w-md mx-auto glass rounded-2xl overflow-hidden relative group">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="font-mono text-6xl text-primary/40">&lt;/&gt;</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-sm text-primary mb-1">Prénom Nom</p>
                  <p className="text-muted-foreground text-sm">BUT Informatique - 2ème année</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 lg:order-2 space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <SectionTitle title="À propos de moi" align="left" className="mb-6" />
              
              <p className="text-muted-foreground leading-relaxed">
                Étudiant passionné en deuxième année de BUT Informatique, je m'intéresse 
                particulièrement au développement web et aux technologies modernes. 
                Mon parcours m'a permis de développer des compétences aussi bien en 
                front-end qu'en back-end.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Curieux et autodidacte, j'aime apprendre de nouvelles technologies et 
                les mettre en pratique à travers des projets personnels et académiques. 
                Je suis convaincu que l'informatique est un domaine en constante évolution 
                qui offre d'infinies possibilités de création et d'innovation.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">[Ville], France</span>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
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
                <a href="mailto:contact@example.com">
                  Me contacter
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv.pdf" download>
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

export default About;
