import { ArrowRight, BriefcaseBusiness, CheckCircle2, Code2 } from 'lucide-react'
import { useContent } from '../i18n/useContent'

export function ExperienceSection() {
  const { experience, ui } = useContent()

  return (
    <section id="experiencia" className="experience-section section-shell">
      <div className="experience-layout">
        <div className="experience-intro">
          <h2 className="section-label">{experience.label}</h2>

          <div className="career-bridge">
            <div className="career-bridge-icons" aria-hidden="true">
              <BriefcaseBusiness />
              <ArrowRight />
              <Code2 />
            </div>
            <strong>{experience.bridgeTitle}</strong>
            <p>{experience.bridgeText}</p>
          </div>
        </div>

        <ol className="experience-timeline">
          {experience.items.map((item, index) => (
            <li key={`${item.company}-${item.role}`}>
              <span className="timeline-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <article>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span>{item.area}</span>
                </div>

                <h3>{item.role}</h3>
                <strong className="experience-company">{item.company}</strong>
                <p>{item.summary}</p>

                <ul aria-label={ui.activitiesAt(item.company)}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>
                      <CheckCircle2 aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
