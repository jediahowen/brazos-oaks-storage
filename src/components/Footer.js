import Link from 'next/link';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/unit-sizes/', label: 'Unit Sizes' },
  { href: 'https://www.brazosoaksstorage.com/sites', label: 'Reserve Online' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/about/', label: 'About Us' },
  { href: '/contact/', label: 'Contact' },
];

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Gate Access', time: '24/7' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoTitle}>Brazos Oaks</span>
                <span className={styles.logoSubtitle}>Storage</span>
              </div>
            </div>
            <p className={styles.description}>
              Secure, affordable self-storage in the heart of Central Texas. Serving Waco, Elm Mott, and surrounding communities.
            </p>
            <div className={styles.contact}>
              <a href="tel:+12547445127" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(254) 744-5127</span>
              </a>
              <a href="mailto:info@brazosoaksstorage.com" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@brazosoaksstorage.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=123+Storage+Lane,+Elm+Mott,+TX+76640"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>123 Storage Lane<br />Elm Mott, TX 76640</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.links}>
              {quickLinks.map((link) => {
                const isExternal = link.href.startsWith('http');
                if (isExternal) {
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                }
                return (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Office Hours
            </h3>
            <ul className={styles.hours}>
              {hours.map((item) => (
                <li key={item.day} className={styles.hourItem}>
                  <span className={styles.hourDay}>{item.day}</span>
                  <span className={styles.hourTime}>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Brazos Oaks Storage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

