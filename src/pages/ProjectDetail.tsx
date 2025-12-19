import { useParams, Link, Navigate } from "react-router-dom";
import {
    ArrowLeft,
    Calendar,
    Clock,
    Users,
    Github,
    ExternalLink,
    CheckCircle,
    UserCheck,
    FolderGit2, Workflow
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <article className="py-24">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Button variant="ghost" asChild>
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4" />
                Retour aux projets
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="max-w-4xl mx-auto mb-12 animate-slide-up">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {project.shortDescription}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{project.duration}</span>
              </div>
              {project.team && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{project.team}</span>
                </div>
              )}
            </div>
          </header>

          {/* Project Image */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="aspect-video glass rounded-xl overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="font-mono text-6xl text-primary/30">&lt;/&gt;</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
              {/* Description */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary font-mono">01.</span>
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>

              {/* Context */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary font-mono">02.</span>
                  Contexte
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.context}
                </p>
              </section>

                {/* Méthodes de travail */}
                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-primary font-mono">03.</span>
                        Méthodes de travail
                    </h2>
                    <ul className="space-y-3">
                        {project.methods.map((method, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Workflow className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{method}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Learnings */}
                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-primary font-mono">04.</span>
                        Apprentissages
                    </h2>
                    <ul className="space-y-3">
                        {project.learnings.map((learning, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{learning}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Contribution personnelle */}
                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <span className="text-primary font-mono">05.</span>
                        Contribution personnelle
                    </h2>
                    <ul className="space-y-3">
                        {project.contributions.map((contribution, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <UserCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{contribution}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Preuves visuelles */}
                <section>
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <FolderGit2 className="h-5 w-5 text-primary" />
                        Preuves & médias
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                        {project.gallery.map((media, index) => (
                            <div key={index} className="w-full h-full md:h-full overflow-hidden rounded-lg border border-border bg-secondary">
                                <img src={media} alt={`${project.title} - média ${index + 1}`} className="w-full h-full object-cover"/>
                            </div>
                        ))}
                        {project.video && (
                            <div className="aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
                                <video controls className="w-full h-full object-cover">
                                    <source src={project.video} type="video/mp4" />
                                    Votre navigateur ne supporte pas la vidéo.
                                </video>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
              {/* Technologies */}
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {project.links && (
                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Liens</h3>
                  <div className="space-y-3">
                    {project.links.github && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Voir sur GitHub
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button variant="outline" className="w-full justify-start" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Voir le projet
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Informations</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Date</dt>
                    <dd className="text-foreground">{project.date}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Durée</dt>
                    <dd className="text-foreground">{project.duration}</dd>
                  </div>
                  {project.team && (
                    <div>
                      <dt className="text-muted-foreground">Équipe</dt>
                      <dd className="text-foreground">{project.team}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </aside>
          </div>

          {/* Navigation */}
          <nav className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border">
            <div className="flex justify-center">
              <Button variant="hero" asChild>
                <Link to="/projects">
                  Voir tous les projets
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
