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

/** O currículo de cada idioma: o português em PDF, e o inglês, refeito do zero. */
export const curriculum = {
  url: {
    pt: `${import.meta.env.BASE_URL}curriculo-marcus-bomfim.pdf`,
    en: `${import.meta.env.BASE_URL}resume-marcus-bomfim-en.pdf`,
  },
  downloadName: {
    pt: 'Marcus-Bomfim-Curriculo-Full-Stack.pdf',
    en: 'Marcus-Bomfim-Resume-Full-Stack.pdf',
  },
  updatedAt: { pt: 'ago. 2026', en: 'Nov 2026' },
}

const repositories = {
  crm: 'https://github.com/MarcusBomfim/crm-obras',
  fraud: 'https://github.com/MarcusBomfim/antifraude-pix',
  dockers: 'https://github.com/MarcusBomfim/escala-avulsos',
}

/**
 * Preencha assim que a demonstração pública estiver hospedada. O botão de
 * demo só aparece no card quando existe um endereço aqui.
 */
const demos: Partial<Record<keyof typeof repositories, string>> = {}

const stacks = {
  crm: ['C# 14', '.NET 10', 'PostgreSQL', 'React', 'TypeScript', 'OpenTelemetry', 'Docker'],
  fraud: ['Python', 'LightGBM', 'Polars', 'MLflow', 'FastAPI', 'Docker', 'OpenTelemetry'],
  dockers: ['C# 14', '.NET 10', 'PostgreSQL', 'React', 'PWA', 'OpenTelemetry', 'Docker'],
}

/** As capturas de tela de verdade de cada estudo de caso, tiradas do repositório de cada um. */
const screenshots = {
  crm: { type: 'screenshot', src: '/projects/crm-obras-funil.webp', width: 1200, height: 817, frame: 'desktop' },
  fraud: { type: 'screenshot', src: '/projects/antifraude-pix-painel.webp', width: 1200, height: 885, frame: 'desktop' },
  dockers: { type: 'screenshot', src: '/projects/escala-avulsos-minha-escala.webp', width: 412, height: 1000, frame: 'phone' },
} as const

/**
 * Os projetos do carrossel de fotos: o repositório e a foto de cada um, todas
 * do mesmo tamanho, pequenas. As fotos são das telas de verdade, com os dados
 * de demonstração de cada projeto.
 */
