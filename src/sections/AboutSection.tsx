import { CheckCircle2 } from 'lucide-react'
import { useContent } from '../i18n/useContent'

export function AboutSection() {
  const { about, profile } = useContent()

  return (
    <section id="sobre" className="about-section section-shell">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="section-label">{about.label}</h2>

          <div className="about-copy">
            <p>{profile.about}</p>
            <p>{profile.aboutComplement}</p>
          </div>

          <ul className="about-principles">
            {about.principles.map((principle) => (
              <li key={principle}>
                <CheckCircle2 aria-hidden="true" />
                {principle}
              </li>
            ))}
          </ul>
        </div>

        <aside className="about-profile" aria-label={about.profileLabel}>
          <header>
            <span>{about.profileLabel}</span>
            <strong>{about.profileBadge}</strong>
          </header>

          <dl className="about-facts">
            {about.facts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <p className="about-goal">{profile.goal}</p>
        </aside>
      </div>
    </section>
  )
}
