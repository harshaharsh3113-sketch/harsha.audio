import PortfolioPage from '@/components/PortfolioPage';
import ImageFrame from '@/components/ImageFrame';

const productions = [
  {
    number: '01',
    title: 'Church & Worship',
    subtitle: 'FOH / LIVE TELECAST',
    image: '/image_02.jpg',
    alt: 'Church and worship production',
    location: 'Bengaluru',
    role: 'FOH Sound Engineer',
    description:
      'A full worship production built around a live band, choir and lead vocals, with stage monitoring and a dedicated audio feed for live telecast. The focus was maintaining clarity and control across a dense musical arrangement while keeping the stage stable for the performers.',
    system:
      'Allen & Heath QU32 · QSC LA112 · KS118 · K.2 · Sennheiser XSW · Shure SM58',
    work:
      'FOH mixing · monitor management · soundcheck · gain structure · EQ & dynamics · feedback management · stage coordination',
  },
  {
    number: '02',
    title: 'Classical Live',
    subtitle: 'LIVE SOUND / FOH',
    image: '/image_03.jpg',
    alt: 'Classical live production',
    location: 'Bengaluru',
    role: 'Live Sound / FOH',
    description:
      'A compact classical production combining vocals, flute, veena, mridangam, nattuvangam and playback. The challenge was creating separation and definition between acoustic instruments while keeping the stage monitoring natural and controlled.',
    system:
      'Soundcraft Ui24R · JBL EON 915 · Dedicated stage monitor mixes',
    work:
      'FOH mixing · gain structure · EQ & dynamics · monitor mixing · stage patching · playback routing · soundcheck',
  },
  {
    number: '03',
    title: 'Open-Air Live',
    subtitle: 'FOH / STAGE AUDIO',
    image: '/image_04.jpg',
    alt: 'Open-air live production',
    location: 'Bengaluru',
    role: 'FOH Sound Engineer',
    description:
      'An open-air university band production with a full live stage and large audience environment. The production required clear FOH translation, coordinated stage monitoring and reliable operation throughout the performance.',
    system:
      'Allen & Heath dLive · RCF line-array · JBL subwoofers · JBL stage monitors',
    work:
      'FOH operation · live mixing · stage audio · soundcheck · monitor coordination · troubleshooting · artist coordination',
  },
  {
    number: '04',
    title: 'Private Wedding',
    subtitle: 'MAIN FOH ENGINEER',
    image: '/image_05.jpg',
    alt: 'Private wedding live production',
    location: 'Hospet',
    role: 'Main FOH Sound Engineer',
    description:
      'A full-band wedding production involving multiple vocalists, drums, guitars and keys. I handled the main FOH position through setup, soundcheck and live operation, working alongside the stage team to keep the production moving smoothly.',
    system:
      'Allen & Heath QU32 · QSC LA112 · KS118 · K.2 · iPad remote control',
    work:
      'FOH mixing · artist support · stage audio · soundcheck · monitor coordination · troubleshooting · production coordination',
  },
];

export default function Page06SelectedWork() {
  return (
    <PortfolioPage
      pageId="page-selectedwork"
      pageNumber=""
      sectionLabel="06 / Selected Work"
    >
      <div>

        {/* INTRO */}
        <div className="max-w-[780px] mb-[clamp(4rem,8vw,7rem)]">
          <div className="group">
            <div className="flex items-center gap-3 mb-5">
              <span className="label-meta-bright transition-all duration-300 group-hover:tracking-[0.18em]">
                LIVE PRODUCTION
              </span>
              <span className="block h-px w-8 bg-[#333] transition-all duration-500 group-hover:w-14 group-hover:bg-[#666]" />
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              Selected
              <br />
              <span className="text-[#555]">Work.</span>
            </h2>

            <p className="mt-7 max-w-[58ch] text-[0.9rem] leading-[1.75] text-[#858585] transition-colors duration-300 group-hover:text-[#A8A8A8]">
              A selection of productions across worship, classical,
              open-air and private event environments. Each production
              required a different approach to the room, stage and system.
            </p>
          </div>
        </div>

        {/* WORK */}
        <div>
          {productions.map((production, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <article
                key={production.number}
                className="group border-t border-[#1F1F1F] py-[clamp(4rem,8vw,7rem)]"
              >
                <div
                  className={`grid items-center gap-[clamp(2.5rem,6vw,6rem)] lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] ${!imageLeft ? 'lg:[&>div:first-child]:order-2' : ''
                    }`}
                >
                  {/* IMAGE */}
                  <div>
                    <ImageFrame
                      src={production.image}
                      alt={production.alt}
                      className="w-full"
                      style={{ aspectRatio: '4 / 3' }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col">

                    <div className="flex items-baseline gap-4">
                      <span className="label-meta-bright">
                        {production.number}
                      </span>

                      <span className="label-meta">
                        {production.location}
                      </span>
                    </div>

                    <h3 className="mt-5 text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white transition-transform duration-300 group-hover:translate-x-[2px]">
                      {production.title}
                    </h3>

                    <p className="mt-3 text-[9px] font-medium tracking-[0.2em] text-[#666]">
                      {production.subtitle}
                    </p>

                    <div className="mt-7 h-px w-8 bg-[#383838] transition-all duration-500 group-hover:w-14 group-hover:bg-[#666]" />

                    <p className="mt-6 text-[0.86rem] leading-[1.75] text-[#888] transition-colors duration-300 group-hover:text-[#A8A8A8]">
                      {production.description}
                    </p>

                    {/* ROLE */}
                    <div className="mt-8 grid grid-cols-[72px_1fr] gap-4 border-t border-[#1F1F1F] pt-4">
                      <span className="text-[9px] font-medium tracking-[0.16em] text-[#555]">
                        ROLE
                      </span>

                      <span className="text-[0.72rem] leading-5 text-[#C0C0C0]">
                        {production.role}
                      </span>
                    </div>

                    {/* SYSTEM */}
                    <div className="mt-4 grid grid-cols-[72px_1fr] gap-4">
                      <span className="text-[9px] font-medium tracking-[0.16em] text-[#555]">
                        SYSTEM
                      </span>

                      <span className="text-[0.72rem] leading-5 text-[#8C8C8C]">
                        {production.system}
                      </span>
                    </div>

                    {/* WORK */}
                    <div className="mt-4 grid grid-cols-[72px_1fr] gap-4">
                      <span className="text-[9px] font-medium tracking-[0.16em] text-[#555]">
                        WORK
                      </span>

                      <span className="text-[0.72rem] leading-5 text-[#8C8C8C]">
                        {production.work}
                      </span>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CLOSING */}
        <div className="border-t border-[#1F1F1F] pt-8 pb-2">
          <p className="max-w-[620px] text-[0.78rem] leading-[1.7] text-[#555]">
            Different rooms, different systems, different demands.
            The approach changes with the production. The objective
            remains the same: a controlled, reliable and musical result.
          </p>
        </div>

      </div>
    </PortfolioPage>
  );
}