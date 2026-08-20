import type {
  Certificate,
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
  linkedin: 'https://www.linkedin.com/in/marcus-bomfim-625495367/',
  summary:
    'Desenvolvo aplicações web completas, com foco em código organizado, segurança e soluções para problemas reais.',
  about:
    'Sou formado em Sistemas para Internet e atuo profissionalmente com infraestrutura e suporte de TI. Em desenvolvimento, construo aplicações utilizando principalmente TypeScript, React, Node.js, C#/.NET e bancos de dados relacionais.',
  aboutComplement:
    'Essa experiência me ajuda a enxergar o produto além do código: considero o ambiente, a segurança, a manutenção e as necessidades de quem utiliza a solução no dia a dia.',
  goal:
    'Busco uma oportunidade em desenvolvimento Full Stack para contribuir com projetos reais, aprender com o time e evoluir continuamente como desenvolvedor.',
}

export const navigationItems: NavigationItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Certificados', href: '#certificados' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export const certificates: Certificate[] = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    issuedAt: '2026-08-20',
    issuedAtLabel: '20 ago. 2026',
    description:
      'Fundamentos da nuvem AWS, serviços essenciais, segurança, arquitetura, preços e suporte.',
    skills: ['Cloud computing', 'AWS', 'Segurança na nuvem'],
    document: '/certificates/aws-cloud-practitioner-essentials.pdf',
    preview: '/certificates/aws-cloud-practitioner-essentials.png',
    type: 'aws',
  },
  {
    title: 'Network Defense',
    issuer: 'Cisco Networking Academy',
    issuedAt: '2025-04-10',
    issuedAtLabel: '10 abr. 2025',
    description:
      'Defesa de redes, proteção de dados, segurança de endpoints, firewalls, identidade e infraestrutura de chaves públicas.',
    skills: ['Cibersegurança', 'Network Defense', 'PKI'],
    document: '/certificates/cisco-network-defense.pdf',
    preview: '/certificates/cisco-network-defense.png',
    type: 'cisco',
  },
  {
    title: 'Network Technician Career Path',
    issuer: 'Cisco Networking Academy',
    issuedAt: '2025-04-17',
    issuedAtLabel: '17 abr. 2025',
    description:
      'Trilha de redes com Ethernet, IPv4, IPv6, roteamento, serviços de rede, conectividade e diagnóstico de falhas.',
    skills: ['Redes', 'IPv4 e IPv6', 'Troubleshooting'],
    document: '/certificates/cisco-network-technician-career-path.pdf',
    preview: '/certificates/cisco-network-technician-career-path.png',
    type: 'cisco',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    description:
      'Interfaces responsivas, acessíveis e organizadas em componentes reutilizáveis.',
    application:
      'Dashboards, formulários, consumo de APIs e experiências adaptadas a diferentes telas.',
    items: ['TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Vite'],
    type: 'frontend',
  },
  {
    title: 'Back-end',
    description:
      'APIs e serviços com regras de negócio bem definidas, validação e segurança.',
    application:
      'APIs REST, autenticação, controle de acesso, tarefas em segundo plano e integrações.',
    items: ['C#', '.NET 8', 'ASP.NET Core', 'Node.js', 'APIs REST'],
    type: 'backend',
  },
  {
    title: 'Dados e ferramentas',
    description:
      'Persistência relacional e ferramentas para desenvolver, testar e executar aplicações.',
    application:
      'Modelagem de dados, consultas SQL, containers, versionamento e observabilidade.',
    items: [
      'PostgreSQL',
      'SQL Server',
      'Entity Framework Core',
      'Docker',
      'Git',
      'GitHub',
    ],
    type: 'data',
  },
]

export const projects: Project[] = [
  {
    title: 'AsiaLogService',
    category: 'Back-end e observabilidade',
    context: 'Projeto solicitado pela Asia Shipping',
    description:
      'Serviço para centralizar a consulta de logs, identificar eventos críticos e apoiar o acompanhamento das integrações da empresa.',
    challenge:
      'Facilitar a identificação de falhas em diferentes integrações e reduzir o acompanhamento manual de ocorrências críticas.',
    solution:
      'Desenvolvi uma API REST em .NET 8 com filtros, persistência em SQL Server, alertas por e-mail, processamento em segundo plano e monitoramento da aplicação.',
    highlights: [
      'Interface integrada à API e ao SQL Server',
      'Alertas automáticos para eventos críticos',
      'Retry para falhas no envio de notificações',
      'Métricas com Prometheus e Grafana',
    ],
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
    preview: 'observability',
  },
  {
    title: 'Porto Agenda',
    category: 'Full Stack e operações portuárias',
    context: 'Projeto autoral',
    description:
      'Plataforma para organizar agendamentos de caminhões, cadastros operacionais e acessos de usuários em um único fluxo.',
    challenge:
      'Representar regras reais de agenda, capacidade de terminais, disponibilidade de veículos e segurança de acesso sem comprometer a experiência do operador.',
    solution:
      'Construí uma aplicação React integrada a uma API Node.js modular, com PostgreSQL, autenticação JWT, perfis administrativos, recuperação de senha e execução completa com Docker.',
    highlights: [
      'Regras de conflito e transição de status',
      'Autenticação e autorização administrativa',
      'Testes automatizados e integração contínua',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    repository: 'https://github.com/MarcusBomfim/agendamento-caminhoes',
    featured: true,
    preview: 'scheduling',
  },
  {
    title: 'Nexo - Controle de Estoque',
    category: 'Full Stack e gestão',
    context: 'Projeto autoral',
    description:
      'Sistema para administrar produtos, entradas, saídas, níveis mínimos e histórico de movimentações.',
    challenge:
      'Manter o saldo consistente durante movimentações simultâneas e permitir que o projeto funcionasse com ou sem um servidor configurado.',
    solution:
      'Implementei modos local e PostgreSQL, uma API REST com transações e bloqueio de registros, dashboard, filtros, alertas de reposição e exportação do inventário.',
    highlights: [
      'Transações com controle de concorrência',
      'Modo local e persistência PostgreSQL',
      'Alertas, filtros e exportação CSV',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'CSS'],
    repository: 'https://github.com/MarcusBomfim/Controle-Estoque',
    preview: 'inventory',
  },
]

export const experiences: Experience[] = [
  {
    company: 'Prefeitura Municipal de São Vicente',
    role: 'Estagiário de Infraestrutura e Suporte de TI',
    area: 'Tecnologia da Informação',
    period: 'mar. 2026 - atual',
    summary:
      'Suporte a usuários, manutenção de equipamentos, instalação de sistemas e diagnóstico de conectividade e redes.',
    highlights: [
      'Atendimento e diagnóstico de incidentes',
      'Manutenção e preparação de equipamentos',
      'Instalação de sistemas e suporte à conectividade',
    ],
  },
  {
    company: 'RN Shipbroker',
    role: 'Auxiliar Administrativo',
    area: 'Operações marítimas e administrativas',
    period: 'ago. 2022 - abr. 2023',
    summary:
      'Controle de documentos de embarque, atendimento a clientes, contato com agentes portuários e relatórios em Excel.',
    highlights: [
      'Controle de documentos de embarque',
      'Contato com clientes e agentes portuários',
      'Organização de informações e relatórios em Excel',
    ],
  },
]
