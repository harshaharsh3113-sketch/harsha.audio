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
