import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps): ReactNode {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.accent} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
