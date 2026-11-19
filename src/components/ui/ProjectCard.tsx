import { ArrowUpRight, CheckCircle2, Code2, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { useContent } from '../../i18n/useContent'
import type { Project, ScreenshotPreview } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

function PreviewToolbar({ title }: { title: string }) {
  return (
    <div className="preview-toolbar" aria-hidden="true">
      <span />
      <span />
      <span />
      <small>{title}</small>
    </div>
  )
}

/**
 * Captura de tela de verdade, com a legenda que diz isso. A de celular fica
 * num quadro em pé, do tamanho de um aparelho, em vez de esticada na largura.
 */
function Screenshot({ preview }: { preview: ScreenshotPreview }) {
  return (
    <figure className={`project-preview project-preview-real is-${preview.frame}`}>
      <PreviewToolbar title={preview.toolbar} />
      <div className="real-interface-frame">
        <img
          src={preview.src}
          alt={preview.alt}
          width={preview.width}
          height={preview.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption className="preview-note is-real">
        <CheckCircle2 aria-hidden="true" />
        {preview.caption}
      </figcaption>
    </figure>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ui } = useContent()

  return (
    <article className={`project-case-study project-case-study-${project.id}`}>
      <div className="project-case-content">
        <header className="project-case-header">
          <span className="project-number">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <p>{project.category}</p>
            <h3>{project.title}</h3>
          </div>
        </header>

        <p className="project-context">{project.context}</p>
        <p className="project-description">{project.description}</p>

        {project.metrics.length > 0 ? (
          <dl className="project-metrics" aria-label={ui.metricsOf(project.title)}>
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <dl className="project-case-details">
          <div>
            <dt>{ui.challenge}</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div>
            <dt>{ui.solution}</dt>
            <dd>{project.solution}</dd>
          </div>
        </dl>

        <ul className="project-highlights" aria-label={ui.highlightsOf(project.title)}>
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle2 aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <ul className="technology-list" aria-label={ui.technologiesOf(project.title)}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.demo ? (
            <a
              className="project-link-primary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink aria-hidden="true" />
              {ui.liveDemo}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}

          {project.repository ? (
            <a href={project.repository} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              {ui.sourceCode}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span>
              <Code2 aria-hidden="true" />
              {ui.repositoryPending}
            </span>
          )}
        </div>
      </div>

      <Screenshot preview={project.preview} />
    </article>
  )
}
