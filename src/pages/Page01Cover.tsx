import ImageFrame from '@/components/ImageFrame';

export default function Page01Cover() {
  return (
    <section className="portfolio-page" id="page-cover">
      <div className="page-safe" style={{ padding: 0 }}>
        <div className="relative w-full h-full overflow-hidden">
          <ImageFrame
            src="/image_01.jpg"
            alt="image_01.jpg"
            className="w-full h-full"
            overlay
            overlayStrength="heavy"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-[16mm]">
            {/* Top metadata */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <span className="label-section text-white/80">
                  Portfolio
                </span>
                <span className="label-meta text-white/50">
                  01 / Cover
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="label-meta text-white/50">2026</span>
                <span className="label-meta text-white/40">A4 · 01/10</span>
              </div>
            </div>

            {/* Center hero */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <span
                  className="text-white/60"
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                  }}
                >
                  Live Sound Engineer
                </span>
              </div>
              <h1
                className="text-white"
                style={{
                  fontSize: '120px',
                  fontWeight: 800,
                  letterSpacing: '-0.05em',
                  lineHeight: 0.85,
                }}
              >
                HARSHA
              </h1>
              <div
                className="text-white/90"
                style={{
                  fontSize: '17px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  lineHeight: 1.4,
                }}
              >
                Live Sound &amp; FOH Engineer
              </div>
              <div className="hairline-muted max-w-[280px] mt-2 opacity-50" />
              <p
                className="text-white/60"
                style={{
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                }}
              >
                FOH Mixing · Live Production · Monitor Mixing · Stage Audio
              </p>
            </div>

            {/* Bottom metadata */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="label-meta text-white/50">Based In</span>
                <span
                  className="text-white/85"
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                  }}
                >
                  Bengaluru, India
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="label-meta text-white/50">Discipline</span>
                <span
                  className="text-white/85"
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                  }}
                >
                  Front of House
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
