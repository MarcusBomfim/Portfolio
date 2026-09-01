import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useContent } from '../../i18n/useContent'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  try {
    const storedTheme = window.localStorage.getItem('portfolio-theme')

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }
  } catch {
    // Sem acesso ao armazenamento, seguimos pela preferência do sistema.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const { ui } = useContent()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // Preferência não persistida é um problema menor que quebrar a página.
    }
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const label = nextTheme === 'dark' ? ui.themeToDark : ui.themeToLight

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={label}
      title={label}
      onClick={() => setTheme(nextTheme)}
    >
      {theme === 'dark' ? (
        <Sun aria-hidden="true" />
      ) : (
        <Moon aria-hidden="true" />
      )}
    </button>
  )
}
