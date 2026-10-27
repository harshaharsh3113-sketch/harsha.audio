import PortfolioPage from '@/components/PortfolioPage';
import ContactCard from '@/components/ContactCard';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const PHONE_DISPLAY = '+91 7348967889';
const WHATSAPP_LINK = 'https://wa.me/917348967889';
const EMAIL = 'bookings.harsha@gmail.com';
const INSTAGRAM_HANDLE = '@harrrshhhaa';
const INSTAGRAM_LINK = 'https://instagram.com/harrrshhhaa';

export default function Page10Contact() {
  return (
    <PortfolioPage pageId="page-contact" pageNumber="09 / 10" sectionLabel="10 / Contact">
      <div className="flex flex-col gap-6 flex-1">
        <div className="break-avoid">
          <h2
            className="text-white"
            style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '85%' }}
          >
            Let's talk about your production.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 break-avoid flex-1">
          {/* Left: contact details */}
          <div className="col-span-7 flex flex-col gap-0">
            <p className="body-text mb-5 max-w-[95%]" style={{ fontSize: '12.5px' }}>
              If you are planning a live performance, wedding, corporate production,
              cultural event or open-air show, I'm available for live sound and
              FOH-focused production work.
            </p>

            <div className="flex flex-col gap-0 mb-5">
              <div className="border-t border-[#1F1F1F] pt-4 pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={12} strokeWidth={1.5} className="text-[#888]" />
                  <span className="tech-label" style={{ fontSize: '8px' }}>Contact</span>
                </div>
                <p className="text-white" style={{ fontSize: '15px', fontWeight: 600 }}>
                  Harsha G.
                </p>
                <p className="text-[#A8A8A8]" style={{ fontSize: '12px' }}>
                  Live Sound &amp; FOH Engineer
                </p>
                <p className="text-[#A8A8A8]" style={{ fontSize: '12px' }}>
                  Bengaluru, India
                </p>
              </div>
            </div>

            <ContactCard
              icon={Phone}
              label="Phone / WhatsApp"
              value={PHONE_DISPLAY}
              href={WHATSAPP_LINK}
              external
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value={INSTAGRAM_HANDLE}
              href={INSTAGRAM_LINK}
              external
            />
          </div>

          {/* Right: QR placeholder */}
          <div className="col-span-5 flex flex-col gap-4">
            <div className="border border-[#1F1F1F] bg-[#111111] p-5 flex flex-col items-center gap-4">
              <span className="label-meta-bright text-center">
                Portfolio / Production Work / Contact
              </span>
              {/* QR placeholder — clean geometric mark */}
              <div
                className="relative bg-white flex items-center justify-center"
                style={{ width: '130px', height: '130px' }}
              >
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Position markers */}
                  <rect x="8" y="8" width="32" height="32" fill="black" />
                  <rect x="14" y="14" width="20" height="20" fill="white" />
                  <rect x="18" y="18" width="12" height="12" fill="black" />

                  <rect x="90" y="8" width="32" height="32" fill="black" />
                  <rect x="96" y="14" width="20" height="20" fill="white" />
                  <rect x="100" y="18" width="12" height="12" fill="black" />

                  <rect x="8" y="90" width="32" height="32" fill="black" />
                  <rect x="14" y="96" width="20" height="20" fill="white" />
                  <rect x="18" y="100" width="12" height="12" fill="black" />

                  {/* Data pattern simulation */}
                  {[
                    [48, 8], [56, 8], [64, 8], [72, 8], [80, 8],
                    [48, 16], [64, 16], [80, 16],
                    [48, 24], [56, 24], [72, 24], [80, 24],
                    [48, 32], [64, 32], [72, 32],
                    [8, 48], [16, 48], [24, 48], [40, 48], [48, 48], [56, 48], [72, 48], [88, 48], [96, 48], [112, 48],
                    [24, 56], [40, 56], [56, 56], [64, 56], [80, 56], [96, 56], [104, 56],
                    [8, 64], [16, 64], [32, 64], [48, 64], [72, 64], [88, 64], [104, 64], [112, 64],
                    [24, 72], [40, 72], [56, 72], [64, 72], [80, 72], [96, 72],
                    [8, 80], [16, 80], [32, 80], [48, 80], [56, 80], [72, 80], [88, 80], [104, 80],
                    [48, 88], [64, 88], [80, 88], [96, 88], [112, 88],
                    [48, 96], [56, 96], [72, 96], [88, 96], [104, 96],
                    [48, 104], [64, 104], [80, 104], [96, 104], [112, 104],
                    [48, 112], [56, 112], [72, 112], [88, 112], [104, 112],
                  ].map(([x, y], i) => (
                    <rect key={i} x={x} y={y} width="8" height="8" fill="black" />
                  ))}
                </svg>
              </div>
              <p className="text-[#888] text-center" style={{ fontSize: '10px', lineHeight: 1.4 }}>
                Scan to connect
              </p>
              <p className="text-[#666] text-center" style={{ fontSize: '9px', wordBreak: 'break-all' }}>
                {WHATSAPP_LINK}
              </p>
            </div>

            {/* Print-only link block */}
            <div className="border border-[#1F1F1F] p-4 break-avoid">
              <span className="tech-label block mb-2" style={{ fontSize: '8px' }}>
                Direct Links
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="text-[#999]" style={{ fontSize: '9.5px', wordBreak: 'break-all' }}>
                  WhatsApp: {WHATSAPP_LINK}
                </span>
                <span className="text-[#999]" style={{ fontSize: '9.5px', wordBreak: 'break-all' }}>
                  Instagram: {INSTAGRAM_LINK}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer identity */}
        <div className="break-avoid mt-auto">
          <div className="hairline mb-4" />
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <span
                className="text-white"
                style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.03em' }}
              >
                HARSHA
              </span>
              <span
                className="text-[#A8A8A8]"
                style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' }}
              >
                Live Sound &amp; FOH Engineer
              </span>
              <span
                className="text-[#666]"
                style={{ fontSize: '9.5px', letterSpacing: '0.04em' }}
              >
                FOH Mixing · Live Production · Monitor Mixing · Stage Audio
              </span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="label-meta">Bengaluru, India</span>
              <span className="label-meta" style={{ color: '#4A4A4A' }}>10 / 10</span>
            </div>
          </div>
        </div>
      </div>
    </PortfolioPage>
  );
}
