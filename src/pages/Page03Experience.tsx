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
