import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { navigationItems, profile } from '../../data/portfolio'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
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

  useEffect(() => {
    let animationFrameId = 0

    const updateActiveSection = () => {
      const activationPoint = window.scrollY + window.innerHeight * 0.35
      const sections = navigationItems
        .map((item) => document.getElementById(item.href.slice(1)))
        .filter((section): section is HTMLElement => section !== null)

      const currentSection = sections
        .filter(
          (section) =>
            section.getBoundingClientRect().top + window.scrollY <=
            activationPoint,
        )
        .at(-1)

      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      const nextSection = isAtPageEnd
        ? sections.at(-1)?.id ?? ''
        : currentSection?.id ?? ''

      setActiveSection((current) =>
        current === nextSection ? current : nextSection,
      )
      animationFrameId = 0
    }

    const scheduleUpdate = () => {
      if (animationFrameId) return
      animationFrameId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

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
                  className={
                    activeSection === item.href.slice(1)
                      ? 'navigation-active'
                      : undefined
                  }
                  href={item.href}
                  aria-current={
                    activeSection === item.href.slice(1)
                      ? 'location'
                      : undefined
                  }
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
