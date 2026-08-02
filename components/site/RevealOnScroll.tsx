'use client';

import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to any element carrying the `reveal`
 * or `reveal-stagger` class when it scrolls into view.
 * Lightweight, no dependencies. Respects reduced motion.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger'),
    );

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
