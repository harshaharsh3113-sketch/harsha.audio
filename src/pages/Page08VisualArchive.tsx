import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';
import { ExternalLink, Play } from 'lucide-react';

const archive = [
  {
    src: '/image_06.jpg',
    alt: 'FOH console in operation during a live production',
    caption: 'FOH Console',
    type: 'FOH / CONTROL',
    index: '01',
  },
  {
    src: '/image_07.jpg',
    alt: 'Harsha operating FOH at a live production',
    caption: 'FOH Operation / Stage',
    type: 'LIVE OPERATION',
    index: '02',
  },
  {
    src: '/image_08.jpg',
    alt: 'Technical setup and soundcheck in progress',
    caption: 'Soundcheck / Technical Setup',
    type: 'PRE-PRODUCTION',
    index: '03',
  },
  {
    src: '/image_09.jpg',
    alt: 'Live performance in an open-air venue',
    caption: 'Live Performance / Open-Air',
    type: 'LIVE PRODUCTION',
    index: '04',
  },
];

const DRIVE_LINK =
  'https://drive.google.com/drive/folders/1ww2Dhl_A5JQt4eAjTyAYZhKrFMxmfBru';

export default function Page08VisualArchive() {
  return (
    <PortfolioPage
      pageId="page-archive"
      pageNumber=""
      sectionLabel="08 / Visual Archive"
    >
      <div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="pb-[clamp(2.75rem,5vw,4rem)]">

          <div className="group max-w-[760px]">

            <div className="flex items-center gap-3">

              <span
                className="
                  label-meta-bright
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                PRODUCTION ARCHIVE
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


            <h2
              className="
                mt-3
                text-[clamp(2.2rem,4.6vw,3.8rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
              "
            >
              <span className="text-white">
                Production
              </span>{' '}

              <span
                className="
                  text-[#777]
                  transition-colors
                  duration-500
                  group-hover:text-[#A5A5A5]
                "
              >
                In Focus.
              </span>
            </h2>


            <p
              className="
                mt-3.5
                max-w-[53ch]
                text-[0.84rem]
                leading-[1.65]
                text-[#747474]
                transition-colors
                duration-500
                group-hover:text-[#888]
              "
            >
              A visual record of the stages, systems and live environments
              behind the work.
            </p>


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
            VISUAL ARCHIVE
        ===================================================== */}

        <section>

          <div className="flex items-center gap-3">

            <span className="label-meta-bright">
              FIELD RECORD
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
              SELECTED WORK
            </span>

          </div>


          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-x-7
              gap-y-11
              sm:grid-cols-2
              sm:gap-y-14
            "
          >

            {archive.map((img, idx) => (
              <figure
                key={img.src}
                data-cursor="OPEN"
                className={`
                  group
                  relative
                  cursor-default
                  ${idx === 1
                    ? 'sm:mt-10'
                    : ''
                  }
                  ${idx === 3
                    ? 'sm:mt-[-2rem]'
                    : ''
                  }
                `}
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    bg-[#0D0D0D]
                  "
                >

                  <ImageFrame
                    src={img.src}
                    alt={img.alt}
                    className="
                      w-full
                      transition-transform
                      duration-[1100ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:scale-[1.025]
                      group-hover:-translate-y-[2px]
                    "
                    style={{
                      aspectRatio:
                        idx === 0 || idx === 3
                          ? '3/2'
                          : '4/3',
                    }}
                  />

                  {/* Subtle tonal shift */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-white/[0.02]
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  {/* Top signal */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      h-px
                      w-0
                      bg-[#888]
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:w-20
                    "
                  />

                  {/* Bottom signal */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      right-0
                      h-px
                      w-0
                      bg-[#888]
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:w-20
                    "
                  />

                </div>


                {/* =================================================
                    CAPTION
                ================================================= */}

                <figcaption
                  className="
                    relative
                    mt-3
                    overflow-hidden
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:translate-x-[4px]
                      "
                    >

                      <span
                        className="
                          text-[8px]
                          font-medium
                          tracking-[0.16em]
                          text-[#444]
                          transition-colors
                          duration-500
                          group-hover:text-[#777]
                        "
                      >
                        {img.index}
                      </span>

                      <span
                        className="
                          h-px
                          w-4
                          bg-[#303030]
                          transition-all
                          duration-700
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          group-hover:w-7
                          group-hover:bg-[#666]
                        "
                      />

                      <span
                        className="
                          text-[11.5px]
                          font-medium
                          tracking-[-0.01em]
                          text-[#999]
                          transition-colors
                          duration-500
                          group-hover:text-white
                        "
                      >
                        {img.caption}
                      </span>

                    </div>


                    <span
                      className="
                        hidden
                        text-[8px]
                        uppercase
                        tracking-[0.15em]
                        text-[#3F3F3F]
                        transition-colors
                        duration-500
                        sm:block
                        group-hover:text-[#6A6A6A]
                      "
                    >
                      {img.type}
                    </span>

                  </div>


                  {/* Caption signal */}

                  <span
                    className="
                      mt-2.5
                      block
                      h-px
                      w-0
                      bg-[#666]
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:w-12
                    "
                  />

                </figcaption>

              </figure>
            ))}

          </div>

        </section>


        {/* =====================================================
            VIDEO ARCHIVE
        ===================================================== */}

        <section
          className="
            mt-[clamp(3.5rem,6vw,5rem)]
          "
        >

          <div className="flex items-center gap-3">

            <span className="label-meta-bright">
              VIDEO ARCHIVE
            </span>

            <span className="h-px flex-1 bg-[#1F1F1F]" />

          </div>


          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open production video archive on Google Drive"
            data-cursor="DRIVE"
            className="
              group
              relative
              mt-4
              block
              border-t
              border-b
              border-[#1F1F1F]
              py-5
              transition-colors
              duration-500
              hover:bg-[#0D0D0D]
            "
          >

            {/* Active vertical signal */}

            <span
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-px
                bg-[#666]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />


            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    border
                    border-[#292929]
                    text-[#666]
                    transition-all
                    duration-500
                    group-hover:border-[#555]
                    group-hover:bg-[#151515]
                    group-hover:text-white
                  "
                >

                  <Play
                    size={11}
                    strokeWidth={1.7}
                    className="
                      translate-x-[1px]
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />

                </div>


                <div>

                  <span
                    className="
                      block
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-[#777]
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  >
                    Production Reel
                  </span>

                  <h3
                    className="
                      mt-1.5
                      text-[14px]
                      font-medium
                      tracking-[-0.015em]
                      text-[#AFAFAF]
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  >
                    Live production footage & multi-angle videos
                  </h3>

                  <p
                    className="
                      mt-1.5
                      max-w-[55ch]
                      text-[11.5px]
                      leading-[1.6]
                      text-[#626262]
                      transition-colors
                      duration-500
                      group-hover:text-[#858585]
                    "
                  >
                    Direct recordings from live FOH operations,
                    stage mixes and soundchecks.
                  </p>

                </div>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-2
                  pl-12
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#666]
                  transition-all
                  duration-500
                  group-hover:translate-x-[4px]
                  group-hover:text-white
                  sm:pl-0
                "
              >

                Open Archive

                <ExternalLink
                  size={12}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-500
                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />

              </div>

            </div>


            {/* Bottom signal */}

            <span
              className="
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

          </a>

        </section>

      </div>
    </PortfolioPage>
  );
}