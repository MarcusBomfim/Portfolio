import { ArrowUpRight, CheckCircle2, FileDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { curriculum } from '../data/portfolio'
import { useContent, useLanguage } from '../i18n/useContent'

export function ContactSection() {
  const { contact, profile, ui } = useContent()
  const { language } = useLanguage()

  return (
    <section id="contato" className="contact-section section-shell">
      <div className="contact-panel">
        <div className="contact-content">
          <span className="contact-eyebrow">
            <CheckCircle2 aria-hidden="true" />
            {contact.eyebrow}
          </span>

          <h2>{contact.title}</h2>
          <p>{contact.description}</p>

          <a className="contact-primary" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            {contact.primaryAction}
            <ArrowUpRight aria-hidden="true" />
          </a>

          <div className="contact-secondary-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedinIn aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={curriculum.url[language]}
              download={curriculum.downloadName[language]}
              type="application/pdf"
              title={ui.curriculumTitle(curriculum.updatedAt[language])}
            >
              <FileDown aria-hidden="true" />
              {language === 'pt' ? 'Currículo' : 'Résumé'}
            </a>
          </div>
        </div>

        <aside className="contact-card" aria-label={contact.directLabel}>
          <span>{contact.directLabel}</span>
          <a className="contact-card-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div>
            <FaLinkedinIn aria-hidden="true" />
            <p>
              <small>LinkedIn</small>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.shortName}
              </a>
            </p>
          </div>

          <div>
            <FaGithub aria-hidden="true" />
            <p>
              <small>GitHub</small>
              <a href={profile.github} target="_blank" rel="noreferrer">
                @MarcusBomfim
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
