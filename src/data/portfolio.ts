import type { Content, Language } from '../types/portfolio'

/**
 * Dados que não mudam com o idioma ficam aqui uma única vez: endereços,
 * tecnologias, números verificáveis e caminhos de arquivo. Só o texto
 * corrido é escrito duas vezes, logo abaixo.
 */

const identity = {
  name: 'Marcus Vinicius Ferreira Bomfim',
  shortName: 'Marcus Bomfim',
  email: 'marcusbomfimm@gmail.com',
  github: 'https://github.com/MarcusBomfim',
  linkedin: 'https://www.linkedin.com/in/marcus-bomfim-625495367/',
}

export const curriculum = {
  url: `${import.meta.env.BASE_URL}curriculo-marcus-bomfim.pdf`,
  downloadName: 'Marcus-Bomfim-Curriculo-Full-Stack.pdf',
  updatedAt: { pt: 'ago. 2026', en: 'Aug 2026' },
}

const repositories = {
  ships: 'https://github.com/MarcusBomfim/gestao-escalas-navios',
  asiaLog: 'https://github.com/MarcusBomfim/AsiaLogService',
  scheduling: 'https://github.com/MarcusBomfim/agendamento-caminhoes',
  inventory: 'https://github.com/MarcusBomfim/Controle-Estoque',
}

/**
 * Preencha assim que a demonstração pública estiver hospedada. O botão de
 * demo só aparece no card quando existe um endereço aqui.
 */
const demos: Partial<Record<keyof typeof repositories, string>> = {}

const stacks = {
  ships: ['C# 14', '.NET 10', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
  asiaLog: ['C#', '.NET 8', 'SQL Server', 'Docker', 'Prometheus', 'Grafana'],
  scheduling: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  inventory: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'CSS'],
}

const certificateAssets = {
  csharp: {
    document:
      'https://www.freecodecamp.org/certification/marcusbomfim/foundational-c-sharp-with-microsoft',
    preview: '/certificates/freecodecamp-foundational-csharp-microsoft.webp',
    issuedAt: '2026-08-26',
  },
  aws: {
    document: '/certificates/aws-cloud-practitioner-essentials.pdf',
    preview: '/certificates/aws-cloud-practitioner-essentials.webp',
    issuedAt: '2026-08-20',
  },
  defense: {
    document: '/certificates/cisco-network-defense.pdf',
    preview: '/certificates/cisco-network-defense.webp',
    issuedAt: '2025-04-10',
  },
  network: {
    document: '/certificates/cisco-network-technician-career-path.pdf',
    preview: '/certificates/cisco-network-technician-career-path.webp',
    issuedAt: '2025-04-17',
  },
}

const sectionIds = ['sobre', 'tecnologias', 'projetos', 'certificados', 'experiencia', 'contato']

