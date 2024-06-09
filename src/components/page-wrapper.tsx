import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'bg-primary-light dark:bg-primary-dark',
        'flex flex-col pt-2 px-4 space-y-2 flex-grow pb-4 shadow-lg',
      )}
    >
      {children}
    </div>
  );
}
