import type { Skill } from '../types';

export const skills: Skill[] = [
  // Documentation
  { name: 'API Documentation', category: 'documentation', proficiency: 'expert' },
  { name: 'User Guides', category: 'documentation', proficiency: 'expert' },
  { name: 'Getting-Started Content', category: 'documentation', proficiency: 'expert' },
  { name: 'Troubleshooting / KB', category: 'documentation', proficiency: 'expert' },
  { name: 'Release Notes', category: 'documentation', proficiency: 'advanced' },
  { name: 'Information Architecture', category: 'documentation', proficiency: 'advanced' },

  // Tools
  { name: 'Confluence', category: 'tools', proficiency: 'expert' },
  { name: 'Jira', category: 'tools', proficiency: 'expert' },
  { name: 'Swagger / OpenAPI', category: 'tools', proficiency: 'advanced' },
  { name: 'Postman', category: 'tools', proficiency: 'advanced' },
  { name: 'ReadMe', category: 'tools', proficiency: 'advanced' },
  { name: 'Stoplight', category: 'tools', proficiency: 'advanced' },
  { name: 'Draw.io', category: 'tools', proficiency: 'advanced' },
  { name: 'Snagit', category: 'tools', proficiency: 'advanced' },
  { name: 'Markdown / MDX', category: 'tools', proficiency: 'expert' },

  // Development
  { name: 'Git / GitHub / GitLab', category: 'development', proficiency: 'advanced' },
  { name: 'CI/CD (GitHub Actions)', category: 'development', proficiency: 'advanced' },
  { name: 'JavaScript / TypeScript', category: 'development', proficiency: 'intermediate' },
  { name: 'Python (Scripting)', category: 'development', proficiency: 'intermediate' },
  { name: 'HTML5 / CSS3', category: 'development', proficiency: 'advanced' },
  { name: 'REST APIs', category: 'development', proficiency: 'advanced' },
  { name: 'SQL / JSON / YAML', category: 'development', proficiency: 'intermediate' },

  // Platforms
  { name: 'GitHub Pages', category: 'platforms', proficiency: 'advanced' },
  { name: 'Google Workspace', category: 'platforms', proficiency: 'advanced' },
  { name: 'Zendesk', category: 'platforms', proficiency: 'intermediate' },
  { name: 'Grafana', category: 'platforms', proficiency: 'intermediate' },

  // Methodologies
  { name: 'Docs-as-Code', category: 'methodologies', proficiency: 'expert' },
  { name: 'Agile / Scrum', category: 'methodologies', proficiency: 'advanced' },
  { name: 'Content Governance', category: 'methodologies', proficiency: 'advanced' },
  { name: 'SME Interviews', category: 'methodologies', proficiency: 'advanced' },
  { name: 'SDLC / DDLC', category: 'methodologies', proficiency: 'advanced' },
];

export const skillCategories: Record<string, string> = {
  documentation: 'Documentation',
  tools: 'Tools & Platforms',
  development: 'Development',
  platforms: 'Platforms',
  methodologies: 'Methodologies',
};
