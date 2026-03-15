import React from 'react';
import { PHASES } from '../data/roadmap';
import styles from './StatsBar.module.css';

export default function StatsBar({
  completedCount,
  totalTopics,
  completedHours,
  totalHours,
  overallPercent,
  phaseStats,
}) {
  return (
    <div className={styles.statsBar}>
      {/* Overview cards */}
      <div className={styles.overview}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {completedCount}
            <span className={styles.statOf}>/{totalTopics}</span>
          </div>
          <div className={styles.statLabel}>Topics Done</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statValue}>
            {completedHours}
            <span className={styles.statOf}>h/{totalHours}h</span>
          </div>
          <div className={styles.statLabel}>Hours Completed</div>
        </div>

        <div className={`${styles.statCard} ${styles.accentCard}`}>
          <div className={styles.statValue}>
            {overallPercent}
            <span className={styles.statPct}>%</span>
          </div>
          <div className={styles.statLabel}>Overall Progress</div>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${overallPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Phase progress grid */}
      <div className={styles.phaseGrid}>
        {PHASES.map((phase, i) => {
          const stat = phaseStats[i];
          return (
            <div key={phase.id} className={styles.phaseStat}>
              <div className={styles.phaseStatHeader}>
                <span
                  className={styles.phaseStatName}
                  style={{ color: phase.color }}
                >
                  Phase {phase.num}
                </span>
                <span className={styles.phaseStatCount}>
                  {stat.done}/{stat.total}
                </span>
                <span className={styles.phaseStatPct}>{stat.percent}%</span>
              </div>
              <div className={styles.phaseBarTrack}>
                <div
                  className={styles.phaseBarFill}
                  style={{
                    width: `${stat.percent}%`,
                    background: phase.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
