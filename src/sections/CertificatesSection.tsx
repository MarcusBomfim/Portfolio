import { Award, Cloud, Code2, ExternalLink, ShieldCheck } from 'lucide-react'
import { certificates } from '../data/portfolio'

const issuerIcons = {
  aws: Cloud,
  cisco: ShieldCheck,
  microsoft: Code2,
}

export function CertificatesSection() {
  return (
    <section id="certificados" className="certificates-section section-shell">
      <header className="certificates-intro">
        <h2 className="section-label">Certificados</h2>
        <p>
          Formações concluídas em desenvolvimento de software, computação em
          nuvem, redes e cibersegurança.
        </p>
      </header>

      <div className="certificates-grid">
        {certificates.map((certificate) => {
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
                aria-label={`Abrir certificado ${certificate.title}`}
              >
                <img
                  src={certificate.preview}
                  alt={`Prévia do certificado ${certificate.title}`}
                  loading="lazy"
                />
                <span><Award aria-hidden="true" /> Certificado concluído</span>
              </a>

              <div className="certificate-content">
                <div className="certificate-meta">
                  <span><IssuerIcon aria-hidden="true" />{certificate.issuer}</span>
                  <time dateTime={certificate.issuedAt}>{certificate.issuedAtLabel}</time>
                </div>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>
                <ul aria-label={`Competências do certificado ${certificate.title}`}>
                  {certificate.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
                <a
                  className="certificate-link"
                  href={certificate.document}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visualizar certificado <ExternalLink aria-hidden="true" />
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
