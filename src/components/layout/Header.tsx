import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigationItems, profile } from '../../data/portfolio'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="site-header-shell">
      <div className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span>{profile.shortName}</span>
        </a>

        <nav
          id="navegacao-principal"
          className={`primary-navigation${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="navigation-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className={item.href === '#contato' ? 'navigation-cta' : ''}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          <button
            ref={menuToggleRef}
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="navegacao-principal"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
