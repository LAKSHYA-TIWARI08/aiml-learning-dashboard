import React from 'react';
import styles from './Header.module.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'not-started', label: 'Not Started' },
  { id: 'completed', label: 'Completed' },
];

export default function Header({
  dark,
  toggleTheme,
  search,
  setSearch,
  filter,
  setFilter,
  onReset,
  hasProgress,
}) {
  return (
    <header className={styles.header}>
      {/* Left: title */}
      <div className={styles.left}>
        <h1 className={styles.title}>Learning Roadmap</h1>
        <span className={styles.subtitle}>
          Future-Proof AI/ML · 18 Months · 2025 Edition
        </span>
      </div>

      {/* Right: controls */}
      <div className={styles.controls}>
        {/* Search */}
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>⌕</span>
          <input
            className={styles.search}
            type="text"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              className={styles.searchClear}
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filters */}
        <div className={styles.filterGroup}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`${styles.filterBtn} ${filter === f.id ? styles.active : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          className={styles.iconBtn}
          onClick={toggleTheme}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle theme"
        >
          {dark ? '☀' : '☽'}
        </button>

        {/* Reset */}
        {hasProgress && (
          <button
            className={`${styles.iconBtn} ${styles.resetBtn}`}
            onClick={onReset}
            title="Reset all progress"
            aria-label="Reset progress"
          >
            ↺
          </button>
        )}
      </div>
    </header>
  );
}
