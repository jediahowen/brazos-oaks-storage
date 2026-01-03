import BookingEmbed from '@/components/BookingEmbed';
import CTAButton from '@/components/CTAButton';
import styles from './page.module.css';

export const metadata = {
  title: 'Reserve a Unit - Brazos Oaks Storage',
  description: 'Reserve your storage unit online at Brazos Oaks Storage. Check availability, view pricing, and secure your unit in minutes.',
};

export default function Rent() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Reserve Online
          </div>
          <h1 className={styles.title}>Reserve Your Storage Unit</h1>
          <p className={styles.subtitle}>
            Check availability, view real-time pricing, and reserve your unit online. It only takes a few minutes!
          </p>
        </div>
      </section>

      <section className={styles.booking}>
        <div className={styles.container}>
          <BookingEmbed />
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className={styles.infoTitle}>Quick & Easy</h3>
              <p className={styles.infoText}>
                Reserve your unit in minutes. No credit card required to check availability.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className={styles.infoTitle}>Flexible Terms</h3>
              <p className={styles.infoText}>
                Month-to-month rentals with no long-term commitments. Cancel anytime with 10 days notice.
              </p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className={styles.infoTitle}>Secure & Safe</h3>
              <p className={styles.infoText}>
                Your belongings are protected with 24/7 video surveillance and electronic gate access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Prefer to Talk to Someone?</h2>
          <p className={styles.ctaText}>
            Our friendly staff is here to help you find the perfect storage solution. Give us a call!
          </p>
          <div className={styles.ctaButtons}>
            <CTAButton href="tel:+12547445127" variant="phone" size="lg">
              Call (254) 744-5127
            </CTAButton>
            <CTAButton href="/contact/" variant="secondary" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

