
import PortfolioPage from '@/components/PortfolioPage';

const disciplines = [
  {
    number: '01',
    code: 'MIXING',
    title: 'Audio & Mixing',
    subtitle: 'FOH / MONITOR OPERATIONS',
    groups: [
      {
        label: 'FRONT OF HOUSE',
        items: ['Mixing', 'EQ', 'Dynamics', 'FX', 'Gain Structure'],
      },
      {
        label: 'MONITORING',
        items: ['Monitor Sends', 'Mix Buses', 'Feedback Management'],
      },
    ],
  },
  {
    number: '02',
    code: 'SYSTEMS',
    title: 'Stage & Systems',
    subtitle: 'INPUTS / SIGNAL FLOW / PA',
    groups: [
      {
        label: 'STAGE OPERATIONS',
        items: ['Patching', 'Line Check', 'Routing', 'Playback'],
      },
      {
        label: 'AUDIO SYSTEMS',
        items: ['PA', 'Signal Flow', 'System Routing', 'Stage Monitoring'],
      },
    ],
  },
  {
    number: '03',
    code: 'PRODUCTION',
    title: 'Network & Production',
    subtitle: 'DIGITAL AUDIO / LIVE OPERATIONS',
    groups: [
      {
        label: 'NETWORKED AUDIO',
        items: [
          'Dante',
          'Dante Controller',
          'Digital Audio Transport',
          'Networked Audio Concepts',
        ],
      },
      {
        label: 'LIVE OPERATIONS',
        items: [
          'Soundcheck',
          'Changeovers',
          'Troubleshooting',
          'Stage Coordination',
        ],
      },
    ],
  },
];

