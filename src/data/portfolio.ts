import type {
  Experience,
  NavigationItem,
  Project,
  SkillGroup,
} from '../types/portfolio'

export const profile = {
  name: 'Marcus Vinicius Ferreira Bomfim',
  shortName: 'Marcus Bomfim',
  role: 'Desenvolvedor Full Stack Júnior',
  location: 'São Vicente, SP',
  email: 'marcusbomfimm@gmail.com',
  github: 'https://github.com/MarcusBomfim',
  summary:
    'Desenvolvo aplicações web completas, com foco em código organizado, segurança e soluções para problemas reais.',
  about:
    'Sou formado em Sistemas para Internet e atuo profissionalmente com infraestrutura e suporte de TI. Em desenvolvimento, construo aplicações utilizando principalmente TypeScript, React, Node.js, C#/.NET e bancos de dados relacionais.',
}

export const navigationItems: NavigationItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    items: ['TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    title: 'Back-end',
    items: ['C#', '.NET 8', 'ASP.NET Core', 'Node.js', 'APIs REST'],
  },
  {
    title: 'Dados e ferramentas',
    items: [
      'PostgreSQL',
      'SQL Server',
      'Entity Framework Core',
      'Docker',
      'Git',
      'GitHub',
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'AsiaLogService',
    description:
      'Solução solicitada pela Asia Shipping para consulta e monitoramento de logs, alertas automáticos e observabilidade.',
    technologies: [
      'C#',
      '.NET 8',
      'SQL Server',
      'Docker',
      'Prometheus',
      'Grafana',
    ],
    repository: 'https://github.com/MarcusBomfim/AsiaLogService',
    featured: true,
  },
  {
    title: 'Porto Agenda',
    description:
      'Sistema full stack para agendamento e controle de caminhões em operações portuárias.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    repository: 'https://github.com/MarcusBomfim/agendamento-caminhoes',
    featured: true,
  },
  {
    title: 'Controle de Estoque',
    description:
      'Aplicação para cadastro de produtos, movimentações e acompanhamento dos níveis de estoque.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Prefeitura Municipal de São Vicente',
    role: 'Estagiário de Infraestrutura e Suporte de TI',
    period: 'mar. 2026 - atual',
    summary:
      'Suporte a usuários, manutenção de equipamentos, instalação de sistemas e diagnóstico de conectividade e redes.',
  },
  {
    company: 'RN Shipbroker',
    role: 'Auxiliar Administrativo',
    period: 'ago. 2022 - abr. 2023',
    summary:
      'Controle de documentos de embarque, atendimento a clientes, contato com agentes portuários e relatórios em Excel.',
  },
]