const others = {
  planning: {
    repository: 'https://github.com/MarcusBomfim/planejamento-obras',
    photo: { src: '/projects/outros/planejamento-obras.webp', width: 640, height: 400 },
  },
  ships: {
    repository: 'https://github.com/MarcusBomfim/gestao-escalas-navios',
    photo: { src: '/projects/outros/gestao-escalas-navios.webp', width: 640, height: 400 },
  },
  concrete: {
    repository: 'https://github.com/MarcusBomfim/controle-concreto',
    photo: { src: '/projects/outros/controle-concreto.webp', width: 640, height: 400 },
  },
  works: {
    repository: 'https://github.com/MarcusBomfim/gestao-obras',
    photo: { src: '/projects/outros/gestao-obras.webp', width: 640, height: 400 },
  },
  asiaLog: {
    repository: 'https://github.com/MarcusBomfim/AsiaLogService',
    photo: { src: '/projects/outros/asialogservice.webp', width: 640, height: 400 },
  },
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
      'Sou formado em Sistemas para Internet e atuo profissionalmente com infraestrutura e suporte de TI. Em desenvolvimento, construo aplicações com TypeScript, React, Node.js, C#/.NET e bancos de dados relacionais, e modelos de machine learning em Python.',
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
    { value: '3.300+', label: 'testes automatizados' },
    { value: '17', label: 'projetos publicados' },
    { value: '19', label: 'pipelines de CI/CD' },
    { value: '4', label: 'certificações técnicas' },
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
        items: ['C#', '.NET 8 e 10', 'ASP.NET Core', 'Node.js', 'Python', 'FastAPI', 'PHP', 'Laravel', 'APIs REST'],
        type: 'backend',
      },
      {
        title: 'Dados e entrega',
        description:
          'Persistência relacional e as ferramentas que levam o código até produção.',
        application:
          'Modelagem, consultas SQL, modelos de machine learning, containers, integração contínua, testes automatizados e observabilidade.',
        items: [
          'PostgreSQL',
          'SQL Server',
          'Entity Framework Core',
          'LightGBM',
          'MLflow',
          'Docker',
          'GitHub Actions',
          'OpenTelemetry',
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
      'Os três projetos mais fortes, com o problema, as decisões técnicas e o que foi entregue. Nenhum é clone de tutorial.',
    items: [
      {
        id: 'crm',
        title: 'CRM de Obras',
        category: 'Full Stack e vendas B2B',
        context: 'Projeto autoral · oito partes concluídas',
        description:
          'O relacionamento de uma construtora com os clientes antes da obra existir: o lead, o funil de vendas, a agenda, a proposta em versões e a previsão de receita — e a proposta aceita, que vira obra no Planejamento de Obras, por eventos.',
        challenge:
          'Venda de construtora leva meses e passa por muita gente. Sem um lugar para essa história, ela se espalha em e-mails e na memória do vendedor: o mesmo cliente vira vários cadastros, o desconto sai de quem não podia dar, e no fim do mês ninguém sabe quanto vai entrar.',
        solution:
          'Modelei o domínio em C# 14 e .NET 10 — o CNPJ alfanumérico de 2026, a régua BANT, o funil configurável e a proposta em versões com alçada de desconto por cargo — sobre o PostgreSQL, com cada construtora isolada por segurança em nível de linha. A API REST tem JWT, ETag e chave de idempotência; o front-end React mostra o funil em kanban; e a venda ganha vira obra no outro sistema por uma caixa de saída, com o rastro do OpenTelemetry de ponta a ponta.',
        highlights: [
          'Cada construtora vê só o que é dela, garantido no próprio banco',
          'Proposta em versões, ao centavo, com desconto por alçada de cargo',
          'Previsão de receita ponderada pela etapa do funil',
          'Integração por eventos: a venda ganha vira obra no outro sistema',
        ],
        metrics: [
          { value: '817', label: 'testes automatizados' },
          { value: '3', label: 'pipelines de CI/CD' },
          { value: '20', label: 'decisões registradas' },
        ],
        technologies: stacks.crm,
        repository: repositories.crm,
        demo: demos.crm,
        preview: {
          ...screenshots.crm,
          toolbar: 'CRM de Obras / funil de vendas',
          caption: 'Captura real: o funil de vendas em kanban, com o valor ponderado de cada etapa.',
          alt: 'Funil de vendas do CRM de Obras em kanban, com as vendas de cada etapa e os valores em aberto e ponderado',
        },
      },
      {
        id: 'fraud',
        title: 'Antifraude Pix',
        category: 'Machine learning e tempo real',
        context: 'Projeto autoral · oito partes concluídas',
        description:
          'Detecção de fraude em Pix do lado do banco de quem paga: cada Pix é aprovado, segurado para o cliente confirmar ou bloqueado antes de sair, com o porquê em português.',
        challenge:
          'Não existe base pública de Pix, o golpe é menos de 0,1% das transações e o rótulo chega dias depois, quando a vítima contesta. O modelo tem de decidir sem olhar o futuro, pelo custo de cada erro, sem errar mais com os idosos, e perceber quando o golpe muda de tática.',
        solution:
          'Escrevi um simulador com os golpes que acontecem no Brasil e 33 variáveis calculadas só com o passado de cada Pix. O LightGBM calibrado decide pelo custo, rastreado no MLflow; uma API em FastAPI decide em tempo real com as mesmas variáveis do treino, provadas Pix a Pix. O monitor percebe pelo rótulo atrasado o golpe novo que a deriva dos dados não vê, e o serviço vai para o ar numa imagem Docker, observado pelo OpenTelemetry sem nenhum dado pessoal.',
        highlights: [
          'Precisão média de 0,93, contra 0,42 das regras de hoje, validada mês a mês',
          'Decidir pelo custo: R$ 101 mil, contra R$ 1,76 milhão aprovando tudo',
          'Decisão em 0,15 ms e ida e volta pela API em 1,2 ms, na mediana',
          'Retreino que só troca o modelo quando o novo ganha nos mesmos Pix',
        ],
        metrics: [
          { value: '456', label: 'testes automatizados' },
          { value: '0,93', label: 'precisão média' },
          { value: '25', label: 'decisões registradas' },
        ],
        technologies: stacks.fraud,
        repository: repositories.fraud,
        demo: demos.fraud,
        preview: {
          ...screenshots.fraud,
          toolbar: 'Antifraude Pix / painel no Grafana',
          caption: 'Captura real: o painel com os Pix de dezembro decididos pela API, dia a dia.',
          alt: 'Painel do Grafana do Antifraude Pix com os Pix decididos por segundo, a parte segurada e bloqueada, o tempo da decisão, o dinheiro segurado e a resposta do cliente',
        },
      },
      {
        id: 'dockers',
        title: 'Escala dos Avulsos',
        category: 'Full Stack, acessibilidade e porto',
        context: 'Projeto autoral · oito partes concluídas',
        description:
          'A escala do trabalhador portuário avulso de Santos refeita para o celular e para quem já não enxerga tão bem: o estivador lê, numa frase, onde trabalha amanhã — ou por que ficou de fora, e até quando.',
        challenge:
          'Mais de seis mil avulsos disputam as vagas pelo celular num sistema feito para computador: letra pequena, siglas e a escala numa tabela cheia de códigos. Muitos têm décadas de cais e aprenderam a profissão na escala presencial. Por trás da tela, a escala tem de respeitar a habilitação, o rodízio e o descanso de onze horas.',
        solution:
          'Escrevi as regras da escala em C# 14 e .NET 10 — habilitação, rodízio pela matrícula, descanso entre jornadas, frequência e extrato — num PostgreSQL que não deixa ninguém em duas jornadas. O aplicativo é um PWA em React, com letra que cresce num toque, contraste alto, a escala lida em voz alta, e que abre sem sinal no cais; a escala nova aparece sozinha na tela aberta.',
        highlights: [
          'Todo "não" vem com o motivo e com o prazo',
          'Letra grande num toque, contraste alto e a escala lida em voz alta',
          'Tempo real: a escala que sai aparece sozinha na tela aberta',
          'Testes de acessibilidade com o axe, no navegador de celular',
        ],
        metrics: [
          { value: '703', label: 'testes automatizados' },
          { value: '3', label: 'pipelines de CI/CD' },
          { value: '24', label: 'decisões registradas' },
        ],
        technologies: stacks.dockers,
        repository: repositories.dockers,
        demo: demos.dockers,
        preview: {
          ...screenshots.dockers,
          toolbar: 'Escala dos Avulsos / minha escala',
          caption: 'Captura real: a escala de hoje no celular, numa frase.',
          alt: 'Tela Minha escala no celular: hoje, à tarde, das 13h às 19h, sinaleiro no terno 1 do navio Atlântico Sul, no Terminal Cais Leste, berço 4',
        },
      },
    ],
    more: {
      title: 'Outros projetos',
      description: 'Mais cinco projetos, com a tela de cada um e o código no GitHub.',
      items: [
        {
          id: 'planning',
          title: 'Planejamento de Obras',
          summary:
            'Caminho crítico, orçamento com BDI e cronograma físico-financeiro, com a obra medida mês a mês por valor agregado. C# 14, .NET 10 e React.',
          image: {
            ...others.planning.photo,
            alt: 'Painel das obras do Planejamento de Obras, com uma obra crítica, uma em dia e uma sem medição',
          },
          repository: others.planning.repository,
        },
        {
          id: 'ships',
          title: 'Gestão de Escalas de Navios',
          summary:
            'Escalas de navios nos terminais, do planejamento à operação, com a torre de controle em tempo real e uma entrada de demonstração sem senha. .NET 10 e React.',
          image: {
            ...others.ships.photo,
            alt: 'Torre de controle da Gestão de Escalas de Navios, com os navios e os berços em operação',
          },
          repository: others.ships.repository,
        },
        {
          id: 'concrete',
          title: 'Controle Tecnológico de Concreto',
          summary:
            'Corpos de prova e o julgamento de cada lote pela NBR 12655, com o resultado amarrado ao caminhão e à peça concretada. Laravel, com 265 testes.',
          image: {
            ...others.concrete.photo,
            alt: 'Lote de concreto C30 julgado não conforme: fck de projeto de 30 MPa e fck estimado de 24,7 MPa',
          },
          repository: others.concrete.repository,
        },
        {
          id: 'works',
          title: 'Gestão de Obras',
          summary:
            'Diário de obra, avanço físico e medição em PHP puro, sem framework, com a curva de avanço desenhada no servidor. 207 testes.',
          image: {
            ...others.works.photo,
            alt: 'Obra em andamento com 27,25% de avanço físico e a curva de avanço contra o ritmo esperado',
          },
          repository: others.works.repository,
        },
        {
          id: 'asiaLog',
          title: 'AsiaLogService',
          summary:
            'API pedida pela Asia Shipping para centralizar os logs das integrações e avisar dos eventos críticos, com painéis no Grafana. .NET 8.',
          image: {
            ...others.asiaLog.photo,
            alt: 'Interface do AsiaLogService com os filtros e os logs processados por integração',
          },
          repository: others.asiaLog.repository,
        },
      ],
    },
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
    carousel: {
      roleDescription: 'carrossel',
      slideRoleDescription: 'projeto',
      previous: 'Projeto anterior',
      next: 'Próximo projeto',
      position: (current, total) => `${current} de ${total}`,
      goTo: (position, title) => `Ir para o projeto ${position}: ${title}`,
      choose: 'Escolher o projeto',
    },
  },
}

