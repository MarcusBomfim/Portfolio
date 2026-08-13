import {
  ArrowUpRight,
  CheckCircle2,
  FileDown,
  GitFork,
  Mail,
  MapPin,
} from 'lucide-react'
import { profile } from '../data/portfolio'

export function ContactSection() {
  return (
    <section id="contato" className="contact-section section-shell">
      <div className="contact-panel">
        <div className="contact-content">
          <span className="contact-eyebrow">
            <CheckCircle2 aria-hidden="true" />
            Disponível para oportunidades
          </span>
          <h2>Vamos transformar uma boa ideia em uma solução real?</h2>
          <p>
            Busco uma oportunidade em desenvolvimento Full Stack. Se meu perfil
            fizer sentido para seu time ou projeto, ficarei feliz em conversar.
          </p>

          <div className="contact-actions">
            <a className="contact-primary" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" />
              Enviar e-mail
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="contact-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitFork aria-hidden="true" />
              Ver GitHub
            </a>
            <a
              className="contact-secondary"
              href="/curriculo-marcus-bomfim.pdf"
              download
            >
              <FileDown aria-hidden="true" />
              Baixar currículo
            </a>
          </div>
        </div>

        <aside className="contact-card" aria-label="Informações de contato">
          <span>Contato direto</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <div>
            <MapPin aria-hidden="true" />
            <p>
              <small>Localização</small>
              <strong>{profile.location}</strong>
            </p>
          </div>
          <div>
            <GitFork aria-hidden="true" />
            <p>
              <small>GitHub</small>
              <strong>@MarcusBomfim</strong>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
