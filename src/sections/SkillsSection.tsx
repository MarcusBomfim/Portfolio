import { SectionHeading } from '../components/ui/SectionHeading'
import { skillGroups } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section id="tecnologias" className="section-shell">
      <SectionHeading
        eyebrow="Tecnologias"
        title="Ferramentas que utilizo"
        description="Conhecimentos aplicados nos projetos apresentados neste portfólio."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
