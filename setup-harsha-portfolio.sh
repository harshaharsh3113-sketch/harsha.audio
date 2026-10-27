#!/usr/bin/env bash
#
# Harsha — Live Sound & FOH Engineer Portfolio
# Complete project setup script.
#
# USAGE:
#   1. Save this file as setup-harsha-portfolio.sh
#   2. bash setup-harsha-portfolio.sh
#
# It creates a folder "harsha-live-sound-portfolio" with the full project,
# downloads the 10 images into public/, and runs npm install.
# Then run:  npm run dev
#
set -e

PROJECT_DIR="harsha-live-sound-portfolio"
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

mkdir -p public src/components src/pages

# ───────────────────────── package.json ─────────────────────────
cat > package.json <<'PKG'
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.446.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^7.3.7"
  }
}
PKG

# ───────────────────────── index.html ─────────────────────────
cat > index.html <<'HTML'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Harsha Portfolio</title>
    <meta property="og:image" content="https://bolt.new/static/og_default.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="https://bolt.new/static/og_default.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
HTML

# ───────────────────────── vite.config.ts ─────────────────────────
cat > vite.config.ts <<'TS'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
TS

# ───────────────────────── tsconfig files ─────────────────────────
cat > tsconfig.json <<'TS'
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
TS

cat > tsconfig.app.json <<'TS'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Path alias */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
TS

cat > tsconfig.node.json <<'TS'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
TS

# ───────────────────────── tailwind + postcss + eslint ─────────────────────────
cat > tailwind.config.js <<'JS'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
JS

cat > postcss.config.js <<'JS'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
JS

cat > eslint.config.js <<'JS'
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
JS

cat > .gitignore <<'GIT'
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
GIT

# ───────────────────────── src/vite-env.d.ts ─────────────────────────
cat > src/vite-env.d.ts <<'TS'
/// <reference types="vite/client" />
TS

# ───────────────────────── src/main.tsx ─────────────────────────
cat > src/main.tsx <<'TS'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
TS

# ───────────────────────── src/index.css ─────────────────────────
cat > src/index.css <<'CSS'
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-primary: #0D0D0D;
  --bg-surface: #111111;
  --bg-surface-2: #141414;
  --border-subtle: #1F1F1F;
  --border-muted: #2A2A2A;
  --text-primary: #FFFFFF;
  --text-secondary: #A8A8A8;
  --text-muted: #6B6B6B;
  --text-faint: #4A4A4A;
  --accent: #E5E5E5;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'ss01', 'cv11';
}

body {
  letter-spacing: -0.011em;
}

/* ========== Portfolio page wrapper ========== */
.portfolio-page {
  position: relative;
  width: 210mm;
  height: 297mm;
  min-height: 297mm;
  max-height: 297mm;
  overflow: hidden;
  background: var(--bg-primary);
  break-after: page;
  page-break-after: always;
  break-inside: avoid;
  page-break-inside: avoid;
}

.portfolio-page:last-child {
  break-after: auto;
  page-break-after: auto;
}

/* Screen presentation: center A4 pages on dark backdrop */
@media screen {
  .portfolio-page {
    margin: 0 auto;
    box-shadow:
      0 0 0 1px var(--border-subtle),
      0 40px 80px -20px rgba(0, 0, 0, 0.8),
      0 20px 40px -20px rgba(0, 0, 0, 0.6);
    margin-bottom: 40px;
    margin-top: 24px;
  }
}

/* Internal safe area */
.page-safe {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 18mm 16mm;
  display: flex;
  flex-direction: column;
}

