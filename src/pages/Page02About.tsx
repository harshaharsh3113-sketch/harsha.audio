import PortfolioPage from '../components/PortfolioPage';

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

const workflow = [
  'Preparation',
  'Patching',
  'Line Check',
  'Soundcheck',
  'FOH',
  'Monitoring',
  'Troubleshooting',
];

const objectives = [
  ['01', 'Make the system reliable.'],
  ['02', 'Make the mix clear.'],
  ['03', 'Serve the performance.'],
];

export default function Page02About() {
  return (
    <PortfolioPage
      pageId="page-about"
      sectionLabel="02 / About"
    >
      <div className="relative overflow-hidden">
        {/* =====================================================
            AMBIENT DEPTH
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-[12%]
            top-[8%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-white/[0.015]
            blur-[110px]
          "
          aria-hidden="true"
        />

        <div className="relative">

          {/* =====================================================
              OPENING
          ===================================================== */}

          <div className="group max-w-[900px] pb-[clamp(3rem,5vw,4.5rem)]">
            <span
              className="
                label-meta-bright
                mb-5
                block
                transition-all
                duration-300
                group-hover:tracking-[0.24em]
              "
            >
              Approach
            </span>

            <h1
              className="
                m-0
                cursor-default
                text-[clamp(3.2rem,8vw,7.5rem)]
                font-light
                uppercase
                leading-[0.86]
                tracking-[-0.055em]
                text-white
                transition-all
                duration-500
                ease-out
                group-hover:tracking-[-0.045em]
              "
            >
              SOUND IS A
              <br />
              <span
                className="
                  text-white/25
                  transition-colors
                  duration-500
                  group-hover:text-white/45
                "
              >
                DECISION.
              </span>
            </h1>

            <div
              className="
                mt-5
                h-px
                w-16
                bg-white/20
                transition-all
                duration-500
                ease-out
                group-hover:w-28
                group-hover:bg-white/45
              "
            />

            <p
              className="
                mt-6
                max-w-[590px]
                text-[clamp(0.88rem,1.2vw,1rem)]
                leading-[1.65]
                text-white/45
                transition-colors
                duration-300
                group-hover:text-white/60
              "
            >
              The equipment matters. The system matters.
              But the engineer's decisions are what shape the experience.
            </p>
          </div>


          {/* =====================================================
              PROFILE
          ===================================================== */}

          <section
            className="
              border-t
              border-white/10
              py-[clamp(2.5rem,4vw,3.5rem)]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-7
                lg:grid-cols-[0.55fr_1.45fr]
                lg:gap-[7vw]
              "
            >
              {/* Profile identity */}

              <div
                className="
                  group
                  cursor-default
                  transition-transform
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                <span
                  className="
                    label-meta
                    block
                    transition-all
                    duration-300
                    group-hover:text-white/55
                    group-hover:tracking-[0.2em]
                  "
                >
                  Profile
                </span>

                <h2
                  className="
                    mt-3
                    text-[clamp(1.6rem,2.6vw,2.3rem)]
                    font-medium
                    leading-none
                    tracking-[-0.04em]
                    text-white/90
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  Harsha
                </h2>

                <p
                  className="
                    mt-2
                    text-[9px]
                    uppercase
                    tracking-[0.17em]
                    text-white/25
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white/45
                  "
                >
                  Live Sound &amp; FOH Engineer
                </p>

                <div
                  className="
                    mt-4
                    h-px
                    w-8
                    bg-white/15
                    transition-all
                    duration-300
                    group-hover:w-16
                    group-hover:bg-white/40
                  "
                />
              </div>


              {/* Profile description */}

              <div className="max-w-[800px]">
                <p
                  className="
                    m-0
                    max-w-[760px]
                    text-[clamp(1rem,1.45vw,1.2rem)]
                    leading-[1.5]
                    text-white/75
                    transition-colors
                    duration-300
                    hover:text-white/90
                  "
                >
                  I'm Harsha, a Bengaluru-based Live Sound &amp; FOH Engineer
                  focused on live mixing, worship productions, live
                  performances, multi-act events and stage productions.
                </p>

                <p
                  className="
                    mt-5
                    max-w-[720px]
                    text-[clamp(0.82rem,1vw,0.92rem)]
                    leading-[1.7]
                    text-white/40
                    transition-colors
                    duration-300
                    hover:text-white/55
                  "
                >
                  My experience spans church and worship, live performances,
                  weddings, college and cultural productions, corporate events
                  and open-air shows. I work across the live audio workflow,
                  from preparation and patching through soundcheck, FOH
                  operation, monitor support, troubleshooting and live
                  execution.
                </p>

                {/* Workflow */}

                <div
                  className="
                    mt-5
                    flex
                    max-w-[720px]
                    flex-wrap
                    gap-x-3
                    gap-y-1.5
                  "
                >
                  {workflow.map((item, index) => (
                    <span
                      key={item}
                      className="
                        group/workflow
                        relative
                        cursor-default
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/25
                        transition-all
                        duration-200
                        hover:-translate-y-[1px]
                        hover:text-white/70
                      "
                    >
                      {item}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          -bottom-1
                          left-0
                          h-px
                          w-0
                          bg-white/40
                          transition-all
                          duration-300
                          group-hover/workflow:w-full
                        "
                      />

                      {index !== workflow.length - 1 && (
                        <span className="ml-3 text-white/10">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>


          {/* =====================================================
              OBJECTIVE
          ===================================================== */}

          <section
            className="
              border-y
              border-white/10
              py-[clamp(2.5rem,4vw,3.5rem)]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-7
                lg:grid-cols-[0.55fr_1.45fr]
                lg:gap-[7vw]
              "
            >
              <div className="group">
                <span
                  className="
                    label-meta
                    block
                    transition-all
                    duration-300
                    group-hover:text-white/55
                    group-hover:tracking-[0.2em]
                  "
                >
                  Objective
                </span>

                <p
                  className="
                    mt-3
                    max-w-[330px]
                    text-[clamp(1.25rem,2vw,1.75rem)]
                    font-light
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-white
                    transition-all
                    duration-400
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  One objective guides the way I approach every production.
                </p>
              </div>


              <div
                className="
                  grid
                  grid-cols-1
                  gap-6
                  sm:grid-cols-3
                  sm:gap-5
                "
              >
                {objectives.map(([number, text]) => (
                  <div
                    key={number}
                    className="
                      group
                      relative
                      cursor-default
                      border-l
                      border-white/[0.06]
                      pl-4
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/25
                    "
                  >
                    <span
                      className="
                        label-meta
                        block
                        text-white/20
                        transition-all
                        duration-300
                        group-hover:text-white/65
                        group-hover:translate-x-1
                      "
                    >
                      {number}
                    </span>

                    <p
                      className="
                        mt-2
                        max-w-[180px]
                        text-[clamp(0.86rem,1.05vw,0.95rem)]
                        leading-[1.45]
                        text-white/65
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-white/95
                      "
                    >
                      {text}
                    </p>

                    <span
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-white/30
                        transition-all
                        duration-300
                        group-hover:w-10
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* =====================================================
              PHILOSOPHY
          ===================================================== */}

          <section
            className="
              pt-[clamp(3rem,5vw,4.5rem)]
              pb-[clamp(2rem,3vw,3rem)]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-7
                lg:grid-cols-[0.55fr_1.45fr]
                lg:gap-[7vw]
              "
            >
              {/* Philosophy heading */}

              <div
                className="
                  group
                  cursor-default
                  transition-transform
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                <span
                  className="
                    label-meta
                    block
                    transition-all
                    duration-300
                    group-hover:text-white/55
                    group-hover:tracking-[0.2em]
                  "
                >
                  Philosophy
                </span>

                <h2
                  className="
                    mt-3
                    max-w-[280px]
                    text-[clamp(1.7rem,2.8vw,2.4rem)]
                    font-light
                    leading-[0.98]
                    tracking-[-0.04em]
                    text-white/90
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  The way I see FOH.
                </h2>

                <div
                  className="
                    mt-4
                    h-px
                    w-10
                    bg-white/15
                    transition-all
                    duration-300
                    group-hover:w-20
                    group-hover:bg-white/40
                  "
                />
              </div>


              <div className="max-w-[820px]">
                <p
                  className="
                    m-0
                    max-w-[790px]
                    text-[clamp(1rem,1.4vw,1.2rem)]
                    leading-[1.5]
                    text-white/70
                    transition-colors
                    duration-300
                    hover:text-white/90
                  "
                >
                  A console is only a tool. The real work happens in the
                  decisions made around it: understanding the music, the
                  artist, the room and the system.
                </p>

                <p
                  className="
                    mt-5
                    max-w-[750px]
                    text-[clamp(0.82rem,1vw,0.92rem)]
                    leading-[1.7]
                    text-white/38
                    transition-colors
                    duration-300
                    hover:text-white/52
                  "
                >
                  FOH is not simply about making things louder. It is about
                  creating a controlled listening experience where technical
                  work supports the performance instead of distracting from it.
                </p>


                {/* Principles */}

                <div
                  className="
                    mt-8
                    grid
                    grid-cols-1
                    gap-7
                    border-t
                    border-white/10
                    pt-6
                    sm:grid-cols-3
                    sm:gap-5
                  "
                >
                  {principles.map((item) => (
                    <div
                      key={item.number}
                      className="
                        group
                        relative
                        cursor-default
                        transition-all
                        duration-300
                        hover:-translate-y-1
                      "
                    >
                      <span
                        className="
                          label-meta
                          block
                          text-white/20
                          transition-all
                          duration-300
                          group-hover:text-white/65
                          group-hover:translate-x-1
                        "
                      >
                        {item.number}
                      </span>

                      <h3
                        className="
                          mt-3
                          text-[clamp(1rem,1.35vw,1.2rem)]
                          font-medium
                          leading-none
                          tracking-[0.08em]
                          text-white/70
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[190px]
                          text-[10px]
                          leading-[1.5]
                          text-white/32
                          transition-all
                          duration-300
                          group-hover:translate-x-1
                          group-hover:text-white/55
                        "
                      >
                        {item.text}
                      </p>

                      <span
                        className="
                          pointer-events-none
                          absolute
                          bottom-0
                          left-0
                          h-px
                          w-0
                          bg-white/30
                          transition-all
                          duration-400
                          group-hover:w-12
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </PortfolioPage>
  );
}