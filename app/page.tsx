'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/landing/Hero';
import InstallSection from '@/components/landing/InstallSection';
import CodePreview from '@/components/landing/CodePreview';
import AdvantagesSection from '@/components/landing/AdvantagesSection';
import Features from '@/components/landing/Features';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Hero /><InstallSection /><CodePreview /><AdvantagesSection /><Features />
    </motion.div>
  );
}
