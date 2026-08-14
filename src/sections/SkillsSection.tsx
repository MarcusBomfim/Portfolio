import {
  Database,
  PanelsTopLeft,
  ServerCog,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import type { SkillGroup } from '../types/portfolio'

const skillIcons: Record<SkillGroup['type'], LucideIcon> = {
  frontend: PanelsTopLeft,
  backend: ServerCog,
  data: Database,
}

export function SkillsSection() {
  return (
    <section id="tecnologias" className="skills-section">
      <div className="section-shell">
        <h2 className="section-label">Tecnologias e competências</h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[group.type]

            return (
              <article
                className={`skill-card skill-card-${group.type}`}
                key={group.title}
              >
                <header>
                  <span className="skill-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="skill-number">0{index + 1}</span>
                </header>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul
                  className="skill-list"
                  aria-label={`Tecnologias de ${group.title}`}
                >
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="skill-application">
                  <strong>Aplicação prática</strong>
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
