import PortfolioPage from '@/components/PortfolioPage';

const capabilityGroups = [
  {
    number: '01',
    title: 'Audio / FOH',
    items: ['Mixing', 'EQ', 'Dynamics', 'FX', 'Gain Structure'],
  },
  {
    number: '02',
    title: 'Monitors',
    items: ['Monitor Sends', 'Mix Buses', 'Feedback Management'],
  },
  {
    number: '03',
    title: 'Stage',
    items: ['Patching', 'Line Check', 'Routing', 'Playback'],
  },
  {
    number: '04',
    title: 'Systems',
    items: ['PA', 'Signal Flow', 'System Routing', 'Stage Monitoring'],
  },
  {
    number: '05',
    title: 'Networked Audio',
    items: [
      'Dante',
      'Dante Controller',
      'Digital Audio Transport',
      'Networked Audio Concepts',
    ],
  },
  {
    number: '06',
    title: 'Production',
    items: [
      'Soundcheck',
      'Changeovers',
      'Troubleshooting',
      'Stage Coordination',
    ],
  },
];

const disciplines = [
  ['FOH', 'Front of House'],
  ['MON', 'Monitor Mixing'],
  ['SYS', 'System Routing'],
  ['NET', 'Networked Audio'],
];

export default function Page04Capabilities() {
  return (
    <PortfolioPage
      pageId="page-capabilities"
      pageNumber=""
      sectionLabel="04 / Capabilities"
    >
      <div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            max-w-[720px]
            pb-[clamp(2.5rem,4vw,3.5rem)]
          "
        >
          <div className="group">

            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span
                className="
                  label-meta-bright
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                TECHNICAL SCOPE
              </span>

              <span
                className="
                  h-px
                  w-7
                  bg-[#333]
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:w-12
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
                text-white
              "
            >
              <span className="text-white">
                Technical
              </span>{' '}

              <span
                className="
                  text-[#777]
                  transition-colors
                  duration-500
                  group-hover:text-[#A5A5A5]
                "
              >
                Capabilities.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-3.5
                max-w-[50ch]
                text-[0.84rem]
                leading-[1.6]
                text-[#747474]
                transition-colors
                duration-500
                group-hover:text-[#888]
              "
            >
              The technical disciplines I work across when preparing,
              operating and troubleshooting a live sound production.
            </p>

          </div>
        </div>


        {/* =====================================================
            TECHNICAL FIELD
        ===================================================== */}

        <div className="border-t border-[#1F1F1F]">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {capabilityGroups.map((group, index) => (
              <article
                key={group.number}
                className={`
                  group
                  relative
                  py-5
                  md:py-6
                  transition-colors
                  duration-500
                  ${index >= 2
                    ? 'border-t border-[#1F1F1F]'
                    : ''
                  }
                  ${index % 2 === 1
                    ? 'md:pl-9'
                    : 'md:pr-9'
                  }
                `}
              >

                {/* Desktop Column Divider */}
                {index % 2 === 1 && (
                  <span
                    className="
                      absolute
                      left-0
                      top-6
                      bottom-6
                      hidden
                      w-px
                      bg-[#1F1F1F]
                      transition-colors
                      duration-500
                      md:block
                      group-hover:bg-[#303030]
                    "
                  />
                )}

                {/* Content */}
                <div className="flex items-start gap-4">

                  {/* Number */}
                  <span
                    className="
                      w-5
                      flex-shrink-0
                      pt-[2px]
                      text-[9px]
                      font-medium
                      tracking-[0.15em]
                      text-[#484848]
                      transition-colors
                      duration-500
                      group-hover:text-[#888]
                    "
                  >
                    {group.number}
                  </span>


                  {/* Main Content */}
                  <div className="min-w-0 flex-1">

                    {/* Title */}
                    <div className="flex items-center gap-3">

                      <h3
                        className="
                          m-0
                          text-[12px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-[#B8B8B8]
                          transition-colors
                          duration-500
                          group-hover:text-white
                        "
                      >
                        {group.title}
                      </h3>

                      <span
                        className="
                          h-px
                          w-5
                          bg-[#292929]
                          transition-all
                          duration-700
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          group-hover:w-9
                          group-hover:bg-[#555]
                        "
                      />

                    </div>


                    {/* Capability Items */}
                    <div
                      className="
                        mt-2.5
                        flex
                        flex-wrap
                        items-center
                        gap-x-3
                        gap-y-1
                      "
                    >
                      {group.items.map((item, itemIndex) => (
                        <span
                          key={item}
                          className="
                            inline-flex
                            items-center
                            text-[11.5px]
                            leading-[1.5]
                            text-[#707070]
                            transition-colors
                            duration-500
                            group-hover:text-[#929292]
                          "
                        >
                          {item}

                          {itemIndex <
                            group.items.length - 1 && (
                              <span
                                className="
                                ml-3
                                text-[#383838]
                                transition-colors
                                duration-500
                                group-hover:text-[#4D4D4D]
                              "
                              >
                                ·
                              </span>
                            )}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>


                {/* Subtle Hover Line */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#666]
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-10
                  "
                />

              </article>
            ))}

          </div>

        </div>


        {/* =====================================================
            PRIMARY DISCIPLINES
        ===================================================== */}

        <div
          className="
            pt-[clamp(2.5rem,4vw,3.5rem)]
          "
        >

          {/* Section Heading */}
          <div className="mb-4 flex items-center gap-3">

            <span
              className="
                label-meta
                transition-colors
                duration-500
                hover:text-[#999]
              "
            >
              PRIMARY DISCIPLINES
            </span>

            <span className="h-px flex-1 bg-[#1F1F1F]" />

          </div>


          {/* Discipline Grid */}
          <div
            className="
              grid
              grid-cols-2
              border-t
              border-[#1F1F1F]
              sm:grid-cols-4
            "
          >

            {disciplines.map(([label, value], index) => (
              <div
                key={label}
                className={`
                  group
                  relative
                  py-3.5
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-[2px]
                  ${index > 0
                    ? 'border-l border-[#1F1F1F]'
                    : ''
                  }
                  ${index % 2 === 0
                    ? 'pr-4'
                    : 'pl-4'
                  }
                  sm:px-4
                `}
              >

                {/* Discipline Code */}
                <span
                  className="
                    block
                    text-[9px]
                    font-semibold
                    tracking-[0.17em]
                    text-[#505050]
                    transition-colors
                    duration-500
                    group-hover:text-[#999]
                  "
                >
                  {label}
                </span>


                {/* Discipline Name */}
                <span
                  className="
                    mt-1
                    block
                    text-[11.5px]
                    font-medium
                    leading-[1.4]
                    text-[#999]
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  {value}
                </span>


                {/* Hover Line */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#666]
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-8
                  "
                />

              </div>
            ))}

          </div>

        </div>

      </div>
    </PortfolioPage>
  );
}