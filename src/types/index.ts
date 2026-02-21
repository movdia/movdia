export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  notes?: string;
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  telegram?: string;
  website?: string;
  location: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency;
}

export type SkillCategory =
  | 'documentation'
  | 'tools'
  | 'development'
  | 'platforms'
  | 'methodologies';

export type SkillProficiency = 'expert' | 'advanced' | 'intermediate';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  technologies: string[];
  thumbnail?: string;
  link?: string;
  docPath?: string;
  featured: boolean;
}

export type PortfolioCategory =
  | 'markdown-docs'
  | 'api-docs'
  | 'writing-sample'
  | 'technical-guide';

export interface SiteAuthor {
  name: string;
  title: string;
  tagline: string;
  avatar?: string;
}
