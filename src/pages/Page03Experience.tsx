
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
      <div className="flex flex-col">

        {/* EDITORIAL INTRODUCTION */}

        <section className="
          group/intro relative grid grid-cols-1
          gap-10 border-b border-white/[0.12]
          pb-12 md:grid-cols-[1.2fr_0.8fr]
          md:items-end md:gap-14 md:pb-16
        ">

          <div className="reveal-up">

            <p className="
              mb-7 text-[10px] font-medium
              uppercase tracking-[0.24em]
              text-[#B99B73]
            ">
              Production environments
            </p>

            <h2 className="
              m-0 text-[clamp(3.2rem,7.5vw,7rem)]
              font-semibold uppercase
              leading-[0.82] tracking-[-0.08em]
              text-white
            ">
              LIVE SOUND
              <br />
              <span className="
                text-white/[0.25]
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/intro:text-white/[0.45]
              ">
                EXPERIENCE.
              </span>
            </h2>

            <div className="mt-9 flex items-center gap-3">

              <span className="
                h-px w-10 bg-[#B99B73]/70
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/intro:w-20
              " />

              <span className="
                text-[9px] uppercase
                tracking-[0.2em] text-white/35
              ">
                In the field
              </span>

            </div>
          </div>


          <div className="reveal-up md:pb-1">

            <p className="
              max-w-[46ch] text-[0.9rem]
              leading-[1.9] text-white/55
            ">
              No two productions are quite the same. Different performers,
              different stages and different technical demands call for
              different decisions. My experience spans a range of live
              production environments, with one consistent priority:
              reliable, intentional sound.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <span className="
                h-px w-7 bg-[#B99B73]/70
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/intro:w-12
              " />

              <span className="
                text-[10px] uppercase
                tracking-[0.18em] text-white/35
              ">
                Bengaluru, India
              </span>

            </div>
          </div>

        </section>


        {/* EXPERIENCE INDEX */}

        <section className="pt-12 md:pt-16">

          <div className="
            group/index mb-9 flex flex-wrap
            items-end justify-between gap-5
          ">

            <div>

              <p className="
                mb-3 text-[10px] uppercase
                tracking-[0.22em] text-white/35
              ">
                The environments
              </p>

              <h3 className="
                m-0 text-[clamp(1.5rem,2.8vw,2.2rem)]
                font-medium tracking-[-0.055em]
                text-white
                motion-safe:transition-colors
                motion-safe:duration-300
                group-hover/index:text-white/90
              ">
                Different stages. Different demands.
              </h3>

            </div>

            <div className="flex items-center gap-3">

              <span className="
                h-px w-5 bg-white/20
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/index:w-10
                group-hover/index:bg-[#B99B73]/70
              " />

              <span className="
                text-[10px] tabular-nums
                tracking-[0.16em] text-white/40
              ">
                01 — 06
              </span>

            </div>
          </div>


          {/* EXPERIENCE GRID */}

          <div className="
            grid grid-cols-1
            border-t border-white/[0.14]
            md:grid-cols-2
          ">

            {environments.map((env, index) => (
              <article
                key={env.num}
                className={`
                  group/environment relative grid
                  grid-cols-[46px_minmax(0,1fr)]
                  gap-4 overflow-hidden
                  border-b border-white/[0.12]
                  px-3 py-8
                  transition-colors duration-500
                  hover:bg-white/[0.025]
                  active:bg-white/[0.045]
                  sm:grid-cols-[54px_minmax(0,1fr)]
                  sm:gap-4 sm:px-4
                  md:grid-cols-[68px_minmax(0,1fr)]
                  md:gap-5 md:px-7 md:py-9
                  ${index % 2 === 0
                    ? 'md:border-r md:border-white/[0.12]'
                    : ''}
                `}
              >

                {/* TOP ACCENT */}

                <span className="
                  pointer-events-none absolute left-0 top-0
                  h-px w-0 bg-[#B99B73]/80
                  motion-safe:transition-all
                  motion-safe:duration-700
                  group-hover/environment:w-full
                " />


                {/* INDEX NUMBER */}

                <div className="pt-0.5">

                  <span className="
                    block text-[1.7rem] font-medium
                    leading-none tracking-[-0.075em]
                    text-white/20
                    motion-safe:transition-all
                    motion-safe:duration-500
                    group-hover/environment:translate-x-1
                    group-hover/environment:text-[#B99B73]/85
                  ">
                    {env.num}
                  </span>

                </div>


                {/* ENVIRONMENT DETAILS */}

                <div className="min-w-0">

                  <div className="flex items-start justify-between gap-3">

                    <h4 className="
                      m-0 text-[12px] font-semibold
                      uppercase leading-[1.5]
                      tracking-[0.085em] text-white/85
                      motion-safe:transition-colors
                      motion-safe:duration-300
                      group-hover/environment:text-white
                      sm:text-[13px]
                    ">
                      {env.title}
                    </h4>

                    <span className="
                      mt-2 h-px w-0 shrink-0
                      bg-[#B99B73]/70
                      motion-safe:transition-all
                      motion-safe:duration-500
                      group-hover/environment:w-6
                    " />

                  </div>

                  <p className="
                    mt-3 max-w-[48ch]
                    text-[0.8rem] leading-[1.85]
                    text-white/50
                    motion-safe:transition-colors
                    motion-safe:duration-300
                    group-hover/environment:text-white/70
                  ">
                    {env.desc}
                  </p>

                  <div className="
                    mt-5 h-px w-0 bg-white/10
                    motion-safe:transition-all
                    motion-safe:duration-500
                    group-hover/environment:w-full
                  " />

                </div>

                {/* BOTTOM ACCENT */}

                <span className="
                  pointer-events-none absolute bottom-0 right-0
                  h-px w-0 bg-[#B99B73]/40
                  motion-safe:transition-all
                  motion-safe:duration-700
                  group-hover/environment:w-1/3
                " />

              </article>
            ))}

          </div>
        </section>


        {/* CLOSING THOUGHT */}

        <section className="
          group/closing mt-14 border-t
          border-white/[0.12] pt-8
          md:mt-20 md:pt-10
        ">

          <div className="
            grid grid-cols-1 gap-5
            md:grid-cols-[1fr_auto]
            md:items-end
          ">

            <div>

              <p className="
                mb-3 text-[10px] uppercase
                tracking-[0.2em] text-[#B99B73]/80
              ">
                The common thread
              </p>

              <p className="
                m-0 max-w-[42ch]
                text-[clamp(1.2rem,2.4vw,1.8rem)]
                font-medium leading-[1.35]
                tracking-[-0.045em] text-white/80
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/closing:text-white
              ">
                Every production deserves sound that works as hard as the
                performance.
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
              md:pb-1
            ">
              Live Sound Engineer
            </span>

          </div>
        </section>

      </div>
    </PortfolioPage>
  );
}
