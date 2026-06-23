'use client';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Repeat, Layers } from 'lucide-react';

const ADVANTAGES = [
  { icon: Zap, title: 'Built for Performance', description: 'Optimized core engine for minimal overhead with competitive latency against native fetch.' },
  { icon: ShieldCheck, title: 'Type-Safe by Default', description: 'Full TypeScript inference for requests and responses with excellent DX and autocomplete.' },
  { icon: Repeat, title: 'Automatic Retries', description: 'Built-in retry logic with exponential backoff, jitter, and adaptive timing.' },
  { icon: Layers, title: 'Middleware & Interceptors', description: 'Flexible interceptor system for customization with Koa-style middleware pipeline.' },
];

export default function AdvantagesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Designed for Enterprise</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12">Built for reliability, security, and scale from day one.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADVANTAGES.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#0FA38A] dark:hover:border-[#0FA38A] transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-[#0FA38A]/10 transition-colors">
                <item.icon size={20} className="text-[#0FA38A]" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
