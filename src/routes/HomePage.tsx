
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  MoveUpRight,
} from 'lucide-react';
import ImageFrame from '@/components/ImageFrame';

const EMAIL = 'bookings.harsha@gmail.com';

const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

const projects = [
  {
    number: '01',
    category: 'WORSHIP & CHURCH PRODUCTION',
    title: 'Church & Worship',
    description:
      'Live worship production with lead vocals, choir and a full band. Working across front-of-house mixing and stage monitoring, with a focus on vocal clarity and a balanced performance.',
    location: 'Hospet, India',
    console: 'Allen & Heath QU32',
    image: '/image_02.jpg',
    alt: 'Church and worship production environment',
    layout: 'md:col-span-7',
    imageRatio: 'aspect-[4/3] md:aspect-[1.3/1]',
  },
  {
    number: '02',
    category: 'OPEN-AIR LIVE PRODUCTION',
    title: 'Open-Air Production',
    description:
      'University live production featuring a full-band stage setup and an audience-facing FOH mix, with the additional demands of an outdoor performance environment.',
    location: 'Bengaluru, India',
    console: 'Allen & Heath dLive',
    image: '/image_04.jpg',
    alt: 'Open-air live production environment',
    layout: 'md:col-span-5 md:mt-28',
    imageRatio: 'aspect-[4/3] md:aspect-[4/5]',
  },
];

const responsibilities = [
  {
    number: '01',
    title: 'Front of house',
    description:
      'Mixing vocals and instruments to create a clear, balanced sound for the audience.',
  },
  {
    number: '02',
    title: 'Stage preparation',
    description:
      'Microphone setup, input lists, patching and preparing the stage signal path.',
  },
  {
    number: '03',
    title: 'Soundcheck',
    description:
      'Line checks, gain structure, signal verification and resolving issues before the show.',
  },
  {
    number: '04',
    title: 'Stage monitoring',
    description:
      'Working with performers and the production team to address monitoring requirements.',
  },
];

const consolePlatforms = [
  'Allen & Heath dLive',
  'Allen & Heath SQ',
  'Allen & Heath QU / QU32',
  'Behringer X32',
  'Yamaha digital consoles',
  'Soundcraft Ui24R',
];

const focusAreas = [
  { title: 'FOH', detail: 'Audience mix' },
  { title: 'Stage', detail: 'Input preparation' },
  { title: 'Live', detail: 'Show operation' },
  { title: 'Digital', detail: 'Console workflows' },
];

const whatsapp =
  'https://api.whatsapp.com/send/?phone=917348967889&text=Hey+Harsha%2C+I+have+an+upcoming+production+and+wanted+to+discuss+the+audio+requirements.+Can+we+talk%3F&type=phone_number&app_absent=0';

const easing = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[9px] font-medium uppercase tracking-[0.19em] text-[#C4A77E]/75 sm:text-[10px]">
      {children}
    </p>
  );
}

function PageLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-10 w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4A77E]"
    >
      <span>{children}</span>
      <ArrowUpRight
        size={15}
        className={`transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${easing}`}
      />
    </Link>
  );
}

function SectionHeading({
  first,
  second,
  className = '',
  headingClassName = '',
}: {
  first: string;
  second: string;
  className?: string;
  headingClassName?: string;
}) {
  return (
    <div className={`group w-fit ${className}`}>
      <h2
        className={`text-[clamp(2.5rem,5.4vw,5rem)] font-semibold uppercase leading-[0.94] tracking-[-0.06em] ${headingClassName}`}
      >
        <span className="block text-white transition-colors duration-500 group-hover:text-white/90">
          {first}
        </span>
        <span className="block text-white/35 transition-colors duration-500 group-hover:text-white/60">
          {second}
        </span>
      </h2>

      <div className="mt-5 h-px w-9 bg-[#C4A77E]/55 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C4A77E]" />
    </div>
  );
}

