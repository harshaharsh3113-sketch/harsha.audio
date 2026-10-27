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
