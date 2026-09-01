import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { sectionIds } from '../../data/portfolio'
import { useContent } from '../../i18n/useContent'
import { LanguageToggle } from '../ui/LanguageToggle'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const { navigation, profile, ui } = useContent()

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
      const sections = sectionIds
        .map((id) => document.getElementById(id))
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
        <a className="brand" href="#inicio" aria-label={ui.goToStart}>
          <span className="brand-mark" aria-hidden="true">MB</span>
          <span className="brand-name">{profile.shortName}</span>
        </a>

        <nav
          id="navegacao-principal"
          className={`primary-navigation${isMenuOpen ? ' is-open' : ''}`}
          aria-label={ui.mainNavigation}
        >
          <ul className="navigation-list">
            {navigation.map((item) => {
              const id = item.href.slice(1)
              const isActive = activeSection === id

              return (
                <li key={item.href}>
                  <a
                    className={isActive ? 'navigation-active' : undefined}
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header-controls">
          <LanguageToggle />
          <ThemeToggle />
          <button
            ref={menuToggleRef}
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? ui.closeMenu : ui.openMenu}
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
