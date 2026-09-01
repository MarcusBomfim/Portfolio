import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Language } from '../types/portfolio'
import { LanguageContext, STORAGE_KEY, readStoredLanguage } from './LanguageContext'

const documentLanguage: Record<Language, string> = {
  pt: 'pt-BR',
  en: 'en',
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = documentLanguage[language]

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Navegar em modo privado não deve quebrar a troca de idioma.
    }
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))
  }, [])

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language, toggleLanguage],
  )

  return <LanguageContext value={value}>{children}</LanguageContext>
}