const pt: Content = {
  profile: {
    ...identity,
    role: 'Desenvolvedor Full Stack',
    location: 'São Vicente, SP',
    about:
      'Sou formado em Sistemas para Internet e atuo profissionalmente com infraestrutura e suporte de TI. Em desenvolvimento, construo aplicações com TypeScript, React, Node.js, C#/.NET e bancos de dados relacionais.',
    aboutComplement:
      'Já passei por rotinas administrativas e hoje atuo com infraestrutura. Essa mistura me ajuda a enxergar o produto além do código: considero o ambiente, a segurança, a manutenção e a rotina de quem usa a solução todo dia.',
    goal:
      'Busco uma oportunidade em desenvolvimento Full Stack para contribuir com projetos reais, aprender com o time e evoluir continuamente como desenvolvedor.',
  },

  navigation: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Certificados', href: '#certificados' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Contato', href: '#contato' },
  ],

  hero: {
    eyebrow: 'Full Stack · São Vicente, SP',
    headline: 'Construo software',
    headlineAccent: 'do banco à interface.',
    description:
      'Aplicações completas em C#/.NET, React e bancos relacionais, com autenticação, testes automatizados e entrega em Docker. Cada projeto aqui resolve um problema real, não um exercício de tutorial.',
    primaryAction: 'Ver os projetos',
    secondaryAction: 'Baixar currículo',
    stackLabel: 'Stack principal',
    stackLayers: [
      { label: 'Interface', value: 'React + TypeScript' },
      { label: 'Back-end', value: '.NET + Node.js' },
      { label: 'Dados', value: 'PostgreSQL + SQL Server' },
    ],
  },

  stats: [
    { value: '120', label: 'testes automatizados' },
    { value: '4', label: 'estudos de caso' },
    { value: '4', label: 'certificações técnicas' },
    { value: '3', label: 'pipelines de CI/CD' },
  ],

  about: {
    label: 'Sobre mim',
    principles: [
      'Soluções completas, da interface ao banco de dados',
      'Código organizado, seguro e preparado para manutenção',
      'Domínio de negócio antes da escolha de tecnologia',
    ],
    profileLabel: 'Perfil em resumo',
    profileBadge: 'Full Stack',
    facts: [
      { term: 'Formação', value: 'Sistemas para Internet' },
      { term: 'Atuação atual', value: 'Infraestrutura e suporte de TI' },
      { term: 'Localização', value: 'São Vicente, SP' },
      { term: 'Idioma', value: 'Inglês fluente' },
    ],
  },

  skills: {
    label: 'Tecnologias e competências',
    groups: [
      {
        title: 'Front-end',
        description:
          'Interfaces responsivas, acessíveis e organizadas em componentes reutilizáveis.',
        application:
          'Dashboards operacionais, formulários com validação, consumo de APIs e telas adaptadas ao uso em campo.',
        items: ['TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Vite'],
        type: 'frontend',
      },
      {
        title: 'Back-end',
        description:
          'APIs e serviços com regras de negócio bem definidas, validação e segurança.',
        application:
          'APIs REST, autenticação JWT, controle de acesso por papel, tarefas em segundo plano e integrações.',
        items: ['C#', '.NET 8 e 10', 'ASP.NET Core', 'Node.js', 'APIs REST'],
        type: 'backend',
      },
      {
        title: 'Dados e entrega',
        description:
          'Persistência relacional e as ferramentas que levam o código até produção.',
        application:
          'Modelagem, consultas SQL, containers, integração contínua, testes automatizados e observabilidade.',
        items: [
          'PostgreSQL',
          'SQL Server',
          'Entity Framework Core',
          'Docker',
          'GitHub Actions',
          'Prometheus',
        ],
        type: 'data',
      },
    ],
  },

  projects: {
    eyebrow: 'Projetos selecionados',
    title: 'Código aplicado a cenários reais',
    description:
      'Quatro estudos de caso com o problema, as decisões técnicas e o que foi entregue. Nenhum é clone de tutorial.',
    items: [
      {
        id: 'ships',
        title: 'Gestão de Escalas de Navios',
        category: 'Full Stack e operações portuárias',
        context: 'Projeto autoral · versão 1.0.0 concluída',
        description:
          'Plataforma para planejar, acompanhar e auditar escalas e operações de navios em terminais portuários.',
        challenge:
          'Representar o ciclo completo de uma escala — navio, berço, janela de atracação, marcos operacionais e progresso de carga — mantendo isolamento entre organizações e um histórico auditável de cada mudança.',
        solution:
          'Construí uma arquitetura em camadas com C# 14 e .NET 10, front-end React, PostgreSQL e Docker. Identidade com JWT e refresh token rotativo, autorização por papéis, torre de controle em tempo real, auditoria, relatórios CSV e contrato OpenAPI 3.1.',
        highlights: [
          'Torre de controle com atualização em tempo real via SignalR',
          'Concorrência otimista nas transições de escala e berço',
          'Acesso público somente leitura, sem senha, para demonstração',
          'CodeQL, Dependabot e testes de carga com k6 na esteira',
        ],
        metrics: [
          { value: '120', label: 'testes automatizados' },
          { value: '3', label: 'pipelines de CI' },
          { value: '4', label: 'perfis de acesso' },
        ],
        technologies: stacks.ships,
        repository: repositories.ships,
        demo: demos.ships,
        featured: true,
        preview: 'ships',
      },
      {
        id: 'asiaLog',
        title: 'AsiaLogService',
        category: 'Back-end e observabilidade',
        context: 'Solicitado pela Asia Shipping',
        description:
          'Serviço para centralizar a consulta de logs, identificar eventos críticos e apoiar o acompanhamento das integrações da empresa.',
        challenge:
          'Facilitar a identificação de falhas em diferentes integrações e reduzir o acompanhamento manual de ocorrências críticas.',
        solution:
          'Desenvolvi uma API REST em .NET 8 com filtros, persistência em SQL Server via Entity Framework Core, alertas por e-mail, processamento em segundo plano e monitoramento da própria aplicação.',
        highlights: [
          'Interface integrada à API e ao SQL Server',
          'Alertas automáticos para eventos críticos',
          'Retry para falhas no envio de notificações',
          'Métricas e painéis com Prometheus e Grafana',
        ],
        metrics: [],
        technologies: stacks.asiaLog,
        repository: repositories.asiaLog,
        demo: demos.asiaLog,
        featured: true,
        preview: 'observability',
      },
      {
        id: 'scheduling',
        title: 'Porto Agenda',
        category: 'Full Stack e logística de terminais',
        context: 'Projeto autoral',
        description:
          'Plataforma para organizar agendamentos de caminhões, cadastros operacionais e acessos de usuários em um único fluxo.',
        challenge:
          'Representar regras reais de agenda, capacidade de terminais, disponibilidade de veículos e segurança de acesso sem comprometer a experiência do operador.',
        solution:
          'Construí uma aplicação React integrada a uma API Node.js modular, com PostgreSQL, autenticação JWT, hash bcrypt, limitação de tentativas, recuperação de senha e execução completa com Docker Compose.',
        highlights: [
          'Regras de conflito, capacidade e transição de status',
          'Entrada demonstrativa por visitante, somente leitura',
          'Recuperação de senha com token de uso único',
          'Testes automatizados no front-end e na API',
        ],
        metrics: [
          { value: '5', label: 'domínios integrados' },
          { value: '18', label: 'agendamentos na base demo' },
          { value: '2', label: 'modos de persistência' },
        ],
        technologies: stacks.scheduling,
        repository: repositories.scheduling,
        demo: demos.scheduling,
        preview: 'scheduling',
      },
      {
        id: 'inventory',
        title: 'Nexo — Controle de Estoque',
        category: 'Full Stack e gestão',
        context: 'Projeto autoral',
        description:
          'Sistema para administrar produtos, entradas, saídas, níveis mínimos e histórico de movimentações.',
        challenge:
          'Manter o saldo consistente durante movimentações simultâneas e permitir que o projeto funcionasse com ou sem um servidor configurado.',
        solution:
          'Implementei modos local e PostgreSQL, uma API REST com transações e bloqueio de registros, dashboard, filtros, alertas de reposição e exportação do inventário em CSV.',
        highlights: [
          'Transações com controle de concorrência',
          'Modo local e persistência PostgreSQL',
          'Alertas de estoque mínimo e exportação CSV',
        ],
        metrics: [],
        technologies: stacks.inventory,
        repository: repositories.inventory,
        demo: demos.inventory,
        preview: 'inventory',
      },
    ],
  },

  certificates: {
    label: 'Certificados',
    description:
      'Formações concluídas em desenvolvimento de software, computação em nuvem, redes e cibersegurança.',
    items: [
      {
        ...certificateAssets.csharp,
        title: 'Foundational C# with Microsoft',
        issuer: 'freeCodeCamp + Microsoft',
        issuedAtLabel: '26 ago. 2026',
        description:
          'Fundamentos de C# e .NET, incluindo tipos, controle de fluxo, métodos, tratamento de dados e desenvolvimento orientado a objetos.',
        skills: ['C#', '.NET', 'Orientação a objetos'],
        type: 'microsoft',
      },
      {
        ...certificateAssets.aws,
        title: 'AWS Cloud Practitioner Essentials',
        issuer: 'AWS Training & Certification',
        issuedAtLabel: '20 ago. 2026',
        description:
          'Fundamentos da nuvem AWS, serviços essenciais, segurança, arquitetura, preços e suporte.',
        skills: ['Cloud computing', 'AWS', 'Segurança na nuvem'],
        type: 'aws',
      },
      {
        ...certificateAssets.defense,
        title: 'Network Defense',
        issuer: 'Cisco Networking Academy',
        issuedAtLabel: '10 abr. 2025',
        description:
          'Defesa de redes, proteção de dados, segurança de endpoints, firewalls, identidade e infraestrutura de chaves públicas.',
        skills: ['Cibersegurança', 'Network Defense', 'PKI'],
        type: 'cisco',
      },
      {
        ...certificateAssets.network,
        title: 'Network Technician Career Path',
        issuer: 'Cisco Networking Academy',
        issuedAtLabel: '17 abr. 2025',
        description:
          'Trilha de redes com Ethernet, IPv4, IPv6, roteamento, serviços de rede, conectividade e diagnóstico de falhas.',
        skills: ['Redes', 'IPv4 e IPv6', 'Troubleshooting'],
        type: 'cisco',
      },
    ],
  },

  experience: {
    label: 'Experiência',
    bridgeTitle: 'Rotina de trabalho vira requisito de software',
    bridgeText:
      'Atender usuário, resolver incidente e organizar documento ensina onde o processo trava na prática. É esse conhecimento que aparece nas regras de negócio dos meus projetos.',
    items: [
      {
        company: 'Prefeitura Municipal de São Vicente',
        role: 'Estagiário de Infraestrutura e Suporte de TI',
        area: 'Tecnologia da Informação',
        period: 'mar. 2026 — atual',
        summary:
          'Suporte a usuários, manutenção de equipamentos, instalação de sistemas e diagnóstico de conectividade e redes.',
        highlights: [
          'Atendimento e diagnóstico de incidentes',
          'Manutenção preventiva e corretiva de equipamentos',
          'Configuração de redes, roteadores e switches',
        ],
      },
      {
        company: 'RN Shipbroker',
        role: 'Auxiliar Administrativo',
        area: 'Operações marítimas',
        period: 'ago. 2022 — abr. 2023',
        summary:
          'Controle de documentos de embarque, atendimento a clientes, contato com agentes portuários e relatórios em Excel.',
        highlights: [
          'Controle e emissão de documentos de embarque',
          'Articulação com clientes e agentes portuários',
          'Organização de informações e relatórios operacionais',
        ],
      },
    ],
  },

  contact: {
    eyebrow: 'Disponível para oportunidades',
    title: 'Vamos transformar sua ideia em uma solução real?',
    description:
      'Busco uma posição em desenvolvimento Full Stack. Se o perfil fizer sentido para o seu time, respondo no mesmo dia.',
    primaryAction: 'Enviar e-mail',
    directLabel: 'Contato direto',
  },

  ui: {
    skipToContent: 'Ir para o conteúdo principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    goToStart: 'Ir para o início',
    mainNavigation: 'Navegação principal',
    professionalLinks: 'Links profissionais',
    footerNavigation: 'Links do rodapé',
    backToTop: 'Voltar ao topo',
    builtWith: 'Desenvolvido com React e TypeScript.',
    themeToLight: 'Ativar modo claro',
    themeToDark: 'Ativar modo escuro',
    languageLabel: 'Ver em inglês',
    challenge: 'Desafio',
    solution: 'Solução',
    highlightsOf: (title) => `Destaques de ${title}`,
    technologiesOf: (title) => `Tecnologias utilizadas em ${title}`,
    metricsOf: (title) => `Números do projeto ${title}`,
    liveDemo: 'Ver demonstração',
    sourceCode: 'Código no GitHub',
    repositoryPending: 'Repositório em preparação',
    viewCertificate: 'Visualizar certificado',
    openCertificate: (title) => `Abrir certificado ${title}`,
    certificatePreview: (title) => `Prévia do certificado ${title}`,
    certificateCompleted: 'Certificado concluído',
    certificateSkills: (title) => `Competências do certificado ${title}`,
    activitiesAt: (company) => `Atividades em ${company}`,
    skillsOf: (title) => `Tecnologias de ${title}`,
    practicalUse: 'Aplicação prática',
    curriculumTitle: (updatedAt) => `Currículo em PDF — atualizado em ${updatedAt}`,
    statsLabel: 'Números do portfólio',
    previews: {
      illustration: 'Ilustração da interface — não é captura de tela',
      ships: {
        toolbar: 'Escalas / torre de controle',
        eyebrow: 'Janela de atracação',
        title: 'Berços em operação',
        berthed: 'Atracado',
        waiting: 'Aguardando',
        planned: 'Planejado',
      },
      asiaLog: {
        toolbar: 'AsiaLogService / interface em funcionamento',
        caption: 'Captura real: consulta de logs com dados da API do projeto.',
        alt: 'Interface real do AsiaLogService exibindo filtros e logs processados por integração',
      },
      scheduling: {
        toolbar: 'Porto Agenda / operação',
        eyebrow: 'Agenda operacional',
        title: 'Movimentações do dia',
        scheduled: 'agendados',
        confirmed: 'confirmados',
        terminal: 'Terminal',
        statuses: ['Confirmado', 'Em pátio', 'Pendente'],
      },
      inventory: {
        toolbar: 'Nexo / inventário',
        eyebrow: 'Controle de estoque',
        title: 'Visão do inventário',
        products: 'Produtos',
        lowStock: 'Estoque baixo',
        movements: 'Movimentações',
        items: ['Notebook corporativo', 'Monitor 24 polegadas', 'Teclado USB'],
        unit: 'un.',
      },
    },
  },
}

