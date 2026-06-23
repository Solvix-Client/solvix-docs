'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn', 'bun'] as const;
const COMMANDS: Record<string, string> = {
  npm: 'npm install @adityadev13/solvix',
  pnpm: 'pnpm add @adityadev13/solvix',
  yarn: 'yarn add @adityadev13/solvix',
  bun: 'bun add @adityadev13/solvix',
};

export default function InstallSection() {
  const [active, setActive] = useState<typeof PACKAGE_MANAGERS[number]>('npm');
  const [copied, setCopied] = useState(false);
  const command = COMMANDS[active];

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Installation</h2>
        <div className="flex justify-center gap-2 mb-4">
          {PACKAGE_MANAGERS.map(pm => (
            <button key={pm} onClick={() => { setActive(pm); setCopied(false); }}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                active === pm
                  ? 'bg-gradient-to-r from-[#1FD1B2] to-[#0FA38A] text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}>{pm}</button>
          ))}
        </div>
        <div className="relative group">
          <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-4 flex items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.code key={active} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }}
                className="text-sm text-gray-100 font-mono">{command}</motion.code>
            </AnimatePresence>
            <button onClick={() => { navigator.clipboard.writeText(command); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors" aria-label="Copy command">
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