export default function Page04Capabilities() {
  return (
    <PortfolioPage
      pageId="page-capabilities"
      pageNumber=""
      sectionLabel="04 / Capabilities"
    >
      <div className="flex flex-col">

        {/* INTRODUCTION */}

        <section className="
          group/intro grid grid-cols-1 gap-8
          pb-12 md:grid-cols-[1fr_0.72fr]
          md:items-end md:gap-14 md:pb-16
        ">

          <div className="reveal-up">

            <p className="
              mb-6 text-[10px] font-medium
              uppercase tracking-[0.24em]
              text-[#B99B73]
            ">
              Technical scope
            </p>

            <h2 className="
              m-0 text-[clamp(2.8rem,6.5vw,5.8rem)]
              font-semibold uppercase
              leading-[0.86] tracking-[-0.078em]
              text-white
            ">
              WHAT I
              <br />
              <span className="
                text-white/[0.28]
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/intro:text-white/[0.48]
              ">
                WORK WITH.
              </span>
            </h2>

            <div className="
              mt-8 h-px w-12 bg-[#B99B73]/65
              motion-safe:transition-all
              motion-safe:duration-500
              group-hover/intro:w-24
            " />

          </div>

          <div className="reveal-up md:pb-1">

            <p className="
              max-w-[44ch] text-[0.88rem]
              leading-[1.9] text-white/55
            ">
              The technical disciplines behind a live sound production.
              From individual sources and stage routing to networked audio
              and the final mix.
            </p>

            <div className="mt-7 flex items-center gap-3">

              <span className="
                h-px w-7 bg-[#B99B73]/65
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/intro:w-12
              " />

              <span className="
                text-[10px] uppercase
                tracking-[0.18em] text-white/35
              ">
                Audio · Systems · Production
              </span>

            </div>
          </div>
        </section>


        {/* TECHNICAL DISCIPLINES */}

        <section className="border-t border-white/[0.13]">

          {disciplines.map((discipline) => (
            <article
              key={discipline.number}
              className="
                group/discipline relative grid
                grid-cols-1 gap-7 overflow-hidden
                border-b border-white/[0.12]
                px-2 py-9
                transition-colors duration-500
                hover:bg-white/[0.018]
                active:bg-white/[0.035]
                md:grid-cols-[0.9fr_1.1fr]
                md:gap-12 md:py-11
              "
            >

              {/* TOP ACCENT */}

              <span className="
                pointer-events-none absolute left-0 top-0
                h-px w-0 bg-[#B99B73]/75
                motion-safe:transition-all
                motion-safe:duration-700
                group-hover/discipline:w-full
              " />


              {/* DISCIPLINE IDENTITY */}

              <div className="flex gap-5">

                <span className="
                  pt-1 text-[11px] tabular-nums
                  tracking-[0.12em] text-[#B99B73]/70
                  motion-safe:transition-all
                  motion-safe:duration-500
                  group-hover/discipline:translate-x-1
                  group-hover/discipline:text-[#B99B73]
                ">
                  {discipline.number}
                </span>

                <div className="min-w-0">

                  <p className="
                    mb-3 text-[9px] font-medium
                    uppercase tracking-[0.2em]
                    text-white/30
                    motion-safe:transition-colors
                    motion-safe:duration-300
                    group-hover/discipline:text-[#B99B73]/75
                  ">
                    {discipline.code}
                  </p>

                  <h3 className="
                    m-0 text-[clamp(1.4rem,2.5vw,2rem)]
                    font-medium leading-[1.15]
                    tracking-[-0.055em] text-white/90
                    motion-safe:transition-all
                    motion-safe:duration-500
                    group-hover/discipline:translate-x-1
                    group-hover/discipline:text-white
                  ">
                    {discipline.title}
                  </h3>

                  <p className="
                    mt-3 text-[9px] uppercase
                    tracking-[0.15em] text-white/35
                  ">
                    {discipline.subtitle}
                  </p>

                  <div className="
                    mt-5 h-px w-7 bg-[#B99B73]/40
                    motion-safe:transition-all
                    motion-safe:duration-500
                    group-hover/discipline:w-14
                  " />

                </div>
              </div>


              {/* TECHNICAL AREAS */}

              <div className="
                grid grid-cols-1 gap-7
                sm:grid-cols-2 sm:gap-8
              ">

                {discipline.groups.map((group) => (
                  <div key={group.label} className="min-w-0">

                    <p className="
                      mb-4 text-[9px] font-semibold
                      uppercase tracking-[0.17em]
                      text-[#B99B73]/75
                    ">
                      {group.label}
                    </p>

                    <ul className="
                      m-0 flex list-none
                      flex-col gap-3 p-0
                    ">

                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="
                            group/item flex items-center gap-3
                            text-[12px] leading-[1.5]
                            text-white/55
                            motion-safe:transition-all
                            motion-safe:duration-300
                            hover:translate-x-1
                            hover:text-white/90
                            active:translate-x-1
                            active:text-[#B99B73]
                          "
                        >

                          <span className="
                            h-px w-3 shrink-0
                            bg-white/25
                            motion-safe:transition-all
                            motion-safe:duration-300
                            group-hover/item:w-5
                            group-hover/item:bg-[#B99B73]/80
                          " />

                          <span className="
                            motion-safe:transition-colors
                            motion-safe:duration-300
                            group-hover/item:text-white
                          ">
                            {item}
                          </span>

                        </li>
                      ))}

                    </ul>
                  </div>
                ))}

              </div>

              {/* BOTTOM ACCENT */}

              <span className="
                pointer-events-none absolute bottom-0 right-0
                h-px w-0 bg-[#B99B73]/40
                motion-safe:transition-all
                motion-safe:duration-700
                group-hover/discipline:w-1/3
              " />

            </article>
          ))}

        </section>


        {/* CLOSING STATEMENT */}

        <section className="
          group/closing mt-14 grid grid-cols-1
          gap-5 border-t border-white/[0.12]
          pt-8 md:mt-20
          md:grid-cols-[1fr_auto]
          md:items-end md:pt-10
        ">

          <div>

            <p className="
              mb-3 text-[10px] uppercase
              tracking-[0.2em] text-[#B99B73]/80
            ">
              The approach
            </p>

            <p className="
              m-0 max-w-[46ch]
              text-[clamp(1.2rem,2.3vw,1.8rem)]
              font-medium leading-[1.4]
              tracking-[-0.045em] text-white/80
              motion-safe:transition-colors
              motion-safe:duration-500
              group-hover/closing:text-white
            ">
              Understanding the signal chain is as important as shaping
              the sound.
            </p>

            <div className="
              mt-5 h-px w-8 bg-[#B99B73]/55
              motion-safe:transition-all
              motion-safe:duration-500
              group-hover/closing:w-16
            " />

          </div>

          <span className="
            text-[10px] uppercase
            tracking-[0.18em] text-white/35
            motion-safe:transition-colors
            motion-safe:duration-300
            group-hover/closing:text-[#B99B73]
          ">
            Live Sound Engineer
          </span>

        </section>

      </div>
    </PortfolioPage>
  );
}
