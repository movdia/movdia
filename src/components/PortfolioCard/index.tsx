import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import type { PortfolioItem } from '../../types';
import { portfolioCategories } from '../../data/portfolio';
import styles from './styles.module.css';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({
  item,
}: PortfolioCardProps): ReactNode {
  const href = item.docPath ?? item.link ?? '#';
  const isExternal = item.link?.startsWith('http');

  const content = (
    <>
      <div className={styles.cardHeader}>
        <span className={styles.categoryBadge}>
          {portfolioCategories[item.category] ?? item.category}
        </span>
        {item.featured && (
          <span className={styles.featuredBadge}>Featured</span>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDescription}>{item.description}</p>
      </div>
      <div className={styles.cardFooter}>
        {item.technologies.map((tech) => (
          <span key={tech} className={styles.techPill}>
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className={styles.card}>
      {content}
    </Link>
  );
}
