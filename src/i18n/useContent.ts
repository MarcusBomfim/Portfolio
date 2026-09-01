import { use } from 'react'
import { content } from '../data/portfolio'
import type { Content } from '../types/portfolio'
import { LanguageContext } from './LanguageContext'

export function useLanguage() {
  const value = use(LanguageContext)

  if (!value) {
    throw new Error('useLanguage precisa estar dentro de LanguageProvider.')
  }

  return value
}

export function useContent(): Content {
  const { language } = useLanguage()

  return content[language]
}