/* ========== Typography utilities ========== */
.label-meta {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.label-meta-bright {
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.label-section {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.headline-xl {
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.headline-lg {
  font-size: 38px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.0;
}

.headline-md {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.headline-sm {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.2;
}

.body-text {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--text-secondary);
  letter-spacing: -0.005em;
}

.body-text-bright {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--text-primary);
  letter-spacing: -0.005em;
}

.body-lg {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* Technical label */
.tech-label {
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-faint);
}

/* Hairline divider */
.hairline {
  height: 1px;
  background: var(--border-subtle);
  width: 100%;
}

.hairline-muted {
  height: 1px;
  background: var(--border-muted);
  width: 100%;
}

/* ========== Page header ========== */
.page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 0;
  flex-shrink: 0;
}

/* ========== Footer ========== */
.page-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid var(--border-subtle);
  flex-shrink: 0;
  margin-top: auto;
}

/* ========== Image frame ========== */
.image-frame {
  position: relative;
  overflow: hidden;
  background: var(--bg-surface-2);
  border: 1px solid var(--border-subtle);
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@media screen and (hover: hover) {
  .image-frame:hover img {
    transform: scale(1.02);
  }
}

.image-fallback {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface-2);
  border: 1px solid var(--border-subtle);
  gap: 14px;
}

/* ========== Cards ========== */
.tech-card {
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  padding: 16px 14px;
}

/* ========== Link transitions ========== */
.link-underline {
  position: relative;
  display: inline-block;
}

.link-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@media screen and (hover: hover) {
  .link-underline:hover::after {
    transform: scaleX(1);
  }
}

/* ========== Navigation ========== */
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

/* Screen-only wrapper */
.screen-wrapper {
  padding-top: 60px;
}

/* ========== Responsive scaling ========== */
@media screen and (max-width: 900px) {
  .portfolio-page {
    width: 100%;
    max-width: 100vw;
    height: auto;
    min-height: 0;
    max-height: none;
    overflow: visible;
    box-shadow: 0 0 0 1px var(--border-subtle);
    margin-bottom: 16px;
    margin-top: 16px;
  }

  .page-safe {
    padding: 32px 20px;
    height: auto;
    min-height: 0;
  }

  .headline-xl {
    font-size: 40px;
  }

  .headline-lg {
    font-size: 30px;
  }

  .headline-md {
    font-size: 20px;
  }

  .body-text,
  .body-text-bright {
    font-size: 14px;
  }

  .body-lg {
    font-size: 15px;
  }
}

@media screen and (max-width: 600px) {
  .headline-xl {
    font-size: 32px;
  }

  .headline-lg {
    font-size: 24px;
  }

  .page-safe {
    padding: 28px 16px;
  }
}

/* ========== Print ========== */
@media print {
  @page {
    size: A4 portrait;
    margin: 0;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #0D0D0D;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  * {
    animation: none !important;
    transition: none !important;
  }

  .portfolio-page {
    width: 210mm;
    height: 297mm;
    min-height: 297mm;
    max-height: 297mm;
    overflow: hidden;
    break-after: page;
    page-break-after: always;
    break-inside: avoid;
    page-break-inside: avoid;
    margin: 0;
    box-shadow: none !important;
  }

  .portfolio-page:last-child {
    break-after: auto;
    page-break-after: auto;
  }

  .page-safe {
    padding: 18mm 16mm;
  }

  .no-print {
    display: none !important;
  }

  .screen-wrapper {
    padding-top: 0;
  }

  .nav-bar {
    display: none !important;
  }

  img {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .break-avoid {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
CSS

# ───────────────────────── src/App.tsx ─────────────────────────
cat > src/App.tsx <<'TSX'
import { useState, useEffect } from 'react';
import { Headphones } from 'lucide-react';
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

const navItems = [
  { label: 'About', target: 'page-about' },
  { label: 'Experience', target: 'page-experience' },
  { label: 'Capabilities', target: 'page-capabilities' },
  { label: 'Work', target: 'page-selectedwork' },
  { label: 'Workflow', target: 'page-workflow' },
  { label: 'Contact', target: 'page-contact' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Navigation */}
      <nav className="nav-bar no-print">
        <div className="max-w-[210mm] mx-auto px-6 h-[56px] flex items-center justify-between">
          <button
            onClick={() => scrollTo('page-cover')}
            className="flex items-center gap-2.5 text-white"
          >
            <Headphones size={16} strokeWidth={1.5} className="text-white/70" />
            <span
              style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.06em' }}
            >
              HARSHA
            </span>
            <span
              className="text-[#555] hidden sm:inline"
              style={{ fontSize: '10px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              FOH Engineer
            </span>
          </button>

          <div className="flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-[#A8A8A8] hover:text-white transition-colors duration-300"
                style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Pages */}
      <div className={`screen-wrapper ${scrolled ? 'pt-[56px]' : 'pt-[60px]'}`}>
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
TSX

# ───────────────────────── src/components/PortfolioPage.tsx ─────────────────────────
cat > src/components/PortfolioPage.tsx <<'TSX'
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
TSX

# ───────────────────────── src/components/SectionHeader.tsx ─────────────────────────
cat > src/components/SectionHeader.tsx <<'TSX'
interface SectionHeaderProps {
  label: string;
  title?: string;
  intro?: string;
}

export default function SectionHeader({ label, title, intro }: SectionHeaderProps) {
  return (
    <div className="break-avoid">
      <span className="label-meta-bright mb-3 block">{label}</span>
      {title && <h2 className="headline-lg mb-3 text-white">{title}</h2>}
      {intro && <p className="body-text max-w-[75%]">{intro}</p>}
    </div>
  );
}
TSX

# ───────────────────────── src/components/ImageFrame.tsx ─────────────────────────
cat > src/components/ImageFrame.tsx <<'TSX'
import { useState } from 'react';
import { Camera } from 'lucide-react';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayStrength?: 'light' | 'medium' | 'heavy';
  rounded?: boolean;
}

export default function ImageFrame({
  src,
  alt,
  className = '',
  overlay = false,
  overlayStrength = 'medium',
  rounded = false,
}: ImageFrameProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const overlayOpacity =
    overlayStrength === 'light'
      ? 'bg-black/20'
      : overlayStrength === 'medium'
        ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
        : 'bg-gradient-to-t from-black/90 via-black/50 to-black/20';

  return (
    <div
      className={`image-frame ${rounded ? 'rounded-sm' : ''} ${className}`}
    >
      {!error && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
        />
      )}
      {error && (
        <div className="image-fallback">
          <Camera size={28} strokeWidth={1} className="text-[#4A4A4A]" />
          <span
            className="tech-label"
            style={{ fontSize: '9px', letterSpacing: '0.15em' }}
          >
            {alt || src.split('/').pop()?.toUpperCase()}
          </span>
        </div>
      )}
      {overlay && !error && (
        <div
          className={`absolute inset-0 pointer-events-none ${overlayOpacity}`}
        />
      )}
    </div>
  );
}
TSX

# ───────────────────────── src/components/CaseStudy.tsx ─────────────────────────
cat > src/components/CaseStudy.tsx <<'TSX'
import ImageFrame from './ImageFrame';

interface CaseStudyProps {
  number: string;
  title: string;
  location?: string;
  role: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  responsibilities: string[];
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}

export default function CaseStudy({
  number,
  title,
  location,
  role,
  description,
  specs,
  responsibilities,
  image,
  imageAlt,
  imagePosition = 'left',
}: CaseStudyProps) {
  const imageEl = (
    <div className="flex flex-col gap-2">
      <ImageFrame
        src={image}
        alt={imageAlt}
        className="aspect-[4/3] w-full"
      />
    </div>
  );

  return (
    <div className="break-avoid border-t border-[#1F1F1F] pt-5">
      <div className="grid grid-cols-12 gap-5">
        {imagePosition === 'left' && (
          <div className="col-span-5">{imageEl}</div>
        )}
        <div className="col-span-7 flex flex-col">
          <div className="flex items-baseline gap-3 mb-1">
            <span className="label-meta-bright">{number}</span>
          </div>
          <h3 className="headline-sm text-white mb-1.5">{title}</h3>
          {location && (
            <p className="label-meta mb-2" style={{ color: '#6B6B6B' }}>
              {location}
            </p>
          )}
          <p className="body-text mb-3" style={{ fontSize: '12px' }}>
            <span className="text-[#A8A8A8]">Role — </span>
            <span className="text-white">{role}</span>
          </p>
          <p className="body-text mb-3" style={{ fontSize: '12px' }}>
            {description}
          </p>
          <div className="grid grid-cols-1 gap-1.5 mb-3">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex gap-2"
                style={{ fontSize: '11px', lineHeight: '1.5' }}
              >
                <span
                  className="tech-label flex-shrink-0 w-[90px] pt-[2px]"
                  style={{ fontSize: '8px' }}
                >
                  {spec.label}
                </span>
                <span className="text-[#C0C0C0]">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-1">
            <span
              className="tech-label block mb-1.5"
              style={{ fontSize: '8px' }}
            >
              Responsibilities
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {responsibilities.map((r) => (
                <span
                  key={r}
                  className="text-[#888]"
                  style={{ fontSize: '10.5px' }}
                >
                  {r}
                  <span className="text-[#3A3A3A]"> ·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        {imagePosition === 'right' && (
          <div className="col-span-5">{imageEl}</div>
        )}
      </div>
    </div>
  );
}
TSX

# ───────────────────────── src/components/TechnicalGrid.tsx ─────────────────────────
cat > src/components/TechnicalGrid.tsx <<'TSX'
interface TechnicalGridProps {
  categories: {
    label: string;
    items: string[];
  }[];
  columns?: 2 | 3;
}

export default function TechnicalGrid({
  categories,
  columns = 2,
}: TechnicalGridProps) {
  const colClass =
    columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2';

  return (
    <div className={`grid ${colClass} gap-px bg-[#1F1F1F] border border-[#1F1F1F]`}>
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="bg-[#0D0D0D] p-4 break-avoid"
        >
          <span
            className="tech-label block mb-3"
            style={{ fontSize: '9px' }}
          >
            {cat.label}
          </span>
          <ul className="flex flex-col gap-1.5">
            {cat.items.map((item) => (
              <li
                key={item}
                className="text-[#C8C8C8]"
                style={{ fontSize: '12px', fontWeight: 400 }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
TSX

# ───────────────────────── src/components/WorkflowStep.tsx ─────────────────────────
cat > src/components/WorkflowStep.tsx <<'TSX'
interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function WorkflowStep({
  number,
  title,
  description,
  isLast = false,
}: WorkflowStepProps) {
  return (
    <div className="break-avoid flex gap-4 pb-5">
      <div className="flex flex-col items-center flex-shrink-0">
        <span
          className="text-white"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}
        >
          {number}
        </span>
        {!isLast && (
          <div
            className="w-px bg-[#2A2A2A] mt-2 flex-1"
            style={{ minHeight: '32px' }}
          />
        )}
      </div>
      <div className="flex-1 pt-0">
        <h4
          className="text-white mb-1.5"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </h4>
        <p className="body-text" style={{ fontSize: '12px' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
TSX

# ───────────────────────── src/components/ContactCard.tsx ─────────────────────────
cat > src/components/ContactCard.tsx <<'TSX'
import type { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="break-avoid group block border-t border-[#1F1F1F] pt-4 pb-4 transition-colors duration-300 hover:border-[#3A3A3A]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon size={16} strokeWidth={1.5} className="text-[#888]" />
          <div className="flex flex-col">
            <span className="tech-label mb-1" style={{ fontSize: '8px' }}>
              {label}
            </span>
            <span
              className="text-white link-underline"
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              {value}
            </span>
          </div>
        </div>
        {external && (
          <span className="label-meta no-print">Open</span>
        )}
      </div>
    </a>
  );
}
TSX

# ───────────────────────── src/pages/Page01Cover.tsx ─────────────────────────
cat > src/pages/Page01Cover.tsx <<'TSX'
import ImageFrame from '@/components/ImageFrame';

export default function Page01Cover() {
  return (
    <section className="portfolio-page" id="page-cover">
      <div className="page-safe" style={{ padding: 0 }}>
        <div className="relative w-full h-full overflow-hidden">
          <ImageFrame
            src="/image_01.jpg"
            alt="image_01.jpg"
            className="w-full h-full"
            overlay
            overlayStrength="heavy"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-[16mm]">
            {/* Top metadata */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <span className="label-section text-white/80">
                  Portfolio
                </span>
                <span className="label-meta text-white/50">
                  01 / Cover
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="label-meta text-white/50">2026</span>
                <span className="label-meta text-white/40">A4 · 01/10</span>
              </div>
            </div>

            {/* Center hero */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span
                  className="text-white/60"
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                  }}
                >
                  Live Sound Engineer
                </span>
              </div>
              <h1
                className="text-white"
                style={{
                  fontSize: '120px',
                  fontWeight: 800,
                  letterSpacing: '-0.05em',
                  lineHeight: 0.85,
                }}
              >
                HARSHA
              </h1>
              <div
                className="text-white/90"
                style={{
                  fontSize: '17px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  lineHeight: 1.4,
                }}
              >
                Live Sound &amp; FOH Engineer
              </div>
              <div className="hairline-muted max-w-[280px] mt-2 opacity-50" />
              <p
                className="text-white/60"
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                }}
              >
                FOH Mixing · Live Production · Monitor Mixing · Stage Audio
              </p>
            </div>

            {/* Bottom metadata */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="label-meta text-white/50">Based In</span>
                <span
                  className="text-white/85"
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                  }}
                >
                  Bengaluru, India
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="label-meta text-white/50">Discipline</span>
                <span
                  className="text-white/85"
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                  }}
                >
                  Front of House
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
TSX

# ───────────────────────── src/pages/Page02About.tsx ─────────────────────────
cat > src/pages/Page02About.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';

export default function Page02About() {
  return (
    <PortfolioPage pageId="page-about" pageNumber="01 / 10" sectionLabel="02 / About">
      <div className="flex flex-col gap-7">
        {/* Identity block */}
        <div className="break-avoid">
          <span className="label-meta-bright mb-3 block">Profile</span>
          <h2 className="headline-lg text-white mb-4">Harsha</h2>
          <p className="body-text max-w-[92%]">
            I'm Harsha, a Bengaluru-based Live Sound &amp; FOH Engineer focused on
            live mixing, worship productions, live performances, multi-act events
            and stage productions. My experience spans church and worship, live
            performances, weddings, college and cultural productions, corporate
            events and open-air shows. I work across the live audio workflow, from
            preparation, patching and line check through soundcheck, FOH operation,
            monitor support, troubleshooting and live execution.
          </p>
        </div>

        {/* Objective card */}
        <div className="break-avoid border border-[#1F1F1F] bg-[#111111] p-6">
          <span className="label-meta-bright mb-4 block">Objective</span>
          <p className="text-white" style={{ fontSize: '17px', fontWeight: 500, lineHeight: 1.5, letterSpacing: '-0.015em' }}>
            My approach is built around one objective:
          </p>
          <div className="mt-4 flex flex-col gap-1.5">
            <p className="text-white" style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Make the system reliable.
            </p>
            <p className="text-white" style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Make the mix clear.
            </p>
            <p className="text-white" style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em' }}>
              Serve the performance.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="break-avoid flex flex-col gap-4">
          <div>
            <span className="label-meta-bright mb-2 block">Philosophy</span>
            <h3
              className="text-white"
              style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              The Way I See FOH
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <p className="body-text" style={{ fontSize: '12.5px' }}>
              A console is only a tool. The real work happens in the decisions
              made around it. Understanding the music. Understanding the artist.
              Understanding the room. Understanding the system. Then making the
              right decision at the right moment.
            </p>
            <p className="body-text" style={{ fontSize: '12.5px' }}>
              FOH is not simply about making things louder. It is about creating
              a controlled listening experience where the technical work supports
              the performance instead of distracting from it.
            </p>
          </div>
        </div>

        {/* Core pillars */}
        <div className="break-avoid mt-auto">
          <div className="hairline mb-5" />
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Clarity', desc: 'Every source has a purpose.' },
              { label: 'Balance', desc: 'The mix supports the performance.' },
              { label: 'Control', desc: 'Signal and dynamics remain predictable.' },
            ].map((p) => (
              <div key={p.label} className="flex flex-col gap-2">
                <span
                  className="text-white"
                  style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.03em' }}
                >
                  {p.label.toUpperCase()}.
                </span>
                <span className="body-text" style={{ fontSize: '11px' }}>
                  {p.desc}
                </span>
              </div>
            ))}
          </div>
          <p
            className="mt-5 text-[#555]"
            style={{ fontSize: '11px', fontStyle: 'italic', letterSpacing: '0.02em' }}
          >
            Train your ears before training your fingers.
          </p>
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page03Experience.tsx ─────────────────────────
cat > src/pages/Page03Experience.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';

const environments = [
  {
    num: '01',
    title: 'Church & Worship',
    desc: 'Full-band worship productions involving lead vocals, choir, instruments, stage monitoring, FOH mixing and live telecast audio.',
  },
  {
    num: '02',
    title: 'Live Performances',
    desc: 'Live bands, vocalists, instrumentalists and multi-act productions requiring fast decisions, musical mixing and reliable stage communication.',
  },
  {
    num: '03',
    title: 'Weddings & Private Productions',
    desc: 'Full-band wedding productions involving multiple vocalists, drums, guitars, keys and live stage monitoring.',
  },
  {
    num: '04',
    title: 'College & Cultural Productions',
    desc: 'University productions and cultural events involving multiple performers, changing stage requirements and live production coordination.',
  },
  {
    num: '05',
    title: 'Open-Air Productions',
    desc: 'Outdoor live sound environments involving full-band stages, line-array systems, subwoofers and demanding live conditions.',
  },
  {
    num: '06',
    title: 'Corporate & Professional Events',
    desc: 'Professional productions where clear audio, controlled speech, reliable playback and smooth technical execution are essential.',
  },
];

export default function Page03Experience() {
  return (
    <PortfolioPage pageId="page-experience" pageNumber="02 / 10" sectionLabel="03 / Experience">
      <div className="flex flex-col gap-6">
        <div className="break-avoid">
          <h2 className="headline-lg text-white mb-3">
            Live Sound Experience
          </h2>
          <p className="body-text max-w-[80%]">
            My experience covers different production environments, each requiring
            a different approach to stage, system and audience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-0 mt-2">
          {environments.map((env, idx) => (
            <div
              key={env.num}
              className={`break-avoid flex gap-4 py-5 ${
                idx < 4 ? 'border-b border-[#1F1F1F]' : ''
              } ${idx % 2 === 1 ? 'pl-6' : ''} ${idx % 2 === 0 ? 'pr-6 border-r border-[#1F1F1F]' : ''}`}
            >
              <span
                className="text-white flex-shrink-0"
                style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {env.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-white"
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                  }}
                >
                  {env.title}
                </h3>
                <p className="body-text" style={{ fontSize: '11.5px', lineHeight: 1.55 }}>
                  {env.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page04Capabilities.tsx ─────────────────────────
cat > src/pages/Page04Capabilities.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';
import TechnicalGrid from '@/components/TechnicalGrid';

const categories = [
  {
    label: 'Audio / FOH',
    items: ['Mixing', 'EQ', 'Dynamics', 'FX', 'Gain Structure'],
  },
  {
    label: 'Monitors',
    items: ['Monitor Sends', 'Mix Buses', 'Feedback Management'],
  },
  {
    label: 'Stage',
    items: ['Patching', 'Line Check', 'Routing', 'Playback'],
  },
  {
    label: 'Systems',
    items: ['PA', 'Signal Flow', 'System Routing', 'Stage Monitoring'],
  },
  {
    label: 'Networked Audio',
    items: ['Dante', 'Dante Controller', 'Digital Audio Transport', 'Networked Audio Concepts'],
  },
  {
    label: 'Production',
    items: ['Soundcheck', 'Changeovers', 'Troubleshooting', 'Stage Coordination'],
  },
];

export default function Page04Capabilities() {
  return (
    <PortfolioPage pageId="page-capabilities" pageNumber="03 / 10" sectionLabel="04 / Capabilities">
      <div className="flex flex-col gap-6">
        <div className="break-avoid">
          <h2 className="headline-lg text-white mb-3">
            Technical Capabilities
          </h2>
          <p className="body-text max-w-[80%]">
            A structured overview of the technical disciplines involved in my live
            sound workflow — from input to output, from preparation to execution.
          </p>
        </div>

        <div className="mt-2">
          <TechnicalGrid categories={categories} columns={3} />
        </div>

        <div className="mt-auto break-avoid">
          <div className="hairline mb-4" />
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: 'FOH', value: 'Front of House' },
              { label: 'Mon', value: 'Monitor Mixing' },
              { label: 'Sys', value: 'System Routing' },
              { label: 'Net', value: 'Networked Audio' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="tech-label" style={{ fontSize: '9px' }}>
                  {m.label}
                </span>
                <span className="text-white" style={{ fontSize: '11px', fontWeight: 500 }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page05Technical.tsx ─────────────────────────
cat > src/pages/Page05Technical.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';
import { Network } from 'lucide-react';

const consoles = [
  { brand: 'Allen & Heath', models: ['QU32', 'dLive', 'SQ Series'] },
  { brand: 'Behringer', models: ['X32'] },
  { brand: 'Yamaha', models: ['Digital & Analog Consoles'] },
  { brand: 'Soundcraft', models: ['Ui24R'] },
];

const danteTopics = [
  'Dante Controller',
  'Networked Audio Routing',
  'Multicast',
  'QoS',
  'Clocking',
  'Dante Virtual Soundcard',
  'Network Troubleshooting Concepts',
];

export default function Page05Technical() {
  return (
    <PortfolioPage pageId="page-technical" pageNumber="04 / 10" sectionLabel="05 / Technical & Certifications">
      <div className="flex flex-col gap-6">
        {/* Section 01 — Console Experience */}
        <div className="break-avoid">
          <div className="flex items-center gap-3 mb-3">
            <span className="label-meta-bright">Section 01</span>
            <span className="label-meta">/</span>
            <span className="label-section text-white/90">Console Experience</span>
          </div>
          <p className="body-text mb-4 max-w-[85%]" style={{ fontSize: '12.5px' }}>
            I'm comfortable adapting to different digital and analog console
            workflows, routing structures and production requirements.
          </p>

          <div className="border border-[#1F1F1F]">
            {consoles.map((c, idx) => (
              <div
                key={c.brand}
                className={`grid grid-cols-12 gap-4 px-4 py-3.5 ${
                  idx < consoles.length - 1 ? 'border-b border-[#1F1F1F]' : ''
                }`}
              >
                <div className="col-span-4">
                  <span
                    className="text-white"
                    style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em' }}
                  >
                    {c.brand}
                  </span>
                </div>
                <div className="col-span-8 flex flex-wrap gap-x-4 gap-y-1">
                  {c.models.map((m) => (
                    <span
                      key={m}
                      className="text-[#A8A8A8]"
                      style={{ fontSize: '12px', fontWeight: 400 }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="body-text mt-4 max-w-[90%]" style={{ fontSize: '12px' }}>
            The console is part of the workflow, not the limitation. The objective
            remains the same: understand the system quickly, establish control and
            deliver the mix the production needs.
          </p>
        </div>

        <div className="hairline" />

        {/* Section 02 — Networked Audio / Dante */}
        <div className="break-avoid">
          <div className="flex items-center gap-3 mb-3">
            <span className="label-meta-bright">Section 02</span>
            <span className="label-meta">/</span>
            <span className="label-section text-white/90">Networked Audio / Dante</span>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div className="border border-[#2A2A2A] bg-[#111111] p-3 flex-shrink-0">
              <Network size={22} strokeWidth={1.25} className="text-white/80" />
            </div>
            <div className="flex flex-col gap-1">
              <span
                className="text-white"
                style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                Audinate Dante Certification
              </span>
              <span
                className="text-[#A8A8A8]"
                style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                Level 1 · Level 2 · Level 3
              </span>
            </div>
          </div>

          <p className="body-text mb-3" style={{ fontSize: '12px' }}>
            My Dante training provides a technical foundation in networked audio
            and digital audio transport, including:
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
            {danteTopics.map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#555] flex-shrink-0 rounded-full" />
                <span className="text-[#C0C0C0]" style={{ fontSize: '11.5px' }}>
                  {t}
                </span>
              </div>
            ))}
          </div>

          <p className="body-text max-w-[90%]" style={{ fontSize: '12px' }}>
            Networked audio is increasingly part of modern production systems, and
            I continue to build my understanding of how audio, networking and
            system infrastructure work together.
          </p>
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page06SelectedWork.tsx ─────────────────────────
cat > src/pages/Page06SelectedWork.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';
import CaseStudy from '@/components/CaseStudy';

export default function Page06SelectedWork() {
  return (
    <PortfolioPage pageId="page-selectedwork" pageNumber="05 / 10" sectionLabel="06 / Selected Work">
      <div className="flex flex-col gap-3">
        <div className="break-avoid mb-2">
          <h2 className="headline-md text-white mb-1.5">
            Selected Productions
          </h2>
          <p className="body-text" style={{ fontSize: '11.5px' }}>
            A record of four productions across worship, classical, open-air and
            private event environments.
          </p>
        </div>

        <CaseStudy
          number="01"
          title="Church & Worship Production"
          role="FOH Sound Engineer / Live Sound"
          description="Live worship production involving a full band, choir, lead vocal, stage monitoring and live telecasting."
          specs={[
            { label: 'Console', value: 'Allen & Heath QU32' },
            { label: 'PA System', value: 'QSC LA112 line-array · QSC KS118 subwoofers · QSC K.2 stage monitors' },
            { label: 'Stage', value: 'Pearl drum kit · Hartke bass amp · Marshall guitar amp · Sennheiser XSW · Shure SM58' },
          ]}
          responsibilities={[
            'FOH Mixing',
            'Monitor Management',
            'Soundcheck',
            'Gain Structure',
            'EQ & Dynamics',
            'Feedback Management',
            'Stage Coordination',
            'Live Telecast Audio',
          ]}
          image="/image_02.jpg"
          imageAlt="image_02.jpg"
          imagePosition="left"
        />

        <CaseStudy
          number="02"
          title="Classical Live Production"
          location="Bengaluru, India"
          role="Live Sound / FOH"
          description="Classical live production combining vocals, traditional percussion and melodic instruments within a compact multi-monitor stage setup."
          specs={[
            { label: 'Inputs', value: 'Male Vocal · Flute · Veena · Mridangam · Nattuvangam · Playback' },
            { label: 'Console', value: 'Soundcraft Ui24R' },
            { label: 'FOH', value: 'JBL EON 915' },
            { label: 'Monitoring', value: 'Dedicated stage monitor mixes' },
          ]}
          responsibilities={[
            'FOH Mixing',
            'Gain Structure',
            'EQ & Dynamics',
            'Monitor Mixing',
            'Stage Patching',
            'Playback Routing',
            'Soundcheck',
            'Live Operation',
          ]}
          image="/image_03.jpg"
          imageAlt="image_03.jpg"
          imagePosition="right"
        />

        <CaseStudy
          number="03"
          title="Open-Air Live Production"
          location="Bengaluru, India"
          role="FOH Sound Engineer"
          description="Live university band production in an open-air environment with full-band stage setup and large audience."
          specs={[
            { label: 'Type', value: 'Open-Air Live Event' },
            { label: 'Console', value: 'Allen & Heath dLive' },
            { label: 'System', value: 'RCF line-array · JBL subwoofers · JBL stage monitors' },
            { label: 'Stage', value: 'Lead & backing vocals · Drums · Electric guitars · Bass · Additional live instruments' },
          ]}
          responsibilities={[
            'FOH Operation',
            'Stage Audio',
            'Soundcheck',
            'Live Mixing',
            'Monitor Coordination',
            'Live Troubleshooting',
            'Artist Coordination',
          ]}
          image="/image_04.jpg"
          imageAlt="image_04.jpg"
          imagePosition="left"
        />

        <CaseStudy
          number="04"
          title="Private Wedding Production"
          location="Hospet, India"
          role="Main FOH Sound Engineer"
          description="Full-band wedding production involving multiple vocalists, drums, guitars, keys and live stage monitoring."
          specs={[
            { label: 'Console', value: 'Allen & Heath QU32' },
            { label: 'System', value: 'QSC LA112 line-array · QSC KS118 subwoofers · QSC K.2 monitors' },
            { label: 'Control', value: 'FOH mixing from console · iPad remote control · Mac-based production support' },
          ]}
          responsibilities={[
            'FOH Mixing',
            'Artist Support',
            'Stage Audio',
            'Soundcheck',
            'Monitor Coordination',
            'Live Troubleshooting',
            'Production Coordination',
          ]}
          image="/image_05.jpg"
          imageAlt="image_05.jpg"
          imagePosition="right"
        />
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page07Workflow.tsx ─────────────────────────
cat > src/pages/Page07Workflow.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';
import WorkflowStep from '@/components/WorkflowStep';

const steps = [
  { num: '01', title: 'Prepare', desc: 'Understand the production, stage requirements, input list, patch and equipment.' },
  { num: '02', title: 'Check', desc: 'Verify signal paths, routing and gain structure before the performance.' },
  { num: '03', title: 'Soundcheck', desc: 'Build the system, establish the mix and prepare the stage.' },
  { num: '04', title: 'Listen', desc: 'Make decisions based on the performers, music, room and audience.' },
  { num: '05', title: 'Respond', desc: 'Handle changes and technical issues quickly without losing control.' },
  { num: '06', title: 'Deliver', desc: "Keep the audience focused on the performance, not the sound system." },
];

const principles = [
  { label: 'Clarity', desc: 'Every source has a purpose.' },
  { label: 'Balance', desc: 'The mix supports the performance.' },
  { label: 'Control', desc: 'Signal, dynamics and system behaviour remain predictable.' },
  { label: 'Musicality', desc: 'Technical decisions serve the music.' },
  { label: 'Reliability', desc: 'Preparation happens before the audience hears the first note.' },
  { label: 'Calm Under Pressure', desc: 'Problems are solved without becoming part of the show.' },
];

export default function Page07Workflow() {
  return (
    <PortfolioPage pageId="page-workflow" pageNumber="06 / 10" sectionLabel="07 / Workflow & Approach">
      <div className="flex flex-col gap-5">
        <div className="break-avoid">
          <h2 className="headline-md text-white mb-2">
            How I Work
          </h2>
          <p className="body-text max-w-[85%]" style={{ fontSize: '11.5px' }}>
            A live production rarely stays exactly as planned. Artists change,
            inputs change, the stage changes, the room changes. The engineer has
            to adapt without allowing those changes to affect the audience's
            experience.
          </p>
        </div>

        {/* Workflow steps — 2 columns */}
        <div className="grid grid-cols-2 gap-x-8 break-avoid">
          <div className="flex flex-col">
            {steps.slice(0, 3).map((s, idx) => (
              <WorkflowStep
                key={s.num}
                number={s.num}
                title={s.title}
                description={s.desc}
                isLast={idx === 2}
              />
            ))}
          </div>
          <div className="flex flex-col">
            {steps.slice(3).map((s, idx) => (
              <WorkflowStep
                key={s.num}
                number={s.num}
                title={s.title}
                description={s.desc}
                isLast={idx === 2}
              />
            ))}
          </div>
        </div>

        {/* Under pressure quote */}
        <div className="break-avoid border-l-2 border-[#3A3A3A] pl-5 py-2">
          <span className="label-meta-bright mb-3 block">Under Pressure</span>
          <p className="text-white" style={{ fontSize: '14px', fontWeight: 500, lineHeight: 1.55, letterSpacing: '-0.01em' }}>
            Live sound is rarely about whether something will change. It is about
            how quickly and calmly you respond when it does.
          </p>
          <p className="body-text mt-2" style={{ fontSize: '11.5px' }}>
            A technical issue during soundcheck is a problem to solve. A technical
            issue during a performance is a problem to solve without becoming part
            of the show. That mindset shapes the way I approach live production.
          </p>
        </div>

        {/* Core principles */}
        <div className="break-avoid mt-auto">
          <span className="label-meta-bright mb-3 block">Core Principles</span>
          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            {principles.map((p) => (
              <div key={p.label} className="flex flex-col gap-1 break-avoid">
                <span
                  className="text-white"
                  style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                >
                  {p.label}
                </span>
                <span className="text-[#888]" style={{ fontSize: '10.5px', lineHeight: 1.4 }}>
                  {p.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page08VisualArchive.tsx ─────────────────────────
cat > src/pages/Page08VisualArchive.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';
import { ExternalLink, Play } from 'lucide-react';

const archive = [
  { src: '/image_06.jpg', alt: 'image_06.jpg', caption: 'FOH Console' },
  { src: '/image_07.jpg', alt: 'image_07.jpg', caption: 'Harsha Operating FOH / Stage' },
  { src: '/image_08.jpg', alt: 'image_08.jpg', caption: 'Soundcheck & Technical Setup' },
  { src: '/image_09.jpg', alt: 'image_09.jpg', caption: 'Live Performance / Open-Air' },
];

const DRIVE_LINK =
  'https://drive.google.com/drive/folders/1ww2Dhl_A5JQt4eAjTyAYZhKrFMxmfBru';

export default function Page08VisualArchive() {
  return (
    <PortfolioPage pageId="page-archive" pageNumber="07 / 10" sectionLabel="08 / Visual Archive">
      <div className="flex flex-col gap-5">
        <div className="break-avoid">
          <h2 className="headline-lg text-white mb-2">
            Selected Production Moments
          </h2>
          <p className="body-text max-w-[80%]" style={{ fontSize: '12px' }}>
            A visual record of the environments, systems and productions behind
            the work.
          </p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-2 gap-3 break-avoid">
          {archive.map((img) => (
            <div key={img.src} className="flex flex-col gap-2">
              <ImageFrame
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full"
              />
              <div className="flex items-center justify-between">
                <span className="tech-label" style={{ fontSize: '8px' }}>
                  {img.caption}
                </span>
                <span className="tech-label" style={{ fontSize: '7px', color: '#3A3A3A' }}>
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Production reel link card */}
        <div className="break-avoid mt-auto border border-[#1F1F1F] bg-[#111111] p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-2">
                <Play size={12} strokeWidth={2} className="text-white/70" />
                <span className="label-meta-bright">Production Reel</span>
              </div>
              <h3
                className="text-white"
                style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.3 }}
              >
                Live Production Footage &amp; Multi-Angle Videos
              </h3>
              <p className="body-text" style={{ fontSize: '11px' }}>
                Access direct video recordings of live FOH operations, stage mixes,
                and multi-act soundchecks.
              </p>
              <a
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="no-print inline-flex items-center gap-2 mt-1 text-white link-underline"
                style={{ fontSize: '12px', fontWeight: 500 }}
              >
                Open Google Drive Video Reel
                <ExternalLink size={13} strokeWidth={1.75} />
              </a>
              {/* Print-only plain link */}
              <p
                className="hidden print:block text-[#A8A8A8] mt-1"
                style={{ fontSize: '10px', wordBreak: 'break-all' }}
              >
                {DRIVE_LINK}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page09Profile.tsx ─────────────────────────
cat > src/pages/Page09Profile.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';
import { MapPin, Headphones, Radio, Network } from 'lucide-react';

export default function Page09Profile() {
  return (
    <PortfolioPage pageId="page-profile" pageNumber="08 / 10" sectionLabel="09 / Profile Summary">
      <div className="flex flex-col gap-5">
        <div className="break-avoid">
          <h2 className="headline-md text-white mb-1">
            Professional Profile
          </h2>
          <p className="body-text" style={{ fontSize: '11.5px' }}>
            A concise professional snapshot.
          </p>
        </div>

        {/* Identity + image */}
        <div className="grid grid-cols-12 gap-5 break-avoid">
          <div className="col-span-7 flex flex-col gap-5">
            <div>
              <h3
                className="text-white"
                style={{ fontSize: '44px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.9 }}
              >
                HARSHA
              </h3>
              <p
                className="text-white/80 mt-2"
                style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' }}
              >
                Live Sound &amp; FOH Engineer
              </p>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={13} strokeWidth={1.5} className="text-[#888]" />
              <span className="text-[#C0C0C0]" style={{ fontSize: '12px' }}>
                Bengaluru, India
              </span>
            </div>

            <div className="hairline" />

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Headphones size={11} strokeWidth={1.5} className="text-[#888]" />
                  <span className="tech-label" style={{ fontSize: '8px' }}>Primary Focus</span>
                </div>
                <ul className="flex flex-col gap-1">
                  {['FOH Mixing', 'Live Sound', 'Monitor Mixing', 'Stage Audio'].map((f) => (
                    <li key={f} className="text-[#C8C8C8]" style={{ fontSize: '11.5px' }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Radio size={11} strokeWidth={1.5} className="text-[#888]" />
                  <span className="tech-label" style={{ fontSize: '8px' }}>Technical Focus</span>
                </div>
                <ul className="flex flex-col gap-1">
                  {['Signal Flow', 'Gain Structure', 'Soundcheck', 'System Routing', 'Live Troubleshooting', 'Networked Audio'].map((f) => (
                    <li key={f} className="text-[#C8C8C8]" style={{ fontSize: '11.5px' }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-5 flex flex-col gap-3">
            <ImageFrame
              src="/image_10.jpg"
              alt="image_10.jpg"
              className="aspect-[3/4] w-full"
            />
          </div>
        </div>

        {/* Production environments */}
        <div className="break-avoid">
          <span className="label-meta-bright mb-2.5 block">Production Environments</span>
          <div className="flex flex-wrap gap-2">
            {['Worship', 'Live Performance', 'Weddings', 'Corporate', 'Cultural', 'Open-Air'].map((e) => (
              <span
                key={e}
                className="border border-[#1F1F1F] px-3 py-1.5 text-[#A8A8A8]"
                style={{ fontSize: '10.5px', fontWeight: 500, letterSpacing: '0.04em' }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        {/* Credential */}
        <div className="break-avoid mt-auto border border-[#1F1F1F] bg-[#111111] p-5">
          <div className="flex items-start gap-4">
            <div className="border border-[#2A2A2A] p-2.5 flex-shrink-0">
              <Network size={18} strokeWidth={1.25} className="text-white/80" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span
                className="text-white"
                style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                Audinate Dante Certified
              </span>
              <span
                className="text-[#A8A8A8]"
                style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                Level 1 · Level 2 · Level 3
              </span>
              <p className="body-text mt-1" style={{ fontSize: '11px' }}>
                A technical foundation in Dante networked audio, digital audio
                transport and network-based audio workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── src/pages/Page10Contact.tsx ─────────────────────────
cat > src/pages/Page10Contact.tsx <<'TSX'
import PortfolioPage from '@/components/PortfolioPage';
import ContactCard from '@/components/ContactCard';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const PHONE_DISPLAY = '+91 7348967889';
const WHATSAPP_LINK = 'https://wa.me/917348967889';
const EMAIL = 'bookings.harsha@gmail.com';
const INSTAGRAM_HANDLE = '@harrrshhhaa';
const INSTAGRAM_LINK = 'https://instagram.com/harrrshhhaa';

export default function Page10Contact() {
  return (
    <PortfolioPage pageId="page-contact" pageNumber="09 / 10" sectionLabel="10 / Contact">
      <div className="flex flex-col gap-6 flex-1">
        <div className="break-avoid">
          <h2
            className="text-white"
            style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '85%' }}
          >
            Let's talk about your production.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 break-avoid flex-1">
          {/* Left: contact details */}
          <div className="col-span-7 flex flex-col gap-0">
            <p className="body-text mb-5 max-w-[95%]" style={{ fontSize: '12.5px' }}>
              If you are planning a live performance, wedding, corporate production,
              cultural event or open-air show, I'm available for live sound and
              FOH-focused production work.
            </p>

            <div className="flex flex-col gap-0 mb-5">
              <div className="border-t border-[#1F1F1F] pt-4 pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={12} strokeWidth={1.5} className="text-[#888]" />
                  <span className="tech-label" style={{ fontSize: '8px' }}>Contact</span>
                </div>
                <p className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>
                  Harsha G.
                </p>
                <p className="text-[#A8A8A8]" style={{ fontSize: '12px' }}>
                  Live Sound &amp; FOH Engineer
                </p>
                <p className="text-[#A8A8A8]" style={{ fontSize: '12px' }}>
                  Bengaluru, India
                </p>
              </div>
            </div>

            <ContactCard
              icon={Phone}
              label="Phone / WhatsApp"
              value={PHONE_DISPLAY}
              href={WHATSAPP_LINK}
              external
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value={INSTAGRAM_HANDLE}
              href={INSTAGRAM_LINK}
              external
            />
          </div>

          {/* Right: QR placeholder */}
          <div className="col-span-5 flex flex-col gap-4">
            <div className="border border-[#1F1F1F] bg-[#111111] p-5 flex flex-col items-center gap-4">
              <span className="label-meta-bright text-center">
                Portfolio / Production Work / Contact
              </span>
              {/* QR placeholder — clean geometric mark */}
              <div
                className="relative bg-white flex items-center justify-center"
                style={{ width: '130px', height: '130px' }}
              >
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Position markers */}
                  <rect x="8" y="8" width="32" height="32" fill="black" />
                  <rect x="14" y="14" width="20" height="20" fill="white" />
                  <rect x="18" y="18" width="12" height="12" fill="black" />

                  <rect x="90" y="8" width="32" height="32" fill="black" />
                  <rect x="96" y="14" width="20" height="20" fill="white" />
                  <rect x="100" y="18" width="12" height="12" fill="black" />

                  <rect x="8" y="90" width="32" height="32" fill="black" />
                  <rect x="14" y="96" width="20" height="20" fill="white" />
                  <rect x="18" y="100" width="12" height="12" fill="black" />

                  {/* Data pattern simulation */}
                  {[
                    [48, 8], [56, 8], [64, 8], [72, 8], [80, 8],
                    [48, 16], [64, 16], [80, 16],
                    [48, 24], [56, 24], [72, 24], [80, 24],
                    [48, 32], [64, 32], [72, 32],
                    [8, 48], [16, 48], [24, 48], [40, 48], [48, 48], [56, 48], [72, 48], [88, 48], [96, 48], [112, 48],
                    [24, 56], [40, 56], [56, 56], [64, 56], [80, 56], [96, 56], [104, 56],
                    [8, 64], [16, 64], [32, 64], [48, 64], [72, 64], [88, 64], [104, 64], [112, 64],
                    [24, 72], [40, 72], [56, 72], [64, 72], [80, 72], [96, 72],
                    [8, 80], [16, 80], [32, 80], [48, 80], [56, 80], [72, 80], [88, 80], [104, 80],
                    [48, 88], [64, 88], [80, 88], [96, 88], [112, 88],
                    [48, 96], [56, 96], [72, 96], [88, 96], [104, 96],
                    [48, 104], [64, 104], [80, 104], [96, 104], [112, 104],
                    [48, 112], [56, 112], [72, 112], [88, 112], [104, 112],
                  ].map(([x, y], i) => (
                    <rect key={i} x={x} y={y} width="8" height="8" fill="black" />
                  ))}
                </svg>
              </div>
              <p className="text-[#888] text-center" style={{ fontSize: '10px', lineHeight: 1.4 }}>
                Scan to connect
              </p>
              <p className="text-[#666] text-center" style={{ fontSize: '9px', wordBreak: 'break-all' }}>
                {WHATSAPP_LINK}
              </p>
            </div>

            {/* Print-only link block */}
            <div className="border border-[#1F1F1F] p-4 break-avoid">
              <span className="tech-label block mb-2" style={{ fontSize: '8px' }}>
                Direct Links
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="text-[#999]" style={{ fontSize: '9.5px', wordBreak: 'break-all' }}>
                  WhatsApp: {WHATSAPP_LINK}
                </span>
                <span className="text-[#999]" style={{ fontSize: '9.5px', wordBreak: 'break-all' }}>
                  Instagram: {INSTAGRAM_LINK}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer identity */}
        <div className="break-avoid mt-auto">
          <div className="hairline mb-4" />
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <span
                className="text-white"
                style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.03em' }}
              >
                HARSHA
              </span>
              <span
                className="text-[#A8A8A8]"
                style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' }}
              >
                Live Sound &amp; FOH Engineer
              </span>
              <span
                className="text-[#666]"
                style={{ fontSize: '9.5px', letterSpacing: '0.04em' }}
              >
                FOH Mixing · Live Production · Monitor Mixing · Stage Audio
              </span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="label-meta">Bengaluru, India</span>
              <span className="label-meta" style={{ color: '#4A4A4A' }}>10 / 10</span>
            </div>
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}
TSX

# ───────────────────────── Download images ─────────────────────────
echo "Downloading production images to public/ ..."
curl -sL -o public/image_01.jpg "https://images.pexels.com/photos/19452351/pexels-photo-19452351.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_02.jpg "https://images.pexels.com/photos/12044265/pexels-photo-12044265.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_03.jpg "https://images.pexels.com/photos/18851187/pexels-photo-18851187.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_04.jpg "https://images.pexels.com/photos/2675648/pexels-photo-2675648.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_05.jpg "https://images.pexels.com/photos/38760247/pexels-photo-38760247.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_06.jpg "https://images.pexels.com/photos/30273992/pexels-photo-30273992.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_07.jpg "https://images.pexels.com/photos/34612567/pexels-photo-34612567.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_08.jpg "https://images.pexels.com/photos/11410604/pexels-photo-11410604.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_09.jpg "https://images.pexels.com/photos/1416969/pexels-photo-1416969.jpeg?auto=compress&cs=tinysrgb&w=1600"
curl -sL -o public/image_10.jpg "https://images.pexels.com/photos/4988134/pexels-photo-4988134.jpeg?auto=compress&cs=tinysrgb&w=1200"

# ───────────────────────── README ─────────────────────────
cat > README.md <<'MD'
# Harsha — Live Sound & FOH Engineer Portfolio

A 10-page A4 print-ready portfolio web application built with React, Vite, Tailwind CSS, and Lucide React.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Print to PDF (10-page A4)

- Open the site in Chrome/Chromium.
- Press Ctrl+P (Windows) or Cmd+P (Mac).
- Destination: Save as PDF.
- Paper size: A4.
- Margins: None.
- Enable Background graphics.
- Save — you will get exactly 10 A4 pages.

## Build

```bash
npm run build
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Harsha live sound portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/harsha-live-sound-portfolio.git
git push -u origin main
```
MD

# ───────────────────────── Done ─────────────────────────
echo ""
echo "=============================================="
echo "Project ready in: $PROJECT_DIR"
echo "Next:  cd $PROJECT_DIR && npm install && npm run dev"
echo "=============================================="
