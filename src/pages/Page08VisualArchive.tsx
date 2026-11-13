
import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';
import { ExternalLink, Play } from 'lucide-react';

/* =========================================================
   ARCHIVE DATA
========================================================= */

const archive = [
  {
    src: '/image_06.jpg',
    alt: 'Allen and Heath SQ-6 mixing console with outboard processing and stage equipment in an outdoor production setup',
    caption: 'FOH Control & Processing',
    type: 'FOH / SYSTEMS',
    aspectRatio: '3 / 2',
  },
  {
    src: '/image_07.jpg',
    alt: 'Harsha operating a live sound mixing console at an outdoor production',
    caption: 'Behind the Console',
    type: 'LIVE OPERATION',
    aspectRatio: '4 / 3',
  },
  {
    src: '/image_08.jpg',
    alt: 'Allen and Heath SQ-7 FOH console with SQ MixPad remote control in an indoor live event venue',
    caption: 'FOH & Live Production',
    type: 'LIVE EVENT',
    aspectRatio: '4 / 3',
  },
  {
    src: '/image_09.jpg',
    alt: 'Large-scale outdoor concert production showing the audio FOH riser, lighting control booth and concert stage',
    caption: 'Concert Production Environment',
    type: 'LARGE-SCALE PRODUCTION',
    aspectRatio: '3 / 2',
  },
];

const DRIVE_LINK =
  'https://drive.google.com/drive/folders/1ww2Dhl_A5JQt4eAjTyAYZhKrFMxmfBru';

/* =========================================================
   ARCHIVE IMAGE
========================================================= */

