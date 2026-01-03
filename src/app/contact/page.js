'use client';

import { useState } from 'react';
import CTAButton from '@/components/CTAButton';
import { trackContactSubmit } from '@/lib/analytics';
import styles from './page.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unitSize: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    trackContactSubmit();
    // In a real app, you'd send this to a backend
    // For static export, we'll just show a success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', unitSize: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.badge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in Touch
          </div>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have questions? We're here to help! Reach out by phone, email, or fill out the form below.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.info}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <div className={styles.contactItems}>
                <a href="tel:+12547445127" className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.contactLabel}>Phone</div>
                    <div className={styles.contactValue}>(254) 744-5127</div>
                  </div>
                </a>
                <a href="mailto:info@brazosoaksstorage.com" className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <div className={styles.contactValue}>info@brazosoaksstorage.com</div>
                  </div>
                </a>
                <a
                  href="https://maps.google.com/?q=123+Storage+Lane,+Elm+Mott,+TX+76640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <div className={styles.contactIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles.contactLabel}>Address</div>
                    <div className={styles.contactValue}>
                      123 Storage Lane<br />
                      Elm Mott, TX 76640
                    </div>
                  </div>
                </a>
              </div>

              <div className={styles.hours}>
                <h3 className={styles.hoursTitle}>Office Hours</h3>
                <div className={styles.hoursList}>
                  <div className={styles.hourItem}>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className={styles.hourItem}>
                    <span>Gate Access</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formContainer}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              {submitted ? (
                <div className={styles.success}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p>Thank you! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="unitSize" className={styles.label}>
                      Unit Size Interest
                    </label>
                    <select
                      id="unitSize"
                      name="unitSize"
                      value={formData.unitSize}
                      onChange={handleChange}
                      className={styles.input}
                    >
                      <option value="">Select a size</option>
                      <option value="5x5">5x5 (25 sq ft)</option>
                      <option value="5x10">5x10 (50 sq ft)</option>
                      <option value="10x10">10x10 (100 sq ft)</option>
                      <option value="10x15">10x15 (150 sq ft)</option>
                      <option value="10x20">10x20 (200 sq ft)</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Reserve?</h2>
          <p className={styles.ctaText}>
            Check availability and reserve your unit online in just a few minutes.
          </p>
          <CTAButton href="/rent/">Reserve a Unit</CTAButton>
        </div>
      </section>
    </>
  );
}

