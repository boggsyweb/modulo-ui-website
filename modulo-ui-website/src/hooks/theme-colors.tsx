import { useEffect, useState } from 'react';

function useColorScheme() {
  const [preferredColorScheme, setPreferredColorScheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const handleColorSchemeChange = (event: { matches: any; }) => {
      setPreferredColorScheme(event.matches ? 'dark' : 'light');
    };

    if (window.matchMedia) {
      const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQueryList.addEventListener('change', handleColorSchemeChange);

      return () => {
        mediaQueryList.removeEventListener('change', handleColorSchemeChange);
      };
    }
  }, []);

  return preferredColorScheme;
}

export default useColorScheme;
