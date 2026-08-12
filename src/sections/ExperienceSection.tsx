import { SectionHeading } from '../components/ui/SectionHeading'
import { experiences } from '../data/portfolio'

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section-shell">
      <SectionHeading eyebrow="Experiência" title="Trajetória profissional" />
      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.role}`}>
            <p>{experience.period}</p>
            <h3>{experience.role}</h3>
            <strong>{experience.company}</strong>
            <p>{experience.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
