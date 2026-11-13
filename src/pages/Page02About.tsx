
import PortfolioPage from '../components/PortfolioPage';

const workflow = [
  'Preparation',
  'Patching',
  'Line Check',
  'Soundcheck',
  'FOH',
  'Monitoring',
  'Troubleshooting',
];

const experience = [
  {
    period: '01',
    title: 'Church & Worship',
    description:
      'Six years around church worship teams and live sound, building an understanding of music, stage requirements, live mixing and the role of audio in a worship production.',
  },
  {
    period: '02',
    title: 'Live Productions',
    description:
      'Hands-on involvement in live performances, weddings, college productions, cultural events and open-air shows, working across changing stage setups and production requirements.',
  },
  {
    period: '03',
    title: 'Console Experience',
    description:
      'Around three years of exposure to professional digital mixing consoles, developing familiarity with larger console workflows, routing, processing and live operation.',
  },
  {
    period: '04',
    title: 'Independent Learning',
    description:
      'A self-driven approach to learning live audio through practical experience, observation, technical exploration and continuous development alongside experienced engineers.',
  },
];

const objectives = [
  { number: '01', text: 'Build a reliable system.' },
  { number: '02', text: 'Deliver a clear, balanced mix.' },
  { number: '03', text: 'Keep the performance in focus.' },
];

const principles = [
  {
    number: '01',
    title: 'CLARITY.',
    text: 'Every source has a purpose.',
  },
  {
    number: '02',
    title: 'BALANCE.',
    text: 'The mix supports the performance.',
  },
  {
    number: '03',
    title: 'CONTROL.',
    text: 'Signal and dynamics remain predictable.',
  },
];