const en: Content = {
  profile: {
    ...identity,
    role: 'Full Stack Developer',
    location: 'São Vicente, Brazil',
    about:
      'I hold a degree in Internet Systems and work professionally in IT infrastructure and support. On the development side, I build applications with TypeScript, React, Node.js, C#/.NET and relational databases, and machine learning models in Python.',
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
    { value: '3,300+', label: 'automated tests' },
    { value: '17', label: 'published projects' },
    { value: '19', label: 'CI/CD pipelines' },
    { value: '4', label: 'technical certifications' },
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
      { term: 'Education', value: 'Internet Systems (technologist degree)' },
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
        items: ['C#', '.NET 8 and 10', 'ASP.NET Core', 'Node.js', 'Python', 'FastAPI', 'PHP', 'Laravel', 'REST APIs'],
        type: 'backend',
      },
      {
        title: 'Data and delivery',
        description:
          'Relational persistence and the tooling that takes code to production.',
        application:
          'Modelling, SQL queries, machine learning models, containers, continuous integration, automated tests and observability.',
        items: [
          'PostgreSQL',
          'SQL Server',
          'Entity Framework Core',
          'LightGBM',
          'MLflow',
          'Docker',
          'GitHub Actions',
          'OpenTelemetry',
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
      'The three strongest projects, with the problem, the technical decisions and what shipped. None of them is a tutorial clone.',
    items: [
      {
        id: 'crm',
        title: 'Construction CRM',
        category: 'Full stack and B2B sales',
        context: 'Personal project · all eight parts shipped',
        description:
          'A construction company’s relationship with its clients before the building exists: the lead, the sales pipeline, the agenda, the versioned proposal and the revenue forecast — and the accepted proposal, which becomes a project in Construction Planning through events.',
        challenge:
          'A construction sale takes months and goes through many people. Without one place for that story, it scatters across e-mails and the salesperson’s memory: the same client becomes several records, the discount comes from someone who could not grant it, and at month end nobody knows how much will come in.',
        solution:
          'I modelled the domain in C# 14 and .NET 10 — the alphanumeric CNPJ of 2026, BANT qualification, a configurable pipeline and versioned proposals with discount approval by role — on PostgreSQL, with each company isolated by row-level security. The REST API has JWT, ETags and idempotency keys; the React front end shows the pipeline as a kanban; and a won deal becomes a project in the other system through an outbox, traced end to end with OpenTelemetry.',
        highlights: [
          'Each company sees only its own data, enforced by the database itself',
          'Versioned proposals, to the cent, with discount approval by role',
          'Revenue forecast weighted by pipeline stage',
          'Event integration: a won deal becomes a project in the other system',
        ],
        metrics: [
          { value: '817', label: 'automated tests' },
          { value: '3', label: 'CI/CD pipelines' },
          { value: '20', label: 'recorded decisions' },
        ],
        technologies: stacks.crm,
        repository: repositories.crm,
        demo: demos.crm,
        preview: {
          ...screenshots.crm,
          toolbar: 'Construction CRM / sales pipeline',
          caption: 'Actual screenshot: the sales pipeline as a kanban, with the weighted value of each stage.',
          alt: 'Construction CRM sales pipeline as a kanban, with the deals in each stage and the open and weighted totals',
        },
      },
      {
        id: 'fraud',
        title: 'Pix Fraud Detection',
        category: 'Machine learning and real time',
        context: 'Personal project · all eight parts shipped',
        description:
          "Fraud detection for Pix, Brazil's instant payments, on the payer's bank side: every Pix is approved, held for the customer to confirm, or blocked before it leaves, with the reason in plain Portuguese.",
        challenge:
          'There is no public Pix dataset, scams are under 0.1% of transactions, and the label arrives days later, when the victim disputes the payment. The model has to decide without peeking at the future, by the cost of each mistake, without erring more with older customers, and notice when a scam changes tactics.',
        solution:
          'I wrote a simulator with the scams that happen in Brazil and 33 features computed only from each Pix’s past. A calibrated LightGBM decides by cost, tracked in MLflow; a FastAPI service decides in real time with the very same features as training, proven Pix by Pix. The monitor catches, through the delayed label, the new scam that data drift misses, and the service ships in a Docker image, observed with OpenTelemetry and no personal data.',
        highlights: [
          'Average precision of 0.93, against 0.42 for today’s rules, validated month by month',
          'Deciding by cost: R$ 101k, against R$ 1.76M approving everything',
          'A decision in 0.15 ms and an API round trip in 1.2 ms, at the median',
          'Retraining that only swaps the model when the new one wins on the same Pix',
        ],
        metrics: [
          { value: '456', label: 'automated tests' },
          { value: '0.93', label: 'average precision' },
          { value: '25', label: 'recorded decisions' },
        ],
        technologies: stacks.fraud,
        repository: repositories.fraud,
        demo: demos.fraud,
        preview: {
          ...screenshots.fraud,
          toolbar: 'Pix Fraud Detection / Grafana dashboard',
          caption: 'Actual screenshot: the dashboard with December’s Pix decided by the API, day by day.',
          alt: 'Grafana dashboard of the Pix fraud service showing Pix decided per second, the share held and blocked, decision time, money held and customer responses',
        },
      },
      {
        id: 'dockers',
        title: 'Dock Workers’ Roster',
        category: 'Full stack, accessibility and ports',
        context: 'Personal project · all eight parts shipped',
        description:
          'The work roster of the Port of Santos’ casual dock workers, rebuilt for the phone and for eyes that no longer see so well: the worker reads, in one sentence, where they work tomorrow — or why they were left out, and until when.',
        challenge:
          'More than six thousand casual dock workers compete for shifts on their phones through a system built for desktops: small print, acronyms and the roster in a table full of codes. Many have decades on the docks and learned the trade at the in-person roster. Behind the screen, the roster must respect qualifications, rotation and an eleven-hour rest.',
        solution:
          'I wrote the roster rules in C# 14 and .NET 10 — qualification, rotation by registration number, rest between shifts, attendance and statement — on a PostgreSQL database that never puts anyone in two shifts. The app is a React PWA with text that grows with one tap, high contrast and the roster read aloud, and it opens without signal on the quay; a new roster shows up by itself on the open screen.',
        highlights: [
          'Every "no" comes with the reason and the date it ends',
          'Large text with one tap, high contrast and the roster read aloud',
          'Real time: a new roster shows up by itself on the open screen',
          'Accessibility tests with axe, in a mobile browser',
        ],
        metrics: [
          { value: '703', label: 'automated tests' },
          { value: '3', label: 'CI/CD pipelines' },
          { value: '24', label: 'recorded decisions' },
        ],
        technologies: stacks.dockers,
        repository: repositories.dockers,
        demo: demos.dockers,
        preview: {
          ...screenshots.dockers,
          toolbar: 'Dock Workers’ Roster / my roster',
          caption: 'Actual screenshot: today’s shift on the phone, in one sentence.',
          alt: 'My roster screen on a phone: today, in the afternoon from 1 pm to 7 pm, signaller in gang 1 on the ship Atlântico Sul, Cais Leste terminal, berth 4',
        },
      },
    ],
    more: {
      title: 'More projects',
      description: 'Five more projects, each with a screenshot and the code on GitHub.',
      items: [
        {
          id: 'planning',
          title: 'Construction Planning and Control',
          summary:
            'Critical path, a budget with BDI markup and a physical-financial schedule, with each project measured monthly by earned value. C# 14, .NET 10 and React.',
          image: {
            ...others.planning.photo,
            alt: 'Construction Planning projects dashboard, with one critical project, one on track and one not yet measured',
          },
          repository: others.planning.repository,
        },
        {
          id: 'ships',
          title: 'Ship Call Management',
          summary:
            'Ship calls at port terminals, from planning to operation, with a real-time control tower and password-free demo access. .NET 10 and React.',
          image: {
            ...others.ships.photo,
            alt: 'Ship Call Management control tower, with the ships and berths in operation',
          },
          repository: others.ships.repository,
        },
        {
          id: 'concrete',
          title: 'Concrete Quality Control',
          summary:
            'Test specimens and the acceptance of each batch under the NBR 12655 standard, with every result tied to the truck and the structural element. Laravel, with 265 tests.',
          image: {
            ...others.concrete.photo,
            alt: 'C30 concrete batch judged non-conforming: 30 MPa design strength against an estimated 24.7 MPa',
          },
          repository: others.concrete.repository,
        },
        {
          id: 'works',
          title: 'Construction Site Management',
          summary:
            'Daily site log, physical progress and billing measurement in framework-free PHP, with the progress curve drawn on the server. 207 tests.',
          image: {
            ...others.works.photo,
            alt: 'Project in progress at 27.25% physical progress, with the progress curve against the expected pace',
          },
          repository: others.works.repository,
        },
        {
          id: 'asiaLog',
          title: 'AsiaLogService',
          summary:
            'An API requested by Asia Shipping to centralise integration logs and flag critical events, with Grafana dashboards. .NET 8.',
          image: {
            ...others.asiaLog.photo,
            alt: 'AsiaLogService interface with the filters and the logs processed per integration',
          },
          repository: others.asiaLog.repository,
        },
      ],
    },
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
    carousel: {
      roleDescription: 'carousel',
      slideRoleDescription: 'project',
      previous: 'Previous project',
      next: 'Next project',
      position: (current, total) => `${current} of ${total}`,
      goTo: (position, title) => `Go to project ${position}: ${title}`,
      choose: 'Choose a project',
    },
  },
}

export const content: Record<Language, Content> = { pt, en }

export { sectionIds }
