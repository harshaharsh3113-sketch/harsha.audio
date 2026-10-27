import PortfolioPage from '@/components/PortfolioPage';
import Magnetic from '@/components/Magnetic';
import {
  ArrowUpRight,
  Mail,
  Phone,
  Instagram,
} from 'lucide-react';

const PHONE_DISPLAY = '+91 7348967889';

const WHATSAPP_LINK =
  'https://wa.me/917348967889';

const EMAIL = 'bookings.harsha@gmail.com';

const GMAIL_LINK =
  'https://mail.google.com/mail/?view=cm&fs=1&to=bookings.harsha@gmail.com';

const INSTAGRAM_HANDLE = '@harrrshhhaa';

const INSTAGRAM_LINK =
  'https://instagram.com/harrrshhhaa';

/* =========================================================
   FINAL WHATSAPP CTA
   Only the final CTA uses a pre-filled message.
========================================================= */

const WHATSAPP_BOOKING_MESSAGE = encodeURIComponent(
  `Hey Harsha, got something on the calendar and wanted to run it by you.
Can we talk? ツ`
);

const WHATSAPP_BOOKING_LINK =
  `https://wa.me/917348967889?text=${WHATSAPP_BOOKING_MESSAGE}`;


/* =========================================================
   MOTION
========================================================= */

const EASE =
  'ease-[cubic-bezier(0.22,1,0.36,1)]';


/* =========================================================
   CONTACT CHANNELS
========================================================= */

const contactMethods = [
  {
    number: '01',
    label: 'WHATSAPP',
    value: PHONE_DISPLAY,
    detail: 'Direct conversation',
    href: WHATSAPP_LINK,
    icon: Phone,
  },
  {
    number: '02',
    label: 'EMAIL',
    value: EMAIL,
    detail: 'Bookings & production enquiries',
    href: GMAIL_LINK,
    icon: Mail,
  },
  {
    number: '03',
    label: 'INSTAGRAM',
    value: INSTAGRAM_HANDLE,
    detail: 'Work & production archive',
    href: INSTAGRAM_LINK,
    icon: Instagram,
  },
];


