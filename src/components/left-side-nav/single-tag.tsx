// React Imports
import { cn } from '@/lib/utils';
import { FC, Fragment } from 'react';

interface ISingleTagProps {
  text: string;
}

const SingleTag: FC<ISingleTagProps> = ({ text }) => {
  return (
    <Fragment>
      <p
        className={cn(
          'text-secondary-dark',
          'bg-[#F78F421A] dark:bg-[#F78F421A] ',
          'text-[12px] font-600 leading-[18px] text-center',
          'font-inter',
          'p-2 rounded-xl shadow-md',
          'my-2',
        )}
      >
        {text}
      </p>
    </Fragment>
  );
};

export default SingleTag;
