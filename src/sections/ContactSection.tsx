import { SectionHeading } from '../components/ui/SectionHeading'
import { profile } from '../data/portfolio'

export function ContactSection() {
  return (
    <section id="contato" className="section-shell contact-section">
      <SectionHeading
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Estou disponível para oportunidades de desenvolvimento Full Stack Júnior."
      />
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </section>
  )
}
