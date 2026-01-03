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
            Click the button below to load our reservation tool and check availability in real-time.
          </p>
          <div className={styles.buttons}>
            <button onClick={handleLoad} className={styles.loadButton}>
              Load Reservation Tool
            </button>
            <a
              href={EXTERNAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalButton}
            >
              Open in New Window
            </a>
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

