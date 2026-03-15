import React, { useState, useMemo } from 'react';
import { PHASES } from './data/roadmap';
import { useProgress } from './hooks/useProgress';
import { useTheme } from './hooks/useTheme';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import PhaseSection from './components/PhaseSection';
import EmergingFields from './components/EmergingFields';
import QuickPlatforms from './components/QuickPlatforms';
import styles from './App.module.css';

export default function App() {
  const { dark, toggle: toggleTheme } = useTheme();
  const progress = useProgress();

  const [activePhase, setActivePhase] = useState('all');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // all | completed | not-started

  // Filtered phases based on search + filter
  const filteredPhases = useMemo(() => {
    return PHASES.map((phase) => ({
      ...phase,
      topics: phase.topics.filter((topic) => {
        // Search match
        const q = search.toLowerCase();
        const matchSearch =
          q === '' ||
          topic.title.toLowerCase().includes(q) ||
          topic.description.toLowerCase().includes(q) ||
          topic.tag.toLowerCase().includes(q);

        // Filter match
        const isDone = !!progress.completed[topic.id];
        const matchFilter =
          filter === 'all'
            ? true
            : filter === 'completed'
            ? isDone
            : filter === 'not-started'
            ? !isDone
            : true;

        return matchSearch && matchFilter;
      }),
    })).filter(
      (phase) =>
        activePhase === 'all' ||
        phase.id === activePhase
    );
  }, [search, filter, activePhase, progress.completed]);

  const hasNoResults =
    filteredPhases.every((p) => p.topics.length === 0) &&
    activePhase !== 'emerging' &&
    activePhase !== 'platforms';

  const handleReset = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      progress.reset();
    }
  };

  const showEmerging = activePhase === 'all' || activePhase === 'emerging';
  const showPlatforms = activePhase === 'all' || activePhase === 'platforms';

  return (
    <div className={`${styles.app} ${dark ? styles.dark : styles.light}`}>
      {/* Sidebar */}
      <Sidebar
        phases={PHASES}
        activePhase={activePhase}
        setActivePhase={setActivePhase}
        phaseStats={progress.phaseStats}
      />

      {/* Main content */}
      <div className={styles.main}>
        {/* Sticky header */}
        <Header
          dark={dark}
          toggleTheme={toggleTheme}
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          onReset={handleReset}
          hasProgress={progress.completedCount > 0}
        />

        {/* Scrollable body */}
        <div className={styles.body}>
          {/* Analytics dashboard */}
          <StatsBar
            completedCount={progress.completedCount}
            totalTopics={progress.totalTopics}
            completedHours={progress.completedHours}
            totalHours={progress.totalHours}
            overallPercent={progress.overallPercent}
            phaseStats={progress.phaseStats}
          />

          {/* Emerging fields */}
          {showEmerging && <EmergingFields />}

          {/* Phase sections */}
          {filteredPhases.map((phase) =>
            phase.topics.length > 0 ? (
              <PhaseSection
                key={phase.id}
                phase={phase}
                phaseStats={progress.phaseStats}
                completed={progress.completed}
                onToggle={progress.toggle}
              />
            ) : null
          )}

          {/* Quick platforms */}
          {showPlatforms && <QuickPlatforms />}

          {/* Empty state */}
          {hasNoResults && (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>◈</div>
              <h3 className={styles.emptyTitle}>No topics match</h3>
              <p className={styles.emptyDesc}>
                Try adjusting your search term or filter
              </p>
              <button
                className={styles.emptyClear}
                onClick={() => { setSearch(''); setFilter('all'); }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
