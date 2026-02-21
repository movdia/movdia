import type { ReactNode } from 'react';
import type { ContactInfo } from '../../types';
import ScrollReveal from '../ScrollReveal';
import styles from './styles.module.css';

interface ContactSectionProps {
  contact: ContactInfo;
}

interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export default function ContactSection({
  contact,
}: ContactSectionProps): ReactNode {
  const items: ContactItem[] = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: '@',
    },
    ...(contact.github
      ? [
          {
            label: 'GitHub',
            value: 'movdia',
            href: contact.github,
            icon: '{}',
          },
        ]
      : []),
    ...(contact.linkedin
      ? [
          {
            label: 'LinkedIn',
            value: 'Profile',
            href: contact.linkedin,
            icon: 'in',
          },
        ]
      : []),
    ...(contact.telegram
      ? [
          {
            label: 'Telegram',
            value: '@didrux',
            href: contact.telegram,
            icon: 'tg',
          },
        ]
      : []),
    {
      label: 'Location',
      value: contact.location,
      href: '#',
      icon: '>_',
    },
  ];

  return (
    <div className={styles.contact}>
      {items.map((item, index) => (
        <ScrollReveal key={item.label} delay={index * 80}>
          <a
            href={item.href}
            className={styles.contactCard}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={
              item.href.startsWith('http')
                ? 'noopener noreferrer'
                : undefined
            }
          >
            <div className={styles.contactIcon}>{item.icon}</div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>{item.label}</span>
              <span className={styles.contactValue}>{item.value}</span>
            </div>
          </a>
        </ScrollReveal>
      ))}
    </div>
  );
}
