import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';
import { features } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Brazos Oaks Storage - Secure Self Storage in Waco, Texas',
  description: 'Secure, affordable self-storage in Waco and Elm Mott, Texas. 24/7 access, security cameras, and month-to-month rentals. Reserve your unit online today!',
};

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Trusted by Waco Families & Businesses
          </div>
          <h1 className={styles.heroTitle}>
            Secure Storage in <span className={styles.heroHighlight}>Waco</span> You Can Trust
          </h1>
          <p className={styles.heroSubtitle}>
            Conveniently located in Elm Mott, Texas. Drive-up access, 24/7 gate entry, and flexible month-to-month rentals for all your storage needs.
          </p>
          <div className={styles.heroButtons}>
            <CTAButton href="/rent/" size="lg">
              Reserve a Unit
            </CTAButton>
            <CTAButton href="tel:+12547445127" variant="phone" size="lg">
              Call (254) 744-5127
            </CTAButton>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Storage Units</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Gate Access</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>Years Serving Waco</span>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Brazos Oaks Storage?</h2>
            <p className={styles.sectionSubtitle}>
              We're committed to providing a safe, clean, and convenient storage experience for our community.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Reserve your unit online in minutes or give us a call. We're here to help you find the perfect storage solution.
          </p>
          <div className={styles.ctaButtons}>
            <CTAButton href="/rent/" variant="secondary" size="lg" className={styles.ctaButtonWhite}>
              Reserve Online Now
            </CTAButton>
            <CTAButton href="/unit-sizes/" variant="outline" size="lg" className={styles.ctaButtonOutline}>
              View Unit Sizes
            </CTAButton>
          </div>
        </div>
      </section>

      <section className={styles.trust}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div>
              <h2 className={styles.sectionTitle}>A Name You Can Trust</h2>
              <p className={styles.trustText}>
                For over 15 years, Brazos Oaks Storage has been the trusted choice for families and businesses in Central Texas. Our commitment to security, cleanliness, and customer service sets us apart.
              </p>
              <div className={styles.trustFeatures}>
                <div className={styles.trustFeature}>
                  <div className={styles.trustIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.trustFeatureTitle}>Locally Owned & Operated</h4>
                    <p className={styles.trustFeatureText}>We live here too. Your belongings matter to us.</p>
                  </div>
                </div>
                <div className={styles.trustFeature}>
                  <div className={styles.trustIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={styles.trustFeatureTitle}>Friendly, Helpful Staff</h4>
                    <p className={styles.trustFeatureText}>Real people ready to help, not automated phone trees.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.trustImage}>
              <div className={styles.trustImagePlaceholder}>
                <div className={styles.trustImageIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <p>Secure Storage Facility</p>
                <p className={styles.trustImageSubtext}>Elm Mott, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

