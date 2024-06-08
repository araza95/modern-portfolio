'use client';

// React Imports
import { JSX } from 'react';

// External package imports
import LoadingOverlay from 'react-loading-overlay-ts';

export default function LoadingView({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <LoadingOverlay
      className={
        className ||
        'h-screen w-screen flex items-center justify-center bg-white bg-opacity-50 text-center absolute inset-0 z-500'
      }
      active={true}
      spinner
      fadeSpeed={1500}
      text='Loading...'
    />
  );
}
