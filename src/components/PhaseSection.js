import React from 'react';
import TopicCard from './TopicCard';
import styles from './PhaseSection.module.css';

export default function PhaseSection({ phase, phaseStats, completed, onToggle }) {
  const stat = phaseStats.find((s) => s.phaseId === phase.id) || {
    done: 0,
    total: phase.topics.length,
    percent: 0,
  };

  const circumference = 2 * Math.PI * 18;
  const dashOffset = circumference * (1 - stat.percent / 100);

  return (
    <section className={styles.section}>
      {/* Phase banner */}
      <div
        className={styles.banner}
        style={{ '--phase-color': phase.color, borderTopColor: phase.color }}
      >
        <div className={styles.bannerLeft}>
          <div className={styles.phaseNum} style={{ color: phase.color }}>
            {phase.num}
          </div>
          <div className={styles.phaseInfo}>
            <div className={styles.titleRow}>
              <h2 className={styles.phaseTitle}>{phase.title}</h2>
              <span
                className={styles.monthsBadge}
                style={{
                  background: phase.color + '1e',
                  color: phase.color,
                }}
              >
                {phase.months}
              </span>
            </div>
            <p className={styles.phaseDesc}>{phase.description}</p>
          </div>
        </div>

        <div className={styles.bannerRight}>
          {/* Circular progress ring */}
          <div className={styles.ringWrap}>
            <svg className={styles.ringSvg} viewBox="0 0 44 44">
              <circle
                className={styles.ringTrack}
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke={phase.color}
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                transform="rotate(-90 22 22)"
                style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)' }}
              />
            </svg>
            <div className={styles.ringLabel}>
              <span className={styles.ringPct} style={{ color: phase.color }}>
                {stat.percent}%
              </span>
            </div>
          </div>

          {/* Count */}
          <div className={styles.countWrap}>
            <span className={styles.countDone}>{stat.done}</span>
            <span className={styles.countSep}>/</span>
            <span className={styles.countTotal}>{stat.total}</span>
            <span className={styles.countLabel}>done</span>
          </div>
        </div>
      </div>

      {/* Topic cards */}
      <div className={styles.topicsList}>
        {phase.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            phaseColor={phase.color}
            isCompleted={!!completed[topic.id]}
            onToggle={onToggle}
          />
        ))}
      </div>

      {/* Phase goal tip */}
      <div
        className={styles.goalBox}
        style={{
          borderLeftColor: phase.color,
          background: phase.color + '0d',
        }}
      >
        <span className={styles.goalIcon} style={{ color: phase.color }}>
          ◎
        </span>
        <div>
          <div className={styles.goalTitle} style={{ color: phase.color }}>
            Phase {phase.num} Goal
          </div>
          <p className={styles.goalText}>{phase.phaseGoal}</p>
        </div>
      </div>
    </section>
  );
}
