import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';

const ease = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

const practice = [
  {
    number: '01',
    label: 'FOH',
    text: 'Shaping the audience experience while keeping the system controlled, musical and responsive.',
  },
  {
    number: '02',
    label: 'LIVE PRODUCTION',
    text: 'Working through the details before the show so technical decisions become simpler when the pressure arrives.',
  },
  {
    number: '03',
    label: 'CONTINUOUS LEARNING',
    text: 'Going deeper into consoles, systems and networked audio with every production.',
  },
];

export default function Page09Profile() {
  return (
    <PortfolioPage
      pageId="page-profile"
      pageNumber=""
      sectionLabel="09 / Profile"
    >
      <div>

        {/* =====================================================
            IDENTITY
        ===================================================== */}

        <section
          className="
            pb-[clamp(2.75rem,4.5vw,4rem)]
          "
        >
          <div
            className="
              group
              grid
              grid-cols-1
              gap-7
              lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.57fr)]
              lg:items-end
              lg:gap-14
            "
          >

            {/* NAME / ROLE */}

            <div>

              <div className="flex items-center gap-3">

                <span
                  className="
                    label-meta-bright
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  BEHIND THE CONSOLE
                </span>

                <span
                  className={`
                    h-px
                    w-8
                    bg-[#333]
                    transition-all
                    duration-700
                    ${ease}
                    group-hover:w-16
                    group-hover:bg-[#666]
                  `}
                />

              </div>


              {/* NAME */}

              <div
                className="
                  relative
                  mt-4
                  inline-block
                  cursor-default
                "
              >

                <h1
                  className={`
                    text-[clamp(4rem,9.5vw,8rem)]
                    font-semibold
                    leading-[0.78]
                    tracking-[-0.075em]
                    text-white
                    transition-all
                    duration-700
                    ${ease}
                    group-hover:tracking-[-0.06em]
                    group-hover:translate-x-[3px]
                  `}
                >
                  HARSHA
                  <span
                    className={`
                      inline-block
                      text-[#555]
                      transition-all
                      duration-700
                      ${ease}
                      group-hover:translate-x-[5px]
                      group-hover:text-[#999]
                    `}
                  >
                    .
                  </span>
                </h1>


                {/* Name signal */}

                <span
                  className={`
                    absolute
                    bottom-[-10px]
                    left-0
                    h-px
                    w-0
                    bg-[#777]
                    transition-all
                    duration-700
                    ${ease}
                    group-hover:w-[72%]
                  `}
                />

              </div>


              {/* ROLE / LOCATION */}

              <div
                className={`
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  transition-transform
                  duration-700
                  ${ease}
                  group-hover:translate-x-[3px]
                `}
              >

                <span
                  className="
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-[#AFAFAF]
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  Live Sound & FOH Engineer
                </span>

                <span
                  className="
                    h-px
                    w-5
                    bg-[#383838]
                    transition-all
                    duration-700
                    group-hover:w-8
                    group-hover:bg-[#666]
                  "
                />

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-[#555]
                    transition-colors
                    duration-500
                    group-hover:text-[#888]
                  "
                >
                  Bengaluru, India
                </span>

              </div>

            </div>


            {/* PROFILE STATEMENT */}

            <div
              className="
                group/statement
                relative
                border-l
                border-[#292929]
                pl-5
                transition-colors
                duration-700
                hover:border-[#555]
              "
            >

              <span
                className={`
                  absolute
                  left-[-1px]
                  top-0
                  h-0
                  w-px
                  bg-[#777]
                  transition-all
                  duration-700
                  ${ease}
                  group-hover/statement:h-12
                `}
              />

              <p
                className="
                  max-w-[48ch]
                  text-[clamp(0.88rem,1.3vw,1rem)]
                  leading-[1.78]
                  tracking-[-0.008em]
                  text-[#777]
                  transition-colors
                  duration-700
                  group-hover/statement:text-[#9B9B9B]
                "
              >
                I’m interested in what happens when technical precision
                becomes part of the performance. FOH is where I naturally
                gravitate, but the quality of a live mix is decided long
                before the first fader moves.
              </p>

              <p
                className="
                  mt-3.5
                  max-w-[48ch]
                  text-[clamp(0.88rem,1.3vw,1rem)]
                  leading-[1.78]
                  tracking-[-0.008em]
                  text-[#777]
                  transition-colors
                  duration-700
                  group-hover/statement:text-[#9B9B9B]
                "
              >
                It begins with preparation. Understanding the stage, knowing
                the signal path, building a system you can trust, and
                listening closely enough to make the right decision when
                conditions change.
              </p>

              <span
                className={`
                  mt-4
                  block
                  h-px
                  w-0
                  bg-[#555]
                  transition-all
                  duration-700
                  ${ease}
                  group-hover/statement:w-20
                `}
              />

            </div>

          </div>
        </section>


        {/* =====================================================
            PORTRAIT + PRACTICE
        ===================================================== */}

        <section
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-[minmax(250px,0.7fr)_minmax(0,1.3fr)]
            md:gap-10
            lg:grid-cols-[350px_minmax(0,1fr)]
            lg:gap-12
          "
        >

          {/* PORTRAIT */}

          <figure className="group" data-cursor="HARSHA">

            <div
              className="
                relative
                overflow-hidden
                bg-[#0D0D0D]
              "
            >

              <ImageFrame
                src="/image_10.jpg"
                alt="Harsha, Live Sound and FOH Engineer"
                className={`
                  w-full
                  transition-transform
                  duration-[1200ms]
                  ${ease}
                  group-hover:scale-[1.022]
                  group-hover:-translate-y-[2px]
                `}
                style={{
                  aspectRatio: '3/4',
                }}
              />


              {/* tonal response */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-white/[0.025]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
              />


              {/* inner frame */}

              <span
                className={`
                  pointer-events-none
                  absolute
                  left-3
                  right-3
                  top-3
                  h-px
                  origin-left
                  scale-x-0
                  bg-[#777]
                  transition-transform
                  duration-700
                  ${ease}
                  group-hover:scale-x-100
                `}
              />

              <span
                className={`
                  pointer-events-none
                  absolute
                  bottom-3
                  left-3
                  right-3
                  h-px
                  origin-right
                  scale-x-0
                  bg-[#777]
                  transition-transform
                  duration-700
                  ${ease}
                  group-hover:scale-x-100
                `}
              />


              {/* asymmetric signal markers */}

              <span
                className={`
                  pointer-events-none
                  absolute
                  bottom-5
                  left-0
                  h-px
                  w-0
                  bg-[#888]
                  transition-all
                  duration-700
                  ${ease}
                  group-hover:w-12
                `}
              />

              <span
                className={`
                  pointer-events-none
                  absolute
                  right-0
                  top-5
                  h-px
                  w-0
                  bg-[#888]
                  transition-all
                  duration-700
                  ${ease}
                  group-hover:w-12
                `}
              />

            </div>


            <figcaption
              className={`
                mt-2.5
                flex
                items-center
                justify-between
                transition-transform
                duration-700
                ${ease}
                group-hover:translate-x-[3px]
              `}
            >

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#555]
                  transition-colors
                  duration-500
                  group-hover:text-[#888]
                "
              >
                HARSHA
              </span>

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.15em]
                  text-[#3F3F3F]
                  transition-colors
                  duration-500
                  group-hover:text-[#666]
                "
              >
                LIVE SOUND / FOH
              </span>

            </figcaption>

          </figure>


          {/* PRACTICE */}

          <div>

            <div className="flex items-center gap-3">

              <span className="label-meta-bright">
                IN PRACTICE
              </span>

              <span className="h-px flex-1 bg-[#1F1F1F]" />

            </div>


            <div
              className="
                mt-3
                border-t
                border-[#1F1F1F]
              "
            >

              {practice.map((item) => (
                <article
                  key={item.number}
                  className="
                    group
                    relative
                    border-b
                    border-[#1F1F1F]
                    py-5
                    transition-colors
                    duration-500
                    hover:bg-[#0D0D0D]
                  "
                >

                  {/* vertical hover signal */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-px
                      origin-bottom
                      scale-y-0
                      bg-[#666]
                      transition-transform
                      duration-700
                      ${ease}
                      group-hover:scale-y-100
                    `}
                  />


                  <div
                    className={`
                      grid
                      grid-cols-[30px_minmax(115px,0.42fr)_minmax(0,1fr)]
                      items-start
                      gap-4
                      transition-transform
                      duration-700
                      ${ease}
                      group-hover:translate-x-[3px]
                      md:grid-cols-[40px_160px_minmax(0,1fr)]
                      md:gap-6
                    `}
                  >

                    {/* NUMBER */}

                    <span
                      className="
                        pt-[2px]
                        text-[8px]
                        font-medium
                        tracking-[0.16em]
                        text-[#414141]
                        transition-colors
                        duration-500
                        group-hover:text-[#888]
                      "
                    >
                      {item.number}
                    </span>


                    {/* LABEL */}

                    <div>

                      <div className="flex items-center gap-3">

                        <span
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#888]
                            transition-colors
                            duration-500
                            group-hover:text-white
                          "
                        >
                          {item.label}
                        </span>

                        <span
                          className={`
                            h-px
                            w-0
                            bg-[#555]
                            transition-all
                            duration-700
                            ${ease}
                            group-hover:w-7
                          `}
                        />

                      </div>

                    </div>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        max-w-[43ch]
                        text-[11.5px]
                        leading-[1.65]
                        text-[#626262]
                        transition-colors
                        duration-500
                        group-hover:text-[#898989]
                      "
                    >
                      {item.text}
                    </p>

                  </div>


                  {/* bottom signal */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-[#777]
                      transition-all
                      duration-700
                      ${ease}
                      group-hover:w-14
                    `}
                  />

                </article>
              ))}

            </div>


            {/* =================================================
                SIGNATURE
            ================================================= */}

            <div
              className="
                group
                relative
                mt-7
                overflow-hidden
                border-l
                border-[#353535]
                py-1
                pl-5
                transition-colors
                duration-700
                hover:border-[#666]
              "
            >

              <span
                className={`
                  absolute
                  left-[-1px]
                  top-0
                  h-0
                  w-px
                  bg-[#888]
                  transition-all
                  duration-700
                  ${ease}
                  group-hover:h-full
                `}
              />

              <p
                className="
                  text-[clamp(1.05rem,1.8vw,1.4rem)]
                  font-medium
                  leading-[1.38]
                  tracking-[-0.025em]
                  text-[#888]
                  transition-colors
                  duration-700
                  group-hover:text-[#D0D0D0]
                "
              >
                Listen first.
                <br />

                <span className="text-[#C7C7C7]">
                  Understand the system.
                </span>

                <br />

                <span className="text-white">
                  Make the decision.
                </span>
              </p>

              <span
                className={`
                  mt-4
                  block
                  h-px
                  w-0
                  bg-[#666]
                  transition-all
                  duration-700
                  ${ease}
                  group-hover:w-16
                `}
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            SUBTLE END MARK
        ===================================================== */}

        <div
          className="
            mt-[clamp(3rem,5vw,4.25rem)]
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              h-px
              w-8
              bg-[#333]
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#3F3F3F]
            "
          >
            Live Sound / FOH
          </span>

          <span className="h-px flex-1 bg-[#1A1A1A]" />

        </div>

      </div>
    </PortfolioPage>
  );
}