
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { navRoutes } from './SiteHeader';

const EMAIL = 'bookings.harsha@gmail.com';

const GMAIL_LINK =
  'https://mail.google.com/mail/?view=cm&fs=1&to=bookings.harsha%40gmail.com';

const WHATSAPP_MESSAGE =
  'https://api.whatsapp.com/send/?phone=917348967889&text=Hey+Harsha%2C+got+something+on+the+calendar+and+wanted+to+run+it+by+you.%0ACan+we+talk%3F+%E3%83%84&type=phone_number&app_absent=0';

const footerLabels: Record<string, string> = {
  '/': 'Introduction',
  '/about': 'The Engineer',
  '/experience': 'Field Experience',
  '/capabilities': 'What I Do',
  '/technical': 'Technical Practice',
  '/work': 'Selected Productions',
  '/archive': 'Behind the Scenes',
  '/contact': "Let's Connect",
};

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#242424] bg-[#0A0A0A] text-[#888] no-print">
      <div className="section-inner py-16 sm:py-20">

        {/* BRAND IDENTITY */}
        <div className="grid grid-cols-1 gap-12 border-b border-[#202020] pb-12 md:grid-cols-[1.4fr_0.8fr] md:items-end md:gap-16 md:pb-16">

          <div>
            <span className="mb-5 block text-[9px] font-medium uppercase tracking-[0.24em] text-[#777]">
              The parent brand
            </span>

            <Link
              to="/"
              aria-label="ShaYa Professional Audio"
              className="group inline-flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <span className="text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-none tracking-[-0.065em] text-white transition-colors duration-300 group-hover:text-[#C8B38B]">
                ShaYa.
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#777]">
                Professional Audio
              </span>
            </Link>

            <p className="mt-5 max-w-[42ch] text-[clamp(0.85rem,1.5vw,1rem)] leading-[1.7] tracking-[-0.015em] text-[#C8B38B]">
              Where Every Frequency Finds Its Purpose.
            </p>

            <p className="mt-4 max-w-[46ch] text-[12px] leading-[1.8] text-[#777]">
              A professional audio brand built around the craft,
              precision and experience of sound.
            </p>
          </div>

          {/* ENGINEER IDENTITY */}
          <div className="md:justify-self-end md:text-right">
            <span className="mb-4 block text-[9px] font-medium uppercase tracking-[0.22em] text-[#555]">
              The engineer
            </span>

            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-none tracking-[-0.055em] text-white transition-colors duration-300 hover:text-[#C8B38B]"
            >
              HARSHA<span className="text-[#555]">.</span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.3}
                className="text-[#666] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#C8B38B]">
              Live Sound Engineer
            </p>

            <p className="mt-2 text-[10px] tracking-wide text-[#555]">
              Bengaluru, India
            </p>
          </div>
        </div>

        {/* NAVIGATION AND CONTACT */}
        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr] md:gap-16">

          {/* NAVIGATION */}
          <div>
            <span className="mb-7 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#555]">
              Explore the work
            </span>

            <nav
              aria-label="Portfolio navigation"
              className="grid grid-cols-2 gap-x-8 gap-y-5"
            >
              {navRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="group flex w-fit items-center gap-2 text-[12px] tracking-wide text-[#888] transition-colors duration-300 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {footerLabels[route.path] ?? route.label}
                  </span>

                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.3}
                    className="text-[#555] opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <span className="mb-7 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#555]">
              Get in touch
            </span>

            <div className="flex flex-col gap-4">

              {/* EMAIL */}
              <a
                href={GMAIL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Compose an email to ${EMAIL} in Gmail`}
                className="group flex w-fit items-center gap-2 text-[12px] text-[#999] transition-colors duration-300 hover:text-white"
              >
                {EMAIL}

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-[#555] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/917348967889"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-[12px] text-[#999] transition-colors duration-300 hover:text-white"
              >
                WhatsApp · +91 7348967889

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-[#555] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/harrrshhhaa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-[12px] text-[#999] transition-colors duration-300 hover:text-white"
              >
                Instagram · @harrrshhhaa

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-[#555] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href={WHATSAPP_MESSAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-11 items-center gap-3 border border-white/20 px-4 py-3 text-[9px] font-medium uppercase tracking-[0.18em] text-white/80 transition-all duration-300 hover:border-[#C8B38B] hover:bg-[#C8B38B] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8B38B]"
            >
              Start a conversation

              <ArrowUpRight
                size={13}
                strokeWidth={1.4}
              />
            </a>
          </div>
        </div>

        {/* FOOTER SIGN-OFF */}
        <div className="border-t border-[#202020] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-[9px] uppercase tracking-[0.16em] text-[#555]">
              © {new Date().getFullYear()} ShaYa Professional Audio
            </span>

            <span className="text-[9px] uppercase tracking-[0.16em] text-[#555]">
              HARSHA · Live Sound Engineer
            </span>

          </div>
        </div>

      </div>
    </footer>
  );
}
