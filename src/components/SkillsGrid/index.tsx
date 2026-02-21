import type { ReactNode } from 'react';
import type { Skill, SkillCategory } from '../../types';
import { skillCategories } from '../../data/skills';
import ScrollReveal from '../ScrollReveal';
import styles from './styles.module.css';

interface SkillsGridProps {
  skills: Skill[];
}

export default function SkillsGrid({ skills }: SkillsGridProps): ReactNode {
  const grouped = skills.reduce<Record<SkillCategory, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<SkillCategory, Skill[]>,
  );

  const categories = Object.keys(grouped) as SkillCategory[];

  return (
    <div className={styles.grid}>
      {categories.map((category, index) => (
        <ScrollReveal key={category} delay={index * 80}>
          <div className={styles.categoryGroup}>
            <h3 className={styles.categoryTitle}>
              {skillCategories[category] ?? category}
            </h3>
            <div className={styles.skillsList}>
              {grouped[category].map((skill) => (
                <span
                  key={skill.name}
                  className={`${styles.skillPill} ${styles[skill.proficiency]}`}
                  title={`${skill.name} — ${skill.proficiency}`}
                >
                  <span className={styles.proficiencyDot} />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
