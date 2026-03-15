import { useState, useEffect, useCallback } from 'react';
import { PHASES } from '../data/roadmap';

const STORAGE_KEY = 'aiml_dashboard_progress_v1';

export function useProgress() {
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persist every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const toggle = useCallback((topicId) => {
    setCompleted((prev) => ({ ...prev, [topicId]: !prev[topicId] }));
  }, []);

  const reset = useCallback(() => setCompleted({}), []);

  // Derived statistics
  const allTopics = PHASES.flatMap((p) => p.topics);
  const totalTopics = allTopics.length;
  const completedCount = allTopics.filter((t) => !!completed[t.id]).length;
  const totalHours = allTopics.reduce((sum, t) => sum + t.hours, 0);
  const completedHours = allTopics
    .filter((t) => !!completed[t.id])
    .reduce((sum, t) => sum + t.hours, 0);
  const overallPercent =
    totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const phaseStats = PHASES.map((phase) => {
    const total = phase.topics.length;
    const done = phase.topics.filter((t) => !!completed[t.id]).length;
    return {
      phaseId: phase.id,
      total,
      done,
      percent: total > 0 ? Math.round((done / total) * 100) : 0,
    };
  });

  return {
    completed,
    toggle,
    reset,
    completedCount,
    totalTopics,
    completedHours,
    totalHours,
    overallPercent,
    phaseStats,
  };
}
