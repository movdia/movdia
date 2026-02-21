import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './styles.module.css';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundContent?: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({
  children,
  backgroundContent,
  speed = 0.3,
  className = '',
}: ParallaxSectionProps): ReactNode {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return;

    function handleScroll(): void {
      const element = wrapperRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        const scrollProgress =
          (windowHeight - rect.top) / (windowHeight + rect.height);
        setOffset((scrollProgress - 0.5) * speed * 200);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.parallaxWrapper} ${className}`}
    >
      {backgroundContent && (
        <div
          className={styles.parallaxBackground}
          style={{ transform: `translateY(${offset}px)` }}
        >
          {backgroundContent}
        </div>
      )}
      <div className={styles.parallaxContent}>{children}</div>
    </div>
  );
}
