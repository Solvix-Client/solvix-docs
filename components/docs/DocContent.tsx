'use client';
import { useEffect } from 'react';

export default function DocContent({ html }: { html: string }) {
  useEffect(() => {
    // Add copy buttons to all pre > code blocks
    const pres = document.querySelectorAll('.doc-content pre');
    pres.forEach(pre => {
      if (pre.parentElement?.classList.contains('code-block-wrapper')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper relative group my-6';

      const btn = document.createElement('button');
      btn.className = 'absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 z-10';
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-400"><rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
      btn.setAttribute('aria-label', 'Copy code');

      const code = pre.querySelector('code');
      const text = code?.textContent || '';

      btn.onclick = () => {
        navigator.clipboard.writeText(text);
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(() => {
          btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-400"><rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
        }, 2000);
      };

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
      wrapper.appendChild(btn);
    });
  }, [html]);

  return (
    <div
      className="doc-content prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
