import {
  ArrowRight,
  Braces,
  Database,
  PanelsTopLeft,
  ServerCog,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
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
        <SectionHeading
          eyebrow="Tecnologias e competências"
          title="Uma base para construir de ponta a ponta"
          description="Tecnologias escolhidas de acordo com o problema e aplicadas na prática nos projetos deste portfólio."
        />

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

        <div
          className="fullstack-flow"
          aria-label="Fluxo de desenvolvimento full stack"
        >
          <div className="flow-heading">
            <Braces aria-hidden="true" />
            <div>
              <span>Visão full stack</span>
              <strong>Como as partes se conectam</strong>
            </div>
          </div>

          <ol>
            <li>
              <span>01</span>
              <strong>Interface</strong>
              <small>Experiência do usuário</small>
            </li>
            <li className="flow-arrow" aria-hidden="true">
              <ArrowRight />
            </li>
            <li>
              <span>02</span>
              <strong>API e regras</strong>
              <small>Lógica da aplicação</small>
            </li>
            <li className="flow-arrow" aria-hidden="true">
              <ArrowRight />
            </li>
            <li>
              <span>03</span>
              <strong>Dados e entrega</strong>
              <small>Persistência e execução</small>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
