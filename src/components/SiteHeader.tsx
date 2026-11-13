
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Headphones, Menu, X } from 'lucide-react';

export const navRoutes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/capabilities', label: 'Capabilities' },
  { path: '/technical', label: 'Technical' },
  { path: '/work', label: 'Work' },
  { path: '/archive', label: 'Archive' },
  { path: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the menu when navigating to another route.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock background scrolling while mobile navigation is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Close mobile navigation using Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="nav-bar no-print" aria-label="Site header">
        <div className="nav-inner">

          {/* Primary identity */}
          <Link
            to="/"
            className="nav-logo group"
            aria-label="Harsha - Home"
          >
            <Headphones
              size={16}
              strokeWidth={1.5}
              className="text-white/60 transition-colors duration-300 group-hover:text-[#c8b38b]"
              aria-hidden="true"
            />

            <span
              className="text-white"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
              }}
            >
              HARSHA
            </span>

            <span
              className="hidden text-[#666] transition-colors duration-300 group-hover:text-[#999] sm:inline"
              style={{
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Live Sound Engineer
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="nav-links"
            aria-label="Main navigation"
          >
            {navRoutes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                end={route.path === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {route.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen ? 'Close navigation' : 'Open navigation'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        id="mobile-menu"
        className={`mobile-menu no-print${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer heading */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <div className="label-meta mb-1 text-white/40">
              Navigation
            </div>

            <div className="text-xs uppercase tracking-widest text-white/50">
              HARSHA · Live Sound &amp; FOH Engineer
            </div>
          </div>

          <span className="label-meta text-white/30">
            H / 001
          </span>
        </div>

        {/* Navigation links */}
        <nav
          className="mobile-menu-links"
          aria-label="Mobile main navigation"
        >
          {navRoutes.map((route, index) => (
            <NavLink
              key={route.path}
              to={route.path}
              end={route.path === '/'}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className={({ isActive }) =>
                `mobile-menu-link flex items-center justify-between${isActive ? ' active text-white' : ''
                }`
              }
            >
              <span>{route.label}</span>

              <span className="text-[10px] tracking-widest text-[#555]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Contact information */}
        <div className="mt-auto flex flex-col gap-4 border-t border-[#1f1f1f] pt-7">
          <p className="label-meta text-white/40">
            Bengaluru, India · Live Production Enquiries
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-white/60">
            <a
              href="https://wa.me/917348967889"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#c8b38b]"
              tabIndex={menuOpen ? 0 : -1}
            >
              WhatsApp
            </a>

            <span className="text-[#333]">·</span>

            <a
              href="mailto:bookings.harsha@gmail.com"
              className="transition-colors hover:text-[#c8b38b]"
              tabIndex={menuOpen ? 0 : -1}
            >
              Email
            </a>

            <span className="text-[#333]">·</span>

            <a
              href="https://instagram.com/harrrshhhaa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#c8b38b]"
              tabIndex={menuOpen ? 0 : -1}
            >
              Instagram
            </a>
          </div>

          {/* Parent brand identity */}
          <div className="mt-3 flex items-center justify-between border-t border-[#1f1f1f] pt-5">
            <div className="flex flex-col gap-0.5">
              <span className="font-display text-base font-semibold tracking-tight text-white">
                ShaYa
              </span>

              <span className="text-[9px] tracking-[0.18em] text-[#777]">
                PROFESSIONAL AUDIO
              </span>
            </div>

            <span className="text-[9px] tracking-widest text-[#555]">
              BENGALURU · INDIA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
