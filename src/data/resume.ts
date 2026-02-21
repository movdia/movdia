import type { ExperienceEntry, EducationEntry, ContactInfo, SiteAuthor } from '../types';

export const author: SiteAuthor = {
  name: 'Mykhailo Ovdiienko',
  title: 'Technical Writer',
  tagline:
    'Turning complex technology into clear, actionable documentation. Almost 5 years of experience planning, writing, and maintaining product and API docs for IT products.',
};

export const contact: ContactInfo = {
  email: 'mishaov@gmail.com',
  linkedin: 'https://linkedin.com/in/mykhailo-ovdiienko',
  github: 'https://github.com/movdia',
  telegram: 'https://t.me/didrux',
  website: 'https://movdia.github.io/movdia',
  location: 'Ukraine',
};

export const experience: ExperienceEntry[] = [
  {
    company: 'SoftServe (data.world)',
    role: 'Technical Writer',
    period: 'Nov 2023 - Present',
    location: 'Remote',
    description:
      'Leading documentation efforts for data.world, a cloud data catalog and governance platform. Planned and executed a documentation platform migration (Stoplight to ReadMe) for 100+ API endpoints, and currently developing Word-based legal document templates for the European Patent Office.',
    highlights: [
      'Led evaluation and migration of API documentation from Stoplight to ReadMe, including content migration, URL redirects, and stakeholder alignment',
      'Upgraded OpenAPI specifications from 2.0 to 3.x; built validation and conversion scripts in Python to normalize specs and eliminate publishing issues',
      'Implemented docs-as-code workflow using GitHub with PR-based reviews, automated linting, and CI/CD publishing on merge',
      'Authored and maintained API reference (100+ endpoints across Catalog, Datasets, Search, Query, Webhooks), developer guides, SDK docs, and getting-started tutorials',
      'Wrote and maintained end-user product documentation (200+ articles) covering data governance, business glossary, catalog management, and AI-powered search',
      'Developing custom .dotm Word templates for EPO legal patent documents, migrating legal text from legacy formats into structured templates',
    ],
    technologies: [
      'Markdown',
      'OpenAPI/Swagger',
      'YAML',
      'Git/GitHub',
      'CI/CD (GitHub Actions)',
      'Python',
      'Jira',
      'Confluence',
      'Draw.io',
      'Snagit',
      'Paligo',
      'ReadMe',
      'Stoplight',
      'Postman',
      'Word/VBA',
    ],
  },
  {
    company: 'Phonexa',
    role: 'Technical Documentation Specialist',
    period: 'Aug 2023 - Nov 2023',
    location: 'Remote',
    description:
      'Created and maintained knowledge base documentation including user guides, how-to tutorials, FAQs, and troubleshooting articles.',
    highlights: [
      'Authored knowledge base documentation for modules such as LMS Sync, Call Logic, and E-Delivery',
      'Collaborated with developers and fellow writers to ensure accuracy and clarity of documentation',
      'Drafted content in Google Docs and coordinated with the documentation team for CMS publishing',
      'Monitored Grafana dashboards to identify bugs or anomalies and reported them to the appropriate teams for resolution',
    ],
    technologies: [
      'Google Docs',
      'Confluence',
      'Jira',
      'Grafana',
      'Slack',
      'Teams',
    ],
  },
  {
    company: 'AMO',
    role: 'Product Support Content Specialist',
    period: 'Dec 2022 - Aug 2023',
    location: 'Remote',
    description:
      'Supported two consumer mobile applications in fitness and nutrition by providing written responses and maintaining product documentation.',
    highlights: [
      'Created and maintained knowledge base articles, FAQs, and troubleshooting guides covering workout plan setup, diet tracking, app integrations, and account management',
      'Proactively updated internal documentation in Confluence to capture recurring issues and improve support efficiency',
      'Managed multi-channel written communication, including drafting responses for App Store, Google Play, and Facebook reviews',
      'Reported and documented bugs, collaborating with developers and QA to ensure resolution',
    ],
    technologies: [
      'Confluence',
      'Jira',
      'Zendesk',
      'Draw.io',
      'Google Workspace',
      'Markdown',
    ],
  },
  {
    company: 'Pepperize',
    role: 'Information/Web Developer',
    period: 'Feb 2021 - Dec 2022',
    location: 'Remote',
    description:
      'Built and maintained a responsive SPA alongside the backend team, while establishing documentation governance and developer-facing docs.',
    highlights: [
      'Built responsive SPA using HTML5, CSS3, JavaScript (ES6), LitElement, and Tailwind',
      'Authored developer-facing documentation: project READMEs, environment setup, API usage examples, coding conventions, and contribution guidelines',
      'Introduced lightweight docs governance: standardized templates, defined update checkpoints in GitLab/GitHub, and published consolidated pages in Confluence',
      'Created e-learning/onboarding guides that reduced ramp-up time for new hires',
      'Contributed to delivery quality: unit tests with Jest, participation in CI/CD pipelines, and iterative UI fixes based on QA/feedback',
      'Collaborated daily in an Agile environment to align docs, code, and release priorities',
    ],
    technologies: [
      'GitLab/GitHub',
      'JavaScript (ES6)',
      'LitElement',
      'Tailwind CSS',
      'HTML5/CSS3',
      'PHP (Slim)',
      'Jest',
      'Confluence',
      'Markdown',
      'Jira',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: 'Chernivtsi National University',
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    period: '2020 - 2024',
    location: 'Chernivtsi, Ukraine',
  },
];
