import React from 'react';
import { EMERGING_FIELDS } from '../data/roadmap';
import styles from './EmergingFields.module.css';

export default function EmergingFields() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Emerging Fields</h2>
        <span className={styles.subtitle}>Industry relevance horizon 2025 – 2030</span>
      </div>

      <div className={styles.grid}>
        {EMERGING_FIELDS.map((field, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.fieldName}>{field.name}</span>
              <span
                className={styles.fieldPct}
                style={{ color: field.color }}
              >
                {field.relevance}%
              </span>
            </div>

            <div className={styles.barTrack}>
              <div
                className={styles.barFill}
                style={{
                  width: `${field.relevance}%`,
                  background: field.color,
                }}
              />
            </div>

            <p className={styles.fieldDesc}>{field.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
