import { ProjectCard } from '../components/ui/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section id="projetos" className="section-shell">
      <SectionHeading
        eyebrow="Projetos"
        title="Trabalhos selecionados"
        description="Projetos que demonstram minhas habilidades em desenvolvimento web e back-end."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
