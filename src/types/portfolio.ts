export interface NavigationItem {
  label: string
  href: string
}

export interface SkillGroup {
  title: string
  description: string
  application: string
  items: string[]
  type: 'frontend' | 'backend' | 'data'
}

export interface Project {
  title: string
  category: string
  context: string
  description: string
  challenge: string
  solution: string
  highlights: string[]
  technologies: string[]
  repository?: string
  featured?: boolean
  preview: 'observability' | 'scheduling' | 'inventory'
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
  type: 'aws' | 'cisco'
}
