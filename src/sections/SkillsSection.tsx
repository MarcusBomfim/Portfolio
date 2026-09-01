import { Database, PanelsTopLeft, ServerCog } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useContent } from '../i18n/useContent'
import type { SkillGroup } from '../types/portfolio'

const skillIcons: Record<SkillGroup['type'], LucideIcon> = {
  frontend: PanelsTopLeft,
  backend: ServerCog,
  data: Database,
}

export function SkillsSection() {
  const { skills, ui } = useContent()

  return (
    <section id="tecnologias" className="skills-section">
      <div className="section-shell">
        <h2 className="section-label">{skills.label}</h2>

        <div className="skills-grid">
          {skills.groups.map((group) => {
            const Icon = skillIcons[group.type]

            return (
              <article
                className={`skill-card skill-card-${group.type}`}
                key={group.type}
              >
                <header>
                  <span className="skill-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="skill-tag">{group.title}</span>
                </header>

                <p className="skill-description">{group.description}</p>

                <ul className="skill-list" aria-label={ui.skillsOf(group.title)}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="skill-application">
                  <strong>{ui.practicalUse}</strong>
                  <p>{group.application}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
