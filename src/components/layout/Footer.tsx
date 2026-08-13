import { ArrowUp, GitFork, Mail } from 'lucide-react'
import { profile } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.shortName}. Desenvolvido com React
        e TypeScript.
      </p>

      <nav aria-label="Links do rodapé">
        <a href={profile.github} target="_blank" rel="noreferrer">
          <GitFork aria-hidden="true" />
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>
          <Mail aria-hidden="true" />
          E-mail
        </a>
        <a href="#conteudo-principal">
          Voltar ao topo
          <ArrowUp aria-hidden="true" />
        </a>
      </nav>
    </footer>
  )
}
