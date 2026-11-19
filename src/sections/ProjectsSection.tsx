import { ProjectCard } from '../components/ui/ProjectCard'
import { ProjectCarousel } from '../components/ui/ProjectCarousel'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useContent } from '../i18n/useContent'

export function ProjectsSection() {
  const { projects } = useContent()

  return (
    <section id="projetos" className="projects-section section-shell">
      <SectionHeading
        eyebrow={projects.eyebrow}
        title={projects.title}
        description={projects.description}
      />

      <div className="project-case-list">
        {projects.items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <ProjectCarousel
        title={projects.more.title}
        description={projects.more.description}
        items={projects.more.items}
      />
    </section>
  )
}
