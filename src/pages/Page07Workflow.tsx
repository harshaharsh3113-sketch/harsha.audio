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
