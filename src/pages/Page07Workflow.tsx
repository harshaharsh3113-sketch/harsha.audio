import PortfolioPage from '@/components/PortfolioPage';

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
      'Keep the system controlled and the mix musical so the audience experiences the performance, not the engineering.',
    tags: ['CONTROL', 'CONSISTENCY', 'FOCUS'],
  },
];

const principles = [
  {
    number: '01',
    title: 'Clarity',
    description: 'Make every element earn its place.',
  },
  {
    number: '02',
    title: 'Control',
    description: 'Keep the system predictable under pressure.',
  },
  {
    number: '03',
    title: 'Musicality',
    description: 'Technical decisions still have to sound good.',
  },
  {
    number: '04',
    title: 'Reliability',
    description: 'Prepare properly so the show can keep moving.',
  },
];

export default function Page07Workflow() {
  return (
    <PortfolioPage
      pageId="page-workflow"
      pageNumber=""
      sectionLabel="07 / Workflow & Approach"
    >
      <div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="pb-[clamp(2.5rem,4vw,3.5rem)]">

          <div
            className="
              group
              max-w-[720px]
            "
          >

            {/* Label */}

            <div className="flex items-center gap-3">

              <span
                className="
                  label-meta-bright
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                APPROACH
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-[#333]
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:w-14
                  group-hover:bg-[#666]
                "
              />

            </div>


            {/* Heading */}

            <h2
              className="
                mt-3
                text-[clamp(2.2rem,4.6vw,3.8rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
              "
            >
              <span
                className="
                  text-white
                  transition-colors
                  duration-500
                "
              >
                How I
              </span>{' '}

              <span
                className="
                  text-[#777]
                  transition-colors
                  duration-500
                  group-hover:text-[#A5A5A5]
                "
              >
                Work.
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                mt-3.5
                max-w-[54ch]
                text-[0.84rem]
                leading-[1.65]
                text-[#747474]
                transition-colors
                duration-500
                group-hover:text-[#888]
              "
            >
              Every production is different. My approach is to prepare
              thoroughly, understand the system, listen to what is actually
              happening and make controlled decisions throughout the show.
            </p>


            {/* Small hover signal */}

            <span
              className="
                mt-4
                block
                h-px
                w-0
                bg-[#444]
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:w-16
              "
            />

          </div>

        </section>


        {/* =====================================================
            WORKFLOW
        ===================================================== */}

        <section>

          <div className="flex items-center gap-3">

            <span className="label-meta-bright">
              WORKFLOW
            </span>

            <span className="h-px flex-1 bg-[#1F1F1F]" />

            <span
              className="
                hidden
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-[#414141]
                sm:block
              "
            >
              01 — 06
            </span>

          </div>


          <div
            className="
              relative
              mt-3
              border-t
              border-[#1F1F1F]
            "
          >

            {/* Continuous signal rail */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[10px]
                top-0
                hidden
                w-px
                bg-[#242424]
                md:block
              "
            />

            {workflow.map((step) => (
              <article
                key={step.number}
                className="
                  group
                  relative
                  border-b
                  border-[#1F1F1F]
                  py-4.5
                  transition-colors
                  duration-500
                  hover:bg-[#0D0D0D]
                  md:py-5
                "
              >

                {/* Active rail */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-px
                    bg-[#555]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Signal pulse */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/2
                    h-px
                    w-0
                    bg-[#777]
                    opacity-0
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-[72px]
                    group-hover:opacity-100
                  "
                />


                <div
                  className="
                    relative
                    z-10
                    grid
                    grid-cols-1
                    gap-3.5
                    md:grid-cols-[56px_minmax(0,1fr)_auto]
                    md:items-center
                    md:gap-6
                  "
                >

                  {/* =================================================
                      STEP MARKER
                  ================================================= */}

                  <div
                    className="
                      relative
                      flex
                      items-center
                      gap-3
                      md:block
                    "
                  >

                    <span
                      className="
                        relative
                        z-20
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#303030]
                        bg-[#0B0B0B]
                        text-[7px]
                        font-medium
                        tracking-[0.08em]
                        text-[#555]
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.08]
                        group-hover:border-[#777]
                        group-hover:bg-[#151515]
                        group-hover:text-white
                      "
                    >
                      {step.number}
                    </span>

                    <span
                      className="
                        block
                        h-px
                        w-5
                        bg-[#292929]
                        transition-all
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:w-10
                        group-hover:bg-[#666]
                        md:ml-[21px]
                        md:mt-2
                      "
                    />

                  </div>


                  {/* =================================================
                      MAIN CONTENT
                  ================================================= */}

                  <div
                    className="
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:translate-x-[3px]
                    "
                  >

                    <div className="flex items-center gap-3">

                      <h3
                        className="
                          text-[15.5px]
                          font-medium
                          tracking-[-0.02em]
                          text-[#AFAFAF]
                          transition-colors
                          duration-500
                          group-hover:text-white
                        "
                      >
                        {step.title}
                      </h3>

                      <span
                        className="
                          h-px
                          w-0
                          bg-[#555]
                          transition-all
                          duration-700
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          group-hover:w-8
                        "
                      />

                    </div>

                    <p
                      className="
                        mt-1.5
                        max-w-[62ch]
                        text-[12px]
                        leading-[1.6]
                        text-[#686868]
                        transition-colors
                        duration-500
                        group-hover:text-[#8E8E8E]
                      "
                    >
                      {step.description}
                    </p>

                  </div>


                  {/* =================================================
                      TECHNICAL TAGS
                  ================================================= */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-x-3
                      gap-y-1.5
                      md:justify-end
                    "
                  >

                    {step.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="
                          group/tag
                          flex
                          cursor-default
                          items-center
                          gap-2
                          text-[9.5px]
                          font-medium
                          uppercase
                          tracking-[0.13em]
                          text-[#505050]
                          transition-all
                          duration-500
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          group-hover:text-[#777]
                          hover:translate-y-[-1px]
                          hover:text-white
                        "
                      >

                        <span
                          className="
                            transition-transform
                            duration-500
                            ease-[cubic-bezier(0.22,1,0.36,1)]
                            group-hover/tag:translate-x-[1px]
                          "
                        >
                          {tag}
                        </span>

                        {tagIndex < step.tags.length - 1 && (
                          <span
                            className="
                              text-[#292929]
                              transition-colors
                              duration-500
                              group-hover:text-[#444]
                              group-hover/tag:text-[#666]
                            "
                          >
                            /
                          </span>
                        )}

                      </span>
                    ))}

                  </div>

                </div>


                {/* Bottom active signal */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#777]
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-16
                  "
                />

              </article>
            ))}

          </div>

        </section>


        {/* =====================================================
            UNDER PRESSURE
        ===================================================== */}

        <section
          className="
            mt-[clamp(2.75rem,4vw,3.75rem)]
          "
        >

          <div className="flex items-center gap-3">

            <span className="label-meta-bright">
              UNDER PRESSURE
            </span>

            <span className="h-px flex-1 bg-[#1F1F1F]" />

          </div>


          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-5
              md:grid-cols-[1fr_240px]
              md:items-start
            "
          >

            <div
              className="
                group
                border-l
                border-[#343434]
                pl-5
                transition-colors
                duration-500
                hover:border-[#555]
              "
            >

              <p
                className="
                  max-w-[680px]
                  text-[clamp(1rem,1.6vw,1.2rem)]
                  font-medium
                  leading-[1.5]
                  tracking-[-0.015em]
                  text-[#BDBDBD]
                  transition-colors
                  duration-500
                  group-hover:text-[#D6D6D6]
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
                text-[11.5px]
                leading-[1.65]
                text-[#626262]
              "
            >
              During a performance, technical problems need to be solved
              without becoming part of the show.
            </p>

          </div>

        </section>


        {/* =====================================================
            WHAT MATTERS
        ===================================================== */}

        <section
          className="
            mt-[clamp(3rem,5vw,4rem)]
          "
        >

          <div className="flex items-center gap-3">

            <span className="label-meta-bright">
              WHAT MATTERS
            </span>

            <span className="h-px flex-1 bg-[#1F1F1F]" />

          </div>


          <div
            className="
              mt-4
              grid
              grid-cols-1
              sm:grid-cols-2
            "
          >

            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`
                  group
                  relative
                  py-4
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:translate-x-[3px]
                  ${index >= 2
                    ? 'border-t border-[#1F1F1F]'
                    : ''
                  }
                  ${index % 2 === 1
                    ? 'sm:border-l sm:border-[#1F1F1F] sm:pl-6'
                    : 'sm:pr-6'
                  }
                `}
              >

                <div className="flex items-center gap-3">

                  <span
                    className="
                      text-[8px]
                      tracking-[0.15em]
                      text-[#414141]
                      transition-colors
                      duration-500
                      group-hover:text-[#888]
                    "
                  >
                    {principle.number}
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#777]
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  >
                    {principle.title}
                  </span>

                  <span
                    className="
                      h-px
                      w-0
                      bg-[#555]
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:w-6
                    "
                  />

                </div>

                <p
                  className="
                    mt-1.5
                    pl-7
                    text-[11.5px]
                    leading-[1.55]
                    text-[#606060]
                    transition-colors
                    duration-500
                    group-hover:text-[#858585]
                  "
                >
                  {principle.description}
                </p>

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#555]
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-8
                  "
                />

              </div>
            ))}

          </div>

        </section>

      </div>
    </PortfolioPage>
  );
}