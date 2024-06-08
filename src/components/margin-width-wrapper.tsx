// React Imports
import { ReactNode } from 'react';

/**
 * @description This component is used to wrap the content with margin width.
 *
 * @returns {ReactNode} The MarginWidthWrapper component
 *
 * @example
 * <MarginWidthWrapper>
 */
export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  return (
    <div className='flex flex-col sm:border-r sm:border-zinc-700 min-h-screen '>
      {children}
    </div>
  );
}
