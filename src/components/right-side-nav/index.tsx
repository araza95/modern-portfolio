'use client';

// React Imports
import { cn } from '@/lib/utils';
import { FC, Fragment } from 'react';
import { ThemeToggle } from '../theme-toggle';
import { SIDE_NAV_ITEMS } from '@/constants';
import { ISideNavItems } from '@/types/types/index.type';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface IRightSideNavProps {
  className?: string;
}

const RightSideNav: FC<IRightSideNavProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <Fragment>
      <div
        className={cn(
          className,
          'bg-base-light dark:bg-base-dark',
          'text-base-dark dark:text-base-light',
          'flex justify-center',
          'rounded-tl-xl rounded-bl-xl',
          'lg:w-[8dvw] h-screen fixed right-0 border-none border-zinc-200 bg-white hidden lg:flex',
        )}
      >
        <div className='flex flex-col space-y-6 w-full'>
          <div className='flex flex-col space-y-2  md:px-6 '>
            <ThemeToggle />
            {SIDE_NAV_ITEMS.map((item, idx) => (
              <Fragment key={idx}>
                <Link href={item.path}>
                  <p className='font-semibold text-xl flex'>{item.title}</p>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const MenuItem = ({ item }: { item: ISideNavItems }) => {
  const pathname = usePathname();

  return (
    <Fragment>
      <Link
        href={item.path}
        className={cn(
          `flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`,
        )}
      >
        {item.icon}
        <span className='font-semibold text-xl flex'>{item.title}</span>
      </Link>
    </Fragment>
  );
};

export default RightSideNav;
