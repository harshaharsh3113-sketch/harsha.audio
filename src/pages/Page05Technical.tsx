
import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';

const consolePlatforms = [
  { brand: 'MIDAS', models: 'M32 LIVE' },
  { brand: 'YAMAHA', models: 'DM3 Series · Analogue Consoles' },
  {
    brand: 'ALLEN & HEATH',
    models: 'QU-32 · SQ Series · dLive Series · Analogue Consoles',
  },
  { brand: 'BEHRINGER', models: 'X32 · WING' },
  { brand: 'SOUNDCRAFT', models: 'Ui24R · Analogue Consoles' },
];

const productionExposure = [
  { brand: 'AVID', models: 'VENUE | S6L' },
  { brand: 'DiGiCo', models: 'Quantum 338 · SD10' },
];

const wirelessExperience = [
  'Multiple wireless microphone connections',
  'Frequency selection and coordination',
  'Directional antenna setup',
  'RF signal monitoring',
  'In-ear monitoring connections',
];

const danteKnowledge = [
  'Dante Controller',
  'Device Discovery',
  'Basic Audio Routing',
  'Networked Audio Fundamentals',
];

const environments = [
  'Church & Worship',
  'Weddings',
  'Private Productions',
  'Live Performances',
  'College Events',
  'Open-Air Productions',
];

const sectionBorder = 'border-t border-white/[0.12]';

const microLabel =
  'text-[10px] font-medium uppercase tracking-[0.22em] text-[#B99B73]';

const sectionHeading =
  'm-0 font-semibold uppercase leading-[0.88] tracking-[-0.078em] text-white';

const bodyCopy =
  'text-[0.86rem] leading-[1.95] text-white/45';

const interactiveTransition =
  'motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out';

