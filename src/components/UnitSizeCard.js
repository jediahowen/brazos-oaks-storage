import CTAButton from './CTAButton';
import styles from './UnitSizeCard.module.css';

export default function UnitSizeCard({ unit }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.dimensions}>{unit.dimensions}</h3>
          <p className={styles.description}>
            {unit.sqft} - {unit.description}
          </p>
        </div>
        <span className={styles.price}>From ${unit.startingPrice}/mo</span>
      </div>
      <div className={styles.content}>
        <h4 className={styles.whatFitsTitle}>What Fits</h4>
        <ul className={styles.whatFits}>
          {unit.whatFits.map((item, index) => (
            <li key={index} className={styles.whatFitsItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <CTAButton href="/rent/" className={styles.button}>
          Reserve This Size
        </CTAButton>
      </div>
    </div>
  );
}

