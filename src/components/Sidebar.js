import React from 'react';
import styles from './Sidebar.module.css';

const PHASE_ICONS = {
  'phase-1': '◈',
  'phase-2': '⬡',
  'phase-3': '◉',
  'phase-4': '◆',
};

export default function Sidebar({ phases, activePhase, setActivePhase, phaseStats }) {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <span className={styles.logoMark}>⬡</span>
        <div className={styles.logoText}>
          <span className={styles.logoTitle}>AI / ML</span>
          <span className={styles.logoSub}>Learning Dashboard</span>
        </div>
      </div>

      <nav className={styles.nav}>
        {/* All Phases */}
        <span className={styles.navLabel}>Navigation</span>
        <button
          className={`${styles.navBtn} ${activePhase === 'all' ? styles.active : ''}`}
          onClick={() => setActivePhase('all')}
        >
          <span className={styles.navIcon}>▦</span>
          <span className={styles.navTitle}>All Phases</span>
        </button>

        {/* Phase items */}
        <span className={styles.navLabel} style={{ marginTop: 18 }}>Phases</span>
        {phases.map((phase, i) => {
          const stat = phaseStats[i];
          return (
            <button
              key={phase.id}
              className={`${styles.navBtn} ${activePhase === phase.id ? styles.active : ''}`}
              onClick={() => setActivePhase(phase.id)}
            >
              <span className={styles.navIcon} style={{ color: phase.color }}>
                {PHASE_ICONS[phase.id]}
              </span>
              <span className={styles.navContent}>
                <span className={styles.navTitle}>{phase.title}</span>
                <span className={styles.navMeta}>{phase.months}</span>
              </span>
              {stat.done > 0 && (
                <span
                  className={styles.navBadge}
                  style={{
                    background: phase.color + '1f',
                    color: phase.color,
                  }}
                >
                  {stat.done}/{stat.total}
                </span>
              )}
            </button>
          );
        })}

        {/* Extras */}
        <span className={styles.navLabel} style={{ marginTop: 18 }}>More</span>
        <button
          className={`${styles.navBtn} ${activePhase === 'emerging' ? styles.active : ''}`}
          onClick={() => setActivePhase('emerging')}
        >
          <span className={styles.navIcon}>◈</span>
          <span className={styles.navTitle}>Emerging Fields</span>
        </button>
        <button
          className={`${styles.navBtn} ${activePhase === 'platforms' ? styles.active : ''}`}
          onClick={() => setActivePhase('platforms')}
        >
          <span className={styles.navIcon}>⊞</span>
          <span className={styles.navTitle}>Quick Platforms</span>
        </button>
      </nav>

      <div className={styles.footer}>
        <span className={styles.footerText}>2025 Edition · Free Resources Only</span>
      </div>
    </aside>
  );
}
