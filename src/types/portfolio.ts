export interface NavigationItem {
  label: string
  href: string
}

export interface SkillGroup {
  title: string
  items: string[]
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
  period: string
  summary: string
}
