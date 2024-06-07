'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.75, type: 'easeIn' }}
    >
      {children}
    </motion.div>
  );
}
