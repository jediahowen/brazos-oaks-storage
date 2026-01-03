import UnitSizeCard from '@/components/UnitSizeCard';
import CTAButton from '@/components/CTAButton';
import { unitSizes } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Unit Sizes & Pricing - Brazos Oaks Storage',
  description: 'Find the perfect storage unit size for your needs. From 5x5 closet-sized units to 10x20 garage-sized spaces. View what fits and reserve online.',
};

export default function UnitSizes() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
            Find Your Perfect Fit
          </div>
          <h1 className={styles.title}>Unit Sizes & Pricing</h1>
          <p className={styles.subtitle}>
            We offer a variety of unit sizes to fit your needs, from small personal storage to large vehicle and commercial spaces.
          </p>
        </div>
      </section>

      <section className={styles.units}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {unitSizes.map((unit) => (
              <UnitSizeCard key={unit.id} unit={unit} />
            ))}
          </div>

          <div className={styles.help}>
            <p className={styles.helpText}>
              Not sure which size you need? Give us a call and we'll help you find the right fit.
            </p>
            <CTAButton href="tel:+12547445127" variant="phone">
              Call (254) 744-5127
            </CTAButton>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Need Help Choosing?</h2>
          <p className={styles.ctaText}>
            Our team is available to help you select the perfect unit size. We can even show you available units in person before you commit.
          </p>
          <div className={styles.ctaButtons}>
            <CTAButton href="/rent/">Reserve a Unit Now</CTAButton>
            <CTAButton href="/contact/" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

