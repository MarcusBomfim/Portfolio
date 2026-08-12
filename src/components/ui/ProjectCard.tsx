import type { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.featured ? <span>Projeto em destaque</span> : null}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul aria-label={`Tecnologias utilizadas no projeto ${project.title}`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      {project.repository ? (
        <a href={project.repository} target="_blank" rel="noreferrer">
          Ver código no GitHub
        </a>
      ) : null}
    </article>
  )
}
