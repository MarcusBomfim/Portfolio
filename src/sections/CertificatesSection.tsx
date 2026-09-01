import { Award, Cloud, Code2, ExternalLink, ShieldCheck } from 'lucide-react'
import { useContent } from '../i18n/useContent'

const issuerIcons = {
  aws: Cloud,
  cisco: ShieldCheck,
  microsoft: Code2,
}

export function CertificatesSection() {
  const { certificates, ui } = useContent()

  return (
    <section id="certificados" className="certificates-section section-shell">
      <header className="certificates-intro">
        <h2 className="section-label">{certificates.label}</h2>
        <p>{certificates.description}</p>
      </header>

      <div className="certificates-grid">
        {certificates.items.map((certificate) => {
          const IssuerIcon = issuerIcons[certificate.type]

          return (
            <article
              className={`certificate-card certificate-card-${certificate.type}`}
              key={certificate.title}
            >
              <a
                className="certificate-preview"
                href={certificate.document}
                target="_blank"
                rel="noreferrer"
                aria-label={ui.openCertificate(certificate.title)}
              >
                <img
                  src={certificate.preview}
                  alt={ui.certificatePreview(certificate.title)}
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <Award aria-hidden="true" />
                  {ui.certificateCompleted}
                </span>
              </a>

              <div className="certificate-content">
                <div className="certificate-meta">
                  <span>
                    <IssuerIcon aria-hidden="true" />
                    {certificate.issuer}
                  </span>
                  <time dateTime={certificate.issuedAt}>
                    {certificate.issuedAtLabel}
                  </time>
                </div>

                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>

                <ul aria-label={ui.certificateSkills(certificate.title)}>
                  {certificate.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>

                <a
                  className="certificate-link"
                  href={certificate.document}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ui.viewCertificate}
                  <ExternalLink aria-hidden="true" />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
