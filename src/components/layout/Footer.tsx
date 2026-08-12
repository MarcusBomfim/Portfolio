import { profile } from '../../data/portfolio'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.shortName}
      </p>
    </footer>
  )
}
