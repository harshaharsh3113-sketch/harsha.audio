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