const en: Content = {
  profile: {
    ...identity,
    role: 'Full Stack Developer',
    location: 'São Vicente, Brazil',
    about:
      'I hold a degree in Internet Systems and work professionally in IT infrastructure and support. On the development side, I build applications with TypeScript, React, Node.js, C#/.NET and relational databases.',
    aboutComplement:
      'I have worked in administrative routines and now work in infrastructure. That mix helps me see the product beyond the code: I think about the environment, security, maintenance and the daily routine of whoever uses the system.',
    goal:
      'I am looking for a Full Stack development role where I can contribute to real projects, learn from the team and keep growing as an engineer.',
  },

  navigation: [
    { label: 'About', href: '#sobre' },
    { label: 'Stack', href: '#tecnologias' },
    { label: 'Projects', href: '#projetos' },
    { label: 'Certificates', href: '#certificados' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Contact', href: '#contato' },
  ],

  hero: {
    eyebrow: 'Full Stack · São Vicente, Brazil',
    headline: 'I build software',
    headlineAccent: 'from data to screen.',
    description:
      'Complete applications in C#/.NET, React and relational databases, with authentication, automated tests and Docker delivery. Every project here solves a real problem, not a tutorial exercise.',
    primaryAction: 'See the projects',
    secondaryAction: 'Download résumé',
    stackLabel: 'Core stack',
    stackLayers: [
      { label: 'Interface', value: 'React + TypeScript' },
      { label: 'Back end', value: '.NET + Node.js' },
      { label: 'Data', value: 'PostgreSQL + SQL Server' },
    ],
  },

  stats: [
    { value: '120', label: 'automated tests' },
    { value: '4', label: 'case studies' },
    { value: '4', label: 'technical certifications' },
    { value: '3', label: 'CI/CD pipelines' },
  ],

  about: {
    label: 'About me',
    principles: [
      'End-to-end solutions, from interface to database',
      'Organised, secure code that is ready to maintain',
      'Business domain first, technology choice second',
    ],
    profileLabel: 'Profile at a glance',
    profileBadge: 'Full Stack',
    facts: [
      { term: 'Education', value: 'Internet Systems (BSc)' },
      { term: 'Current role', value: 'IT infrastructure and support' },
      { term: 'Location', value: 'São Vicente, Brazil' },
      { term: 'Language', value: 'Fluent English' },
    ],
  },

  skills: {
    label: 'Stack and skills',
    groups: [
      {
        title: 'Front end',
        description:
          'Responsive, accessible interfaces organised into reusable components.',
        application:
          'Operational dashboards, validated forms, API consumption and screens built for use in the field.',
        items: ['TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3', 'Vite'],
        type: 'frontend',
      },
      {
        title: 'Back end',
        description:
          'APIs and services with well-defined business rules, validation and security.',
        application:
          'REST APIs, JWT authentication, role-based access control, background jobs and integrations.',
        items: ['C#', '.NET 8 and 10', 'ASP.NET Core', 'Node.js', 'REST APIs'],
        type: 'backend',
      },
      {
        title: 'Data and delivery',
        description:
          'Relational persistence and the tooling that takes code to production.',
        application:
          'Modelling, SQL queries, containers, continuous integration, automated tests and observability.',
        items: [
          'PostgreSQL',
          'SQL Server',
          'Entity Framework Core',
          'Docker',
          'GitHub Actions',
          'Prometheus',
        ],
        type: 'data',
      },
    ],
  },

  projects: {
    eyebrow: 'Selected work',
    title: 'Code applied to real operations',
    description:
      'Four case studies with the problem, the technical decisions and what shipped. None of them is a tutorial clone.',
    items: [
      {
        id: 'ships',
        title: 'Ship Call Management',
        category: 'Full Stack and port operations',
        context: 'Personal project · version 1.0.0 shipped',
        description:
          'A platform to plan, track and audit ship calls and cargo operations across port terminals.',
        challenge:
          'Represent the full lifecycle of a ship call — vessel, berth, mooring window, operational milestones and cargo progress — while keeping organisations isolated and every change auditable.',
        solution:
          'I built a layered architecture with C# 14 and .NET 10, a React front end, PostgreSQL and Docker. Identity with JWT and rotating refresh tokens, role-based authorisation, a real-time control tower, auditing, CSV reports and an OpenAPI 3.1 contract.',
        highlights: [
          'Control tower with real-time updates over SignalR',
          'Optimistic concurrency on call and berth transitions',
          'Public read-only access, no password, for demos',
          'CodeQL, Dependabot and k6 load tests in the pipeline',
        ],
        metrics: [
          { value: '120', label: 'automated tests' },
          { value: '3', label: 'CI pipelines' },
          { value: '4', label: 'access roles' },
        ],
        technologies: stacks.ships,
        repository: repositories.ships,
        demo: demos.ships,
        featured: true,
        preview: 'ships',
      },
      {
        id: 'asiaLog',
        title: 'AsiaLogService',
        category: 'Back end and observability',
        context: 'Requested by Asia Shipping',
        description:
          'A service to centralise log queries, surface critical events and support the monitoring of company integrations.',
        challenge:
          'Make failures across different integrations easy to spot and cut down the manual tracking of critical incidents.',
        solution:
          'I developed a .NET 8 REST API with filtering, SQL Server persistence through Entity Framework Core, e-mail alerts, background processing and monitoring of the application itself.',
        highlights: [
          'Interface wired to the API and SQL Server',
          'Automatic alerts for critical events',
          'Retry handling for failed notifications',
          'Metrics and dashboards with Prometheus and Grafana',
        ],
        metrics: [],
        technologies: stacks.asiaLog,
        repository: repositories.asiaLog,
        demo: demos.asiaLog,
        featured: true,
        preview: 'observability',
      },
      {
        id: 'scheduling',
        title: 'Porto Agenda',
        category: 'Full Stack and terminal logistics',
        context: 'Personal project',
        description:
          'A platform that brings truck scheduling, operational records and user access into a single flow.',
        challenge:
          'Model real scheduling rules, terminal capacity, vehicle availability and access security without slowing the operator down.',
        solution:
          'I built a React application on a modular Node.js API, with PostgreSQL, JWT authentication, bcrypt hashing, rate limiting, password recovery and a full Docker Compose setup.',
        highlights: [
          'Conflict, capacity and status transition rules',
          'Read-only guest entry for demonstrations',
          'Password recovery with single-use tokens',
          'Automated tests on both the front end and the API',
        ],
        metrics: [
          { value: '5', label: 'integrated domains' },
          { value: '18', label: 'bookings in the demo data' },
          { value: '2', label: 'persistence modes' },
        ],
        technologies: stacks.scheduling,
        repository: repositories.scheduling,
        demo: demos.scheduling,
        preview: 'scheduling',
      },
      {
        id: 'inventory',
        title: 'Nexo — Inventory Control',
        category: 'Full Stack and management',
        context: 'Personal project',
        description:
          'A system to manage products, inbound and outbound movements, minimum levels and movement history.',
        challenge:
          'Keep balances consistent during simultaneous movements and let the project run with or without a configured server.',
        solution:
          'I implemented local and PostgreSQL modes, a REST API with transactions and row locking, a dashboard, filters, restock alerts and CSV inventory export.',
        highlights: [
          'Transactions with concurrency control',
          'Local mode and PostgreSQL persistence',
          'Minimum stock alerts and CSV export',
        ],
        metrics: [],
        technologies: stacks.inventory,
        repository: repositories.inventory,
        demo: demos.inventory,
        preview: 'inventory',
      },
    ],
  },

  certificates: {
    label: 'Certificates',
    description:
      'Completed programmes in software development, cloud computing, networking and cybersecurity.',
    items: [
      {
        ...certificateAssets.csharp,
        title: 'Foundational C# with Microsoft',
        issuer: 'freeCodeCamp + Microsoft',
        issuedAtLabel: 'Aug 26, 2026',
        description:
          'C# and .NET fundamentals, covering types, control flow, methods, data handling and object-oriented development.',
        skills: ['C#', '.NET', 'Object-oriented design'],
        type: 'microsoft',
      },
      {
        ...certificateAssets.aws,
        title: 'AWS Cloud Practitioner Essentials',
        issuer: 'AWS Training & Certification',
        issuedAtLabel: 'Aug 20, 2026',
        description:
          'AWS cloud fundamentals, core services, security, architecture, pricing and support.',
        skills: ['Cloud computing', 'AWS', 'Cloud security'],
        type: 'aws',
      },
      {
        ...certificateAssets.defense,
        title: 'Network Defense',
        issuer: 'Cisco Networking Academy',
        issuedAtLabel: 'Apr 10, 2025',
        description:
          'Network defence, data protection, endpoint security, firewalls, identity and public key infrastructure.',
        skills: ['Cybersecurity', 'Network Defense', 'PKI'],
        type: 'cisco',
      },
      {
        ...certificateAssets.network,
        title: 'Network Technician Career Path',
        issuer: 'Cisco Networking Academy',
        issuedAtLabel: 'Apr 17, 2025',
        description:
          'Networking path covering Ethernet, IPv4, IPv6, routing, network services, connectivity and troubleshooting.',
        skills: ['Networking', 'IPv4 and IPv6', 'Troubleshooting'],
        type: 'cisco',
      },
    ],
  },

  experience: {
    label: 'Experience',
    bridgeTitle: 'Everyday work turns into software requirements',
    bridgeText:
      'Supporting users, resolving incidents and organising paperwork teaches you exactly where a process stalls. That knowledge is what shows up in the business rules of my projects.',
    items: [
      {
        company: 'City of São Vicente',
        role: 'IT Infrastructure and Support Intern',
        area: 'Information Technology',
        period: 'Mar 2026 — present',
        summary:
          'User support, equipment maintenance, system installation and diagnosis of connectivity and network issues.',
        highlights: [
          'Incident triage and diagnosis',
          'Preventive and corrective equipment maintenance',
          'Configuration of networks, routers and switches',
        ],
      },
      {
        company: 'RN Shipbroker',
        role: 'Administrative Assistant',
        area: 'Maritime operations',
        period: 'Aug 2022 — Apr 2023',
        summary:
          'Shipping document control, client support, coordination with port agents and reporting in Excel.',
        highlights: [
          'Control and issuance of shipping documents',
          'Coordination with clients and port agents',
          'Organisation of operational data and reports',
        ],
      },
    ],
  },

  contact: {
    eyebrow: 'Open to opportunities',
    title: 'Shall we turn your idea into a working product?',
    description:
      'I am looking for a Full Stack development role. If the profile fits your team, I reply the same day.',
    primaryAction: 'Send an e-mail',
    directLabel: 'Direct contact',
  },

  ui: {
    skipToContent: 'Skip to main content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    goToStart: 'Go to the top',
    mainNavigation: 'Main navigation',
    professionalLinks: 'Professional links',
    footerNavigation: 'Footer links',
    backToTop: 'Back to top',
    builtWith: 'Built with React and TypeScript.',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    languageLabel: 'Ver em português',
    challenge: 'Challenge',
    solution: 'Solution',
    highlightsOf: (title) => `Highlights of ${title}`,
    technologiesOf: (title) => `Technologies used in ${title}`,
    metricsOf: (title) => `Key numbers for ${title}`,
    liveDemo: 'View the demo',
    sourceCode: 'Source on GitHub',
    repositoryPending: 'Repository in preparation',
    viewCertificate: 'View certificate',
    openCertificate: (title) => `Open the ${title} certificate`,
    certificatePreview: (title) => `Preview of the ${title} certificate`,
    certificateCompleted: 'Certificate completed',
    certificateSkills: (title) => `Skills covered by ${title}`,
    activitiesAt: (company) => `Responsibilities at ${company}`,
    skillsOf: (title) => `${title} technologies`,
    practicalUse: 'In practice',
    curriculumTitle: (updatedAt) => `Résumé in PDF — updated ${updatedAt}`,
    statsLabel: 'Portfolio in numbers',
    previews: {
      illustration: 'Interface illustration — not a screenshot',
      ships: {
        toolbar: 'Ship calls / control tower',
        eyebrow: 'Mooring window',
        title: 'Berths in operation',
        berthed: 'Berthed',
        waiting: 'Waiting',
        planned: 'Planned',
      },
      asiaLog: {
        toolbar: 'AsiaLogService / running interface',
        caption: 'Actual screenshot: log query served by the project API.',
        alt: 'Live AsiaLogService interface showing filters and logs processed per integration',
      },
      scheduling: {
        toolbar: 'Porto Agenda / operations',
        eyebrow: 'Operational schedule',
        title: 'Movements today',
        scheduled: 'scheduled',
        confirmed: 'confirmed',
        terminal: 'Terminal',
        statuses: ['Confirmed', 'In yard', 'Pending'],
      },
      inventory: {
        toolbar: 'Nexo / inventory',
        eyebrow: 'Stock control',
        title: 'Inventory overview',
        products: 'Products',
        lowStock: 'Low stock',
        movements: 'Movements',
        items: ['Corporate laptop', '24-inch monitor', 'USB keyboard'],
        unit: 'pcs',
      },
    },
  },
}

export const content: Record<Language, Content> = { pt, en }

export { sectionIds }
