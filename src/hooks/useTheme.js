import { useState, useEffect } from 'react';

const THEME_KEY = 'aiml_dashboard_theme_v1';

export function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved !== null ? saved === 'dark' : true; // dark by default
  });

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return { dark, toggle };
}
