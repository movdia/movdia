import type { ExperienceEntry, EducationEntry, ContactInfo, SiteAuthor } from '../types';

export const author: SiteAuthor = {
  name: 'Mykhailo Ovdiienko',
  title: 'Technical Writer',
  tagline: 'Turning complex technology into clear, actionable documentation.',
};

export const contact: ContactInfo = {
  email: 'placeholder@example.com',
  linkedin: 'https://linkedin.com/in/placeholder',
  github: 'https://github.com/movdia',
  website: 'https://movdia.github.io/movdia',
  location: 'Location TBD',
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Company Name',
    role: 'Senior Technical Writer',
    period: 'Jan 2023 - Present',
    location: 'Remote',
    description:
      'Led documentation initiatives for cloud-native platform, improving developer onboarding time by 40%.',
    highlights: [
      'Authored and maintained API reference documentation for 15+ microservices',
      'Implemented docs-as-code workflow using Git, Markdown, and CI/CD pipelines',
      'Collaborated with engineering teams to create architecture decision records',
      'Reduced support tickets by 30% through improved troubleshooting guides',
    ],
    technologies: ['Markdown', 'OpenAPI', 'Git', 'Docusaurus', 'Confluence'],
  },
  {
    company: 'Previous Company',
    role: 'Technical Writer',
    period: 'Jun 2020 - Dec 2022',
    location: 'Hybrid',
    description:
      'Created end-to-end documentation for SaaS platform serving 50,000+ users.',
    highlights: [
      'Developed comprehensive user guides, admin manuals, and release notes',
      'Built interactive API documentation portal using Swagger/OpenAPI',
      'Established documentation style guide adopted across 3 product teams',
      'Managed documentation localization for 5 languages',
    ],
    technologies: ['MkDocs', 'Swagger', 'DITA', 'Jira', 'Figma'],
  },
  {
    company: 'Early Career Company',
    role: 'Junior Technical Writer',
    period: 'Mar 2018 - May 2020',
    location: 'On-site',
    description:
      'Contributed to documentation for enterprise software products.',
    highlights: [
      'Wrote installation guides, FAQs, and knowledge base articles',
      'Assisted in migrating documentation from legacy CMS to modern static site generator',
      'Created video tutorials and visual aids for complex procedures',
    ],
    technologies: ['Word', 'SharePoint', 'Snagit', 'Camtasia'],
  },
];

export const education: EducationEntry[] = [
  {
    institution: 'University Name',
    degree: "Bachelor's Degree",
    field: 'Technical Communication / English / Relevant Field',
    period: '2014 - 2018',
    location: 'City, Country',
    notes: 'Relevant coursework: Technical Writing, Information Design, Web Development',
  },
];
