import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global ScrollObserver: Watches for elements with animation classes
 * (.reveal, .reveal-up, .reveal-mask, .reveal-stagger, .reveal-scale, .image-reveal-clip)
 * and applies `.is-visible` (and `.visible`) when they enter the viewport.
 * 
 * Re-runs on route changes and supports scroll-triggered reveals throughout the user journey.
 * Defensive fallback: if reduced motion is requested or IntersectionObserver fails,
 * all elements instantly become visible.
 */
export default function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const selector = [
      '.reveal',
      '.reveal-up',
      '.reveal-fade',
      '.reveal-mask',
      '.reveal-stagger',
      '.reveal-scale',
      '.image-reveal-clip',
      '[data-scroll-reveal]',
    ].join(', ');

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => {
        el.classList.add('is-visible', 'visible');
      });
      return;
    }

    // IntersectionObserver with threshold & rootMargin to trigger slightly before bottom of screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('is-visible', 'visible');
            // Unobserve once revealed so it remains stable
            observer.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -8% 0px', // trigger when 8% inside viewport
        threshold: 0.05,
      }
    );

    // Initial check: if element is already within viewport on mount, reveal it immediately
    const vh = window.innerHeight;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.95 && rect.bottom > 0) {
        el.classList.add('is-visible', 'visible');
      } else {
        observer.observe(el);
      }
    });

    // Fallback timer: after 1.8 seconds, any elements that haven't been triggered
    // will be made visible so nothing ever stays stuck invisible
    const fallbackTimer = setTimeout(() => {
      elements.forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < vh * 1.2) {
            el.classList.add('is-visible', 'visible');
          }
        }
      });
    }, 1800);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