export default function Page10Contact() {
  return (
    <PortfolioPage
      pageId="page-contact"
      pageNumber=""
      sectionLabel="10 / Contact"
    >

      <div className="relative">


        {/* =====================================================
            OPENING
        ===================================================== */}

        <section
          className="
            relative
            pb-[clamp(5rem,9vw,8rem)]
          "
        >

          {/* HEADER */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#8A8A8A]
              "
            >
              CONTACT / BOOKINGS
            </span>

            <span
              className="
                h-px
                w-9
                bg-[#353535]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-[#444]
              "
            >
              BENGALURU / INDIA
            </span>

          </div>


          {/* HERO */}

          <div
            className="
              group
              mt-[clamp(4rem,8vw,7rem)]
              max-w-[1000px]
            "
          >

            {/* availability marker */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
              "
            >

              <span
                className={`
                  h-px
                  w-8
                  bg-[#444]
                  transition-all
                  duration-700
                  ${EASE}
                  group-hover:w-14
                  group-hover:bg-[#777]
                `}
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-[#4A4A4A]
                  transition-colors
                  duration-500
                  group-hover:text-[#777]
                "
              >
                AVAILABLE FOR LIVE PRODUCTIONS
              </span>

            </div>


            {/* headline */}

            <h1
              className="
                cursor-default
                text-[clamp(3.5rem,8.5vw,8rem)]
                font-semibold
                leading-[0.82]
                tracking-[-0.075em]
                text-white
              "
            >
              Let's talk
              <br />

              <span
                className={`
                  inline-block
                  text-[#5D5D5D]
                  transition-all
                  duration-1000
                  ${EASE}
                  group-hover:translate-x-[7px]
                  group-hover:text-[#A0A0A0]
                `}
              >
                about the show.
              </span>
            </h1>


            {/* intro */}

            <div
              className="
                mt-8
                flex
                max-w-[610px]
                items-start
                gap-5
              "
            >

              <span
                className={`
                  mt-[9px]
                  h-px
                  w-9
                  shrink-0
                  bg-[#444]
                  transition-all
                  duration-700
                  ${EASE}
                  group-hover:w-16
                  group-hover:bg-[#777]
                `}
              />

              <p
                className="
                  text-[0.88rem]
                  leading-[1.75]
                  text-[#686868]
                  transition-colors
                  duration-700
                  group-hover:text-[#888]
                "
              >
                Have a production coming up?
                Send me the date, venue, setup and what you need from FOH.
                We can take it from there.
              </p>

            </div>

          </div>


          {/* quiet index */}

          <div
            className="
              absolute
              bottom-2
              right-0
              hidden
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#303030]
              sm:block
            "
          >
            FINAL / CONTACT
          </div>

        </section>



        {/* =====================================================
            DIRECT CONTACT
        ===================================================== */}

        <section
          className="
            border-t
            border-[#1D1D1D]
          "
        >

          {/* section header */}

          <div
            className="
              flex
              items-center
              justify-between
              py-4
            "
          >

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#777]
              "
            >
              DIRECT CONTACT
            </span>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-[#383838]
              "
            >
              03 CHANNELS
            </span>

          </div>


          {/* contact rows */}

          <div>

            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.number}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor={method.label === 'WHATSAPP' ? 'CHAT' : method.label === 'EMAIL' ? 'WRITE' : 'VISIT'}
                  className={`
                    group
                    relative
                    block
                    overflow-hidden
                    border-t
                    border-[#1D1D1D]
                    py-6
                    transition-colors
                    duration-700
                    ${EASE}
                    hover:bg-[#0A0A0A]
                  `}
                >

                  {/* soft hover wash */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-white/[0.012]
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />


                  {/* left active signal */}

                  <span
                    className={`
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-px
                      origin-bottom
                      scale-y-0
                      bg-[#777]
                      transition-transform
                      duration-700
                      ${EASE}
                      group-hover:scale-y-100
                    `}
                  />


                  {/* row content */}

                  <div
                    className={`
                      relative
                      z-10
                      grid
                      grid-cols-[30px_34px_minmax(0,1fr)_auto]
                      items-center
                      gap-4
                      transition-transform
                      duration-700
                      ${EASE}
                      group-hover:translate-x-[5px]
                      sm:grid-cols-[42px_36px_minmax(180px,0.8fr)_minmax(180px,1fr)_auto]
                      sm:gap-5
                    `}
                  >

                    {/* number */}

                    <span
                      className="
                        text-[8px]
                        tracking-[0.16em]
                        text-[#393939]
                        transition-colors
                        duration-500
                        group-hover:text-[#707070]
                      "
                    >
                      {method.number}
                    </span>


                    {/* icon */}

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        border
                        border-[#292929]
                        text-[#555]
                        transition-all
                        duration-700
                        group-hover:border-[#555]
                        group-hover:bg-[#141414]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        size={13}
                        strokeWidth={1.35}
                        className={`
                          transition-transform
                          duration-700
                          ${EASE}
                          group-hover:-translate-y-[1px]
                        `}
                      />
                    </span>


                    {/* contact */}

                    <div className="min-w-0">

                      <span
                        className="
                          block
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-[#454545]
                          transition-colors
                          duration-500
                          group-hover:text-[#777]
                        "
                      >
                        {method.label}
                      </span>

                      <span
                        className="
                          mt-1.5
                          block
                          truncate
                          text-[clamp(0.95rem,1.7vw,1.15rem)]
                          font-medium
                          tracking-[-0.025em]
                          text-[#929292]
                          transition-colors
                          duration-500
                          group-hover:text-white
                        "
                      >
                        {method.value}
                      </span>

                    </div>


                    {/* detail */}

                    <span
                      className="
                        hidden
                        text-[10px]
                        leading-[1.5]
                        text-[#464646]
                        transition-colors
                        duration-500
                        group-hover:text-[#707070]
                        sm:block
                      "
                    >
                      {method.detail}
                    </span>


                    {/* open */}

                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-[#464646]
                        transition-colors
                        duration-500
                        group-hover:text-[#A0A0A0]
                      "
                    >

                      <span className="hidden sm:block">
                        OPEN
                      </span>

                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.35}
                        className={`
                          transition-transform
                          duration-700
                          ${EASE}
                          group-hover:-translate-y-[2px]
                          group-hover:translate-x-[2px]
                        `}
                      />

                    </span>

                  </div>


                  {/* signal line */}

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
                      ${EASE}
                      group-hover:w-20
                    `}
                  />

                </a>
              );
            })}

          </div>

        </section>



        {/* =====================================================
            PRODUCTION STATEMENT
        ===================================================== */}

        <section
          className="
            mt-[clamp(5rem,8vw,7rem)]
          "
        >

          <div
            className="
              grid
              grid-cols-1
              gap-10
              md:grid-cols-[minmax(0,1fr)_250px]
              md:items-end
              md:gap-16
            "
          >

            {/* statement */}

            <div className="group">

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#777]
                "
              >
                FOR PRODUCTIONS
              </span>


              <p
                className="
                  mt-5
                  max-w-[720px]
                  text-[clamp(1.2rem,2.5vw,1.85rem)]
                  font-medium
                  leading-[1.32]
                  tracking-[-0.03em]
                  text-[#777]
                  transition-colors
                  duration-700
                  group-hover:text-[#A0A0A0]
                "
              >
                Got a stage?
                <span className="text-white">
                  {' '}I've got the mix.
                </span>
              </p>

            </div>


            {/* location */}

            <div
              className="
                border-l
                border-[#292929]
                pl-5
              "
            >

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#444]
                "
              >
                BASED IN
              </span>

              <p
                className="
                  mt-2
                  text-[12px]
                  font-medium
                  text-[#888]
                "
              >
                Bengaluru, India
              </p>

              <p
                className="
                  mt-2
                  max-w-[180px]
                  text-[9px]
                  leading-[1.65]
                  text-[#4C4C4C]
                "
              >
                Available for live productions
                and FOH engineering.
              </p>

            </div>

          </div>

        </section>



        {/* =====================================================
            WHATSAPP CTA
            ONLY PREFILLED CONTACT ACTION
        ===================================================== */}

        <section
          className="
            mt-[clamp(4.5rem,8vw,7rem)]
          "
        >

          <Magnetic strength={9} className="w-full">
            <a
              href={WHATSAPP_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CONTACT"
              className={`
                group
                relative
                block
                overflow-hidden
                border
                border-[#2C2C2C]
                bg-[#090909]
                px-6
                py-7
                transition-all
                duration-700
                ${EASE}
                hover:border-[#555]
                hover:bg-[#0B0B0B]
                sm:px-8
                sm:py-8
              `}
            >

            {/* top accent */}

            <span
              className={`
                absolute
                left-0
                top-0
                h-px
                w-0
                bg-[#888]
                transition-all
                duration-700
                ${EASE}
                group-hover:w-32
              `}
            />


            {/* bottom accent */}

            <span
              className={`
                absolute
                bottom-0
                right-0
                h-px
                w-0
                bg-[#888]
                transition-all
                duration-700
                ${EASE}
                group-hover:w-32
              `}
            />


            {/* CTA content */}

            <div
              className={`
                relative
                z-10
                flex
                flex-col
                gap-7
                transition-transform
                duration-700
                ${EASE}
                group-hover:translate-x-[4px]
                sm:flex-row
                sm:items-end
                sm:justify-between
              `}
            >

              {/* copy */}

              <div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <span
                    className="
                      h-px
                      w-7
                      bg-[#444]
                      transition-all
                      duration-700
                      group-hover:w-12
                      group-hover:bg-[#777]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.19em]
                      text-[#555]
                      transition-colors
                      duration-500
                      group-hover:text-[#888]
                    "
                  >
                    FASTEST WAY TO START
                  </span>

                </div>


                <h2
                  className="
                    mt-4
                    text-[clamp(1.25rem,2.7vw,2rem)]
                    font-medium
                    leading-[1.15]
                    tracking-[-0.035em]
                    text-[#A0A0A0]
                    transition-colors
                    duration-700
                    group-hover:text-white
                  "
                >
                  Message me on WhatsApp.
                </h2>


                <p
                  className="
                    mt-2
                    text-[9px]
                    text-[#454545]
                    transition-colors
                    duration-500
                    group-hover:text-[#666]
                  "
                >
                  Got a show? Let's make it sound like one.
                </p>

              </div>


              {/* action */}

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#555]
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >

                <span>
                  START CONVERSATION
                </span>

                <span
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    border
                    border-[#333]
                    transition-all
                    duration-700
                    ${EASE}
                    group-hover:border-[#777]
                    group-hover:bg-white
                    group-hover:text-black
                  `}
                >

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.35}
                    className={`
                      transition-transform
                      duration-700
                      ${EASE}
                      group-hover:-translate-y-[2px]
                      group-hover:translate-x-[2px]
                    `}
                  />

                </span>

              </div>

            </div>

          </a>
        </Magnetic>

        </section>



        {/* =====================================================
            FINAL SIGNATURE
        ===================================================== */}

        <section
          className="
            mt-[clamp(6rem,10vw,9rem)]
            pb-2
          "
        >

          <div
            className="
              flex
              flex-col
              gap-7
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >

            {/* name */}

            <div className="group">

              <h2
                className={`
                  text-[clamp(2.8rem,6vw,5rem)]
                  font-semibold
                  leading-[0.8]
                  tracking-[-0.075em]
                  text-white
                  transition-transform
                  duration-700
                  ${EASE}
                  group-hover:translate-x-[3px]
                `}
              >
                HARSHA
                <span className="text-[#555]">
                  .
                </span>
              </h2>


              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className={`
                    h-px
                    w-8
                    bg-[#333]
                    transition-all
                    duration-700
                    ${EASE}
                    group-hover:w-14
                    group-hover:bg-[#666]
                  `}
                />

                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#505050]
                    transition-colors
                    duration-500
                    group-hover:text-[#777]
                  "
                >
                  Live Sound & FOH Engineer
                </span>

              </div>

            </div>


            {/* closing line */}

            <div
              className="
                sm:text-right
              "
            >

              <span
                className="
                  block
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-[#3F3F3F]
                "
              >
                Bengaluru, India
              </span>

              <span
                className="
                  mt-2
                  block
                  text-[clamp(1rem,2vw,1.3rem)]
                  font-medium
                  tracking-[-0.025em]
                  text-[#555]
                "
              >
                See you at the show ツ
              </span>

            </div>

          </div>


          {/* final rule */}

          <div
            className="
              mt-8
              h-px
              w-full
              bg-[#191919]
            "
          />

        </section>

      </div>
    </PortfolioPage>
  );
}