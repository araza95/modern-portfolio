import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={54} height={54} priority alt=''
        className='rounded-full cursor-pointer'
      />
    </Link>
  );
};

export default Logo;
