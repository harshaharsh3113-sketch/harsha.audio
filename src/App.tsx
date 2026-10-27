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