export default function Page05Technical() {
  return (
    <PortfolioPage
      pageId="page-technical"
      pageNumber=""
      sectionLabel="05 / Technical Experience"
    >
      <div className="flex flex-col">

        {/* 01. INTRODUCTION */}

        <section
          className="
            group/intro grid grid-cols-1 gap-8
            pb-12 md:grid-cols-[1.15fr_0.85fr]
            md:items-end md:gap-14 md:pb-16
          "
        >
          <div className="reveal-up">

            <p className={`${microLabel} mb-6`}>
              Technical experience
            </p>

            <h2 className="
              m-0 text-[clamp(2.8rem,6.5vw,5.8rem)]
              font-semibold uppercase
              leading-[0.86] tracking-[-0.078em]
              text-white
            ">
              THE
              <br />
              <span className={`
                text-white/[0.28]
                ${interactiveTransition}
                group-hover/intro:text-white/55
                group-active/intro:text-white/45
              `}>
                PRODUCTION SIDE.
              </span>
            </h2>

            <div className={`
              mt-8 h-px w-12 bg-[#B99B73]/65
              ${interactiveTransition}
              group-hover/intro:w-24
            `} />

          </div>

          <div className="reveal-up md:pb-1">

            <p className="
              max-w-[44ch] text-[0.88rem]
              leading-[1.9] text-white/55
            ">
              Experience is built through working with
              different consoles, adapting to production
              requirements and taking responsibility when
              the show is live. My work spans mixing
              platforms, wireless systems and the
              practical demands of live audio production.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="
                h-px w-7 bg-[#B99B73]/65
                motion-safe:transition-all motion-safe:duration-500
                group-hover/intro:w-12
              " />

              <span className="
                text-[10px] uppercase
                tracking-[0.18em] text-white/35
              ">
                Consoles · RF · Live production
              </span>
            </div>

          </div>
        </section>


        {/* 02. CONSOLE EXPERIENCE */}

        <section className={`${sectionBorder} py-12 md:py-16 reveal-up`}>

          <div className="
            group/console mb-9 flex flex-wrap
            items-end justify-between gap-5
          ">

            <div>
              <p className={`${microLabel} mb-3`}>
                Mixing platforms
              </p>

              <h3 className="
                m-0 text-[clamp(1.8rem,3.5vw,3rem)]
                font-medium tracking-[-0.06em]
                text-white
              ">
                Consoles & ecosystems.
              </h3>

              <div className="
                mt-4 h-px w-8 bg-[#B99B73]/55
                motion-safe:transition-all motion-safe:duration-500
                group-hover/console:w-16
              " />
            </div>

            <span className="
              text-[9px] uppercase
              tracking-[0.17em] text-white/30
            ">
              Digital & analogue
            </span>

          </div>


          <div className="
            grid grid-cols-1 gap-9
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-[5vw]
          ">

            {/* QU-PAD IMAGE */}

            <div className="min-w-0">

              <div className="
                group/image relative overflow-hidden
                bg-[#171717]
              ">

                <div className="
                  relative overflow-hidden
                  [&_img]:motion-safe:transition-transform
                  [&_img]:motion-safe:duration-700
                  [&_img]:motion-safe:ease-out
                  group-hover/image:[&_img]:scale-[1.025]
                  group-active/image:[&_img]:scale-[1.015]
                ">
                  <ImageFrame
                    src="/image_011.jpg"
                    alt="Allen and Heath Qu-Pad remote mixing interface on an iPad"
                  />
                </div>

                <div className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-black/55
                  via-transparent to-transparent
                  opacity-70
                  motion-safe:transition-opacity
                  motion-safe:duration-500
                  group-hover/image:opacity-100
                " />

                <span className="
                  absolute bottom-4 left-4
                  text-[9px] uppercase
                  tracking-[0.18em] text-white/75
                  motion-safe:transition-transform
                  motion-safe:duration-500
                  group-hover/image:translate-x-1
                ">
                  Allen & Heath / Qu-Pad
                </span>

                <span className="
                  pointer-events-none absolute right-4 top-4
                  h-2 w-2 rounded-full
                  border border-[#B99B73]/70
                  bg-[#B99B73]/30
                  opacity-0
                  motion-safe:transition-opacity
                  motion-safe:duration-500
                  group-hover/image:opacity-100
                " />

              </div>

              <div className="
                mt-4 flex flex-wrap
                items-center justify-between gap-3
              ">
                <span className="
                  text-[9px] uppercase
                  tracking-[0.17em] text-white/35
                ">
                  Qu-32 / Remote mixing
                </span>

                <span className="
                  text-[9px] uppercase
                  tracking-[0.17em] text-[#B99B73]/75
                ">
                  Digital console interface
                </span>
              </div>

            </div>


            {/* CONSOLE INDEX */}

            <div className="flex min-w-0 flex-col justify-center">

              <div className="border-t border-white/10">

                {consolePlatforms.map((console, index) => (
                  <div
                    key={console.brand}
                    className="
                      group/row relative grid
                      grid-cols-1 gap-2
                      border-b border-white/10
                      px-2 py-5
                      transition-colors duration-300
                      hover:bg-white/[0.025]
                      active:bg-white/[0.045]
                      sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
                      sm:gap-4
                    "
                  >

                    <div className="flex items-start gap-3">

                      <span className="
                        pt-0.5 text-[9px]
                        tabular-nums tracking-[0.12em]
                        text-[#B99B73]/60
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        group-hover/row:text-[#B99B73]
                      ">
                        0{index + 1}
                      </span>

                      <h4 className="
                        m-0 text-[11px] font-semibold
                        uppercase tracking-[0.09em]
                        text-white/75
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        group-hover/row:text-white
                      ">
                        {console.brand}
                      </h4>

                    </div>

                    <p className="
                      m-0 pl-8 text-[11px]
                      leading-[1.8] text-white/45
                      motion-safe:transition-colors
                      motion-safe:duration-300
                      group-hover/row:text-white/75
                      sm:pl-0
                    ">
                      {console.models}
                    </p>

                    <span className="
                      pointer-events-none absolute bottom-0 left-0
                      h-px w-0 bg-[#B99B73]/65
                      motion-safe:transition-all
                      motion-safe:duration-500
                      group-hover/row:w-full
                    " />

                  </div>
                ))}

              </div>


              {/* ADDITIONAL PRODUCTION EXPOSURE */}

              <div className="mt-9">

                <p className="
                  mb-5 text-[9px] uppercase
                  tracking-[0.19em] text-white/35
                ">
                  Additional production exposure
                </p>

                <div className="
                  grid grid-cols-1 gap-5
                  sm:grid-cols-2
                ">

                  {productionExposure.map((console) => (
                    <div
                      key={console.brand}
                      className="
                        group/exposure border-l
                        border-[#B99B73]/40 py-1 pl-4
                        motion-safe:transition-all
                        motion-safe:duration-300
                        hover:border-[#B99B73]
                        hover:pl-5
                        active:border-[#B99B73]
                      "
                    >
                      <h4 className="
                        m-0 text-[12px] font-semibold
                        tracking-[0.04em] text-white/80
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        group-hover/exposure:text-white
                      ">
                        {console.brand}
                      </h4>

                      <p className="
                        mt-2 text-[11px]
                        leading-[1.7] text-white/40
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        group-hover/exposure:text-white/65
                      ">
                        {console.models}
                      </p>
                    </div>
                  ))}

                </div>

                <p className="
                  mt-5 max-w-[50ch]
                  text-[11px] leading-[1.85]
                  text-white/35
                ">
                  Avid and DiGiCo experience has been
                  through assisting senior engineers
                  and working alongside professional
                  production teams.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* 03. PRODUCTION RESPONSIBILITY */}

        <section className={`${sectionBorder} py-12 md:py-16 reveal-up`}>

          <div className="
            grid grid-cols-1 gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-[7vw]
          ">

            <div className="group/ownership">

              <p className={`${microLabel} mb-5`}>
                Practical experience
              </p>

              <h3 className={`
                ${sectionHeading}
                text-[clamp(2.8rem,5.8vw,5.3rem)]
              `}>
                TAKING
                <br />
                <span className="
                  text-white/25
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/ownership:text-white/45
                ">
                  OWNERSHIP.
                </span>
              </h3>

              <div className="
                mt-7 h-px w-10 bg-[#B99B73]/55
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/ownership:w-20
              " />

            </div>


            <div className="flex flex-col justify-center">

              <p className="
                max-w-[600px]
                text-[clamp(1.1rem,1.8vw,1.55rem)]
                font-light leading-[1.6]
                tracking-[-0.025em] text-white/80
              ">
                My experience has given me the confidence
                to take responsibility for the complete
                audio operation of a live production.
              </p>

              <p className={`mt-6 max-w-[570px] ${bodyCopy}`}>
                Through independently handling church
                services, weddings and private productions,
                I have developed the ability to understand
                production requirements, prepare and manage
                the audio setup, coordinate with performers
                and stage teams, operate the show and respond
                to technical issues as they arise.
              </p>

              <p className={`mt-5 max-w-[570px] ${bodyCopy}`}>
                I am comfortable taking ownership of the
                audio workflow from preparation through
                live execution, rather than being limited
                to a single task or console position.
              </p>

            </div>
          </div>


          {/* PRODUCTION ENVIRONMENTS */}

          <div className="
            mt-12 border-t border-white/10
            pt-6 flex flex-wrap
            items-center gap-x-5 gap-y-3
          ">

            {environments.map((item, index) => (
              <span
                key={item}
                className="
                  group/environment inline-flex
                  items-center gap-5
                  text-[9px] uppercase
                  tracking-[0.14em] text-white/40
                  motion-safe:transition-colors
                  motion-safe:duration-300
                  hover:text-white/80
                  active:text-[#B99B73]
                "
              >
                <span>{item}</span>

                {index !== environments.length - 1 && (
                  <span className="
                    text-[#B99B73]/65
                    motion-safe:transition-opacity
                    motion-safe:duration-300
                    group-hover/environment:opacity-100
                  ">
                    /
                  </span>
                )}
              </span>
            ))}

          </div>
        </section>


        {/* 04. RF & WIRELESS */}

        <section className={`${sectionBorder} py-12 md:py-16 reveal-up`}>

          <div className="
            grid grid-cols-1 gap-8
            md:grid-cols-[0.85fr_1.15fr]
            md:gap-14
          ">

            <div className="group/wireless">

              <p className={`${microLabel} mb-5`}>
                RF & wireless systems
              </p>

              <h3 className={`
                ${sectionHeading}
                text-[clamp(2.6rem,5.2vw,4.7rem)]
              `}>
                WIRELESS
                <br />
                <span className="
                  text-white/25
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/wireless:text-white/45
                ">
                  OPERATION.
                </span>
              </h3>

              <div className="
                mt-7 h-px w-10 bg-[#B99B73]/55
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/wireless:w-20
              " />

            </div>


            <div className="flex flex-col justify-center">

              <p className="
                max-w-[580px]
                text-[clamp(1rem,1.5vw,1.25rem)]
                font-light leading-[1.7]
                tracking-[-0.02em] text-white/70
              ">
                Hands-on experience working with wireless
                microphones, RF coordination and in-ear
                monitoring in live production environments.
              </p>

              <div className="mt-7 border-t border-white/10">

                {wirelessExperience.map((item, index) => (
                  <div
                    key={item}
                    className="
                      group/rf relative flex items-center
                      gap-5 border-b border-white/10
                      px-2 py-4
                      transition-colors duration-300
                      hover:bg-white/[0.025]
                      active:bg-white/[0.045]
                    "
                  >

                    <span className="
                      w-5 shrink-0 text-[9px]
                      tabular-nums tracking-[0.12em]
                      text-[#B99B73]/65
                      motion-safe:transition-colors
                      motion-safe:duration-300
                      group-hover/rf:text-[#B99B73]
                    ">
                      0{index + 1}
                    </span>

                    <span className="
                      text-[12px] text-white/55
                      motion-safe:transition-all
                      motion-safe:duration-300
                      group-hover/rf:translate-x-1
                      group-hover/rf:text-white/90
                    ">
                      {item}
                    </span>

                    <span className="
                      pointer-events-none absolute
                      bottom-0 left-0 h-px w-0
                      bg-[#B99B73]/60
                      motion-safe:transition-all
                      motion-safe:duration-500
                      group-hover/rf:w-full
                    " />

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>


        {/* 05. DANTE CERTIFICATIONS */}

        <section className={`${sectionBorder} py-12 md:py-16 reveal-up`}>

          <div className="
            grid grid-cols-1 gap-9
            md:grid-cols-[0.85fr_1.15fr]
            md:gap-14
          ">

            <div className="group/dante">

              <p className={`${microLabel} mb-5`}>
                Networked audio
              </p>

              <h3 className="
                m-0 text-[clamp(3.8rem,8vw,7rem)]
                font-semibold uppercase
                leading-[0.82] tracking-[-0.085em]
                text-white
              ">
                DANTE<span className="
                  text-[#B99B73]
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/dante:text-white
                ">.</span>
              </h3>

              <p className="
                mt-5 text-[10px] uppercase
                tracking-[0.18em] text-white/35
              ">
                Audinate / Levels 1, 2 & 3
              </p>

              <p className="
                mt-6 max-w-[39ch]
                text-[0.85rem] leading-[1.9]
                text-white/45
              ">
                Completed all three levels of Audinate
                Dante certification, developing foundational
                knowledge of networked audio and the
                Dante ecosystem.
              </p>

            </div>


            <div className="flex flex-col justify-center">

              <div className="
                flex flex-wrap items-center
                justify-between gap-3
                border-b border-white/10 pb-5
              ">

                <span className="
                  text-[9px] uppercase
                  tracking-[0.19em] text-white/35
                ">
                  Certifications completed
                </span>

                <span className="
                  text-[9px] uppercase
                  tracking-[0.16em] text-[#B99B73]
                ">
                  01 / 02 / 03
                </span>

              </div>


              <div className="grid grid-cols-3 gap-4 py-7">

                {['01', '02', '03'].map((level) => (
                  <div
                    key={level}
                    className="
                      group/level relative
                      border-b border-white/10 pb-4
                      active:border-[#B99B73]/70
                    "
                  >

                    <span className="
                      block text-[clamp(2.7rem,5vw,4.5rem)]
                      font-light leading-none
                      tracking-[-0.08em] text-white/80
                      motion-safe:transition-all
                      motion-safe:duration-500
                      group-hover/level:-translate-y-1
                      group-hover/level:text-[#B99B73]
                    ">
                      {level}
                    </span>

                    <span className="
                      mt-3 block text-[9px]
                      uppercase tracking-[0.16em]
                      text-white/35
                      motion-safe:transition-colors
                      motion-safe:duration-300
                      group-hover/level:text-white/65
                    ">
                      Certified
                    </span>

                  </div>
                ))}

              </div>


              <div className="border-t border-white/10 pt-6">

                <p className="
                  mb-4 text-[9px] uppercase
                  tracking-[0.19em] text-white/35
                ">
                  Foundational knowledge
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-3">

                  {danteKnowledge.map((topic) => (
                    <span
                      key={topic}
                      className="
                        text-[10px] uppercase
                        tracking-[0.1em] text-white/45
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        hover:text-[#B99B73]
                        active:text-[#B99B73]
                      "
                    >
                      {topic}
                    </span>
                  ))}

                </div>

              </div>


              <p className="
                mt-6 border-l border-[#B99B73]/55
                pl-4 text-[11px] leading-[1.85]
                text-white/40
              ">
                My current Dante experience is certification-based
                with foundational knowledge. I have not yet
                undertaken professional Dante system deployment
                in a live production environment.
              </p>

            </div>
          </div>
        </section>


        {/* 06. CLOSING STATEMENT */}

        <section className="
          group/closing mt-2 border-t
          border-white/[0.12] pt-8
          md:pt-10 reveal-up
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
                The experience
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
                Experience builds the confidence to take
                responsibility when the performance begins.
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

          </div>
        </section>

      </div>
    </PortfolioPage>
  );
}
