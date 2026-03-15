import React from 'react';
import { QUICK_PLATFORMS } from '../data/roadmap';
import styles from './QuickPlatforms.module.css';

export default function QuickPlatforms() {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Quick Reference</h2>
        <span className={styles.subtitle}>Essential free platforms — all links open in a new tab</span>
      </div>

      <div className={styles.grid}>
        {QUICK_PLATFORMS.map((platform, i) => (
          <a
            key={i}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.platformName}>
              {platform.name}
              <span className={styles.arrow}>↗</span>
            </div>
            <p className={styles.platformDesc}>{platform.desc}</p>
          </a>
        ))}
      </div>

      <div className={styles.footer}>
        The best engineers are always building. Use these resources as fuel — not as a checklist.
        Every great AI career was built one project at a time.
      </div>
    </section>
  );
}
