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
