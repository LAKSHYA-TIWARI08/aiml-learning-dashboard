import React, { useState } from 'react';
import styles from './TopicCard.module.css';

const LEVEL_STYLES = {
  Beginner:     { bg: '#dcfce7', color: '#15803d' },
  Intermediate: { bg: '#dbeafe', color: '#1d4ed8' },
  Advanced:     { bg: '#fae8ff', color: '#9333ea' },
};

const RESOURCE_STYLES = {
  YouTube: { bg: '#fef2f2', color: '#b91c1c', label: 'YT' },
  Course:  { bg: '#eff6ff', color: '#1d4ed8', label: 'Course' },
  Docs:    { bg: '#f0fdf4', color: '#15803d', label: 'Docs' },
};

function ResourceRow({ resource }) {
  const s = RESOURCE_STYLES[resource.type] || { bg: '#f5f5f5', color: '#555', label: resource.type };
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.resourceLink}
    >
      <span
        className={styles.resourceBadge}
        style={{ background: s.bg, color: s.color }}
      >
        {s.label}
      </span>
      <span className={styles.resourceLabel}>{resource.label}</span>
      <span className={styles.resourceArrow}>↗</span>
    </a>
  );
}

export default function TopicCard({ topic, phaseColor, isCompleted, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const lvl = LEVEL_STYLES[topic.level] || LEVEL_STYLES.Beginner;

  const handleCardClick = () => setExpanded((e) => !e);
  const handleCheckClick = (e) => {
    e.stopPropagation();
    onToggle(topic.id);
  };

  return (
    <div
      className={`${styles.card} ${isCompleted ? styles.completed : ''}`}
      style={{ '--phase-color': phaseColor }}
    >
      {/* Card header — click to expand */}
      <div className={styles.cardHeader} onClick={handleCardClick}>
        {/* Checkbox */}
        <div className={styles.checkWrap}>
          <button
            className={`${styles.checkbox} ${isCompleted ? styles.checked : ''}`}
            style={
              isCompleted
                ? { background: phaseColor, borderColor: phaseColor }
                : { borderColor: phaseColor + '66' }
            }
            onClick={handleCheckClick}
            aria-label={`Mark "${topic.title}" as ${isCompleted ? 'incomplete' : 'complete'}`}
          >
            {isCompleted && <span className={styles.checkmark}>✓</span>}
          </button>
        </div>

        {/* Meta */}
        <div className={styles.meta}>
          <div className={styles.titleRow}>
            <h3 className={`${styles.title} ${isCompleted ? styles.titleDone : ''}`}>
              {topic.title}
            </h3>
            <div className={styles.badges}>
              {topic.isNew && <span className={styles.tagNew}>NEW</span>}
              {topic.isUpgraded && <span className={styles.tagUpgraded}>↑ Upgraded</span>}
              <span
                className={styles.levelBadge}
                style={{ background: lvl.bg, color: lvl.color }}
              >
                {topic.level}
              </span>
              <span className={styles.hoursBadge}>⏱ {topic.hours}h</span>
            </div>
          </div>
          <p className={styles.description}>{topic.description}</p>
        </div>

        {/* Expand toggle */}
        <button
          className={`${styles.expandBtn} ${expanded ? styles.expandOpen : ''}`}
          onClick={(e) => { e.stopPropagation(); setExpanded((x) => !x); }}
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          ▾
        </button>
      </div>

      {/* Expanded panel */}
      {expanded && (
        <div className={styles.expandedPanel}>
          {/* Resources */}
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Free Resources</div>
            <div className={styles.resourceList}>
              {topic.resources.map((r, i) => (
                <ResourceRow key={i} resource={r} />
              ))}
            </div>
          </div>

          {/* Capstone project */}
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Capstone Project</div>
            <div
              className={styles.projectBox}
              style={{
                borderLeftColor: phaseColor,
                background: phaseColor + '0d',
              }}
            >
              <span className={styles.projectIcon} style={{ color: phaseColor }}>
                ◈
              </span>
              <p className={styles.projectText}>{topic.project}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
