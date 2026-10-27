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
    <PortfolioPage
      pageId="page-experience"
      pageNumber=""
      sectionLabel="03 / Experience"
    >
      <div className="flex flex-col gap-8">

        {/* =====================================================
            SECTION INTRODUCTION
        ===================================================== */}

        <div className="group max-w-[720px]">
          <h2
            className="
              m-0
              cursor-default
              text-[clamp(2rem,4.2vw,3.5rem)]
              font-semibold
              uppercase
              leading-[0.92]
              tracking-[-0.045em]
              text-white
              transition-all
              duration-400
              group-hover:tracking-[-0.04em]
            "
          >
            Live Sound
            <br />
            <span
              className="
                text-white/25
                transition-colors
                duration-400
                group-hover:text-white/45
              "
            >
              Experience.
            </span>
          </h2>

          {/* Interactive accent line */}

          <div
            className="
              mt-5
              h-px
              w-12
              bg-white/20
              transition-all
              duration-400
              group-hover:w-24
              group-hover:bg-white/40
            "
          />

          <p
            className="
              body-text
              mt-5
              max-w-[58ch]
              transition-colors
              duration-300
              group-hover:text-white/60
            "
            style={{
              lineHeight: 1.65,
            }}
          >
            My experience covers different production environments, each
            requiring a different approach to stage, system and audience.
          </p>
        </div>


        {/* =====================================================
            PRODUCTION ENVIRONMENTS
        ===================================================== */}

        <div
          className="grid border-t border-[#1F1F1F]"
          style={{
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          }}
        >
          {environments.map((env, idx) => {
            const isRightSide = idx >= 3;

            return (
              <article
                key={env.num}
                className={`
                  group
                  relative
                  flex
                  gap-4
                  border-b
                  border-[#1F1F1F]
                  py-6
                  cursor-default
                  transition-all
                  duration-300
                  hover:bg-white/[0.018]
                  hover:border-white/[0.16]
                  ${isRightSide ? 'md:translate-x-4' : 'md:-translate-x-4'}
                `}
                style={{
                  paddingLeft: 'clamp(1rem, 2.5vw, 2rem)',
                  paddingRight: 'clamp(1rem, 2.5vw, 2rem)',
                }}
              >

                {/* =================================================
                    LEFT INTERACTION INDICATOR
                ================================================= */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/2
                    h-0
                    w-px
                    bg-white/45
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:h-8
                    group-hover:-translate-y-1/2
                    group-hover:opacity-100
                  "
                />


                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="flex-shrink-0 pt-[1px]">
                  <span
                    className="
                      block
                      text-white/30
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-white/75
                    "
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    {env.num}
                  </span>
                </div>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="min-w-0 flex flex-col gap-2">

                  <h3
                    className="
                      m-0
                      text-white/85
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-white
                    "
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '0.065em',
                      textTransform: 'uppercase',
                      lineHeight: 1.3,
                    }}
                  >
                    {env.title}
                  </h3>

                  <p
                    className="
                      body-text
                      transition-colors
                      duration-300
                      group-hover:text-white/55
                    "
                    style={{
                      fontSize: '0.8rem',
                      lineHeight: 1.65,
                      maxWidth: '48ch',
                    }}
                  >
                    {env.desc}
                  </p>

                  {/* Small hover underline */}

                  <span
                    className="
                      pointer-events-none
                      mt-1
                      h-px
                      w-0
                      bg-white/25
                      transition-all
                      duration-400
                      group-hover:w-12
                    "
                  />
                </div>


                {/* =================================================
                    RIGHT HOVER MARKER
                ================================================= */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    h-px
                    w-0
                    bg-white/25
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:w-6
                    group-hover:opacity-100
                  "
                />

              </article>
            );
          })}
        </div>
      </div>
    </PortfolioPage>
  );
}