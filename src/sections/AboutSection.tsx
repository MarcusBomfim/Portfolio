import {
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Target,
} from 'lucide-react'
import { profile } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="sobre" className="about-section section-shell">
      <div className="about-grid">
        <div className="about-content">
          <h2 className="section-label">Sobre mim</h2>

          <div className="about-copy">
            <p>{profile.about}</p>
            <p>{profile.aboutComplement}</p>
          </div>

          <ul className="about-principles" aria-label="Princípios de trabalho">
            <li>
              <CheckCircle2 aria-hidden="true" />
              Soluções completas, da interface ao banco de dados
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              Código organizado, seguro e preparado para manutenção
            </li>
            <li>
              <CheckCircle2 aria-hidden="true" />
              Comunicação clara e aprendizado contínuo
            </li>
          </ul>
        </div>

        <aside className="about-profile" aria-label="Resumo profissional">
          <header>
            <span>Perfil em resumo</span>
            <strong>Full Stack</strong>
          </header>

          <dl className="about-facts">
            <div>
              <GraduationCap aria-hidden="true" />
              <dt>Formação</dt>
              <dd>Sistemas para Internet</dd>
            </div>
            <div>
              <BriefcaseBusiness aria-hidden="true" />
              <dt>Atuação atual</dt>
              <dd>Infraestrutura e suporte de TI</dd>
            </div>
            <div>
              <MapPin aria-hidden="true" />
              <dt>Localização</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <Target aria-hidden="true" />
              <dt>Objetivo</dt>
              <dd>Desenvolvimento Full Stack</dd>
            </div>
          </dl>

          <p className="about-goal">{profile.goal}</p>
        </aside>
      </div>
    </section>
  )
}
