import { useContent, useLanguage } from '../../i18n/useContent'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()
  const { ui } = useContent()

  return (
    <button
      className="language-toggle"
      type="button"
      aria-label={ui.languageLabel}
      title={ui.languageLabel}
      onClick={toggleLanguage}
    >
      <span className={language === 'pt' ? 'is-active' : undefined}>PT</span>
      <span aria-hidden="true">/</span>
      <span className={language === 'en' ? 'is-active' : undefined}>EN</span>
    </button>
  )
}
