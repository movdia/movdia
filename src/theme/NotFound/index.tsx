import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
    padding: '2rem',
  },
  code: {
    fontSize: '6rem',
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: '1rem',
    opacity: 0.15,
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 700,
    marginBottom: '0.75rem',
  },
  message: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    maxWidth: '500px',
  },
};

export default function NotFound(): ReactNode {
  return (
    <Layout title="Page Not Found">
      <main style={styles.container}>
        <div style={styles.code}>404</div>
        <h1 style={styles.title}>Page Not Found</h1>
        <p style={styles.message}>
          The page you are looking for does not exist or has been moved.
          Check the URL or navigate back to a known page.
        </p>
        <Link to="/" className="button button--primary button--lg">
          Back to Home
        </Link>
      </main>
    </Layout>
  );
}
