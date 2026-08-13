import { ProjectCard } from '../components/ui/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section id="projetos" className="projects-section section-shell">
      <SectionHeading
        eyebrow="Projetos selecionados"
        title="Código aplicado a cenários reais"
        description="Mais do que uma lista de tecnologias: cada projeto apresenta o problema, as decisões técnicas e a solução que desenvolvi."
      />
      <div className="project-case-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
