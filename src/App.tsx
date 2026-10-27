import { useState, useEffect, useCallback } from 'react';
import { Headphones, Menu, X } from 'lucide-react';
import CustomCursor from '@/components/CustomCursor';

import Page01Cover from '@/pages/Page01Cover';
import Page02About from '@/pages/Page02About';
import Page03Experience from '@/pages/Page03Experience';
import Page04Capabilities from '@/pages/Page04Capabilities';
import Page05Technical from '@/pages/Page05Technical';
import Page06SelectedWork from '@/pages/Page06SelectedWork';
import Page07Workflow from '@/pages/Page07Workflow';
import Page08VisualArchive from '@/pages/Page08VisualArchive';
import Page09Profile from '@/pages/Page09Profile';
import Page10Contact from '@/pages/Page10Contact';

/* ─────────────────────────────────────────────
   Primary Navigation
   Keep this intentionally concise.
───────────────────────────────────────────── */

const navItems = [
  { label: 'About', target: 'page-about' },
  { label: 'Experience', target: 'page-experience' },
  { label: 'Capabilities', target: 'page-capabilities' },
  { label: 'Work', target: 'page-selectedwork' },
  { label: 'Archive', target: 'page-archive' },
  { label: 'Contact', target: 'page-contact' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('page-about');

  /* ─────────────────────────────────────────────
     Smooth section navigation
  ───────────────────────────────────────────── */

  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMenuOpen(false);
  }, []);

  /* ─────────────────────────────────────────────
     Active section detection
  ───────────────────────────────────────────── */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.05, 0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ─────────────────────────────────────────────
     Lock background scrolling on mobile menu
  ───────────────────────────────────────────── */

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  /* ─────────────────────────────────────────────
     Escape closes mobile navigation
  ───────────────────────────────────────────── */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <CustomCursor />

      {/* ═══════════════════════════════════════
          DESKTOP / MOBILE NAVIGATION
      ═══════════════════════════════════════ */}

      <nav
        className="nav-bar no-print"
        aria-label="Site navigation"
      >
        <div className="nav-inner">

          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollTo('page-cover')}
            className="nav-logo"
            aria-label="Back to top"
          >
            <Headphones
              size={16}
              strokeWidth={1.5}
              className="text-white/60"
              aria-hidden="true"
            />

            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              HARSHA
            </span>

            <span
              className="text-[#555] hidden sm:inline"
              style={{
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              FOH Engineer
            </span>
          </button>

          {/* Desktop navigation */}
          <div
            className="nav-links"
            role="list"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const active =
                activeSection === item.target;

              return (
                <button
                  key={item.target}
                  type="button"
                  role="listitem"
                  onClick={() => scrollTo(item.target)}
                  className={`nav-link${active ? ' active' : ''
                    }`}
                  aria-current={
                    active ? 'page' : undefined
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="nav-hamburger"
            onClick={() =>
              setMenuOpen((current) => !current)
            }
            aria-label={
              menuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X
                size={22}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={22}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            )}
          </button>

        </div>
      </nav>

      {/* ═══════════════════════════════════════
          MOBILE MENU
      ═══════════════════════════════════════ */}

      <div
        id="mobile-menu"
        className={`mobile-menu no-print${menuOpen ? ' open' : ''
          }`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >

        {/* Close */}
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <X
            size={24}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>

        {/* Menu heading */}
        <div className="mb-8">
          <div className="label-meta text-white/30 mb-1">
            Navigation
          </div>

          <div className="text-white/10 text-xs tracking-widest uppercase">
            HARSHA · FOH Engineer
          </div>
        </div>

        {/* Mobile links */}
        <nav
          className="mobile-menu-links"
          role="list"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const active =
              activeSection === item.target;

            return (
              <button
                key={item.target}
                type="button"
                role="listitem"
                onClick={() => scrollTo(item.target)}
                className={`mobile-menu-link${active ? ' active' : ''
                  }`}
                aria-current={
                  active ? 'page' : undefined
                }
              >
                <span>{item.label}</span>

                {active && (
                  <span
                    className="mobile-active-mark"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile footer */}
        <div className="mt-auto pt-8 border-t border-[#1F1F1F]">
          <p className="label-meta text-white/20">
            Live Sound & FOH Engineer · Bengaluru, India
          </p>
        </div>

      </div>

      {/* ═══════════════════════════════════════
          PORTFOLIO PAGES
      ═══════════════════════════════════════ */}

      <div className="screen-wrapper">
        <Page01Cover />
        <Page02About />
        <Page03Experience />
        <Page04Capabilities />
        <Page05Technical />
        <Page06SelectedWork />
        <Page07Workflow />
        <Page08VisualArchive />
        <Page09Profile />
        <Page10Contact />
      </div>

    </div>
  );
}

export default App;