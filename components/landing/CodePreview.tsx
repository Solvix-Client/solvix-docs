'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CODE = `import { createClient } from "@adityadev13/solvix";

const client = createClient({
  baseURL: "https://api.example.com",
  retry: { retries: 3 },
});

const response = await client.get("/users");
console.log(response.data);`;

export default function CodePreview() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0FA38A]/20 to-[#1FD1B2]/20 rounded-2xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity" />
          <div className="relative bg-gray-900 dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-800">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-800">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
              <span className="text-xs text-gray-500 ml-3 font-mono">client.ts</span>
            </div>
            <div className="p-5 relative">
              <pre className="text-sm text-gray-100 font-mono leading-relaxed overflow-x-auto"><code>{CODE}</code></pre>
              <button onClick={() => { navigator.clipboard.writeText(CODE); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100" aria-label="Copy code">
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
