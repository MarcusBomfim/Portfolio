import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  GitFork,
  PackageCheck,
  Truck,
} from 'lucide-react'
import type { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectPreview({ project }: ProjectCardProps) {
  if (project.preview === 'observability') {
    return (
      <figure className="project-preview project-preview-real">
        <div className="preview-toolbar">
          <span />
          <span />
          <span />
          <small>AsiaLogService / interface em funcionamento</small>
        </div>
        <div className="real-interface-frame">
          <img
            src="/projects/asia-log-service-interface.jpg?v=2"
            alt="Interface real do AsiaLogService exibindo filtros e logs processados por integração"
            width="1265"
            height="712"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>
          Consulta de logs com dados fornecidos pela API do projeto.
        </figcaption>
      </figure>
    )
  }

  if (project.preview === 'scheduling') {
    return (
      <div className="project-preview project-preview-scheduling" aria-hidden="true">
        <div className="preview-toolbar">
          <span />
          <span />
          <span />
          <small>Porto Agenda / operação</small>
        </div>
        <div className="schedule-layout">
          <div className="schedule-heading">
            <div>
              <span>Agenda operacional</span>
              <strong>Movimentações do dia</strong>
            </div>
            <CalendarDays />
          </div>
          <div className="schedule-stats">
            <div><Truck /><strong>24</strong><span>agendados</span></div>
            <div><CheckCircle2 /><strong>18</strong><span>confirmados</span></div>
          </div>
          <div className="schedule-list">
            <div><i /><span>09:00</span><strong>Terminal 01</strong><small>Confirmado</small></div>
            <div><i /><span>10:30</span><strong>Terminal 03</strong><small>Em pátio</small></div>
            <div><i /><span>13:15</span><strong>Terminal 02</strong><small>Pendente</small></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-preview project-preview-inventory" aria-hidden="true">
      <div className="preview-toolbar">
        <span />
        <span />
        <span />
        <small>Nexo / inventário</small>
      </div>
      <div className="inventory-layout">
        <div className="inventory-heading">
          <div>
            <span>Controle de estoque</span>
            <strong>Visão do inventário</strong>
          </div>
          <PackageCheck />
        </div>
        <div className="inventory-summary">
          <div><span>Produtos</span><strong>148</strong></div>
          <div><span>Estoque baixo</span><strong>09</strong></div>
          <div><span>Movimentações</span><strong>32</strong></div>
        </div>
        <div className="inventory-table">
          <div><i /><strong>Notebook corporativo</strong><span>18 un.</span></div>
          <div><i /><strong>Monitor 24 polegadas</strong><span>07 un.</span></div>
          <div><i /><strong>Teclado USB</strong><span>42 un.</span></div>
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-case-study project-case-study-${project.preview}`}>
      <div className="project-case-content">
        <header className="project-case-header">
          <span className="project-number">0{index + 1}</span>
          <div>
            <p>{project.category}</p>
            <h3>{project.title}</h3>
          </div>
        </header>

        <p className="project-context">{project.context}</p>
        <p className="project-description">{project.description}</p>

        <dl className="project-case-details">
          <div>
            <dt>Desafio</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div>
            <dt>Solução</dt>
            <dd>{project.solution}</dd>
          </div>
        </dl>

        <ul className="project-highlights" aria-label={`Destaques de ${project.title}`}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle2 aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <ul className="technology-list" aria-label={`Tecnologias utilizadas em ${project.title}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">
              <GitFork aria-hidden="true" />
              Código no GitHub
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span>
              <Code2 aria-hidden="true" />
              Repositório em preparação
            </span>
          )}
        </div>
      </div>

      <ProjectPreview project={project} index={index} />
    </article>
  )
}
