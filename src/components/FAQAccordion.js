'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
        >
          <button
            className={styles.trigger}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span className={styles.question}>{item.question}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={styles.icon}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div
            id={`faq-content-${index}`}
            className={styles.content}
            hidden={openIndex !== index}
          >
            <p className={styles.answer}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

