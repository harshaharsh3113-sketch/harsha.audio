
import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';

interface Production {
  number: string;
  title: string;
  location: string;
  role: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  imageSubcaption: string;
  description: string;
  technical: {
    label: string;
    value: string;
  }[];
  responsibilities: string[];
}

const productions: Production[] = [
  {
    number: '01',
    title: 'Church & Worship Production',
    location: 'Hospet, India',
    role: 'FOH Sound Engineer / Live Sound',
    image: '/image_02.jpg',
    imageAlt:
      'Allen and Heath Qu-Pad remote mixing interface controlling a Qu-32 during a church production',
    imageCaption: 'Allen & Heath / Qu-Pad',
    imageSubcaption: 'QU-32 · Remote Mixing',
    description:
      'Live worship production involving a full band, choir, lead vocals, stage monitoring and live telecasting. Remote console control provides flexibility while managing the mix from different listening positions.',
    technical: [
      {
        label: 'CONSOLE',
        value: 'Allen & Heath QU-32',
      },
      {
        label: 'PA SYSTEM',
        value:
          'QSC LA112 line-array · QSC KS118 subwoofers · QSC K.2 stage monitors',
      },
      {
        label: 'STAGE',
        value:
          'Pearl drum kit · Hartke bass amp · Marshall guitar amp · Sennheiser XSW · Shure SM58',
      },
    ],
    responsibilities: [
      'FOH Mixing',
      'Monitor Management',
      'Soundcheck',
      'Gain Structure',
      'EQ & Dynamics',
      'Feedback Management',
      'Stage Coordination',
      'Live Telecast Audio',
    ],
  },
  {
    number: '02',
    title: 'Classical Live Production',
    location: 'Bengaluru, India',
    role: 'Live Sound / FOH',
    image: '/image_03.jpg',
    imageAlt:
      'Soundcraft Ui digital mixer interface showing vocal EQ and processing on a MacBook Air',
    imageCaption: 'Soundcraft Ui24R',
    imageSubcaption: 'Digital Mixing · Vocal Processing',
    description:
      'Classical live production combining vocals, traditional percussion and melodic instruments within a compact multi-monitor stage setup. The production involved individual input processing and playback management.',
    technical: [
      {
        label: 'INPUTS',
        value:
          'Male Vocal · Flute · Veena · Mridangam · Nattuvangam · Playback',
      },
      {
        label: 'CONSOLE',
        value: 'Soundcraft Ui24R',
      },
      {
        label: 'FOH',
        value: 'JBL EON 915',
      },
      {
        label: 'MONITORING',
        value: 'Dedicated stage monitor mixes',
      },
    ],
    responsibilities: [
      'FOH Mixing',
      'Gain Structure',
      'EQ & Dynamics',
      'Monitor Mixing',
      'Stage Patching',
      'Playback Routing',
      'Soundcheck',
      'Live Operation',
    ],
  },
  {
    number: '03',
    title: 'Open-Air Live Production',
    location: 'Bengaluru, India',
    role: 'FOH Sound Engineer',
    image: '/image_04.jpg',
    imageAlt:
      'Audio engineer operating an Allen and Heath dLive digital mixing console during a live event',
    imageCaption: 'Allen & Heath / dLive',
    imageSubcaption: 'FOH Operation · Dynamics & FX',
    description:
      'Live university band production in an open-air environment, with a full-band stage setup and a large audience area. The production involved digital console operation, live mixing and coordination across the stage.',
    technical: [
      {
        label: 'TYPE',
        value: 'Open-Air Live Event',
      },
      {
        label: 'CONSOLE',
        value: 'Allen & Heath dLive',
      },
      {
        label: 'SYSTEM',
        value:
          'RCF line-array · JBL subwoofers · JBL stage monitors',
      },
      {
        label: 'STAGE',
        value:
          'Lead & backing vocals · Drums · Electric guitars · Bass · Additional live instruments',
      },
    ],
    responsibilities: [
      'FOH Operation',
      'Stage Audio',
      'Soundcheck',
      'Live Mixing',
      'Monitor Coordination',
      'Live Troubleshooting',
      'Artist Coordination',
    ],
  },
  {
    number: '04',
    title: 'Private Wedding Production',
    location: 'Hospet, India',
    role: 'Main FOH Sound Engineer',
    image: '/image_05.jpg',
    imageAlt:
      'MacBook Air running Rekordbox beside an iPad running Allen and Heath Qu-Pad',
    imageCaption: 'Rekordbox / Allen & Heath',
    imageSubcaption: 'DJ Playback · Qu-Pad Control',
    description:
      'Full-band wedding production involving multiple vocalists, drums, guitars, keys and live stage monitoring. The production setup also incorporated Mac-based playback and iPad-based remote mixing control.',
    technical: [
      {
        label: 'CONSOLE',
        value: 'Allen & Heath QU-32',
      },
      {
        label: 'SYSTEM',
        value:
          'QSC LA112 line-array · QSC KS118 subwoofers · QSC K.2 monitors',
      },
      {
        label: 'PLAYBACK',
        value:
          'MacBook Air · Rekordbox · External audio output',
      },
      {
        label: 'CONTROL',
        value:
          'Allen & Heath Qu-Pad · iPad remote mixing',
      },
    ],
    responsibilities: [
      'FOH Mixing',
      'Artist Support',
      'Stage Audio',
      'Soundcheck',
      'Monitor Coordination',
      'Live Troubleshooting',
      'Production Coordination',
    ],
  },
];


