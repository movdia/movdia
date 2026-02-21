import type { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'dataworld-api-docs',
    title: 'data.world — API & Developer Documentation',
    description:
      'Led a documentation platform migration (Stoplight to ReadMe) for a data catalog platform with 100+ REST API endpoints. Set up docs-as-code workflow with GitHub, upgraded OpenAPI specs from 2.0 to 3.x, and authored developer guides covering SDKs, OAuth, webhooks, and query APIs.',
    category: 'api-docs',
    technologies: [
      'ReadMe',
      'Stoplight',
      'OpenAPI 3.x',
      'GitHub',
      'CI/CD',
      'Python',
      'Postman',
      'YAML',
    ],
    link: 'https://developer.data.world',
    docPath: '/docs/api-documentation/sample-api',
    featured: true,
  },
  {
    id: 'dataworld-product-docs',
    title: 'data.world — Product Documentation',
    description:
      'Wrote and maintained end-user documentation for a cloud data catalog platform. Covered 18 product areas including data governance, business glossary, catalog management, AI-powered search, and SPARQL/SQL querying across 200+ articles.',
    category: 'product-docs',
    technologies: ['Paligo', 'Confluence', 'Markdown', 'Snagit', 'Draw.io'],
    link: 'https://docs.data.world',
    featured: true,
  },
  {
    id: 'phonexa-support-docs',
    title: 'Phonexa — Support Documentation',
    description:
      'Created knowledge base content for a performance marketing platform with 8 product modules. Authored user guides, how-to tutorials, FAQs, and troubleshooting articles covering lead distribution, call tracking, email delivery, analytics, and cloud PBX systems.',
    category: 'support-docs',
    technologies: [
      'Confluence',
      'Google Docs',
      'Jira',
      'Grafana',
    ],
    link: 'https://support.phonexa.com',
    docPath: '/docs/markdown-samples/getting-started',
    featured: true,
  },
  {
    id: 'madmuscles-user-guides',
    title: 'MadMuscles — User Guides',
    description:
      'Wrote user-facing help center articles for a fitness and nutrition mobile app. Covered account management, workout plans, HIIT training, meal planning, and payment/subscription topics via Zendesk.',
    category: 'support-docs',
    technologies: ['Zendesk', 'Confluence', 'Jira', 'Markdown'],
    link: 'https://support.madmuscles.com/hc/en-gb',
    featured: false,
  },
  {
    id: 'epo-legal-templates',
    title: 'EPO — Legal Document Template Engineering',
    description:
      'Developing custom .dotm Word templates for legal patent documents at the European Patent Office. Migrating legal text from legacy formats into structured, maintainable templates with automated formatting.',
    category: 'technical-guide',
    technologies: ['Word/VBA', 'XML', 'OOXML', 'Paligo', 'Jira'],
    featured: false,
  },
  {
    id: 'pepperize-developer-docs',
    title: 'Pepperize — Developer Documentation',
    description:
      'Established documentation governance for an AWS CDK open-source project. Authored project READMEs, environment setup guides, API usage examples, coding conventions, and contribution guidelines. Introduced standardized templates and update checkpoints in GitLab/GitHub.',
    category: 'developer-docs',
    technologies: [
      'GitHub',
      'GitLab',
      'Markdown',
      'JSDoc',
      'Confluence',
      'Jest',
    ],
    docPath: '/docs/technical-guides/deployment-guide',
    featured: true,
  },
];

export const portfolioCategories: Record<string, string> = {
  'api-docs': 'API Documentation',
  'product-docs': 'Product Documentation',
  'developer-docs': 'Developer Documentation',
  'support-docs': 'Support & Knowledge Base',
  'technical-guide': 'Technical Guides',
  'docops': 'DocOps & Tooling',
};
