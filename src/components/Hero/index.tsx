import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import { author } from '../../data/resume';
import ParallaxSection from '../ParallaxSection';
import styles from './styles.module.css';

function HeroBackground(): ReactNode {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.heroBackgroundPattern} />
    </div>
  );
}

export default function Hero(): ReactNode {
  return (
    <ParallaxSection
      backgroundContent={<HeroBackground />}
      speed={0.4}
      className={styles.hero}
    >
      <div className={styles.heroContent}>
        <p className={styles.greeting}>Hello, I am</p>
        <h1 className={styles.name}>{author.name}</h1>
        <p className={styles.titleText}>{author.title}</p>
        <p className={styles.tagline}>{author.tagline}</p>
        <div className={styles.actions}>
          <Link to="/portfolio" className={styles.primaryBtn}>
            View My Work
          </Link>
          <Link to="/docs/intro" className={styles.secondaryBtn}>
            Writing Samples
          </Link>
        </div>
        <button
          type="button"
          className={styles.scrollIndicator}
          onClick={() => {
            const hero = document.querySelector(`.${styles.hero}`);
            if (hero) {
              const nextSection = hero.nextElementSibling;
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Scroll to content"
        >
          <span className={styles.scrollArrow} />
        </button>
      </div>
    </ParallaxSection>
  );
}
