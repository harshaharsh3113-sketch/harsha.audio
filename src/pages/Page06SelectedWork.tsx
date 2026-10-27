import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';

interface Production {
  number: string;
  title: string;
  location: string;
  role: string;
  image: string;
  imageAlt: string;
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
    imageAlt: 'Church and worship production, FOH operation',
    description:
      'Live worship production involving a full band, choir, lead vocal, stage monitoring and live telecasting.',
    technical: [
      {
        label: 'CONSOLE',
        value: 'Allen & Heath QU32',
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
    imageAlt: 'Classical live production, stage setup',
    description:
      'Classical live production combining vocals, traditional percussion and melodic instruments within a compact multi-monitor stage setup.',
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
    imageAlt: 'Open-air live production, line-array system',
    description:
      'Live university band production in an open-air environment with a full-band stage setup and large audience area.',
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
    imageAlt: 'Private wedding production, full band setup',
    description:
      'Full-band wedding production involving multiple vocalists, drums, guitars, keys and live stage monitoring.',
    technical: [
      {
        label: 'CONSOLE',
        value: 'Allen & Heath QU32',
      },
      {
        label: 'SYSTEM',
        value:
          'QSC LA112 line-array · QSC KS118 subwoofers · QSC K.2 monitors',
      },
      {
        label: 'CONTROL',
        value:
          'FOH mixing from console · iPad remote control · Mac-based production support',
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
   PRODUCTION INFORMATION
========================================================= */

function ProductionInfo({
  production,
}: {
  production: Production;
}) {
  return (
    <div
      className="
        flex
        flex-col
        transition-transform
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:-translate-y-[3px]
      "
    >
      {/* Project Meta */}
      <div className="flex items-center gap-3">
        <span
          className="
            text-[9px]
            font-medium
            tracking-[0.14em]
            text-[#666]
            transition-colors
            duration-500
            group-hover:text-white
          "
        >
          {production.number}
        </span>

        <span
          className="
            h-px
            w-5
            bg-[#303030]
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:w-10
            group-hover:bg-[#666]
          "
        />

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.14em]
            text-[#505050]
            transition-colors
            duration-500
            group-hover:text-[#858585]
          "
        >
          {production.location}
        </span>
      </div>

      {/* Title */}
      <div className="mt-3.5 flex items-end gap-3">
        <h3
          className="
            max-w-[17ch]
            text-[clamp(1.75rem,2.8vw,2.55rem)]
            font-semibold
            leading-[1]
            tracking-[-0.045em]
            text-white
            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:translate-x-[4px]
          "
        >
          {production.title}
        </h3>

        {/* View Indicator */}
        <span
          className="
            mb-[3px]
            whitespace-nowrap
            text-[8px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#555]
            opacity-0
            translate-x-[-6px]
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:translate-x-0
            group-hover:text-[#888]
            group-hover:opacity-100
          "
        >
          View Production
        </span>
      </div>

      {/* Role */}
      <p
        className="
          mt-2
          text-[9px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-[#555]
          transition-colors
          duration-500
          group-hover:text-[#777]
        "
      >
        {production.role}
      </p>

      {/* Description */}
      <p
        className="
          mt-4.5
          max-w-[52ch]
          text-[0.82rem]
          leading-[1.65]
          text-[#777]
          transition-colors
          duration-500
          group-hover:text-[#999]
        "
      >
        {production.description}
      </p>

      {/* Technical Information */}
      <div
        className="
          mt-4.5
          border-t
          border-[#1F1F1F]
          pt-3.5
          transition-colors
          duration-500
          group-hover:border-[#343434]
        "
      >
        <div className="space-y-2">
          {production.technical.map((item) => (
            <div
              key={item.label}
              className="
                grid
                grid-cols-[66px_minmax(0,1fr)]
                gap-3
              "
            >
              <span
                className="
                  pt-[1px]
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#484848]
                  transition-colors
                  duration-500
                  group-hover:text-[#666]
                "
              >
                {item.label}
              </span>

              <p
                className="
                  text-[0.7rem]
                  leading-[1.55]
                  text-[#686868]
                  transition-colors
                  duration-500
                  group-hover:text-[#858585]
                "
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Work */}
      <div
        className="
          mt-3.5
          border-t
          border-[#1F1F1F]
          pt-3
          transition-colors
          duration-500
          group-hover:border-[#343434]
        "
      >
        <div
          className="
            grid
            grid-cols-[66px_minmax(0,1fr)]
            gap-3
          "
        >
          <span
            className="
              pt-[1px]
              text-[8px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-[#484848]
              transition-colors
              duration-500
              group-hover:text-[#666]
            "
          >
            WORK
          </span>

          <p
            className="
              text-[0.7rem]
              leading-[1.55]
              text-[#686868]
              transition-colors
              duration-500
              group-hover:text-[#858585]
            "
          >
            {production.responsibilities.map((item, index) => (
              <span key={item}>
                {item}

                {index < production.responsibilities.length - 1 && (
                  <span className="mx-2 text-[#353535]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
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
      <div>
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            max-w-[720px]
            pb-[clamp(2.75rem,4.5vw,4rem)]
          "
        >
          <div className="group">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-[#777]
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                LIVE PRODUCTION
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
                Live
              </span>{' '}
              <span
                className="
                  text-[#777]
                  transition-colors
                  duration-500
                  group-hover:text-[#A5A5A5]
                "
              >
                Productions.
              </span>
            </h2>

            {/* Intro Description */}
            <p
              className="
                mt-3.5
                max-w-[48ch]
                text-[0.82rem]
                leading-[1.6]
                text-[#747474]
                transition-colors
                duration-500
                group-hover:text-[#888]
              "
            >
              A selection of live productions across different
              rooms, systems and stages.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRODUCTIONS
        ===================================================== */}

        <div>
          {productions.map((production, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <article
                key={production.number}
                data-cursor="VIEW"
                className="
                  group
                  border-t
                  border-[#1F1F1F]
                  py-[clamp(2.75rem,4.5vw,4.25rem)]
                "
              >
                <div
                  className={`
                    grid
                    items-start
                    gap-[clamp(1.75rem,4vw,4rem)]
                    lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)]
                    ${!imageLeft
                      ? 'lg:[&>.production-image]:order-2'
                      : ''
                    }
                  `}
                >
                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className="
                      production-image
                      relative
                      overflow-hidden
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:-translate-y-[3px]
                    "
                  >
                    {/* Image */}
                    <ImageFrame
                      src={production.image}
                      alt={production.imageAlt}
                      className="
                        w-full
                        overflow-hidden
                        transition-all
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.015]
                        group-hover:brightness-[1.08]
                      "
                      style={{
                        aspectRatio: '4 / 3',
                      }}
                    />

                    {/* Editorial Frame */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        border
                        border-transparent
                        transition-all
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:inset-[8px]
                        group-hover:border-white/20
                      "
                    />

                    {/* Bottom Signal */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-white/70
                        transition-all
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:w-[28%]
                      "
                    />
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <ProductionInfo
                    production={production}
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <div
          className="
            border-t
            border-[#1F1F1F]
            pt-6
            transition-colors
            duration-500
            hover:border-[#292929]
          "
        >
          <p
            className="
              max-w-[650px]
              text-[0.78rem]
              italic
              leading-[1.7]
              text-[#777]
              transition-colors
              duration-500
              hover:text-[#9A9A9A]
            "
          >
            Different rooms. Different systems. Different demands.
            The approach changes with every production. The
            objective remains the same: a controlled, reliable and
            musical result.
          </p>
        </div>
      </div>
    </PortfolioPage>
  );
}