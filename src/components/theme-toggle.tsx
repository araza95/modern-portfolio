'use client';

// Next JS Imports
import { useTheme } from 'next-themes';

// Component Imports
import { Button } from '@/components/ui/button';

// Hook Imports
import useHasMounted from '@/hooks/hasMounted.hook';

// Icon Imports
import { FaCloudMoon } from 'react-icons/fa6';
import { TiWeatherPartlySunny } from 'react-icons/ti';
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <section>
      {theme === 'light' ? (
        <Button onClick={() => setTheme('dark')}>
          <FaCloudMoon size={25} />
        </Button>
      ) : (
        <Button onClick={() => setTheme('light')}>
          <TiWeatherPartlySunny size={25} />
        </Button>
      )}
    </section>
  );
}