/* =========================================================
   WORKFLOW
========================================================= */

const workflow = [
  {
    number: '01',
    title: 'Prepare',
    description:
      'Understand the stage, patch, routing and monitoring requirements before the first soundcheck.',
    tags: ['PATCH', 'ROUTING', 'MONITORS'],
  },
  {
    number: '02',
    title: 'Check',
    description:
      'Verify the signal path from source to system. Problems are easier to solve before the room is full.',
    tags: ['SIGNAL FLOW', 'GAIN', 'SYSTEM'],
  },
  {
    number: '03',
    title: 'Soundcheck',
    description:
      'Build the foundation of the mix while giving each performer a reliable stage environment.',
    tags: ['FOH', 'MONITORING', 'BALANCE'],
  },
  {
    number: '04',
    title: 'Listen',
    description:
      'Listen to the room, the system and the performance. The mix has to work beyond the console.',
    tags: ['ROOM', 'PA', 'MUSICALITY'],
  },
  {
    number: '05',
    title: 'Respond',
    description:
      'Identify the source of a problem, make the smallest effective change and verify the result.',
    tags: ['TROUBLESHOOT', 'CORRECT', 'VERIFY'],
  },
  {
    number: '06',
    title: 'Deliver',
    description:
      'Keep the mix controlled and musical so the audience experiences the performance, not the engineering.',
    tags: ['CONTROL', 'CONSISTENCY', 'FOCUS'],
  },
];


/* =========================================================
   PRODUCTION INFORMATION
========================================================= */

