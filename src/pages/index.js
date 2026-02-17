import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const CATEGORIES = [
  {
    title: 'Seceon',
    description: 'Security Operations & AI Documentation',
    link: '/docs/seceon',
    emoji: '🛡️',
  },
  {
    title: 'Qualys',
    description: 'Vulnerability Management & ROC Documentation',
    link: '/docs/qualys',
    emoji: '🔍',
  },
  {
    title: 'Fortinet',
    description: 'Network Security & Firewall Documentation',
    link: '/docs/fortinet',
    emoji: '🏰',
  },
  {
    title: 'Microsoft',
    description: 'Azure & Enterprise Documentation',
    link: '/docs/microsoft',
    emoji: '💻',
  },
  {
    title: 'Splunk',
    description: 'Data Analytics & SIEM Documentation',
    link: '/docs/splunk',
    emoji: '📊',
  },
  {
    title: 'Tenable',
    description: 'Exposure Management Documentation',
    link: '/docs/tenable',
    emoji: '🏗️',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary hero-gradient', styles.heroBanner)}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Heading as="h1" className="hero__title" style={{ fontWeight: 800, fontSize: '4rem', letterSpacing: '-0.05em' }}>
          Welcome to <span style={{ background: 'linear-gradient(to right, #ffffff, #a1c6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{siteConfig.title}</span>
        </Heading>
        <p className="hero__subtitle" style={{ opacity: 0.9, fontWeight: 500, maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Explore our professional documentation for security and technology platforms.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main className="container">
        <div className="category-grid">
          {CATEGORIES.map((category, idx) => (
            <Link key={idx} to={category.link} className="category-card">
              <div>
                <span style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>{category.emoji}</span>
                <Heading as="h3">{category.title}</Heading>
                <p>{category.description}</p>
              </div>
              <div className="category-btn">Explore Docs</div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
