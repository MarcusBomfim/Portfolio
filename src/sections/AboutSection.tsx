import { SectionHeading } from '../components/ui/SectionHeading'
import { profile } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="sobre" className="section-shell">
      <SectionHeading eyebrow="Sobre mim" title="Tecnologia aplicada a problemas reais" />
      <p>{profile.about}</p>
      <p>{profile.location}</p>
    </section>
  )
}
