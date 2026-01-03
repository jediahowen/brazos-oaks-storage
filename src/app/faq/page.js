import FAQAccordion from '@/components/FAQAccordion';
import CTAButton from '@/components/CTAButton';
import { faqItems } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
  title: 'FAQ - Brazos Oaks Storage',
  description: 'Find answers to frequently asked questions about Brazos Oaks Storage. Learn about access hours, payments, security, and more.',
};

export default function FAQ() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" />
            </svg>
            Got Questions?
          </div>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Everything you need to know about renting a storage unit with us. Can't find your answer? Give us a call!
          </p>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Still Have Questions?</h2>
          <p className={styles.ctaText}>
            Our team is happy to help. Reach out by phone or visit our contact page.
          </p>
          <div className={styles.ctaButtons}>
            <CTAButton href="tel:+12547445127" variant="phone">
              Call (254) 744-5127
            </CTAButton>
            <CTAButton href="/contact/" variant="secondary">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