function ProductionInfo({
  production,
}: {
  production: Production;
}) {
  return (
    <div className="flex flex-col justify-center">

      {/* PROJECT META */}

      <div className="flex flex-wrap items-center gap-3">
        <span
          className="
            text-[9px] font-medium tabular-nums
            tracking-[0.14em] text-[#B99B73]/75
            motion-safe:transition-colors
            motion-safe:duration-500
            group-hover/production:text-[#B99B73]
          "
        >
          {production.number}
        </span>

        <span
          className="
            h-px w-6 bg-white/15
            motion-safe:transition-all
            motion-safe:duration-500
            group-hover/production:w-10
            group-hover/production:bg-[#B99B73]/60
          "
        />

        <span
          className="
            text-[9px] font-medium uppercase
            tracking-[0.16em] text-white/30
            motion-safe:transition-colors
            motion-safe:duration-500
            group-hover/production:text-white/50
          "
        >
          {production.location}
        </span>
      </div>


      {/* TITLE */}

      <h3
        className="
          mt-5 max-w-[19ch]
          text-[clamp(1.65rem,2.6vw,2.35rem)]
          font-light leading-[1.08]
          tracking-[-0.055em] text-white/90
          motion-safe:transition-all
          motion-safe:duration-500
          group-hover/production:translate-x-1
          group-hover/production:text-white
        "
      >
        {production.title}
        <span className="text-[#B99B73]">.</span>
      </h3>


      {/* ROLE */}

      <p
        className="
          mt-3 text-[9px] font-medium uppercase
          tracking-[0.17em] text-[#B99B73]/75
        "
      >
        {production.role}
      </p>


      {/* DESCRIPTION */}

      <p
        className="
          mt-5 max-w-[54ch]
          text-[clamp(0.83rem,0.95vw,0.92rem)]
          leading-[1.9] text-white/45
          motion-safe:transition-colors
          motion-safe:duration-500
          group-hover/production:text-white/65
        "
      >
        {production.description}
      </p>


      {/* TECHNICAL DETAILS */}

      <div
        className="
          mt-7 border-t border-white/10
          pt-5
          motion-safe:transition-colors
          motion-safe:duration-500
          group-hover/production:border-white/20
        "
      >
        <div className="mb-4 flex items-center gap-3">
          <span
            className="
              h-px w-5 bg-[#B99B73]/60
              motion-safe:transition-all
              motion-safe:duration-500
              group-hover/production:w-8
            "
          />

          <span className="label-meta text-white/35">
            Production Details
          </span>
        </div>

        <div className="space-y-3.5">
          {production.technical.map((item) => (
            <div
              key={item.label}
              className="
                grid grid-cols-[76px_minmax(0,1fr)]
                gap-3 sm:gap-5
              "
            >
              <span
                className="
                  pt-[2px] text-[8px] font-medium
                  uppercase tracking-[0.16em]
                  text-white/25
                  motion-safe:transition-colors
                  motion-safe:duration-300
                  group-hover/production:text-white/40
                "
              >
                {item.label}
              </span>

              <p
                className="
                  m-0 text-[0.72rem]
                  leading-[1.7] text-white/45
                  motion-safe:transition-colors
                  motion-safe:duration-300
                  group-hover/production:text-white/60
                "
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>


      {/* RESPONSIBILITIES */}

      <div
        className="
          mt-5 border-t border-white/10
          pt-5
          motion-safe:transition-colors
          motion-safe:duration-500
          group-hover/production:border-white/20
        "
      >
        <div className="mb-4 flex items-center gap-3">
          <span
            className="
              h-px w-5 bg-[#B99B73]/60
              motion-safe:transition-all
              motion-safe:duration-500
              group-hover/production:w-8
            "
          />

          <span className="label-meta text-white/35">
            My Involvement
          </span>
        </div>

        <div className="flex flex-wrap gap-x-2.5 gap-y-2">
          {production.responsibilities.map((item, index) => (
            <span
              key={item}
              className="
                inline-flex items-center
                text-[9px] uppercase
                tracking-[0.105em] text-white/45
                motion-safe:transition-colors
                motion-safe:duration-300
                hover:text-[#B99B73]
                active:text-[#B99B73]
              "
            >
              {item}

              {index !== production.responsibilities.length - 1 && (
                <span className="ml-2.5 text-[#B99B73]/45">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   WORKFLOW STEP
========================================================= */

function WorkflowStep({
  step,
}: {
  step: (typeof workflow)[number];
}) {
  return (
    <article
      className="
        group/step relative
        border-b border-white/10
        py-5 md:py-5
        motion-safe:transition-colors
        motion-safe:duration-500
        hover:bg-white/[0.015]
      "
    >

      {/* ACTIVE RAIL */}

      <span
        className="
          pointer-events-none absolute
          bottom-0 left-0 top-0
          w-px bg-[#B99B73]
          opacity-0
          motion-safe:transition-opacity
          motion-safe:duration-500
          group-hover/step:opacity-100
        "
      />


      {/* STEP CONTENT */}

      <div
        className="
          relative z-10
          grid grid-cols-1 gap-3.5
          md:grid-cols-[56px_minmax(0,1fr)_auto]
          md:items-center md:gap-6
        "
      >

        {/* NUMBER */}

        <div className="flex items-center gap-3 md:block">
          <span
            className="
              relative z-20
              flex h-5 w-5 shrink-0
              items-center justify-center
              rounded-full border
              border-white/15 bg-[#0B0B0B]
              text-[7px] font-medium
              tracking-[0.08em] text-white/40
              motion-safe:transition-all
              motion-safe:duration-500
              group-hover/step:scale-[1.08]
              group-hover/step:border-[#B99B73]
              group-hover/step:text-[#B99B73]
            "
          >
            {step.number}
          </span>

          <span
            className="
              block h-px w-5 bg-white/15
              motion-safe:transition-all
              motion-safe:duration-700
              group-hover/step:w-10
              group-hover/step:bg-[#B99B73]/60
              md:ml-[21px] md:mt-2
            "
          />
        </div>


        {/* DESCRIPTION */}

        <div
          className="
            motion-safe:transition-transform
            motion-safe:duration-700
            group-hover/step:translate-x-[3px]
          "
        >
          <div className="flex items-center gap-3">
            <h3
              className="
                text-[15.5px] font-medium
                tracking-[-0.02em] text-white/70
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/step:text-white
              "
            >
              {step.title}
            </h3>

            <span
              className="
                h-px w-0 bg-[#B99B73]/60
                motion-safe:transition-all
                motion-safe:duration-700
                group-hover/step:w-8
              "
            />
          </div>

          <p
            className="
              mt-1.5 max-w-[62ch]
              text-[12px] leading-[1.7]
              text-white/40
              motion-safe:transition-colors
              motion-safe:duration-500
              group-hover/step:text-white/60
            "
          >
            {step.description}
          </p>
        </div>


        {/* TECHNICAL TAGS */}

        <div
          className="
            flex flex-wrap items-center
            gap-x-3 gap-y-1.5
            md:justify-end
          "
        >
          {step.tags.map((tag, index) => (
            <span
              key={tag}
              className="
                inline-flex items-center gap-2
                text-[9px] font-medium uppercase
                tracking-[0.13em] text-white/30
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/step:text-white/50
              "
            >
              <span
                className="
                  motion-safe:transition-colors
                  motion-safe:duration-300
                  hover:text-[#B99B73]
                "
              >
                {tag}
              </span>

              {index < step.tags.length - 1 && (
                <span className="text-white/15">/</span>
              )}
            </span>
          ))}
        </div>

      </div>


      {/* BOTTOM ACTIVE SIGNAL */}

      <span
        className="
          pointer-events-none absolute
          bottom-0 left-0 h-px w-0
          bg-[#B99B73]/70
          motion-safe:transition-all
          motion-safe:duration-700
          group-hover/step:w-16
        "
      />
    </article>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function Page06SelectedWork() {
  return (
    <PortfolioPage
      pageId="page-selectedwork"
      pageNumber=""
      sectionLabel="06 / Selected Work"
    >
      <div className="group/page relative isolate">

        {/* BACKGROUND ACCENT */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 top-0 -z-10
            h-[420px] w-[420px]
            rounded-full bg-[#B99B73]/[0.025]
            blur-[120px]
          "
        />


        {/* =====================================================
            01. INTRO
        ===================================================== */}

        <section
          className="
            group/intro reveal-up
            pb-[clamp(3.5rem,7vw,6rem)]
          "
        >
          <div className="mb-8 flex items-center gap-4">
            <span
              className="
                h-px w-8 bg-[#B99B73]
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/intro:w-14
              "
            />

            <span className="label-meta text-[#B99B73]">
              Selected Work
            </span>
          </div>

          <div
            className="
              grid grid-cols-1 gap-7
              lg:grid-cols-[1.5fr_0.5fr]
              lg:items-end
            "
          >
            <h1
              className="
                m-0 text-[clamp(3rem,7.5vw,6.5rem)]
                font-light uppercase
                leading-[0.84] tracking-[-0.075em]
                text-white
              "
            >
              LIVE SOUND
              <br />

              <span
                className="
                  text-white/25
                  motion-safe:transition-colors
                  motion-safe:duration-700
                  group-hover/intro:text-white/45
                "
              >
                IN PRACTICE.
              </span>
            </h1>

            <div className="max-w-[350px] lg:pb-2">
              <span
                className="
                  mb-5 block text-[10px]
                  uppercase tracking-[0.2em]
                  text-white/25
                "
              >
                Selected productions
              </span>

              <p
                className="
                  border-l border-[#B99B73]/60
                  pl-5 text-[clamp(0.9rem,1.15vw,1rem)]
                  leading-[1.9] text-white/50
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/intro:text-white/70
                "
              >
                A selection of live productions across different
                rooms, systems and stages. Each project brings
                its own technical demands and production challenges.
              </p>
            </div>
          </div>
        </section>


        {/* =====================================================
            02. SELECTED PRODUCTIONS
        ===================================================== */}

        <section
          className="
            border-t border-white/10
            reveal-up
          "
        >
          {productions.map((production, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <article
                key={production.number}
                className="
                  group/production
                  border-b border-white/10
                  py-[clamp(3rem,6vw,5.5rem)]
                "
              >
                <div
                  className={`
                    grid grid-cols-1 items-center
                    gap-[clamp(2rem,4.5vw,4.5rem)]
                    lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]
                    ${!imageLeft
                      ? 'lg:[&>.production-image]:order-2'
                      : ''
                    }
                  `}
                >

                  {/* IMAGE */}

                  <div className="production-image min-w-0">
                    <div
                      className="
                        group/image relative
                        overflow-hidden bg-[#171717]
                      "
                    >
                      <div className="overflow-hidden">
                        <ImageFrame
                          src={production.image}
                          alt={production.imageAlt}
                          className="
                            w-full overflow-hidden
                            motion-safe:transition-transform
                            motion-safe:duration-1000
                            motion-safe:ease-out
                            group-hover/production:scale-[1.025]
                            group-active/production:scale-[1.01]
                          "
                          style={{
                            aspectRatio: '4 / 3',
                          }}
                        />
                      </div>

                      {/* IMAGE SHADE */}

                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none absolute inset-0
                          bg-black/10
                          motion-safe:transition-colors
                          motion-safe:duration-700
                          group-hover/production:bg-transparent
                        "
                      />

                      {/* EDITORIAL FRAME */}

                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none absolute
                          inset-0 border border-transparent
                          motion-safe:transition-all
                          motion-safe:duration-700
                          motion-safe:ease-out
                          group-hover/production:inset-[8px]
                          group-hover/production:border-white/20
                        "
                      />

                      {/* IMAGE INDEX */}

                      <span
                        className="
                          pointer-events-none absolute
                          bottom-5 left-5
                          text-[9px] uppercase
                          tracking-[0.18em] text-white/65
                          opacity-0 translate-y-2
                          motion-safe:transition-all
                          motion-safe:duration-500
                          group-hover/production:translate-y-0
                          group-hover/production:opacity-100
                        "
                      >
                        PRODUCTION / {production.number}
                      </span>

                      {/* BOTTOM ACCENT */}

                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none absolute
                          bottom-0 left-0 h-px w-0
                          bg-[#B99B73]
                          motion-safe:transition-all
                          motion-safe:duration-700
                          group-hover/production:w-[30%]
                        "
                      />
                    </div>


                    {/* IMAGE CAPTION */}

                    <div
                      className="
                        mt-4 flex flex-wrap
                        items-center justify-between gap-3
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            h-px w-5 bg-[#B99B73]/65
                            motion-safe:transition-all
                            motion-safe:duration-500
                            group-hover/production:w-8
                          "
                        />

                        <span
                          className="
                            text-[9px] uppercase
                            tracking-[0.14em] text-white/55
                          "
                        >
                          {production.imageCaption}
                        </span>
                      </div>

                      <span
                        className="
                          text-[8px] uppercase
                          tracking-[0.13em] text-white/25
                        "
                      >
                        {production.imageSubcaption}
                      </span>
                    </div>
                  </div>


                  {/* PRODUCTION INFORMATION */}

                  <ProductionInfo production={production} />
                </div>
              </article>
            );
          })}
        </section>


        {/* =====================================================
            03. WORKFLOW & EXECUTION
        ===================================================== */}

        <section
          className="
            group/workflow
            mt-[clamp(4.5rem,8vw,7rem)]
            reveal-up
          "
        >

          {/* SECTION INTRO */}

          <div className="flex items-center gap-4">
            <span
              className="
                h-px w-8 bg-[#B99B73]
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/workflow:w-14
              "
            />

            <span className="label-meta text-[#B99B73]">
              Workflow & Execution
            </span>
          </div>

          <div
            className="
              mt-5 grid grid-cols-1
              gap-5 md:grid-cols-[1fr_auto]
              md:items-end
            "
          >
            <h2
              className="
                m-0 text-[clamp(1.8rem,3.5vw,2.8rem)]
                font-light leading-[1]
                tracking-[-0.055em] text-white/90
              "
            >
              HOW I
              <span className="text-white/30"> WORK.</span>
            </h2>

            <p
              className="
                max-w-[390px]
                text-[0.82rem] leading-[1.8]
                text-white/40
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/workflow:text-white/60
              "
            >
              Every production is different. My approach is to
              prepare thoroughly, understand the signal path,
              listen carefully and make controlled decisions
              throughout the performance.
            </p>
          </div>


          {/* WORKFLOW HEADER */}

          <div className="mt-9 flex items-center gap-3">
            <span className="label-meta text-white/35">
              The Process
            </span>

            <span className="h-px flex-1 bg-white/10" />

            <span
              className="
                hidden text-[9px] uppercase
                tracking-[0.15em] text-white/25
                sm:block
              "
            >
              01 — 06
            </span>
          </div>


          {/* SIGNAL RAIL AND STEPS */}

          <div className="relative mt-3 border-t border-white/10">

            {/* CONTINUOUS SIGNAL RAIL */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                bottom-0 left-[10px] top-0
                hidden w-px bg-white/10
                md:block
              "
            />

            {workflow.map((step) => (
              <WorkflowStep
                key={step.number}
                step={step}
              />
            ))}
          </div>
        </section>


        {/* =====================================================
            04. UNDER PRESSURE
        ===================================================== */}

        <section
          className="
            group/pressure
            mt-[clamp(3.5rem,6vw,5rem)]
            border-t border-white/10
            pt-7
            reveal-up
          "
        >

          <div className="flex items-center gap-3">
            <span className="label-meta text-[#B99B73]">
              Under Pressure
            </span>

            <span className="h-px flex-1 bg-white/10" />
          </div>


          <div
            className="
              mt-5 grid grid-cols-1
              gap-5 md:grid-cols-[1fr_240px]
              md:items-start
            "
          >

            <div
              className="
                border-l border-white/20
                pl-5
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/pressure:border-[#B99B73]/70
              "
            >
              <p
                className="
                  max-w-[680px]
                  text-[clamp(1rem,1.6vw,1.2rem)]
                  font-medium leading-[1.5]
                  tracking-[-0.015em]
                  text-white/65
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/pressure:text-white/85
                "
              >
                Good live sound is not about avoiding problems.

                <span className="text-white">
                  {' '}It is about staying in control when they happen.
                </span>
              </p>
            </div>

            <p
              className="
                max-w-[34ch]
                text-[11.5px] leading-[1.75]
                text-white/35
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/pressure:text-white/50
              "
            >
              During a performance, technical problems need to
              be identified and resolved without becoming part
              of the show.
            </p>
          </div>
        </section>


        {/* =====================================================
            05. CLOSING STATEMENT
        ===================================================== */}

        <section
          className="
            group/closing
            mt-[clamp(4.5rem,8vw,7rem)]
            border-t border-white/10
            pt-8 md:pt-10
            reveal-up
          "
        >
          <div className="mb-7 flex items-center gap-4">
            <span
              className="
                h-px w-8 bg-[#B99B73]
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/closing:w-14
              "
            />

            <span className="label-meta text-[#B99B73]">
              The Work
            </span>
          </div>

          <div
            className="
              grid grid-cols-1 gap-5
              md:grid-cols-[1fr_auto]
              md:items-end
            "
          >
            <h2
              className="
                m-0 max-w-[850px]
                text-[clamp(1.2rem,2.3vw,1.8rem)]
                font-light leading-[1.5]
                tracking-[-0.025em] text-white/80
              "
            >
              Different rooms. Different systems.

              <span
                className="
                  text-white/35
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/closing:text-white/65
                "
              >
                {' '}One objective: clear, controlled and
                reliable sound.
              </span>
            </h2>

            <span
              className="
                text-[10px] uppercase
                tracking-[0.18em] text-white/35
                motion-safe:transition-colors
                motion-safe:duration-300
                group-hover/closing:text-[#B99B73]
                md:pb-1
              "
            >
              Live Sound Engineer
            </span>
          </div>
        </section>

      </div>
    </PortfolioPage>
  );
}
