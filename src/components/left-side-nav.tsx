'use client';

// React Imports
import { FC, Fragment, useState } from 'react';

// Next JS Imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Constant Imports
import { SIDE_NAV_ITEMS } from '@/constants';

// Type Imports
import { ISideNavItems } from '@/types/types/index.type';

// Lib Imports
import { cn } from '@/lib/utils';

interface ILeftSideNavProps {
  className?: string;
}

const LeftSideNav: FC<ILeftSideNavProps> = ({ className }) => {
  return (
    <Fragment>
      <div
        className={cn(
          className,
          'lg:w-[20dvw] h-screen left-0 border-zinc-200 hidden lg:flex',
        )}
      >
        <div className='flex flex-col space-y-6 w-full'>
          <div className='flex flex-col space-y-2  md:px-6 '>
            {SIDE_NAV_ITEMS.map((item, idx) => {
              return (
                <MenuItem
                  key={idx}
                  item={item}
                />
              );
            })}
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

export default LeftSideNav;
