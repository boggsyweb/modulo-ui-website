import { useState, useEffect } from 'react';

export function useThemeChange() {
  const [userTheme, setUserTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: { matches: any; }) => {
      setUserTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setUserTheme(userTheme === 'light' ? 'dark' : 'light');
  };

  return { userTheme, toggleTheme };
}
