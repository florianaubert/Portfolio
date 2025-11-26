import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Mes projets"
            subtitle="Découvrez l'ensemble de mes réalisations en informatique : SAÉ, projets personnels, hackathons et plus encore."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
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
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
