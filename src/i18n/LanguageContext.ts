import { createContext } from 'react'
import type { Language } from '../types/portfolio'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export const STORAGE_KEY = 'portfolio-language'

export function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)

    if (stored === 'pt' || stored === 'en') {
      return stored
    }

    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  } catch {
    return 'pt'
  }
}
