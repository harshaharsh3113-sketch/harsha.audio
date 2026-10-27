import { useEffect, useRef, type ReactNode } from 'react';

interface PortfolioPageProps {
  pageNumber: string;
  sectionLabel: string;
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  footerText?: string;
  pageId: string;
}

export default function PortfolioPage({
  pageNumber,
  sectionLabel,
  children,
  showHeader = true,
  showFooter = true,
  footerText = 'HARSHA — LIVE SOUND & FOH ENGINEER',
  pageId,
}: PortfolioPageProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reveals = el.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-stagger, .image-reveal-clip'
    );

    if (!reveals.length) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      reveals.forEach((element) => {
        element.classList.add('visible');
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="portfolio-page portfolio-section"
      id={pageId}
    >
      <div className="section-inner">
        {showHeader && (
          <header className="section-header">
            <span className="label-section">
              {sectionLabel}
            </span>

            <span className="label-meta">
              {pageNumber}
            </span>
          </header>
        )}

        <div className="reveal">
          {children}
        </div>

        {showFooter && (
          <footer className="page-footer mt-16 no-print">
            <span className="label-meta">
              {footerText}
            </span>

            <span className="label-meta">
              {pageNumber}
            </span>
          </footer>
        )}
      </div>
    </section>
  );
}