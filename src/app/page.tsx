import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>hey</h1>
      <ThemeToggle />
      <Link href='/projects'>Projects</Link>
    </main>
  );
}
