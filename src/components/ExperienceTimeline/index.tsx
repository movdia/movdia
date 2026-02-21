import type { ReactNode } from 'react';
import type { ExperienceEntry } from '../../types';
import ScrollReveal from '../ScrollReveal';
import styles from './styles.module.css';

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

export default function ExperienceTimeline({
  entries,
}: ExperienceTimelineProps): ReactNode {
  return (
    <div className={styles.timeline}>
      {entries.map((entry, index) => (
        <ScrollReveal key={entry.company + entry.period} delay={index * 100}>
          <div className={styles.entry}>
            <div className={styles.dot} />
            <div className={styles.header}>
              <h3 className={styles.role}>{entry.role}</h3>
              <span className={styles.period}>{entry.period}</span>
            </div>
            <p className={styles.company}>
              {entry.company} &middot; {entry.location}
            </p>
            <p className={styles.description}>{entry.description}</p>
            <ul className={styles.highlights}>
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {entry.technologies && entry.technologies.length > 0 && (
              <div className={styles.technologies}>
                {entry.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
