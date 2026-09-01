import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  PackageCheck,
  Ship,
  Truck,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { useContent } from '../../i18n/useContent'
import type { PreviewStrings, Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

interface ProjectPreviewProps {
  project: Project
  labels: PreviewStrings
}

function PreviewToolbar({ title }: { title: string }) {
  return (
    <div className="preview-toolbar">
      <span />
      <span />
      <span />
      <small>{title}</small>
    </div>
  )
}

function ProjectPreview({ project, labels }: ProjectPreviewProps) {
  if (project.preview === 'ships') {
    const { ships } = labels

    return (
      <div className="project-preview project-preview-ships" aria-hidden="true">
        <PreviewToolbar title={ships.toolbar} />

        <div className="ships-layout">
          <div className="ships-heading">
            <div>
              <span>{ships.eyebrow}</span>
              <strong>{ships.title}</strong>
            </div>
            <Ship />
          </div>

          <div className="ships-legend">
            <span className="is-berthed">{ships.berthed}</span>
            <span className="is-waiting">{ships.waiting}</span>
            <span className="is-planned">{ships.planned}</span>
          </div>

          <div className="ships-board">
            <div className="ships-row is-berthed">
              <i />
              <strong>Santos Express</strong>
              <span>B-03</span>
              <div className="ships-progress"><i style={{ width: '78%' }} /></div>
            </div>
            <div className="ships-row is-berthed">
              <i />
              <strong>Atlântico Sul</strong>
              <span>B-07</span>
              <div className="ships-progress"><i style={{ width: '46%' }} /></div>
            </div>
            <div className="ships-row is-waiting">
              <i />
              <strong>Cabo Frio</strong>
              <span>B-01</span>
              <div className="ships-progress"><i style={{ width: '12%' }} /></div>
            </div>
            <div className="ships-row is-planned">
              <i />
              <strong>Ilha Bela</strong>
              <span>B-05</span>
              <div className="ships-progress"><i style={{ width: '0%' }} /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (project.preview === 'observability') {
    const { asiaLog } = labels

    return (
      <figure className="project-preview project-preview-real">
        <PreviewToolbar title={asiaLog.toolbar} />
        <div className="real-interface-frame">
          <img
            src="/projects/asia-log-service-interface.jpg?v=2"
            alt={asiaLog.alt}
            width="1265"
            height="712"
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>{asiaLog.caption}</figcaption>
      </figure>
    )
  }

  if (project.preview === 'scheduling') {
    const { scheduling } = labels

    return (
      <div className="project-preview project-preview-scheduling" aria-hidden="true">
        <PreviewToolbar title={scheduling.toolbar} />

        <div className="schedule-layout">
          <div className="schedule-heading">
            <div>
              <span>{scheduling.eyebrow}</span>
              <strong>{scheduling.title}</strong>
            </div>
            <CalendarDays />
          </div>

          <div className="schedule-stats">
            <div><Truck /><strong>24</strong><span>{scheduling.scheduled}</span></div>
            <div><CheckCircle2 /><strong>18</strong><span>{scheduling.confirmed}</span></div>
          </div>

          <div className="schedule-list">
            {[
              { time: '09:00', bay: '01', status: scheduling.statuses[0] },
              { time: '10:30', bay: '03', status: scheduling.statuses[1] },
              { time: '13:15', bay: '02', status: scheduling.statuses[2] },
            ].map((row) => (
              <div key={row.time}>
                <i />
                <span>{row.time}</span>
                <strong>{`${scheduling.terminal} ${row.bay}`}</strong>
                <small>{row.status}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const { inventory } = labels

  return (
    <div className="project-preview project-preview-inventory" aria-hidden="true">
      <PreviewToolbar title={inventory.toolbar} />

      <div className="inventory-layout">
        <div className="inventory-heading">
          <div>
            <span>{inventory.eyebrow}</span>
            <strong>{inventory.title}</strong>
          </div>
          <PackageCheck />
        </div>

        <div className="inventory-summary">
          <div><span>{inventory.products}</span><strong>148</strong></div>
          <div><span>{inventory.lowStock}</span><strong>09</strong></div>
          <div><span>{inventory.movements}</span><strong>32</strong></div>
        </div>

        <div className="inventory-table">
          {[
            { name: inventory.items[0], quantity: 18 },
            { name: inventory.items[1], quantity: 7 },
            { name: inventory.items[2], quantity: 42 },
          ].map((row) => (
            <div key={row.name}>
              <i />
              <strong>{row.name}</strong>
              <span>{`${String(row.quantity).padStart(2, '0')} ${inventory.unit}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ui } = useContent()

  return (
    <article className={`project-case-study project-case-study-${project.preview}`}>
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

      <ProjectPreview project={project} labels={ui.previews} />
    </article>
  )
}
