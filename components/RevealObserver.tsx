'use client';

import { useEffect } from 'react';

/**
 * Fallback for browsers without scroll-driven animations.
 * Content stays visible without JS: the hidden state only applies once
 * `html.js-reveal` is set here.
 */
export default function RevealObserver() {
  useEffect(() => {
    if (CSS.supports('animation-timeline: view()')) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    // Anything already on screen is shown immediately, so nothing flickers.
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-visible');
    }
    document.documentElement.classList.add('js-reveal');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    for (const el of els) if (!el.classList.contains('is-visible')) io.observe(el);
    return () => io.disconnect();
  }, []);
  return null;
}
