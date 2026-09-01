import { ArrowUp, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { useContent } from '../../i18n/useContent'

export function Footer() {
  const { profile, ui } = useContent()

  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.shortName}. {ui.builtWith}
      </p>

      <nav aria-label={ui.footerNavigation}>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedinIn aria-hidden="true" />
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" />
          E-mail
        </a>
        <a className="footer-top" href="#inicio">
          {ui.backToTop}
          <ArrowUp aria-hidden="true" />
        </a>
      </nav>
    </footer>
  )
}
