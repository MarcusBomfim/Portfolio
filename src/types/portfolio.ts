export type Language = 'pt' | 'en'

export interface NavigationItem {
  label: string
  href: string
}

export interface Metric {
  value: string
  label: string
}

export interface SkillGroup {
  title: string
  description: string
  application: string
  items: string[]
  type: 'frontend' | 'backend' | 'data'
}

export interface Project {
  id: string
  title: string
  category: string
  context: string
  description: string
  challenge: string
  solution: string
  highlights: string[]
  metrics: Metric[]
  technologies: string[]
  repository?: string
  demo?: string
  featured?: boolean
  preview: 'ships' | 'observability' | 'scheduling' | 'inventory' | 'works'
}

export interface Experience {
  company: string
  role: string
  area: string
  period: string
  summary: string
  highlights: string[]
}

export interface Certificate {
  title: string
  issuer: string
  issuedAt: string
  issuedAtLabel: string
  description: string
  skills: string[]
  document: string
  preview: string
  type: 'aws' | 'cisco' | 'microsoft'
}

export interface Profile {
  name: string
  shortName: string
  role: string
  location: string
  email: string
  github: string
  linkedin: string
  about: string
  aboutComplement: string
  goal: string
}

export interface HeroContent {
  eyebrow: string
  headline: string
  headlineAccent: string
  description: string
  primaryAction: string
  secondaryAction: string
  stackLabel: string
  stackLayers: { label: string; value: string }[]
}

export interface AboutContent {
  label: string
  principles: string[]
  profileLabel: string
  profileBadge: string
  facts: { term: string; value: string }[]
}

export interface ProjectsContent {
  eyebrow: string
  title: string
  description: string
  items: Project[]
}

export interface ExperienceContent {
  label: string
  bridgeTitle: string
  bridgeText: string
  items: Experience[]
}

export interface ContactContent {
  eyebrow: string
  title: string
  description: string
  primaryAction: string
  directLabel: string
}

export interface UiStrings {
  skipToContent: string
  openMenu: string
  closeMenu: string
  goToStart: string
  mainNavigation: string
  professionalLinks: string
  footerNavigation: string
  backToTop: string
  builtWith: string
  themeToLight: string
  themeToDark: string
  languageLabel: string
  challenge: string
  solution: string
  highlightsOf: (title: string) => string
  technologiesOf: (title: string) => string
  metricsOf: (title: string) => string
  liveDemo: string
  sourceCode: string
  repositoryPending: string
  viewCertificate: string
  openCertificate: (title: string) => string
  certificatePreview: (title: string) => string
  certificateCompleted: string
  certificateSkills: (title: string) => string
  activitiesAt: (company: string) => string
  skillsOf: (title: string) => string
  practicalUse: string
  curriculumTitle: (updatedAt: string) => string
  statsLabel: string
  previews: PreviewStrings
}

/**
 * Textos das prévias exibidas ao lado de cada projeto. Só o AsiaLogService é
 * captura de tela; as demais são maquetes, e a legenda diz isso na cara.
 */
export interface PreviewStrings {
  illustration: string
  ships: {
    toolbar: string
    eyebrow: string
    title: string
    berthed: string
    waiting: string
    planned: string
  }
  asiaLog: {
    toolbar: string
    caption: string
    alt: string
  }
  scheduling: {
    toolbar: string
    eyebrow: string
    title: string
    scheduled: string
    confirmed: string
    terminal: string
    statuses: [string, string, string]
  }
  inventory: {
    toolbar: string
    eyebrow: string
    title: string
    products: string
    lowStock: string
    movements: string
    items: [string, string, string]
    unit: string
  }
  works: {
    toolbar: string
    eyebrow: string
    title: string
    executed: string
    expected: string
    progress: string
    measured: string
    diaries: string
    axisStart: string
    axisEnd: string
  }
}

export interface Content {
  profile: Profile
  navigation: NavigationItem[]
  hero: HeroContent
  stats: Metric[]
  about: AboutContent
  skills: { label: string; groups: SkillGroup[] }
  projects: ProjectsContent
  certificates: { label: string; description: string; items: Certificate[] }
  experience: ExperienceContent
  contact: ContactContent
  ui: UiStrings
}
