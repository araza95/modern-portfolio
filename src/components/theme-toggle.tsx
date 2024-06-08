'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import useHasMounted from '@/hooks/hasMounted.hook';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <section>
      {theme === 'light' ? (
        <Button onClick={() => setTheme('dark')}>
          <Moon />
        </Button>
      ) : (
        <Button onClick={() => setTheme('light')}>
          <Sun />
        </Button>
      )}
    </section>
  );
}
