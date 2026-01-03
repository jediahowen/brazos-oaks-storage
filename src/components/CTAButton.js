'use client';

import Link from 'next/link';
import { trackCTAClick } from '@/lib/analytics';
import styles from './CTAButton.module.css';

export default function CTAButton({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  size = 'default',
}) {
  const handleClick = () => {
    const label = typeof children === 'string' ? children : 'cta';
    trackCTAClick(label);
    onClick?.();
  };

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  const getIcon = () => {
    if (variant === 'phone') {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    }
    if (variant === 'directions') {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    }
    if (variant === 'primary') {
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    }
    return null;
  };

  if (href?.startsWith('tel:') || href?.startsWith('http')) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={handleClick}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {getIcon()}
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={handleClick}>
        {getIcon()}
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {getIcon()}
      {children}
    </button>
  );
}