function SingleLineHeading({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="group w-fit">
      <h2
        className={`text-[clamp(2.8rem,6vw,5.8rem)] font-semibold uppercase leading-[0.94] tracking-[-0.065em] text-white ${className}`}
      >
        {children}
      </h2>

      <div className="mt-5 h-px w-9 bg-[#C4A77E]/55 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C4A77E]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#0D0D0D] text-[#EAE7E0]">

      {/* HERO */}
      <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col justify-between overflow-hidden border-b border-white/[0.08] bg-[#10100F]">

        <div className="absolute inset-0 -z-10 md:left-[30%]">
          <img
            src="/image_01.jpg"
            alt="Harsha working at a front-of-house sound console"
            fetchPriority="high"
            className="h-full w-full object-cover object-[55%_center] md:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-[#0D0D0D]/25 md:bg-gradient-to-r md:from-[#0D0D0D] md:via-[#0D0D0D]/55 md:to-transparent" />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100svh-64px)] flex-col justify-between px-5 pb-6 pt-7 sm:px-9 sm:pb-8 sm:pt-9 md:px-14 md:pb-9 md:pt-10 lg:px-20">

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.19em] text-white/85 sm:text-[11px]">
                ShaYa Professional Audio
              </p>
              <p className="mt-2 max-w-[220px] text-[9px] leading-4 tracking-[0.08em] text-white/45 sm:text-[10px]">
                Where Every Frequency Finds Its Purpose.
              </p>
            </div>

            <p className="pt-1 text-right text-[9px] uppercase tracking-[0.14em] text-white/65 sm:text-[10px]">
              Bengaluru, India
              <span className="mt-2 block text-white/40">
                Live production
              </span>
            </p>
          </div>

          <div className="mt-auto max-w-[1000px] pb-12 pt-24 sm:pb-14 md:pb-8 md:pt-24">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C4A77E]" />
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/65 sm:text-[10px]">
                Live Sound Engineer
              </p>
            </div>

            <h1 className="text-[clamp(4.1rem,13vw,11.5rem)] font-semibold leading-[0.78] tracking-[-0.085em]">
              HARSHA<span className="text-[#C4A77E]">.</span>
            </h1>

            <div className="mt-8 max-w-[650px]">
              <h2 className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] font-normal italic leading-[1.02] tracking-[-0.045em] text-[#C4A77E]">
                Good sound
                <span className="block">is intentional.</span>
              </h2>

              <p className="mt-6 max-w-[470px] text-xs leading-6 text-white/60 sm:text-sm sm:leading-7">
                Live sound engineering for performances and events.
                Working across front-of-house mixing, stage audio,
                soundchecks and live production execution.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/20 pt-4">
            <span className="text-[8px] uppercase tracking-[0.15em] text-white/40 sm:text-[9px]">
              HARSHA. / Live Sound Engineer
            </span>

            <a
              href="#profile"
              className="group flex min-h-8 items-center gap-2 text-[8px] uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white sm:text-[9px]"
            >
              Scroll to explore
              <ArrowDown
                size={13}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section
        id="profile"
        className="scroll-mt-20 border-b border-white/[0.08] px-5 py-20 sm:px-9 sm:py-24 md:px-14 md:py-28 lg:px-20"
      >
        <div className="mx-auto grid max-w-[1440px] gap-9 md:grid-cols-[0.65fr_1.35fr] md:gap-20">

          <div>
            <Eyebrow>01 / The engineer</Eyebrow>

            <div className="mt-6 flex items-center gap-3 text-white/35">
              <AudioLines size={19} strokeWidth={1.3} />
              <span className="text-[9px] uppercase tracking-[0.17em]">
                Behind the performance
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              first="From stage to"
              second="audience."
            />

            <div className="mt-7 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[560px] text-[13px] leading-7 text-white/55 sm:text-sm sm:leading-8">
                I'm Harsha, a Bengaluru-based Live Sound Engineer.
                I work on the technical side of live performances, from
                preparing inputs and stage connections to soundchecks
                and mixing at front of house. I approach each production
                by understanding the performers, the venue and what
                the audience needs to hear.
              </p>

              <PageLink to="/about">Get to know me</PageLink>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-white/15 pt-6 sm:grid-cols-4 sm:gap-6">
              {focusAreas.map((item) => (
                <div key={item.title} className="group">
                  <p className="text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-[#C4A77E]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[10px] text-white/40 transition-colors duration-300 group-hover:text-white/65">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I HANDLE */}
      <section className="border-b border-white/[0.08] bg-[#111111] px-5 py-20 sm:px-9 sm:py-24 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-20">

          <div>
            <Eyebrow>02 / Areas of work</Eyebrow>

            <SectionHeading
              className="mt-6"
              headingClassName="text-[clamp(2.5rem,5vw,4.8rem)]"
              first="Reliable audio,"
              second="at every stage."
            />

            <p className="mt-5 max-w-[330px] text-[13px] leading-7 text-white/45 sm:text-sm">
              My role varies with each production, working across
              these areas in coordination with performers and the
              wider production team.
            </p>

            <div className="mt-7">
              <PageLink to="/capabilities">View capabilities</PageLink>
            </div>
          </div>

          <div className="border-t border-white/20">
            {responsibilities.map((item) => (
              <div
                key={item.number}
                className="group grid grid-cols-[30px_1fr] gap-3 border-b border-white/15 py-5 transition-colors duration-300 hover:bg-white/[0.025] sm:grid-cols-[45px_0.85fr_1.15fr] sm:items-start sm:gap-5 sm:py-7"
              >
                <span className="pt-1 text-[9px] tracking-widest text-[#C4A77E]/65 transition-transform duration-300 group-hover:translate-x-1">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-base font-medium tracking-[-0.025em] transition-colors duration-300 group-hover:text-white sm:text-lg">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-px w-6 bg-white/20 transition-all duration-500 group-hover:w-10 group-hover:bg-[#C4A77E]/70" />
                </div>

                <p className="col-start-2 max-w-[480px] text-xs leading-6 text-white/45 transition-colors duration-300 group-hover:text-white/65 sm:col-start-auto sm:text-sm sm:leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PRODUCTIONS */}
      <section className="px-5 py-20 sm:px-9 sm:py-24 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>03 / Selected productions</Eyebrow>
              <SingleLineHeading className="mt-6">
                Work in the field.
              </SingleLineHeading>
            </div>

            <div className="max-w-[330px]">
              <p className="text-[13px] leading-7 text-white/50 sm:text-sm">
                Different performers, venues and production
                requirements. A selection of live environments
                I've worked in.
              </p>

              <div className="mt-4">
                <PageLink to="/experience">Explore experience</PageLink>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-7">
            {projects.map((project) => (
              <Link
                to="/work"
                key={project.number}
                aria-label={`View selected work: ${project.title}`}
                className={`group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#C4A77E] ${project.layout}`}
              >
                <div
                  className={`relative overflow-hidden bg-[#191918] ${project.imageRatio}`}
                >
                  <ImageFrame
                    src={project.image}
                    alt={project.alt}
                    className={`h-full w-full transition-transform duration-700 ${easing} group-hover:scale-[1.035]`}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

                  <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-[#EAE7E0] text-[#171715] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#C4A77E] sm:right-4 sm:top-4">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#C4A77E]/65">
                      {project.number} / {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-medium tracking-[-0.035em] transition-colors duration-300 group-hover:text-white sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
                      {project.description}
                    </p>
                  </div>

                  <span className="mt-2 hidden shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C4A77E] sm:block">
                    <MoveUpRight size={18} />
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/15 pt-4 text-[9px] uppercase tracking-[0.12em] text-white/40">
                  <span>{project.location}</span>
                  <span>{project.console}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-xs leading-6 text-white/40">
              Further work includes classical performances and
              private event productions.
            </p>
            <PageLink to="/work">View all selected work</PageLink>
          </div>
        </div>
      </section>

      {/* TECHNICAL PRACTICE */}
      <section className="border-y border-white/[0.08] bg-[#111111] px-5 py-20 sm:px-9 sm:py-24 md:px-14 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-20">

          <div>
            <Eyebrow>04 / Technical practice</Eyebrow>

            <SectionHeading
              className="mt-6"
              headingClassName="text-[clamp(2.5rem,5vw,4.8rem)]"
              first="The craft"
              second="behind the console."
            />

            <p className="mt-5 max-w-[340px] text-[13px] leading-7 text-white/45 sm:text-sm">
              Live audio depends on more than the console. My technical
              work involves signal flow, gain structure, routing,
              patching and digital audio workflows as part of
              production preparation.
            </p>

            <div className="mt-7">
              <PageLink to="/technical">Technical overview</PageLink>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-white/20 pb-5">
              <div className="flex items-center gap-3">
                <AudioLines
                  size={19}
                  className="text-[#C4A77E]/75"
                  strokeWidth={1.3}
                />
                <h3 className="text-sm font-medium tracking-wide">
                  Console environments
                </h3>
              </div>

              <span className="text-[9px] uppercase tracking-[0.14em] text-white/35">
                Selected platforms
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {consolePlatforms.map((platform) => (
                <div
                  key={platform}
                  className="group flex items-center gap-3 border-b border-white/10 py-4"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#C4A77E]/70 transition-transform duration-300 group-hover:scale-150" />
                  <span className="text-xs text-white/65 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    {platform}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] leading-6 text-white/35">
              Experience varies by platform, from hands-on operation
              to assisting within larger production workflows.
            </p>

            <div className="mt-8 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2">
              <div className="group">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#C4A77E]/65">
                  Console workflows
                </p>
                <p className="mt-3 text-xs leading-6 text-white/45 transition-colors duration-300 group-hover:text-white/65 sm:text-sm">
                  Digital console operation, channel processing,
                  routing and mixing workflows.
                </p>
              </div>

              <div className="group">
                <p className="text-[9px] uppercase tracking-[0.18em] text-[#C4A77E]/65">
                  Networked audio
                </p>
                <p className="mt-3 text-xs leading-6 text-white/45 transition-colors duration-300 group-hover:text-white/65 sm:text-sm">
                  Digital audio fundamentals, networked audio concepts
                  and Dante workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#111111] px-5 py-24 sm:px-9 sm:py-28 md:px-14 md:py-32 lg:px-20">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.035]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full border border-white/[0.035]" />

        <div className="relative z-10 mx-auto max-w-[1440px]">

          <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
            <Eyebrow>05 / Production enquiries</Eyebrow>
            <span className="text-[9px] uppercase tracking-[0.16em] text-white/35">
              Bengaluru, India
            </span>
          </div>

          <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-20">

            <div>
              <SectionHeading
                first="Have a production"
                second="coming up?"
                headingClassName="text-[clamp(3rem,7vw,6.5rem)]"
              />

              <p className="mt-8 max-w-[470px] text-[13px] leading-7 text-white/50 sm:text-sm sm:leading-8">
                Planning a concert, worship production, private event
                or live performance? Share the event details and audio
                requirements. We can discuss the production, availability
                and scope of work.
              </p>
            </div>

            <div className="w-full">

              <div className="mb-5 flex items-center justify-between">
                <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
                  Production enquiries
                </p>

                <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] text-white/35">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C4A77E]" />
                  Get in touch
                </span>
              </div>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start a conversation with Harsha on WhatsApp"
                className="group relative flex min-h-[88px] w-full items-center justify-between gap-5 overflow-hidden border-y border-white/25 py-5 transition-all duration-500 hover:border-[#C4A77E]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4A77E]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/[0.035] transition-transform duration-700 group-hover:translate-x-0" />

                <span className="relative z-10 max-w-[280px] text-base font-medium leading-snug tracking-[-0.025em] text-white/85 transition-colors duration-300 group-hover:text-white sm:text-lg">
                  Start a conversation
                </span>

                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/30 text-white/80 transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#C4A77E] group-hover:bg-[#C4A77E] group-hover:text-[#111111]">
                  <MoveUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </a>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">

                {/* EMAIL - GMAIL COMPOSE */}
                <a
                  href={GMAIL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Email Harsha at ${EMAIL}`}
                  className="group block border-b border-white/10 pb-5 transition-colors duration-300 hover:border-[#C4A77E]/60"
                >
                  <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
                    Email
                  </span>

                  <span className="mt-3 flex items-center justify-between gap-2 text-xs text-white/65 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    <span className="break-all">
                      {EMAIL}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </span>
                </a>

                {/* INSTAGRAM */}
                <a
                  href="https://instagram.com/harrrshhhaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-white/10 pb-5 transition-colors duration-300 hover:border-[#C4A77E]/60"
                >
                  <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
                    Instagram
                  </span>

                  <span className="mt-3 flex items-center justify-between gap-2 text-xs text-white/65 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    <span>@harrrshhhaa</span>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </span>
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-between gap-3">
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/40">
                  Based in Bengaluru, Karnataka, India
                </p>

                <span className="text-[9px] uppercase tracking-[0.12em] text-white/30">
                  HARSHA. / Live Sound Engineer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
