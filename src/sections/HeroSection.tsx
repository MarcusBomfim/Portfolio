import {
  ArrowDownRight,
  Code2,
  Database,
  Download,
  GitFork,
  Mail,
  MapPin,
  ServerCog,
} from 'lucide-react'
import { profile } from '../data/portfolio'

export function HeroSection() {
  const curriculumUrl = `${import.meta.env.BASE_URL}curriculo-marcus-bomfim.pdf`

  return (
    <section id="inicio" className="hero-section section-shell">
      <div className="hero-content">
        <div className="availability-pill">
          <span aria-hidden="true" />
          Disponível para oportunidades Full Stack Júnior
        </div>

        <p className="hero-introduction">Olá, eu sou {profile.shortName}.</p>
        <h1>
          Transformo problemas reais em{' '}
          <span>aplicações confiáveis.</span>
        </h1>
        <p className="hero-description">
          Desenvolvedor Full Stack com experiência prática em soluções para
          logística, operações portuárias e sistemas web. Uno interfaces claras,
          APIs seguras e bancos de dados bem estruturados.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver meus projetos
            <ArrowDownRight aria-hidden="true" />
          </a>
          <a
            className="button button-secondary"
            href={curriculumUrl}
            download
          >
            Baixar currículo
            <Download aria-hidden="true" />
          </a>
        </div>

        <div className="hero-links" aria-label="Links profissionais">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitFork aria-hidden="true" />
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            E-mail
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Resumo do perfil técnico">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

        <article className="profile-card">
          <header className="profile-card-header">
            <div>
              <span className="profile-card-label">PERFIL / 2026</span>
              <h2>Engenharia com propósito</h2>
            </div>
          </header>

          <div className="profile-stack">
            <div>
              <Code2 aria-hidden="true" />
              <span>Interfaces</span>
              <strong>React + TypeScript</strong>
            </div>
            <div>
              <ServerCog aria-hidden="true" />
              <span>Back-end</span>
              <strong>Node.js + .NET</strong>
            </div>
            <div>
              <Database aria-hidden="true" />
              <span>Dados</span>
              <strong>PostgreSQL + SQL Server</strong>
            </div>
          </div>

          <footer className="profile-card-footer">
            <MapPin aria-hidden="true" />
            {profile.location}
          </footer>
        </article>

      </div>
    </section>
  )
}
