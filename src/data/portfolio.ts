import type { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'sample-api-docs',
    title: 'REST API Documentation',
    description:
      'Complete API reference for a fictional task management service, demonstrating endpoint documentation, request/response examples, and error handling guides.',
    category: 'api-docs',
    technologies: ['OpenAPI', 'MDX', 'Docusaurus'],
    docPath: '/docs/api-documentation/sample-api',
    featured: true,
  },
  {
    id: 'getting-started-guide',
    title: 'Getting Started Guide',
    description:
      'A beginner-friendly onboarding guide showcasing structured tutorials, prerequisites, and step-by-step instructions.',
    category: 'markdown-docs',
    technologies: ['Markdown', 'MDX', 'Docusaurus'],
    docPath: '/docs/markdown-samples/getting-started',
    featured: true,
  },
  {
    id: 'deployment-guide',
    title: 'Deployment Guide',
    description:
      'Production deployment documentation covering infrastructure setup, configuration, monitoring, and troubleshooting.',
    category: 'technical-guide',
    technologies: ['Markdown', 'Docusaurus', 'CI/CD'],
    docPath: '/docs/technical-guides/deployment-guide',
    featured: true,
  },
  {
    id: 'writing-sample-release-notes',
    title: 'Release Notes Template',
    description:
      'Structured release notes demonstrating clear communication of features, fixes, and breaking changes to diverse audiences.',
    category: 'writing-sample',
    technologies: ['Markdown', 'Technical Writing'],
    featured: false,
  },
];

export const portfolioCategories: Record<string, string> = {
  'api-docs': 'API Documentation',
  'markdown-docs': 'Markdown Documentation',
  'technical-guide': 'Technical Guides',
  'writing-sample': 'Writing Samples',
};
