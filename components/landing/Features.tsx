'use client';
import { motion } from 'framer-motion';
import { Globe, FileCode, Rocket } from 'lucide-react';

const FEATURES = [
  { icon: Globe, title: 'Cross-Runtime', description: 'Zero-config across Node.js, Browser, Bun, Deno, and Edge runtimes.' },
  { icon: FileCode, title: 'TypeScript First', description: 'Full type safety with excellent developer experience and autocomplete.' },
  { icon: Rocket, title: 'Production Ready', description: 'Retries, circuit breaker, rate limiting, deduplication, and enterprise security.' },
];

export default function Features() {
  return (
    <section className="relative py-16 px-4">
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-gradient-to-r from-[#0FA38A]/5 via-[#1FD1B2]/5 to-transparent blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-all hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-transparent group-hover:from-blue-500/5 transition-all pointer-events-none" />
              <div className="relative"><item.icon size={24} className="text-[#0FA38A] mb-3" /><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
