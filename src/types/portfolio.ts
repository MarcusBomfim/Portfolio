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
  description: string
  technologies: string[]
  repository?: string
  featured?: boolean
}

export interface Experience {
  company: string
  role: string
  period: string
  summary: string
}
