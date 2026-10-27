import type { ReactNode } from 'react';

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
  return (
    <section className="portfolio-page" id={pageId}>
      <div className="page-safe">
        {showHeader && (
          <header className="page-header">
            <span className="label-section">{sectionLabel}</span>
            <span className="label-meta">{pageNumber}</span>
          </header>
        )}
        <div className="flex-1 flex flex-col min-h-0 pt-7">{children}</div>
        {showFooter && (
          <footer className="page-footer">
            <span className="label-meta">{footerText}</span>
            <span className="label-meta">{pageNumber}</span>
          </footer>
        )}
      </div>
    </section>
  );
}
