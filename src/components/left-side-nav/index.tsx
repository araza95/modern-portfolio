'use client';

// React Imports
import { FC, Fragment, useState } from 'react';

// Next JS Imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// Constant Imports
import { SIDE_NAV_ITEMS } from '@/constants';

// Type Imports
import { ISideNavItems } from '@/types/types/index.type';

// Lib Imports
import { cn } from '@/lib/utils';

// Sub-Component Imports
import SingleTag from './single-tag';
import SocialLinks from './social-link';

interface ILeftSideNavProps {
  className?: string;
}

const LeftSideNav: FC<ILeftSideNavProps> = ({ className }) => {
  return (
    <Fragment>
      <div
        className={cn(
          className,
          'bg-base-light dark:bg-base-dark',
          'text-base-dark dark:text-base-light',
          'flex justify-center',
          'rounded-tr-2xl rounded-br-2xl',
          'lg:w-[20dvw] h-screen left-0 border-zinc-200 hidden lg:flex',
        )}
      >
        <div className='text-center'>
          <div className='relative inline-block'>
            <Image
              src='/assets/side-profile.png'
              height={200}
              width={200}
              alt='Profile Picture'
              className='rounded-full mx-auto my-6 object-contain border-2 border-primary-dark dark:border-primary-light h-[150px] w-[150px]'
            />
            <span
              className={cn(
                'bg-secondary-light dark:bg-secondary-dark',
                'absolute right-0 w-6 h-6 bottom-[42px]  border-2 border-white dark:border-primary-light rounded-full',
              )}
            />
          </div>
          <p
            className={cn(
              'font-inter',
              'text-primary-dark dark:text-primary-light',
              'text-[1.5rem] font-bold text-center',
            )}
          >
            Syed Ali Haider
          </p>
          <SingleTag text='Fullstack Developer' />
          <SocialLinks />
        </div>

        {/* <div className='flex flex-col space-y-6 w-full'>
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
        </div> */}
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
          `flex flex-row space-x-4 items-center p-2 rounded-lg ${
            item.path === pathname
              ? 'bg-secondary-light dark:bg-secondary-dark'
              : ''
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