function ArchiveImage({
  item,
}: {
  item: (typeof archive)[number];
}) {
  return (
    <figure className="group/archive relative min-w-0">

      {/* IMAGE */}

      <div className="relative overflow-hidden bg-[#111111]">

        <div className="overflow-hidden">
          <ImageFrame
            src={item.src}
            alt={item.alt}
            className="
              w-full
              motion-safe:transition-transform
              motion-safe:duration-1000
              motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover/archive:scale-[1.025]
              group-active/archive:scale-[1.01]
            "
            style={{
              aspectRatio: item.aspectRatio,
            }}
          />
        </div>

        {/* TONAL OVERLAY */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-black/[0.06]
            motion-safe:transition-colors
            motion-safe:duration-700
            group-hover/archive:bg-transparent
          "
        />

        {/* EDITORIAL FRAME */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            border border-transparent
            motion-safe:transition-all
            motion-safe:duration-700
            group-hover/archive:inset-[8px]
            group-hover/archive:border-white/20
          "
        />

        {/* TOP SIGNAL */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute left-0 top-0
            h-px w-0
            bg-[#B99B73]
            motion-safe:transition-all
            motion-safe:duration-700
            group-hover/archive:w-20
          "
        />

        {/* BOTTOM SIGNAL */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute bottom-0 right-0
            h-px w-0
            bg-[#B99B73]
            motion-safe:transition-all
            motion-safe:duration-700
            group-hover/archive:w-20
          "
        />

      </div>

      {/* CAPTION */}

      <figcaption className="mt-4">

        <div
          className="
            flex flex-wrap
            items-center justify-between
            gap-x-4 gap-y-2
          "
        >

          <div
            className="
              flex min-w-0 items-center gap-3
              motion-safe:transition-transform
              motion-safe:duration-700
              group-hover/archive:translate-x-[3px]
            "
          >

            <span
              className="
                h-px w-5 shrink-0
                bg-[#B99B73]/50
                motion-safe:transition-all
                motion-safe:duration-700
                group-hover/archive:w-8
                group-hover/archive:bg-[#B99B73]
              "
            />

            <span
              className="
                text-[11.5px] font-medium
                tracking-[-0.01em]
                text-white/65
                motion-safe:transition-colors
                motion-safe:duration-500
                group-hover/archive:text-white
              "
            >
              {item.caption}
            </span>

          </div>

          <span
            className="
              text-[8px] font-medium
              uppercase tracking-[0.15em]
              text-white/25
              motion-safe:transition-colors
              motion-safe:duration-500
              group-hover/archive:text-white/45
            "
          >
            {item.type}
          </span>

        </div>

        {/* CAPTION SIGNAL */}

        <span
          className="
            mt-3 block h-px w-0
            bg-white/30
            motion-safe:transition-all
            motion-safe:duration-700
            group-hover/archive:w-12
          "
        />

      </figcaption>

    </figure>
  );
}

/* =========================================================
   VIDEO ARCHIVE
========================================================= */

function VideoArchive() {
  return (
    <section
      className="
        group/video
        mt-[clamp(3.5rem,6vw,5rem)]
        reveal-up
      "
    >

      {/* SECTION LABEL */}

      <div className="flex items-center gap-3">

        <span className="label-meta text-[#B99B73]">
          Video Archive
        </span>

        <span className="h-px flex-1 bg-white/10" />

        <span
          className="
            hidden sm:block
            text-[9px] uppercase
            tracking-[0.15em]
            text-white/25
          "
        >
          LIVE PRODUCTION FOOTAGE
        </span>

      </div>

      {/* ARCHIVE LINK */}

      <a
        href={DRIVE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Harsha's live production video archive on Google Drive"
        className="
          group/link relative block
          mt-5 overflow-hidden
          border-t border-b border-white/10
          py-6
          motion-safe:transition-colors
          motion-safe:duration-500
          hover:bg-white/[0.015]
        "
      >

        {/* ACTIVE RAIL */}

        <span
          aria-hidden="true"
          className="
            absolute bottom-0 left-0 top-0
            w-px bg-[#B99B73]
            opacity-0
            motion-safe:transition-opacity
            motion-safe:duration-500
            group-hover/link:opacity-100
          "
        />

        <div
          className="
            relative z-10
            flex flex-col gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* LEFT CONTENT */}

          <div className="flex items-start gap-4">

            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                border border-white/15
                bg-white/[0.02]
                text-white/50
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/link:border-[#B99B73]/60
                group-hover/link:bg-[#B99B73]/[0.06]
                group-hover/link:text-[#B99B73]
              "
            >
              <Play
                size={12}
                strokeWidth={1.7}
                className="
                  translate-x-[1px]
                  motion-safe:transition-transform
                  motion-safe:duration-500
                  group-hover/link:scale-110
                "
              />
            </div>

            <div className="min-w-0">

              <span
                className="
                  block text-[9px]
                  font-medium uppercase
                  tracking-[0.17em]
                  text-[#B99B73]/75
                "
              >
                Production Footage
              </span>

              <h3
                className="
                  mt-2
                  text-[clamp(0.95rem,1.5vw,1.15rem)]
                  font-medium
                  tracking-[-0.025em]
                  text-white/75
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/link:text-white
                "
              >
                Live productions, soundchecks &amp; operations
              </h3>

              <p
                className="
                  mt-2 max-w-[55ch]
                  text-[11.5px]
                  leading-[1.75]
                  text-white/35
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/link:text-white/55
                "
              >
                A collection of video documentation from live
                sound operations, stage environments and
                production setups.
              </p>

            </div>

          </div>

          {/* RIGHT ACTION */}

          <div
            className="
              flex items-center gap-2
              pl-14 sm:pl-0
              text-[9px] font-medium
              uppercase tracking-[0.15em]
              text-white/40
              motion-safe:transition-all
              motion-safe:duration-500
              group-hover/link:translate-x-[3px]
              group-hover/link:text-white
            "
          >
            Open Archive

            <ExternalLink
              size={12}
              strokeWidth={1.6}
              className="
                motion-safe:transition-transform
                motion-safe:duration-500
                group-hover/link:translate-x-[2px]
                group-hover/link:-translate-y-[2px]
              "
            />

          </div>

        </div>

        {/* BOTTOM SIGNAL */}

        <span
          aria-hidden="true"
          className="
            absolute bottom-0 left-0
            h-px w-0 bg-[#B99B73]
            motion-safe:transition-all
            motion-safe:duration-700
            group-hover/link:w-20
          "
        />

      </a>

    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Page07VisualArchive() {
  return (
    <PortfolioPage
      pageId="page-archive"
      pageNumber=""
      sectionLabel="07 / Visual Archive"
    >
      <div className="group/page relative isolate">

        {/* BACKGROUND ACCENT */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-32 top-0 -z-10
            h-[420px] w-[420px]
            rounded-full
            bg-[#B99B73]/[0.025]
            blur-[120px]
          "
        />

        {/* =====================================================
            01. INTRO
        ===================================================== */}

        <section
          className="
            group/intro reveal-up
            pb-[clamp(3rem,6vw,4.5rem)]
          "
        >

          {/* LABEL */}

          <div className="mb-7 flex items-center gap-4">

            <span
              className="
                h-px w-8 bg-[#B99B73]
                motion-safe:transition-all
                motion-safe:duration-500
                group-hover/intro:w-14
              "
            />

            <span className="label-meta text-[#B99B73]">
              Production Archive
            </span>

          </div>

          {/* HEADING + DESCRIPTION */}

          <div
            className="
              grid grid-cols-1 gap-6
              lg:grid-cols-[1.5fr_0.5fr]
              lg:items-end
            "
          >

            <h1
              className="
                m-0
                text-[clamp(2.8rem,6.5vw,5.6rem)]
                font-light uppercase
                leading-[0.88]
                tracking-[-0.07em]
                text-white
              "
            >
              PRODUCTION
              <br />

              <span
                className="
                  text-white/30
                  motion-safe:transition-colors
                  motion-safe:duration-700
                  group-hover/intro:text-white/55
                "
              >
                IN FOCUS.
              </span>
            </h1>

            <div className="max-w-[350px] lg:pb-1">

              <span
                className="
                  mb-4 block
                  text-[9px] font-medium
                  uppercase tracking-[0.19em]
                  text-white/25
                "
              >
                Behind the production
              </span>

              <p
                className="
                  border-l border-[#B99B73]/60
                  pl-5
                  text-[clamp(0.82rem,1vw,0.9rem)]
                  leading-[1.85]
                  text-white/45
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/intro:text-white/65
                "
              >
                A visual record of the people, systems and
                environments behind live sound production.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            02. VISUAL ARCHIVE
        ===================================================== */}

        <section
          className="
            border-t border-white/10
            pt-5 reveal-up
          "
        >

          {/* SECTION HEADER */}

          <div className="flex items-center gap-3">

            <span className="label-meta text-white/40">
              Field Record
            </span>

            <span className="h-px flex-1 bg-white/10" />

            <span
              className="
                text-[9px] uppercase
                tracking-[0.15em]
                text-white/25
              "
            >
              SELECTED DOCUMENTATION
            </span>

          </div>

          {/* GALLERY */}

          <div
            className="
              mt-6 grid grid-cols-1
              gap-x-7 gap-y-10
              sm:grid-cols-2
              sm:gap-y-14
            "
          >

            {archive.map((item) => (
              <ArchiveImage
                key={item.src}
                item={item}
              />
            ))}

          </div>

        </section>

        {/* =====================================================
            03. VIDEO ARCHIVE
        ===================================================== */}

        <VideoArchive />

        {/* =====================================================
            04. CLOSING
        ===================================================== */}

        <section
          className="
            group/closing
            mt-[clamp(4rem,7vw,6rem)]
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
              Beyond the Console
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
                tracking-[-0.025em]
                text-white/75
              "
            >
              Every production has a story.

              <span
                className="
                  text-white/35
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  group-hover/closing:text-white/65
                "
              >
                {' '}These are a few moments behind the sound.
              </span>
            </h2>

            <span
              className="
                text-[10px] uppercase
                tracking-[0.18em]
                text-white/35
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
