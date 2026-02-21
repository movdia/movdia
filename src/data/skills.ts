import type { Skill } from '../types';

export const skills: Skill[] = [
  // Documentation
  { name: 'API Documentation', category: 'documentation', proficiency: 'expert' },
  { name: 'User Guides', category: 'documentation', proficiency: 'expert' },
  { name: 'Technical Guides', category: 'documentation', proficiency: 'expert' },
  { name: 'Release Notes', category: 'documentation', proficiency: 'advanced' },
  { name: 'Knowledge Base', category: 'documentation', proficiency: 'advanced' },
  { name: 'Style Guides', category: 'documentation', proficiency: 'advanced' },

  // Tools
  { name: 'Docusaurus', category: 'tools', proficiency: 'expert' },
  { name: 'MkDocs', category: 'tools', proficiency: 'advanced' },
  { name: 'Swagger / OpenAPI', category: 'tools', proficiency: 'advanced' },
  { name: 'Confluence', category: 'tools', proficiency: 'advanced' },
  { name: 'Markdown / MDX', category: 'tools', proficiency: 'expert' },
  { name: 'DITA / XML', category: 'tools', proficiency: 'intermediate' },

  // Development
  { name: 'HTML / CSS', category: 'development', proficiency: 'advanced' },
  { name: 'TypeScript', category: 'development', proficiency: 'intermediate' },
  { name: 'React', category: 'development', proficiency: 'intermediate' },
  { name: 'Git / GitHub', category: 'development', proficiency: 'advanced' },
  { name: 'CI/CD Pipelines', category: 'development', proficiency: 'intermediate' },
  { name: 'REST APIs', category: 'development', proficiency: 'advanced' },

  // Platforms
  { name: 'GitHub Pages', category: 'platforms', proficiency: 'advanced' },
  { name: 'Jira', category: 'platforms', proficiency: 'advanced' },
  { name: 'Figma', category: 'platforms', proficiency: 'intermediate' },
  { name: 'VS Code', category: 'platforms', proficiency: 'expert' },

  // Methodologies
  { name: 'Docs-as-Code', category: 'methodologies', proficiency: 'expert' },
  { name: 'Agile / Scrum', category: 'methodologies', proficiency: 'advanced' },
  { name: 'Information Architecture', category: 'methodologies', proficiency: 'advanced' },
  { name: 'Content Strategy', category: 'methodologies', proficiency: 'advanced' },
];

export const skillCategories: Record<string, string> = {
  documentation: 'Documentation',
  tools: 'Tools & Platforms',
  development: 'Development',
  platforms: 'Platforms',
  methodologies: 'Methodologies',
};
