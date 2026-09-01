import { ArrowDownRight, Download, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { curriculum } from '../data/portfolio'
import { useContent, useLanguage } from '../i18n/useContent'

export function HeroSection() {
  const { hero, profile, stats, ui } = useContent()
  const { language } = useLanguage()

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-inner section-shell">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <MapPin aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1 className="hero-headline">
            {hero.headline}{' '}
            <em>{hero.headlineAccent}</em>
          </h1>

          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              {hero.primaryAction}
              <ArrowDownRight aria-hidden="true" />
            </a>
            <a
              className="button button-secondary"
              href={curriculum.url}
              download={curriculum.downloadName}
              type="application/pdf"
              title={ui.curriculumTitle(curriculum.updatedAt[language])}
            >
              {hero.secondaryAction}
              <Download aria-hidden="true" />
            </a>
          </div>

          <div className="hero-links" aria-label={ui.professionalLinks}>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              E-mail
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label={hero.stackLabel}>
          <header>
            <span>{hero.stackLabel}</span>
            <strong>{profile.role}</strong>
          </header>

          <dl className="hero-panel-layers">
            {hero.stackLayers.map((layer) => (
              <div key={layer.label}>
                <dt>{layer.label}</dt>
                <dd>{layer.value}</dd>
              </div>
            ))}
          </dl>

          <footer>
            <MapPin aria-hidden="true" />
            {profile.location}
          </footer>
        </aside>
      </div>

      <div className="hero-stats">
        <dl aria-label={ui.statsLabel}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
