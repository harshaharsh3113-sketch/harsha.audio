
import PortfolioPage from '@/components/PortfolioPage';
import {
  ArrowUpRight,
  Mail,
  Instagram,
  MapPin,
} from 'lucide-react';

/* =========================================================
   CONTACT DETAILS
========================================================= */

const PHONE_DISPLAY = '+91 7348967889';
const EMAIL = 'bookings.harsha@gmail.com';
const INSTAGRAM_HANDLE = '@harrrshhhaa';

const WHATSAPP_LINK =
  'https://api.whatsapp.com/send/?phone=917348967889&text=Hey+Harsha%2C+got+something+on+the+calendar+and+wanted+to+run+it+by+you.%0ACan+we+talk%3F+%E3%83%84&type=phone_number&app_absent=0';

const EMAIL_LINK =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

const INSTAGRAM_LINK =
  'https://instagram.com/harrrshhhaa';

/* =========================================================
   PAGE
========================================================= */

export default function Page10Contact() {
  return (
    <PortfolioPage
      pageId="page-contact"
      pageNumber=""
      sectionLabel="Final / Contact"
    >
      <div className="group/page relative isolate">

        {/* BACKGROUND ACCENT */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-36 top-0 -z-10
            h-[420px] w-[420px]
            rounded-full
            bg-[#B99B73]/[0.025]
            blur-[120px]
          "
        />

        {/* =====================================================
            01. OPENING
        ===================================================== */}

        <section
          className="
            group/intro
            relative
            pb-[clamp(3.5rem,7vw,5.5rem)]
            pt-[clamp(2rem,4vw,3rem)]
            reveal-up
          "
        >

          {/* EYEBROW */}

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
              Production Enquiries
            </span>

          </div>

          {/* MAIN COMPOSITION */}

          <div
            className="
              grid grid-cols-1 gap-9
              lg:grid-cols-[1.45fr_0.55fr]
              lg:items-end
            "
          >

            {/* HEADLINE */}

            <div>

              <h1
                className="
                  m-0
                  text-[clamp(2.8rem,6.4vw,5.5rem)]
                  font-light uppercase
                  leading-[0.88]
                  tracking-[-0.07em]
                  text-white
                "
              >
                LET'S TALK ABOUT
                <br />

                <span
                  className="
                    text-white/30
                    motion-safe:transition-colors
                    motion-safe:duration-700
                    group-hover/intro:text-white/55
                  "
                >
                  YOUR NEXT SHOW.
                </span>
              </h1>

              <div className="mt-7 flex items-start gap-4">

                <span
                  className="
                    mt-[9px] h-px w-7 shrink-0
                    bg-[#B99B73]/60
                  "
                />

                <p
                  className="
                    max-w-[440px]
                    text-[clamp(0.82rem,1vw,0.9rem)]
                    leading-[1.85]
                    text-white/45
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/intro:text-white/65
                  "
                >
                  For live productions, FOH engineering and event
                  enquiries. Tell me about the show, the venue
                  and what you're looking to achieve.
                </p>

              </div>

            </div>

            {/* INTRODUCTION NOTE */}

            <div
              className="
                max-w-[310px]
                border-l border-white/10
                pl-5 lg:mb-1
              "
            >

              <span
                className="
                  block text-[9px]
                  font-medium uppercase
                  tracking-[0.17em]
                  text-white/25
                "
              >
                Live Sound / FOH
              </span>

              <p
                className="
                  mt-4 text-[11px]
                  leading-[1.9]
                  text-white/40
                "
              >
                Working with event organisers, production teams,
                artists and venues on live sound requirements.
              </p>

            </div>

          </div>

          {/* METADATA */}

          <div
            className="
              mt-10 flex flex-wrap
              items-center justify-between
              gap-3 border-t border-white/10
              pt-4
            "
          >

            <span
              className="
                text-[8px] uppercase
                tracking-[0.16em]
                text-white/25
              "
            >
              BOOKINGS / COLLABORATIONS / ENQUIRIES
            </span>

            <span
              className="
                text-[8px] uppercase
                tracking-[0.16em]
                text-white/25
              "
            >
              BENGALURU, INDIA
            </span>

          </div>

        </section>

        {/* =====================================================
            02. PRIMARY CONTACT
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
              Get in Touch
            </span>

            <span className="h-px flex-1 bg-white/10" />

            <span
              className="
                text-[8px] uppercase
                tracking-[0.15em]
                text-white/20
              "
            >
              PREFERRED CHANNEL
            </span>

          </div>

          {/* WHATSAPP FEATURE */}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CHAT"
            aria-label="Start a conversation with Harsha on WhatsApp"
            className="
              group/whatsapp relative mt-6 block
              overflow-hidden
              border border-white/10
              bg-white/[0.015]
              p-6 sm:p-8
              motion-safe:transition-all
              motion-safe:duration-700
              hover:border-[#B99B73]/50
              hover:bg-[#B99B73]/[0.025]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#B99B73]
            "
          >

            {/* TOP ACCENT */}

            <span
              className="
                absolute left-0 top-0
                h-px w-0 bg-[#B99B73]
                motion-safe:transition-all
                motion-safe:duration-700
                group-hover/whatsapp:w-28
              "
            />

            <div
              className="
                relative z-10
                flex flex-col gap-7
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >

              {/* LEFT CONTENT */}

              <div className="min-w-0">

                <span
                  className="
                    text-[9px] font-medium
                    uppercase tracking-[0.18em]
                    text-[#B99B73]
                  "
                >
                  01 / WhatsApp
                </span>

                <h2
                  className="
                    mt-4
                    text-[clamp(1.3rem,2.5vw,2rem)]
                    font-light
                    leading-[1.2]
                    tracking-[-0.04em]
                    text-white/80
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/whatsapp:text-white
                  "
                >
                  Start a Conversation
                </h2>

                <p
                  className="
                    mt-3 text-[11px]
                    tracking-[0.01em]
                    text-white/35
                  "
                >
                  {PHONE_DISPLAY}
                </p>

              </div>

              {/* RIGHT ACTION */}

              <div
                className="
                  flex shrink-0
                  items-center justify-between
                  gap-5 sm:justify-end
                "
              >

                <span
                  className="
                    text-[8px] font-medium
                    uppercase tracking-[0.16em]
                    text-white/35
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/whatsapp:text-white/75
                  "
                >
                  Open WhatsApp
                </span>

                <span
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    border border-white/15
                    text-white/60
                    motion-safe:transition-all
                    motion-safe:duration-500
                    group-hover/whatsapp:border-[#B99B73]
                    group-hover/whatsapp:bg-[#B99B73]
                    group-hover/whatsapp:text-[#090909]
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.35}
                    className="
                      motion-safe:transition-transform
                      motion-safe:duration-500
                      group-hover/whatsapp:-translate-y-[2px]
                      group-hover/whatsapp:translate-x-[2px]
                    "
                  />
                </span>

              </div>

            </div>

            {/* BOTTOM ACCENT */}

            <span
              className="
                absolute bottom-0 right-0
                h-px w-0 bg-[#B99B73]
                motion-safe:transition-all
                motion-safe:duration-700
                group-hover/whatsapp:w-28
              "
            />

          </a>

        </section>

        {/* =====================================================
            03. SECONDARY CONTACT
        ===================================================== */}

        <section
          className="
            mt-[clamp(3rem,5vw,4rem)]
            reveal-up
          "
        >

          <div className="flex items-center gap-3">

            <span className="label-meta text-white/40">
              Other Channels
            </span>

            <span className="h-px flex-1 bg-white/10" />

          </div>

          <div
            className="
              mt-5 grid grid-cols-1
              gap-x-10 sm:grid-cols-2
            "
          >

            {/* EMAIL */}

            <a
              href={EMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="WRITE"
              aria-label={`Email Harsha at ${EMAIL}`}
              className="
                group/email flex items-center
                justify-between gap-4
                border-t border-white/10
                py-5
                motion-safe:transition-colors
                motion-safe:duration-500
                hover:border-[#B99B73]/50
              "
            >

              <div className="min-w-0">

                <span
                  className="
                    block text-[8px]
                    font-medium uppercase
                    tracking-[0.17em]
                    text-white/25
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/email:text-[#B99B73]
                  "
                >
                  Email
                </span>

                <span
                  className="
                    mt-2 block truncate
                    text-[12px] font-medium
                    tracking-[-0.02em]
                    text-white/60
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/email:text-white
                  "
                >
                  {EMAIL}
                </span>

              </div>

              <Mail
                size={15}
                strokeWidth={1.4}
                className="
                  shrink-0 text-white/30
                  motion-safe:transition-all
                  motion-safe:duration-500
                  group-hover/email:-translate-y-0.5
                  group-hover/email:translate-x-0.5
                  group-hover/email:text-[#B99B73]
                "
              />

            </a>

            {/* INSTAGRAM */}

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="VISIT"
              aria-label={`Visit Harsha on Instagram ${INSTAGRAM_HANDLE}`}
              className="
                group/instagram flex items-center
                justify-between gap-4
                border-t border-white/10
                py-5
                motion-safe:transition-colors
                motion-safe:duration-500
                hover:border-[#B99B73]/50
              "
            >

              <div className="min-w-0">

                <span
                  className="
                    block text-[8px]
                    font-medium uppercase
                    tracking-[0.17em]
                    text-white/25
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/instagram:text-[#B99B73]
                  "
                >
                  Instagram
                </span>

                <span
                  className="
                    mt-2 block
                    text-[12px] font-medium
                    tracking-[-0.02em]
                    text-white/60
                    motion-safe:transition-colors
                    motion-safe:duration-500
                    group-hover/instagram:text-white
                  "
                >
                  {INSTAGRAM_HANDLE}
                </span>

              </div>

              <Instagram
                size={15}
                strokeWidth={1.4}
                className="
                  shrink-0 text-white/30
                  motion-safe:transition-all
                  motion-safe:duration-500
                  group-hover/instagram:-translate-y-0.5
                  group-hover/instagram:translate-x-0.5
                  group-hover/instagram:text-[#B99B73]
                "
              />

            </a>

          </div>

        </section>

        {/* =====================================================
            04. CLOSING SIGNATURE
        ===================================================== */}

        <section
          className="
            mt-[clamp(4rem,7vw,6rem)]
            border-t border-white/10
            pt-7 md:pt-9
            reveal-up
          "
        >

          <div
            className="
              grid gap-8
              md:grid-cols-[1fr_auto]
              md:items-end
            "
          >

            {/* LOCATION & ROLE */}

            <div className="flex flex-col gap-3">

              <div className="flex items-center gap-3">

                <MapPin
                  size={13}
                  strokeWidth={1.4}
                  className="text-[#B99B73]/70"
                />

                <span
                  className="
                    text-[9px] uppercase
                    tracking-[0.16em]
                    text-white/45
                  "
                >
                  Bengaluru, India
                </span>

              </div>

              <span
                className="
                  pl-[25px]
                  text-[9px] uppercase
                  tracking-[0.16em]
                  text-white/25
                "
              >
                Harsha / Live Sound Engineer
              </span>

            </div>

            {/* PERSONAL SIGN-OFF */}

            <div className="md:text-right">

              <p
                className="
                  text-[clamp(1.35rem,2.5vw,2rem)]
                  font-light
                  leading-tight
                  tracking-[-0.045em]
                  text-white/75
                  motion-safe:transition-colors
                  motion-safe:duration-500
                  hover:text-[#B99B73]
                "
              >
                See you at the show
                <span className="ml-1 text-[#B99B73]">ツ</span>
              </p>

            </div>

          </div>

        </section>

      </div>
    </PortfolioPage>
  );
}
