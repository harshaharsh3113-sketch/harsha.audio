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
