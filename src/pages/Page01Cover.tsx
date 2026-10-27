import { useEffect, useRef, useState } from 'react';

const specializations = [
  'FOH Mixing',
  'Live Production',
  'Monitor Mixing',
  'Stage Audio',
];

export default function Page01Cover() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Stage entrance on initial mount
    const timer = requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;

    if (!hero || !image) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) return;

    let raf = 0;
    const mouseOffset = { x: 0, y: 0 };
    const targetOffset = { x: 0, y: 0 };

    const updateParallax = () => {
      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Mouse response interpolation (subtle 5px max translation)
      mouseOffset.x += (targetOffset.x - mouseOffset.x) * 0.08;
      mouseOffset.y += (targetOffset.y - mouseOffset.y) * 0.08;

      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const progress =
          (viewportHeight - rect.top) /
          (viewportHeight + rect.height);

        const clamped = Math.max(0, Math.min(1, progress));

        // Subdued, controlled parallax translation (0 to 14px max) + mouse shift (4-6px)
        const translateY = (clamped - 0.5) * 6 + mouseOffset.y;
        const translateX = mouseOffset.x;
        const scale = 1.002 + clamped * 0.003;


        image.style.transform =
          `scale(${scale}) translate3d(${translateX}px, ${translateY}px, 0)`;
      }

      raf = 0;
    };

    const onScroll = () => {
      if (!raf) {
        raf = window.requestAnimationFrame(updateParallax);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
      if (!isFinePointer) return;

      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth - 0.5) * 2;
      const normalizedY = (e.clientY / innerHeight - 0.5) * 2;

      // Tiny 5px physical response
      targetOffset.x = -normalizedX * 5;
      targetOffset.y = -normalizedY * 5;

      if (!raf) {
        raf = window.requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('mousemove', onMouseMove);

      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="page-cover"
      className="portfolio-page group relative min-h-[100svh] overflow-hidden bg-[#0D0D0D]"
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden bg-[#0D0D0D]">
        <img
          ref={imageRef}
          src="/image_01.jpg"
          alt="Harsha operating the FOH console at a live production"
          className={`
            cover-image-enter
            ${isLoaded ? 'is-entered' : ''}
            absolute inset-0
            h-full w-full
            object-cover
            transition-[filter,opacity,transform]
            duration-700
            group-hover:brightness-[1]
          `}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        />

        {/* Main cinematic grade */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(5,5,5,0.70) 0%,
                rgba(5,5,5,0.18) 35%,
                rgba(5,5,5,0.20) 58%,
                rgba(5,5,5,0.96) 100%
              )
            `,
          }}
        />

        {/* Subtle horizontal depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,5,5,0.44) 0%, rgba(5,5,5,0.06) 58%, rgba(5,5,5,0.18) 100%)',
          }}
        />

        {/* Edge vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 180px rgba(0,0,0,0.38)',
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative z-10
          flex min-h-[100svh] flex-col
          justify-between
          px-5 py-6
          sm:px-8 sm:py-8
          md:px-10 md:py-10
          lg:px-[5vw] lg:py-[4vw]
        "
      >
        {/* =====================================================
            TOP METADATA - Stage 1 (0.05s delay)
        ===================================================== */}

        <header
          className={`
            cover-enter
            ${isLoaded ? 'is-entered' : ''}
            flex items-start justify-between
          `}
          style={{
            transitionDelay: '0.05s',
          }}
        >
          <div
            className="
              cursor-default
              transition-all duration-300
              hover:-translate-y-[1px]
            "
          >
            <span
              className="
                block text-[9px] font-medium uppercase
                tracking-[0.28em] text-white/55
                transition-colors duration-300
                hover:text-white/85
                sm:text-[10px]
              "
            >
              Portfolio
            </span>

            <span
              className="
                mt-1 block text-[8px] font-medium uppercase
                tracking-[0.20em] text-white/30
                transition-colors duration-300
                hover:text-white/50
                sm:text-[9px]
              "
            >
              2026
            </span>
          </div>

          <div
            className="
              cursor-default
              text-right
              transition-all duration-300
              hover:-translate-y-[1px]
            "
          >
            <span
              className="
                block text-[9px] font-medium uppercase
                tracking-[0.25em] text-white/55
                transition-colors duration-300
                hover:text-white/85
                sm:text-[10px]
              "
            >
              Live Sound
            </span>

            <span
              className="
                mt-1 block text-[8px] font-medium uppercase
                tracking-[0.18em] text-white/30
                transition-colors duration-300
                hover:text-white/50
                sm:text-[9px]
              "
            >
              Front of House
            </span>
          </div>
        </header>

        {/* =====================================================
            MAIN IDENTITY
        ===================================================== */}

        <main
          className="
            w-full
            pb-10
            sm:pb-12
            md:pb-14
            lg:max-w-[1050px]
            lg:pb-16
          "
        >
          {/* Main Hero Name - Stage 2 (0.16s delay) */}
          <div
            className={`
              cover-enter
              ${isLoaded ? 'is-entered' : ''}
            `}
            style={{
              transitionDelay: '0.16s',
            }}
          >
            <h1
              className="
                m-0
                select-none
                cursor-default
                text-[clamp(4.25rem,14vw,10rem)]
                font-extrabold
                uppercase
                leading-[0.78]
                tracking-[-0.065em]
                text-white
                transition-all
                duration-500
                ease-[var(--ease-editorial)]
                hover:tracking-[-0.055em]
                hover:text-white/[0.97]
              "
            >
              HARSHA
            </h1>
          </div>

          {/* Interactive divider - Stage 3 (0.26s delay) */}
          <div
            className={`
              cover-divider-enter
              ${isLoaded ? 'is-entered' : ''}
              mt-5
              h-px
              w-[110px]
              bg-white/30
              group-hover:w-[145px]
              sm:mt-6
              sm:w-[150px]
              sm:group-hover:w-[185px]
              md:w-[190px]
              md:group-hover:w-[225px]
            `}
            style={{
              transitionDelay: '0.26s',
            }}
          />

          {/* Role - Stage 4 (0.34s delay) */}
          <div
            className={`
              cover-enter
              ${isLoaded ? 'is-entered' : ''}
            `}
            style={{
              transitionDelay: '0.34s',
            }}
          >
            <p
              className="
                mt-5
                m-0
                w-fit
                cursor-default
                text-[clamp(0.78rem,1.45vw,1.05rem)]
                font-medium
                uppercase
                leading-[1.4]
                tracking-[0.15em]
                text-white/85
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-white
                sm:mt-6
              "
            >
              Live Sound &amp; FOH Engineer
            </p>
          </div>

          {/* Specializations - Stage 5 (0.42s delay) */}
          <div
            className={`
              cover-enter
              ${isLoaded ? 'is-entered' : ''}
              mt-4
              flex
              flex-wrap
              items-center
              gap-x-2
              gap-y-1
              max-w-[650px]
            `}
            style={{
              transitionDelay: '0.42s',
            }}
          >
            {specializations.map((item, index) => (
              <span
                key={item}
                className="
                  cursor-default
                  text-[9px]
                  font-normal
                  uppercase
                  leading-[1.7]
                  tracking-[0.15em]
                  text-white/45
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                  hover:text-white/80
                  sm:text-[10px]
                  md:text-[11px]
                  md:tracking-[0.17em]
                "
              >
                {item}

                {index !== specializations.length - 1 && (
                  <span className="ml-2 text-white/15">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </main>

        {/* =====================================================
            BOTTOM INFORMATION - Stage 6 (0.50s delay)
        ===================================================== */}

        <footer
          className={`
            cover-enter
            ${isLoaded ? 'is-entered' : ''}
            flex items-end justify-between gap-8
            border-t border-white/10
            pt-4
            sm:pt-5
            md:pt-6
          `}
          style={{
            transitionDelay: '0.50s',
          }}
        >
          <div
            className="
              min-w-0
              cursor-default
              transition-all
              duration-300
              hover:-translate-y-[1px]
            "
          >
            <span
              className="
                block text-[8px] font-medium uppercase
                tracking-[0.22em] text-white/30
                transition-all
                duration-300
                hover:tracking-[0.26em]
                hover:text-white/55
                sm:text-[9px]
              "
            >
              Bengaluru, India
            </span>
          </div>

          <div
            className="
              min-w-0
              cursor-default
              text-right
              transition-all
              duration-300
              hover:-translate-y-[1px]
            "
          >
            <span
              className="
                block text-[8px] font-medium uppercase
                tracking-[0.22em] text-white/30
                transition-all
                duration-300
                hover:tracking-[0.26em]
                hover:text-white/55
                sm:text-[9px]
              "
            >
              Front of House
            </span>
          </div>
        </footer>
      </div>

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-24
        "
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(13,13,13,0.55))',
        }}
      />
    </section>
  );
}
