import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';

const consoles = [
  ['Allen & Heath', 'QU32 · dLive · SQ'],
  ['Yamaha', 'Digital · Analog'],
  ['Behringer', 'X32'],
  ['Midas', 'Digital'],
  ['Soundcraft', 'Ui24R'],
  ['Avid', 'Production exposure · assisted operation'],
  ['DiGiCo', 'Production exposure · assisted operation'],
];

const systemGroups = [
  {
    label: 'FOH & SIGNAL',
    items: [
      'FOH Mixing',
      'Monitor Mixing',
      'Gain Structure',
      'Signal Flow',
      'Patching',
      'System Routing',
      'Soundcheck',
      'Troubleshooting',
    ],
  },
  {
    label: 'PA & STAGE',
    items: [
      'PA Systems',
      'Line Arrays',
      'Subwoofers',
      'Stage Monitoring',
      'Microphones',
      'Wireless / RF',
      'Changeovers',
      'Stage Coordination',
    ],
  },
];

const danteTopics = [
  'Dante Controller',
  'Routing',
  'Clocking',
  'Multicast',
  'QoS',
  'Networked Audio',
];

export default function Page05Technical() {
  return (
    <PortfolioPage
      pageId="page-technical"
      pageNumber=""
      sectionLabel="05 / Technical Capability"
    >
      <div className="flex flex-col">

        {/* =========================================================
            INTRO
        ========================================================= */}

        <section>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div className="group max-w-[650px]">

              <div className="flex items-center gap-3">
                <span className="label-meta-bright transition-all duration-300 group-hover:tracking-[0.18em]">
                  BEHIND THE CONSOLE
                </span>

                <span className="h-px w-10 bg-[#333] transition-all duration-[400ms] group-hover:w-16 group-hover:bg-[#555]" />
              </div>

              <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  Technical
                </span>
                <br />
                <span className="text-white/25 transition-colors duration-500 group-hover:text-white/50">
                  depth matters.
                </span>
              </h2>

              <p className="mt-5 max-w-[52ch] text-[clamp(0.95rem,1.25vw,1.05rem)] leading-[1.7] text-[#858585] transition-colors duration-300 group-hover:text-[#B5B5B5]">
                Live sound extends beyond the mix. Understanding the console,
                system, stage and signal path is what allows the show to remain
                controlled when conditions change.
              </p>

            </div>

            <div className="group">

              <ImageFrame
                src="/image_011.jpg"
                alt="FOH console"
                className="aspect-[16/9] transition-all duration-700 group-hover:brightness-[1.06]"
                overlay
                overlayStrength="light"
              />

              <div className="mt-2.5 flex items-center justify-between">
                <span className="label-meta text-[#454545] transition-colors duration-300 group-hover:text-[#666]">
                  FRONT OF HOUSE
                </span>

                <span className="label-meta text-[#454545] transition-colors duration-300 group-hover:text-[#666]">
                  CONTROL / MIXING
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================
            CONSOLE EXPERIENCE
        ========================================================= */}

        <section className="mt-[clamp(4rem,7vw,5.5rem)]">

          <div className="border-t border-[#1F1F1F] pt-6">

            <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr]">

              <div className="group">

                <span className="label-meta text-[#555] transition-all duration-300 group-hover:tracking-[0.16em] group-hover:text-[#888]">
                  CONSOLE EXPERIENCE
                </span>

                <h3 className="mt-4 max-w-[32ch] text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-[1.3] tracking-[-0.025em] text-[#D0D0D0] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white">
                  Comfortable adapting to different consoles, signal paths and
                  live production workflows.
                </h3>

              </div>

              <div>

                <div className="divide-y divide-[#1F1F1F] border-y border-[#1F1F1F]">

                  {consoles.map(([name, detail], index) => (
                    <div
                      key={name}
                      className="group relative flex min-h-[62px] items-center justify-between gap-6 py-4 transition-colors duration-300 hover:bg-white/[0.014]"
                    >

                      <div className="flex min-w-0 items-center gap-5">

                        <span className="w-5 flex-shrink-0 text-[9px] tabular-nums text-[#3F3F3F] transition-colors duration-300 group-hover:text-[#777]">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span
                          className={`font-medium tracking-[-0.025em] transition-all duration-300 group-hover:translate-x-0.5 ${name === 'Avid' || name === 'DiGiCo'
                            ? 'text-[clamp(1.15rem,1.9vw,1.45rem)] text-[#BDBDBD] group-hover:text-white'
                            : 'text-[clamp(1.05rem,1.7vw,1.25rem)] text-[#9A9A9A] group-hover:text-white'
                            }`}
                        >
                          {name}
                        </span>

                      </div>

                      <span
                        className={`max-w-[300px] text-right leading-[1.45] transition-colors duration-300 ${name === 'Avid' || name === 'DiGiCo'
                          ? 'text-[11px] text-[#666] group-hover:text-[#A0A0A0]'
                          : 'text-[10px] text-[#555] group-hover:text-[#777]'
                          }`}
                      >
                        {detail}
                      </span>

                      <span className="absolute bottom-0 left-0 h-px w-0 bg-[#666] transition-all duration-[400ms] group-hover:w-12" />

                    </div>
                  ))}

                </div>

                <p className="mt-5 max-w-[70ch] text-[0.9rem] leading-[1.7] text-[#777] transition-colors duration-300 hover:text-[#A5A5A5]">
                  Avid and DiGiCo experience has come through close production
                  work and assisting senior engineers during live operation.
                  This provides direct familiarity with their workflows and
                  production environments without overstating independent
                  mixing experience.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================
            SYSTEMS & STAGE
        ========================================================= */}

        <section className="mt-[clamp(4.5rem,7vw,6rem)]">

          <div className="border-t border-[#1F1F1F] pt-6">

            <div className="grid gap-9 lg:grid-cols-[0.52fr_1.48fr]">

              <div className="group">

                <span className="label-meta text-[#555] transition-all duration-300 group-hover:tracking-[0.16em] group-hover:text-[#888]">
                  SYSTEMS & STAGE
                </span>

                <h3 className="mt-4 max-w-[32ch] text-[clamp(1.2rem,1.7vw,1.5rem)] font-medium leading-[1.3] tracking-[-0.025em] text-[#D0D0D0] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white">
                  From patching and soundcheck to PA, stage and signal flow, I
                  understand what keeps a production moving.
                </h3>

              </div>

              <div className="grid gap-8 sm:grid-cols-2">

                {systemGroups.map((group, index) => (
                  <div
                    key={group.label}
                    className="group relative border-t border-[#2A2A2A] pt-4"
                  >

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#666] transition-all duration-300 group-hover:tracking-[0.2em] group-hover:text-[#A0A0A0]">
                        {group.label}
                      </span>

                      <span className="text-[9px] tabular-nums text-[#3F3F3F] transition-colors duration-300 group-hover:text-[#666]">
                        0{index + 1}
                      </span>

                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">

                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="group/item relative cursor-default text-[12px] font-medium leading-[1.5] text-[#777] transition-colors duration-200 hover:text-[#D0D0D0]"
                        >
                          {item}

                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#777] transition-all duration-300 group-hover/item:w-full" />
                        </span>
                      ))}

                    </div>

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-[#666] transition-all duration-[400ms] group-hover:w-14" />

                  </div>
                ))}

              </div>

            </div>

            <div className="mt-9 grid gap-7 border-t border-[#1F1F1F] pt-7 sm:grid-cols-2">

              <div className="group relative">

                <span className="label-meta text-[#555] transition-all duration-300 group-hover:tracking-[0.16em] group-hover:text-[#888]">
                  RF / WIRELESS
                </span>

                <div className="mt-3">
                  <span className="text-[15px] font-medium text-[#C0C0C0] transition-colors duration-300 group-hover:text-white">
                    Basic → Intermediate
                  </span>
                </div>

                <p className="mt-3 max-w-[50ch] text-[0.9rem] leading-[1.7] text-[#707070] transition-colors duration-300 group-hover:text-[#9A9A9A]">
                  Working knowledge of wireless microphone setup, frequency
                  awareness, RF fundamentals and practical coordination during
                  live production.
                </p>

                <span className="absolute -bottom-4 left-0 h-px w-0 bg-[#555] transition-all duration-[400ms] group-hover:w-10" />

              </div>

              <div className="group relative sm:border-l sm:border-[#1F1F1F] sm:pl-8">

                <span className="label-meta text-[#555] transition-all duration-300 group-hover:tracking-[0.16em] group-hover:text-[#888]">
                  PA / STAGE
                </span>

                <p className="mt-3 max-w-[50ch] text-[0.9rem] leading-[1.7] text-[#707070] transition-colors duration-300 group-hover:text-[#9A9A9A]">
                  Practical understanding of speaker, microphone and cable
                  selection, line arrays, subs, monitors, rigging awareness
                  and signal flow.
                </p>

                <span className="absolute -bottom-4 left-0 h-px w-0 bg-[#555] transition-all duration-[400ms] group-hover:w-10" />

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================
            NETWORKED AUDIO / DANTE
        ========================================================= */}

        <section className="mt-[clamp(4.5rem,7vw,6rem)]">

          <div className="group relative border-y border-[#1F1F1F]">

            <span className="absolute left-0 top-0 h-px w-0 bg-[#777] transition-all duration-700 group-hover:w-28" />

            <div className="grid lg:grid-cols-[0.52fr_1.48fr]">

              <div className="border-b border-[#1F1F1F] py-7 lg:border-b-0 lg:border-r lg:py-8 lg:pr-9">

                <span className="label-meta text-[#555] transition-all duration-300 group-hover:tracking-[0.18em] group-hover:text-[#888]">
                  NETWORKED AUDIO
                </span>

                <div className="mt-6">

                  <span className="block text-[clamp(2.8rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.065em] text-[#C8C8C8] transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-white">
                    Dante
                  </span>

                  <p className="mt-2 text-[clamp(0.95rem,1.3vw,1.1rem)] font-medium leading-[1.4] tracking-[-0.015em] text-[#8A8A8A] transition-colors duration-300 group-hover:text-[#C0C0C0]">
                    Certified.
                  </p>

                  <div className="mt-3 flex items-center gap-3">

                    <span className="h-px w-7 bg-[#3A3A3A] transition-all duration-500 group-hover:w-12 group-hover:bg-[#666]" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#666] transition-colors duration-300 group-hover:text-[#999]">
                      LEVEL 1 · 2 · 3
                    </span>

                  </div>

                </div>

              </div>

              <div className="py-7 lg:py-8 lg:pl-9">

                <div className="max-w-[700px]">

                  <p className="text-[clamp(1.1rem,1.7vw,1.4rem)] font-medium leading-[1.45] tracking-[-0.02em] text-[#C5C5C5] transition-colors duration-300 group-hover:text-white">
                    Certified across all three levels, with practical knowledge
                    of Dante-based audio workflows and networked signal
                    transport.
                  </p>

                  <p className="mt-4 max-w-[62ch] text-[0.9rem] leading-[1.7] text-[#707070] transition-colors duration-300 group-hover:text-[#999]">
                    Working knowledge includes Dante Controller, routing,
                    clocking, multicast, QoS and the fundamentals of networked
                    audio used in live production.
                  </p>

                </div>

                <div className="mt-7 border-t border-[#1F1F1F] pt-5">

                  <div className="flex flex-wrap gap-x-7 gap-y-3.5">

                    {danteTopics.map((item, index) => (
                      <div
                        key={item}
                        className="group/item flex items-center gap-2"
                      >

                        <span className="text-[8px] tabular-nums text-[#3F3F3F] transition-colors duration-300 group-hover/item:text-[#777]">
                          0{index + 1}
                        </span>

                        <span className="relative text-[12px] font-medium tracking-[0.035em] text-[#686868] transition-all duration-200 group-hover/item:-translate-y-0.5 group-hover/item:text-[#C0C0C0]">
                          {item}

                          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#777] transition-all duration-300 group-hover/item:w-full" />
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================
            INDEPENDENT OPERATION
        ========================================================= */}

        <section className="mt-[clamp(5rem,8vw,6.5rem)]">

          <div className="group border-t border-[#1F1F1F] pt-7">

            <div className="grid gap-8 lg:grid-cols-[0.52fr_1.48fr] lg:items-end">

              <div>

                <span className="label-meta text-[#555] transition-all duration-300 group-hover:tracking-[0.17em] group-hover:text-[#888]">
                  INDEPENDENT OPERATION
                </span>

              </div>

              <div>

                <h3 className="max-w-[800px] text-[clamp(2.3rem,4.5vw,4rem)] font-medium leading-[0.96] tracking-[-0.055em] text-[#C8C8C8] transition-colors duration-500 group-hover:text-white">
                  Know the system.
                  <br />
                  <span className="text-white/25 transition-colors duration-500 group-hover:text-white/45">
                    Run the show.
                  </span>
                </h3>

                <p className="mt-5 max-w-[65ch] text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.75] text-[#707070] transition-colors duration-300 group-hover:text-[#A0A0A0]">
                  I can independently take responsibility for setup, patching,
                  line check, soundcheck, mixing, monitoring, troubleshooting,
                  changeovers and live operation.
                </p>

              </div>

            </div>

            <div className="mt-7 h-px w-14 bg-[#3D3D3D] transition-all duration-500 group-hover:w-28 group-hover:bg-[#666]" />

          </div>

        </section>

      </div>
    </PortfolioPage>
  );
}