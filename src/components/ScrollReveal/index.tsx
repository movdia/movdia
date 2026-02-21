import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './styles.module.css';

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
}

export default function ScrollReveal({
  children,
  threshold = 0.15,
  delay = 0,
}: ScrollRevealProps): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(element);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.revealed : ''}`}
    >
      {children}
    </div>
  );
}
