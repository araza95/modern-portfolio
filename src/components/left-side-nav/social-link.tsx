// React Imports
import { FC, Fragment } from 'react';

// Lib Imports
import { cn } from '@/lib/utils';

// NextJS Imports
import Link from 'next/link';

// Constants Imports
import { Links_Data } from '@/constants';

const SocialLinks: FC = () => {
  return (
    <Fragment>
      <div
        className={cn('flex items-center justify-around', 'mt-7 mb-5', 'gap-7')}
      >
        {Links_Data.map(
          ({ path, icon }: { path: string; icon: JSX.Element }, index) => (
            <Link
              key={index}
              href={path}
              target='_blank'
              color='inherit'
              className='text-2xl'
            >
              {icon}
            </Link>
          ),
        )}
      </div>
    </Fragment>
  );
};

export default SocialLinks;
