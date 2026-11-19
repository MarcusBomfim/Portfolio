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

/**
 * A prévia ao lado de cada estudo de caso: a captura de tela de verdade, de
 * computador ou de celular.
 */
export interface ScreenshotPreview {
  type: 'screenshot'
  src: string
  width: number
  height: number
  frame: 'desktop' | 'phone'
  toolbar: string
  caption: string
  alt: string
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
  preview: ScreenshotPreview
}

/** Um projeto do carrossel de fotos: a foto da tela, uma descrição curta e o código. */
export interface OtherProject {
  id: string
  title: string
  summary: string
  image: {
    src: string
    width: number
    height: number
    alt: string
  }
  repository: string
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
  more: {
    title: string
    description: string
    items: OtherProject[]
  }
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
  carousel: {
    roleDescription: string
    slideRoleDescription: string
    previous: string
    next: string
    position: (current: number, total: number) => string
    goTo: (position: number, title: string) => string
    choose: string
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
