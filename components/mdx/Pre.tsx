'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function Pre({ children, ...props }: React.ComponentProps<'pre'>) {
  const [copied, setCopied] = useState(false);
  const code = typeof (children as any)?.props?.children === 'string' ? (children as any).props.children : '';
  return (
    <div className="relative group my-6">
      <pre {...props} className="!bg-[#0d1117] !rounded-xl !p-4 !overflow-x-auto !text-sm !leading-relaxed">{children}</pre>
      <button onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
        className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100" aria-label="Copy code">
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
      </button>
    </div>
  );
}