export default function Page02About() {
  return (
    <PortfolioPage
      pageId="page-about"
      sectionLabel="02 / About"
    >
      <div className="group/page relative isolate">

        {/* BACKGROUND ACCENT */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 top-0 -z-10
            h-[420px] w-[420px]
            rounded-full bg-[#B99B73]/[0.035]
            blur-[120px]
          "
        />


        {/* 01. APPROACH */}

        <section
          className="
            group/approach reveal-up
            pb-[clamp(4.5rem,9vw,8rem)]
          "
        >
          <div className="mb-8 flex items-center gap-4">
            <span
              className="
                h-px w-8 bg-[#B99B73]
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/approach:w-14
              "
            />

            <span className="label-meta text-[#B99B73]">
              Approach
            </span>
          </div>

          <div
            className="
              grid grid-cols-1 gap-8
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
              SOUND IS
              <br />
              <span
                className="
                  text-white/25
                  motion-safe:transition-colors
                  motion-safe:duration-700
                  group-hover/approach:text-white/45
                "
              >
                A DECISION.
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
                The thinking behind the mix
              </span>

              <p
                className="
                  border-l border-[#B99B73]/60
                  pl-5 text-[clamp(0.9rem,1.15vw,1rem)]
                  leading-[1.9] text-white/50
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/approach:text-white/70
                "
              >
                The equipment matters. The system matters.
                But the engineer's decisions are what shape
                the experience.
              </p>
            </div>
          </div>
        </section>


        {/* 02. PROFILE */}

        <section
          className="
            group/profile border-t border-white/10
            py-[clamp(3rem,6vw,5.5rem)]
            reveal-up
          "
        >
          <div
            className="
              mb-8 flex flex-wrap
              items-center justify-between gap-3
            "
          >
            <span className="label-meta">
              Profile / The Engineer
            </span>

            <span
              className="
                text-[9px] uppercase
                tracking-[0.18em] text-white/25
              "
            >
              Bengaluru, India
            </span>
          </div>

          <div
            className="
              grid grid-cols-1 gap-9
              md:grid-cols-[0.9fr_1.1fr]
              lg:grid-cols-[0.85fr_1.15fr]
              lg:gap-[8vw]
            "
          >

            {/* PORTRAIT */}

            <div className="group/portrait max-w-[460px]">
              <div className="relative overflow-hidden bg-[#171717]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/image_10.jpg"
                    alt="Harsha, Live Sound Engineer"
                    loading="lazy"
                    className="
                      h-full w-full object-cover
                      object-center
                      motion-safe:transition-transform
                      motion-safe:duration-1000
                      motion-safe:ease-out
                      group-hover/portrait:scale-[1.035]
                      group-active/portrait:scale-[1.015]
                    "
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-t
                    from-black/45 via-transparent to-transparent
                    opacity-70
                    motion-safe:transition-opacity
                    motion-safe:duration-500
                    group-hover/portrait:opacity-100
                  "
                />

                <span
                  className="
                    absolute bottom-5 left-5
                    text-[9px] uppercase
                    tracking-[0.2em] text-white/70
                    motion-safe:transition-transform
                    motion-safe:duration-500
                    group-hover/portrait:translate-x-1
                  "
                >
                  HARSHA / 01
                </span>

                <span
                  className="
                    pointer-events-none absolute
                    right-5 top-5 h-2 w-2
                    rounded-full border
                    border-[#B99B73]/70
                    bg-[#B99B73]/30
                    opacity-0
                    motion-safe:transition-opacity
                    motion-safe:duration-500
                    group-hover/portrait:opacity-100
                  "
                />
              </div>

              <div
                className="
                  mt-6 flex items-end
                  justify-between gap-4
                "
              >
                <div>
                  <h2
                    className="
                      m-0 text-[clamp(2.5rem,5vw,4.2rem)]
                      font-light leading-[0.9]
                      tracking-[-0.065em] text-white
                      motion-safe:transition-colors
                      motion-safe:duration-500
                      group-hover/portrait:text-white/85
                    "
                  >
                    HARSHA<span className="text-[#B99B73]">.</span>
                  </h2>

                  <p
                    className="
                      mt-3 text-[9px] uppercase
                      tracking-[0.19em] text-white/45
                    "
                  >
                    Live Sound Engineer
                  </p>
                </div>

                <span
                  className="
                    pb-1 text-[9px]
                    tracking-[0.15em] text-white/25
                  "
                >
                  BLR / IN
                </span>
              </div>
            </div>


            {/* PROFILE CONTENT */}

            <div className="flex flex-col justify-center md:py-5">
              <span
                className="
                  mb-6 text-[10px] uppercase
                  tracking-[0.2em] text-[#B99B73]
                "
              >
                Behind the Console
              </span>

              <p
                className="
                  max-w-[720px]
                  text-[clamp(1.15rem,1.9vw,1.65rem)]
                  font-light leading-[1.55]
                  tracking-[-0.025em] text-white/85
                "
              >
                I'm Harsha, a Bengaluru-based Live Sound Engineer
                with a background in church and worship productions,
                live performances and event audio.
              </p>

              <p
                className="
                  mt-7 max-w-[690px]
                  text-[clamp(0.85rem,1vw,0.96rem)]
                  leading-[1.95] text-white/45
                "
              >
                My journey in live sound began through church worship
                teams, where I've been involved with live audio for
                over six years. What started as an early interest
                gradually developed into a hands-on pursuit of live
                sound engineering, driven by independent learning
                and practical experience.
              </p>

              <p
                className="
                  mt-5 max-w-[690px]
                  text-[clamp(0.85rem,1vw,0.96rem)]
                  leading-[1.95] text-white/45
                "
              >
                Over the past three years, I've gained exposure to
                larger professional digital consoles and more
                complex live audio workflows. My production
                experience includes church and worship, weddings,
                live performances, college and cultural events,
                corporate productions and open-air shows.
              </p>

              <p
                className="
                  mt-5 max-w-[690px]
                  text-[clamp(0.85rem,1vw,0.96rem)]
                  leading-[1.95] text-white/45
                "
              >
                Today, I work across preparation, patching,
                soundchecks, FOH mixing, stage audio, monitoring
                and troubleshooting, with an emphasis on reliable
                execution and keeping the performance at the centre
                of every production.
              </p>


              {/* EXPERIENCE SNAPSHOT */}

              <div
                className="
                  mt-10 grid grid-cols-2 gap-6
                  border-y border-white/10 py-6
                  sm:grid-cols-3
                "
              >
                <div>
                  <span
                    className="
                      block text-[clamp(1.8rem,3vw,2.6rem)]
                      font-light leading-none
                      tracking-[-0.06em] text-white
                    "
                  >
                    6+
                  </span>
                  <span
                    className="
                      mt-3 block max-w-[120px]
                      text-[9px] uppercase
                      leading-[1.7] tracking-[0.14em]
                      text-white/35
                    "
                  >
                    Years around live sound
                  </span>
                </div>

                <div>
                  <span
                    className="
                      block text-[clamp(1.8rem,3vw,2.6rem)]
                      font-light leading-none
                      tracking-[-0.06em] text-white
                    "
                  >
                    3+
                  </span>
                  <span
                    className="
                      mt-3 block max-w-[130px]
                      text-[9px] uppercase
                      leading-[1.7] tracking-[0.14em]
                      text-white/35
                    "
                  >
                    Years around larger consoles
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span
                    className="
                      block text-[clamp(1.15rem,2vw,1.5rem)]
                      font-light leading-none
                      tracking-[-0.04em] text-white
                    "
                  >
                    SELF-TAUGHT
                  </span>
                  <span
                    className="
                      mt-3 block max-w-[140px]
                      text-[9px] uppercase
                      leading-[1.7] tracking-[0.14em]
                      text-white/35
                    "
                  >
                    Built through practice and independent learning
                  </span>
                </div>
              </div>


              {/* WORKFLOW */}

              <div
                className="
                  group/workflow mt-9
                  border-t border-white/10 pt-6
                "
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="
                      h-px w-5 bg-[#B99B73]/60
                      motion-safe:transition-all
                      motion-safe:duration-500
                      group-hover/workflow:w-9
                    "
                  />

                  <span
                    className="
                      text-[9px] uppercase
                      tracking-[0.2em] text-white/25
                    "
                  >
                    Across the workflow
                  </span>
                </div>

                <div
                  className="
                    flex max-w-[600px]
                    flex-wrap gap-x-3 gap-y-3
                  "
                >
                  {workflow.map((item, index) => (
                    <span
                      key={item}
                      className="
                        inline-flex items-center
                        text-[9px] uppercase
                        tracking-[0.13em] text-white/45
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        hover:text-[#B99B73]
                        active:text-[#B99B73]
                      "
                    >
                      <span>{item}</span>

                      {index !== workflow.length - 1 && (
                        <span className="ml-3 text-[#B99B73]/60">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 03. EXPERIENCE */}

        <section
          className="
            group/experience border-y border-white/10
            py-[clamp(3.5rem,7vw,6rem)]
            reveal-up
          "
        >
          <div
            className="
              grid grid-cols-1 gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-[8vw]
            "
          >
            <div>
              <span className="label-meta text-[#B99B73]">
                Experience
              </span>

              <h2
                className="
                  mt-6 max-w-[390px]
                  text-[clamp(2.3rem,4.7vw,4.3rem)]
                  font-light leading-[0.98]
                  tracking-[-0.06em] text-white
                "
              >
                Built through
                <br />
                <span
                  className="
                    text-white/25
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/experience:text-white/45
                  "
                >
                  experience.
                </span>
              </h2>

              <p
                className="
                  mt-7 max-w-[330px]
                  text-[clamp(0.85rem,1vw,0.96rem)]
                  leading-[1.9] text-white/40
                "
              >
                Different stages, performers and technical
                requirements have shaped the way I approach
                live audio and production.
              </p>

              <div
                className="
                  mt-7 h-px w-8 bg-[#B99B73]/55
                  motion-safe:transition-all
                  motion-safe:duration-500
                  group-hover/experience:w-16
                "
              />
            </div>

            <div className="flex flex-col">
              {experience.map((item) => (
                <article
                  key={item.period}
                  className="
                    group/experience-row
                    border-b border-white/10
                    py-6 first:pt-0
                  "
                >
                  <div className="flex items-start gap-5 sm:gap-7">
                    <span
                      className="
                        pt-1 text-[10px] tabular-nums
                        tracking-[0.15em] text-[#B99B73]/65
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        group-hover/experience-row:text-[#B99B73]
                      "
                    >
                      {item.period}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          m-0 text-[clamp(1.1rem,1.8vw,1.5rem)]
                          font-light tracking-[-0.025em]
                          text-white/85
                          motion-safe:transition-colors
                          motion-safe:duration-300
                          group-hover/experience-row:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3 max-w-[620px]
                          text-[clamp(0.82rem,0.95vw,0.92rem)]
                          leading-[1.9] text-white/40
                          motion-safe:transition-colors
                          motion-safe:duration-300
                          group-hover/experience-row:text-white/55
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        mt-2 h-px w-0 shrink-0
                        bg-[#B99B73]
                        motion-safe:transition-all
                        motion-safe:duration-500
                        group-hover/experience-row:w-7
                        sm:group-hover/experience-row:w-10
                      "
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>


        {/* 04. OBJECTIVE */}

        <section
          className="
            group/objective
            py-[clamp(3.5rem,7vw,6rem)]
            reveal-up
          "
        >
          <div
            className="
              grid grid-cols-1 gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-[8vw]
            "
          >
            <div>
              <span className="label-meta text-[#B99B73]">
                Objective
              </span>

              <h2
                className="
                  mt-6 max-w-[390px]
                  text-[clamp(2.3rem,4.7vw,4.3rem)]
                  font-light leading-[0.98]
                  tracking-[-0.06em] text-white
                "
              >
                One objective.
                <br />
                <span
                  className="
                    text-white/25
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/objective:text-white/45
                  "
                >
                  Every production.
                </span>
              </h2>

              <div
                className="
                  mt-7 h-px w-8 bg-[#B99B73]/55
                  motion-safe:transition-all
                  motion-safe:duration-500
                  group-hover/objective:w-16
                "
              />
            </div>

            <div className="flex flex-col">
              {objectives.map((item) => (
                <div
                  key={item.number}
                  className="
                    group/objective-row relative
                    flex items-center gap-4
                    border-b border-white/10
                    px-2 py-6
                    transition-colors duration-300
                    hover:bg-white/[0.02]
                    active:bg-white/[0.04]
                    sm:gap-6
                  "
                >
                  <span
                    className="
                      shrink-0 text-[11px]
                      tabular-nums tracking-[0.15em]
                      text-[#B99B73]/65
                      motion-safe:transition-all
                      motion-safe:duration-300
                      group-hover/objective-row:translate-x-1
                      group-hover/objective-row:text-[#B99B73]
                    "
                  >
                    {item.number}
                  </span>

                  <p
                    className="
                      m-0 text-[clamp(1rem,1.65vw,1.45rem)]
                      font-light tracking-[-0.025em]
                      text-white/65
                      motion-safe:transition-all
                      motion-safe:duration-300
                      group-hover/objective-row:translate-x-1
                      group-hover/objective-row:text-white
                    "
                  >
                    {item.text}
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      ml-auto h-px w-0 shrink-0
                      bg-[#B99B73]
                      motion-safe:transition-all
                      motion-safe:duration-500
                      group-hover/objective-row:w-7
                      sm:group-hover/objective-row:w-10
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 05. PHILOSOPHY */}

        <section
          className="
            border-t border-white/10
            py-[clamp(4rem,8vw,7rem)]
            reveal-up
          "
        >
          <div
            className="
              grid grid-cols-1 gap-9
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-[8vw]
            "
          >
            <div className="group/philosophy">
              <span className="label-meta text-[#B99B73]">
                Philosophy
              </span>

              <h2
                className="
                  mt-6 text-[clamp(2.6rem,5.5vw,5rem)]
                  font-light leading-[0.9]
                  tracking-[-0.065em] text-white
                "
              >
                The way
                <br />
                I see
                <br />
                <span
                  className="
                    text-white/25
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/philosophy:text-white/45
                  "
                >
                  FOH.
                </span>
              </h2>

              <div
                className="
                  mt-7 h-px w-8 bg-[#B99B73]/55
                  motion-safe:transition-all
                  motion-safe:duration-500
                  group-hover/philosophy:w-16
                "
              />
            </div>

            <div className="max-w-[800px]">
              <p
                className="
                  text-[clamp(1.05rem,1.7vw,1.45rem)]
                  font-light leading-[1.65]
                  tracking-[-0.02em] text-white/75
                "
              >
                A console is only a tool. The real work happens
                in the decisions made around it: understanding
                the music, the artist, the room and the system.
              </p>

              <p
                className="
                  mt-6 max-w-[720px]
                  text-[clamp(0.85rem,1vw,0.96rem)]
                  leading-[1.95] text-white/40
                "
              >
                FOH is not simply about making things louder.
                It is about creating a controlled listening
                experience where technical work supports the
                performance instead of distracting from it.
              </p>

              {/* PRINCIPLES */}

              <div
                className="
                  mt-14 grid grid-cols-1
                  gap-8 border-t border-white/10
                  pt-7 sm:grid-cols-3 sm:gap-6
                "
              >
                {principles.map((item) => (
                  <div
                    key={item.number}
                    className="
                      group/principle relative
                      border-b border-white/[0.06]
                      pb-6 sm:border-b-0 sm:pb-0
                    "
                  >
                    <span
                      className="
                        text-[10px] tabular-nums
                        tracking-[0.15em] text-[#B99B73]/65
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        group-hover/principle:text-[#B99B73]
                      "
                    >
                      {item.number}
                    </span>

                    <h3
                      className="
                        mt-5 text-[clamp(1rem,1.4vw,1.2rem)]
                        font-medium tracking-[0.08em]
                        text-white/80
                        motion-safe:transition-all
                        motion-safe:duration-300
                        group-hover/principle:translate-x-1
                        group-hover/principle:text-[#B99B73]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3 max-w-[190px]
                        text-[11px] leading-[1.8]
                        text-white/35
                        motion-safe:transition-colors
                        motion-safe:duration-300
                        group-hover/principle:text-white/60
                      "
                    >
                      {item.text}
                    </p>

                    <span
                      className="
                        mt-5 block h-px w-0
                        bg-[#B99B73]/60
                        motion-safe:transition-all
                        motion-safe:duration-500
                        group-hover/principle:w-10
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* 06. CLOSING STATEMENT */}

          <div
            className="
              group/closing
              mt-[clamp(5rem,9vw,8rem)]
              border-t border-white/10
              pt-8 md:pt-10
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
                The way I work
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
                  m-0 max-w-[760px]
                  text-[clamp(1.2rem,2.3vw,1.8rem)]
                  font-light leading-[1.5]
                  tracking-[-0.025em] text-white/80
                "
              >
                Listen first. Understand the system.
                <span
                  className="
                    text-white/35
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/closing:text-white/65
                  "
                >
                  {' '}Make every decision count.
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
          </div>
        </section>
      </div>
    </PortfolioPage>
  );
}
