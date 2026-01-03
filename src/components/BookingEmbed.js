'use client';

import { useState } from 'react';
import { trackRentEmbedLoaded } from '@/lib/analytics';
import { BOOKING_SNIPPET_HTML, EXTERNAL_BOOKING_URL } from '@/lib/bookingSnippet';
import styles from './BookingEmbed.module.css';

export default function BookingEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    trackRentEmbedLoaded();
  };

  return (
    <div className={styles.container}>
      {!isLoaded ? (
        <div className={styles.placeholder}>
          <h3 className={styles.placeholderTitle}>Reserve Your Storage Unit</h3>
          <p className={styles.placeholderText}>
            Check availability, view pricing, and reserve your unit online. Click below to get started!
          </p>
          <div className={styles.buttons}>
            <a
              href={EXTERNAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalButton}
              onClick={() => trackRentEmbedLoaded()}
            >
              Reserve Online Now
            </a>
            <button onClick={handleLoad} className={styles.loadButton}>
              Load Reservation Tool
            </button>
          </div>
        </div>
      ) : (
        <div
          className={styles.embed}
          dangerouslySetInnerHTML={{ __html: BOOKING_SNIPPET_HTML }}
        />
      )}
    </div>
  );
}

