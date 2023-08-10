import { useEffect } from 'react';
import { useTheme } from '../../lib/stores/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const themePrefix = 'sl-theme-';
  const themeSuffix = useTheme((state) => state.theme);
  const theme = themePrefix + themeSuffix;

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return <div className={theme}>{children}</div>;
}
