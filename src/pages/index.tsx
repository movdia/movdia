import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsGrid from '../components/SkillsGrid';
import ContactSection from '../components/ContactSection';
import ScrollReveal from '../components/ScrollReveal';
import { experience, education, contact } from '../data/resume';
import { skills } from '../data/skills';
import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Mykhailo Ovdiienko — Technical Writer. Portfolio and resume showcasing documentation expertise, technical writing samples, and engineering skills."
    >
      <main className={styles.main}>
        <Hero />

        {/* Experience Section */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <ScrollReveal>
              <SectionHeading
                title="Experience"
                subtitle="A track record of delivering clear, impactful documentation across diverse technical domains."
              />
            </ScrollReveal>
            <ExperienceTimeline entries={experience} />
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <ScrollReveal>
              <SectionHeading
                title="Skills"
                subtitle="Tools, technologies, and methodologies I work with every day."
              />
            </ScrollReveal>
            <SkillsGrid skills={skills} />
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <ScrollReveal>
              <SectionHeading title="Education" />
            </ScrollReveal>
            <div className={styles.educationGrid}>
              {education.map((entry) => (
                <ScrollReveal key={entry.institution + entry.period}>
                  <div className={styles.educationCard}>
                    <div className={styles.educationHeader}>
                      <h3 className={styles.educationDegree}>
                        {entry.degree}
                      </h3>
                      <span className={styles.educationPeriod}>
                        {entry.period}
                      </span>
                    </div>
                    <p className={styles.educationInstitution}>
                      {entry.institution} &middot; {entry.location}
                    </p>
                    <p className={styles.educationField}>{entry.field}</p>
                    {entry.notes && (
                      <p className={styles.educationNotes}>{entry.notes}</p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.sectionAlt}>
          <div className={styles.sectionInner}>
            <ScrollReveal>
              <SectionHeading
                title="Get in Touch"
                subtitle="Interested in working together? Reach out through any of these channels."
              />
            </ScrollReveal>
            <ContactSection contact={contact} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
