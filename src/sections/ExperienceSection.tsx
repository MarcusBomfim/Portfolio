import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
} from 'lucide-react'
import { experiences } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section id="experiencia" className="experience-section section-shell">
      <div className="experience-layout">
        <div className="experience-intro">
          <h2 className="section-label">Experiência</h2>

          <div className="career-bridge">
            <div className="career-bridge-icons" aria-hidden="true">
              <BriefcaseBusiness />
              <ArrowRight />
              <Code2 />
            </div>
            <strong>Experiência que se transforma em código</strong>
            <p>
              Conhecer a rotina de usuários e operações me ajuda a desenvolver
              soluções mais claras, úteis e fáceis de manter.
            </p>
          </div>
        </div>

        <ol className="experience-timeline">
          {experiences.map((experience, index) => (
            <li key={`${experience.company}-${experience.role}`}>
              <span className="timeline-marker" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              <article>
                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span>{experience.area}</span>
                </div>
                <h3>{experience.role}</h3>
                <strong className="experience-company">{experience.company}</strong>
                <p>{experience.summary}</p>

                <ul aria-label={`Atividades em ${experience.company}`}>
                  {experience.highlights.map((highlight) => (
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
