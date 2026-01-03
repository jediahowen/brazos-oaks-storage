import CTAButton from '@/components/CTAButton';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us - Brazos Oaks Storage',
  description: 'Learn about Brazos Oaks Storage, your trusted self-storage facility in Waco and Elm Mott, Texas. Locally owned and operated for over 15 years.',
};

export default function About() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Our Story
          </div>
          <h1 className={styles.title}>About Brazos Oaks Storage</h1>
          <p className={styles.subtitle}>
            Your trusted partner for secure, affordable self-storage in Central Texas.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h2 className={styles.sectionTitle}>Serving Waco Since 2009</h2>
              <p className={styles.text}>
                For over 15 years, Brazos Oaks Storage has been providing secure, affordable storage solutions to families and businesses throughout Central Texas. Located in Elm Mott, just minutes from downtown Waco, we've built our reputation on reliability, security, and exceptional customer service.
              </p>
              <p className={styles.text}>
                As a locally owned and operated facility, we understand the unique needs of our community. Whether you're storing household items during a move, keeping business inventory safe, or storing recreational vehicles, we're here to help.
              </p>
            </div>
            <div className={styles.image}>
              <div className={styles.imagePlaceholder}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
                <p>Brazos Oaks Storage</p>
                <p className={styles.imageSubtext}>Elm Mott, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Secure Facility</h3>
              <p className={styles.featureText}>
                Perimeter fencing, electronic gate access, and 24-hour video surveillance keep your belongings safe.
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>24/7 Access</h3>
              <p className={styles.featureText}>
                Access your unit anytime with your personal gate code. No need to wait for office hours.
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Flexible Terms</h3>
              <p className={styles.featureText}>
                Month-to-month rentals with no long-term commitments. Rent for as long as you need.
              </p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Convenient Location</h3>
              <p className={styles.featureText}>
                Easy access from I-35, just minutes from downtown Waco. Wide driveways for easy loading and unloading.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Store With Us?</h2>
          <p className={styles.ctaText}>
            Reserve your unit online or give us a call. We're here to help you find the perfect storage solution.
          </p>
          <div className={styles.ctaButtons}>
            <CTAButton href="/rent/">Reserve a Unit</CTAButton>
            <CTAButton href="tel:+12547445127" variant="phone">
              Call (254) 744-5127
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

