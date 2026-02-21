import { useState, type ReactNode } from 'react';
import Layout from '@theme/Layout';
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import ScrollReveal from '../components/ScrollReveal';
import { portfolioItems, portfolioCategories } from '../data/portfolio';
import type { PortfolioCategory } from '../types';
import styles from './portfolio.module.css';

type FilterValue = 'all' | PortfolioCategory;

export default function Portfolio(): ReactNode {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const filterOptions: { label: string; value: FilterValue }[] = [
    { label: 'All', value: 'all' },
    ...Object.entries(portfolioCategories).map(([value, label]) => ({
      label,
      value: value as PortfolioCategory,
    })),
  ];

  return (
    <Layout
      title="Portfolio"
      description="Portfolio showcasing documentation projects, API references, technical guides, and writing samples by Mykhailo Ovdiienko."
    >
      <main className={styles.portfolioPage}>
        <div className={styles.portfolioInner}>
          <ScrollReveal>
            <SectionHeading
              title="Portfolio"
              subtitle="Real examples of documentation I produce — from API references to deployment guides."
            />
          </ScrollReveal>

          <div className={styles.filters}>
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`${styles.filterBtn} ${
                  activeFilter === option.value ? styles.filterBtnActive : ''
                }`}
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 80}>
                  <PortfolioCard item={item} />
                </ScrollReveal>
              ))
            ) : (
              <p className={styles.emptyState}>
                No items match this filter.
              </p>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
