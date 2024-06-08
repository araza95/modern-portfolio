'use client';

// React Imports
import { FC, Fragment, MouseEventHandler, ReactNode, useRef } from 'react';

// Next JS Imports
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Constants Imports
import { SIDE_NAV_ITEMS } from '@/constants';

// External package imports
import { motion, useCycle } from 'framer-motion';

// Framer Motion Variants
import { sidebarMotionVariants } from '@/framer-motion/sidebar-variants.motion';
import {
  sidebarMenuFramerVariant,
  sidebarMenuItemFramerVariants,
} from '@/framer-motion/sidebar-menu-variants.motion';

const HeaderMobile: FC = () => {
  const pathname = usePathname();

  const containerRef = useRef(null);

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Fragment>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={`fixed inset-0 z-50 w-dvw md:hidden ${isOpen ? '' : 'pointer-events-none'}`}
        ref={containerRef}
      >
        <motion.div
          className='absolute inset-0 right-0 w-dvw bg-white'
          variants={sidebarMotionVariants}
        />

        <motion.ul
          variants={sidebarMenuFramerVariant}
          className='absolute grid w-full gap-3 px-10 py-16 max-h-screen overflow-y-auto'
        >
          {SIDE_NAV_ITEMS.map((item, idx) => {
            const isLastItem = idx === SIDE_NAV_ITEMS.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                <MenuItem>
                  <Link
                    href={item.path}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-2xl ${
                      item.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                </MenuItem>

                {!isLastItem && (
                  <MenuItem className='my-3 h-px w-full bg-gray-300' />
                )}
              </div>
            );
          })}
        </motion.ul>
        {/* @ts-ignore */}
        <MenuToggle toggle={toggleOpen} />
      </motion.nav>
    </Fragment>
  );
};

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='2'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

const MenuToggle = ({
  toggle,
}: {
  toggle: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    onClick={toggle}
    className='pointer-events-auto absolute right-4 top-[14px] z-30'
  >
    <svg
      width='23'
      height='23'
      viewBox='0 0 23 23'
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li
      variants={sidebarMenuItemFramerVariants}
      className={className}
    >
      {children}
    </motion.li>
  );
};

export default HeaderMobile;
