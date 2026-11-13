
import type { ReactNode } from 'react';

interface PortfolioPageProps {
  pageNumber?: string;
  sectionLabel: string;
  children: ReactNode;
  showHeader?: boolean;
  pageId: string;
}

export default function PortfolioPage({
  pageNumber = '',
  sectionLabel,
  children,
  showHeader = true,
  pageId,
}: PortfolioPageProps) {
  return (
    <section
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

        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
