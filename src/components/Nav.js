'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CTAButton from './CTAButton';
import styles from './Nav.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/unit-sizes/', label: 'Unit Sizes' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/" className={styles.logo}>
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
          </Link>

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.desktopCTA}>
            <CTAButton href="https://www.brazosoaksstorage.com/sites">Reserve a Unit</CTAButton>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCTA}>
            <CTAButton href="https://www.brazosoaksstorage.com/sites" onClick={() => setIsOpen(false)}>
              Reserve a Unit
            </CTAButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

