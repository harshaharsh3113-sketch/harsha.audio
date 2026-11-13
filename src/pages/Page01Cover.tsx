
import { useEffect, useRef } from "react";
import PortfolioPage from "../components/PortfolioPage";

export default function Page01Cover() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();

      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      hero.style.setProperty("--pointer-x", `${x * 12}px`);
      hero.style.setProperty("--pointer-y", `${y * 12}px`);
    };

    const resetPointer = () => {
      hero.style.setProperty("--pointer-x", "0px");
      hero.style.setProperty("--pointer-y", "0px");
    };

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", resetPointer);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <PortfolioPage pageId="page-cover" sectionLabel="01 / Introduction">
      <main ref={heroRef} className="harsha-cover">
        <div className="cover-grain" aria-hidden="true" />

        <div className="cover-image-wrap" aria-hidden="true">
          <img
            src="/image_01.jpg"
            alt=""
            className="cover-image"
          />
        </div>

        <div className="cover-overlay" aria-hidden="true" />

        <div className="cover-content">
          <div className="cover-topline">
            <span className="cover-index">H / 001</span>

            <span className="cover-location">
              BENGALURU, INDIA
            </span>

            <span className="cover-discipline">
              LIVE SOUND · FOH ENGINEERING
            </span>
          </div>

          <section className="cover-main">
            <div className="cover-intro">
              <span className="cover-eyebrow">
                INDEPENDENT LIVE SOUND ENGINEER
              </span>

              <h1 className="cover-heading">
                <span>Sound</span>
                <span className="heading-second">
                  <i>in</i> its
                </span>
                <span>Element.</span>
              </h1>

              <div className="cover-description">
                <span className="description-line" />

                <p>
                  Bringing clarity, control and intention
                  <br className="desktop-break" />
                  to every live performance.
                </p>
              </div>

              <div className="cover-actions">
                <a href="/work" className="cover-link primary-link">
                  <span>EXPLORE MY WORK</span>
                  <span className="link-arrow" aria-hidden="true">↗</span>
                </a>

                <a href="/contact" className="cover-link secondary-link">
                  GET IN TOUCH
                  <span className="link-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="cover-side-note">
              <span className="side-note-number">01 — 03</span>
              <span className="side-note-rule" />
              <p>
                Every source has a purpose.
                <br />
                Every decision has an impact.
              </p>
            </div>
          </section>

          <div className="cover-bottom">
            <div className="cover-role">
              <span className="bottom-label">FOCUS</span>
              <span>FRONT OF HOUSE / LIVE PRODUCTION</span>
            </div>

            <div className="cover-scroll">
              <span>SCROLL TO EXPLORE</span>
              <span className="scroll-line" />
            </div>

            <div className="cover-coordinate">
              <span>INDEPENDENT PRACTICE</span>
              <span>EST. IN SOUND</span>
            </div>
          </div>
        </div>

        <style>{`
          .harsha-cover {
            --pointer-x: 0px;
            --pointer-y: 0px;
            position: relative;
            isolation: isolate;
            min-height: min(900px, calc(100svh - 1px));
            min-height: max(720px, calc(100svh - 1px));
            overflow: hidden;
            background: #090909;
            color: #f1f0ed;
            font-family: inherit;
          }

          .cover-image-wrap {
            position: absolute;
            z-index: -3;
            inset: 0;
            overflow: hidden;
          }

          .cover-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 44%;
            opacity: 0.54;
            filter: grayscale(100%) brightness(0.72);
            transform:
              scale(1.055)
              translate3d(var(--pointer-x), var(--pointer-y), 0);
            animation: cover-image-reveal 1.8s cubic-bezier(.2,.7,.2,1) both;
            transition: transform 700ms cubic-bezier(.2,.7,.2,1);
          }

          .cover-overlay {
            position: absolute;
            z-index: -2;
            inset: 0;
            background:
              linear-gradient(90deg,
                rgba(7,7,7,.97) 0%,
                rgba(7,7,7,.87) 34%,
                rgba(7,7,7,.46) 67%,
                rgba(7,7,7,.28) 100%),
              linear-gradient(0deg,
                rgba(7,7,7,.96) 0%,
                transparent 27%,
                transparent 70%,
                rgba(7,7,7,.38) 100%);
          }

          .cover-grain {
            position: absolute;
            z-index: 2;
            inset: 0;
            pointer-events: none;
            opacity: .12;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.23'/%3E%3C/svg%3E");
          }

          .cover-content {
            position: relative;
            z-index: 3;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            min-height: inherit;
            padding: clamp(25px, 4.5vw, 68px);
          }

          .cover-topline,
          .cover-bottom {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            gap: 20px;
            font-size: 9px;
            font-weight: 500;
            letter-spacing: .19em;
            color: rgba(241,240,237,.62);
          }

          .cover-location {
            text-align: center;
          }

          .cover-discipline {
            text-align: right;
          }

          .cover-main {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;
            padding: clamp(75px, 11vh, 125px) 0 90px;
          }

          .cover-intro {
            max-width: 900px;
            animation: cover-content-reveal 1s .2s both;
          }

          .cover-eyebrow {
            display: inline-block;
            margin-bottom: clamp(26px, 4vh, 42px);
            font-size: 9px;
            font-weight: 500;
            letter-spacing: .25em;
            color: rgba(241,240,237,.62);
          }

          .cover-heading {
            margin: 0;
            font-size: clamp(76px, 12.2vw, 174px);
            line-height: .79;
            font-weight: 400;
            letter-spacing: -.095em;
            text-transform: uppercase;
          }

          .cover-heading span {
            display: block;
            width: fit-content;
            transition:
              transform 650ms cubic-bezier(.2,.7,.2,1),
              color 450ms ease;
          }

          .cover-heading span:first-child {
            color: #f0efeb;
          }

          .cover-heading .heading-second {
            margin: .14em 0 .12em .72em;
            color: rgba(240,239,235,.68);
            font-size: .69em;
            letter-spacing: -.075em;
            text-transform: none;
          }

          .cover-heading .heading-second i {
            font-family: Georgia, serif;
            font-weight: 400;
          }

          .cover-heading span:last-child {
            color: #f0efeb;
          }

          .cover-intro:hover .cover-heading span:first-child {
            transform: translateX(9px);
          }

          .cover-intro:hover .cover-heading span:last-child {
            transform: translateX(18px);
          }

          .cover-description {
            display: flex;
            align-items: flex-start;
            gap: 17px;
            margin: 42px 0 0 7px;
          }

          .description-line {
            width: 34px;
            height: 1px;
            margin-top: 9px;
            background: rgba(241,240,237,.65);
            transition: width 450ms ease;
          }

          .cover-description p {
            margin: 0;
            color: rgba(241,240,237,.7);
            font-size: 12px;
            line-height: 1.9;
            letter-spacing: .035em;
          }

          .cover-intro:hover .description-line {
            width: 54px;
          }

          .cover-actions {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 34px;
            margin: 43px 0 0 7px;
          }

          .cover-link {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 20px;
            padding: 0 0 12px;
            color: #f0efeb;
            text-decoration: none;
            font-size: 9px;
            font-weight: 500;
            letter-spacing: .18em;
            transition: color 300ms ease;
          }

          .cover-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: rgba(240,239,235,.35);
            transform: scaleX(.35);
            transform-origin: left;
            transition: transform 450ms cubic-bezier(.2,.7,.2,1);
          }

          .cover-link:hover::after {
            transform: scaleX(1);
          }

          .cover-link:hover {
            color: #fff;
          }

          .link-arrow {
            font-size: 15px;
            transition: transform 350ms ease;
          }

          .cover-link:hover .link-arrow {
            transform: translate(3px, -3px);
          }

          .cover-side-note {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 17px;
            margin-bottom: 12px;
            color: rgba(241,240,237,.55);
            text-align: right;
            animation: cover-content-reveal 1s .55s both;
          }

          .side-note-number {
            font-size: 9px;
            letter-spacing: .16em;
          }

          .side-note-rule {
            width: 45px;
            height: 1px;
            background: rgba(241,240,237,.4);
          }

          .cover-side-note p {
            margin: 0;
            font-family: Georgia, serif;
            font-size: 13px;
            font-style: italic;
            line-height: 1.7;
          }

          .cover-bottom {
            padding-top: 22px;
            border-top: 1px solid rgba(241,240,237,.19);
            animation: cover-content-reveal 1s .7s both;
          }

          .cover-role {
            display: flex;
            flex-direction: column;
            gap: 9px;
          }

          .bottom-label {
            color: rgba(241,240,237,.42);
            font-size: 8px;
          }

          .cover-scroll {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
          }

          .scroll-line {
            width: 36px;
            height: 1px;
            background: rgba(241,240,237,.6);
            transform-origin: left;
            animation: scroll-line 2s ease-in-out infinite;
          }

          .cover-coordinate {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 9px;
          }

          @keyframes cover-image-reveal {
            from {
              opacity: 0;
              transform: scale(1.12);
            }
            to {
              opacity: .54;
              transform: scale(1.055);
            }
          }

          @keyframes cover-content-reveal {
            from {
              opacity: 0;
              transform: translateY(22px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scroll-line {
            0%, 100% { transform: scaleX(.55); opacity: .5; }
            50% { transform: scaleX(1); opacity: 1; }
          }

          @media (min-width: 1500px) {
            .cover-heading {
              font-size: clamp(174px, 11.5vw, 205px);
            }
          }

          @media (max-width: 900px) {
            .cover-main {
              align-items: flex-start;
            }

            .cover-side-note {
              display: none;
            }

            .cover-heading {
              font-size: clamp(82px, 15vw, 135px);
            }

            .cover-overlay {
              background:
                linear-gradient(90deg, rgba(7,7,7,.92), rgba(7,7,7,.53)),
                linear-gradient(0deg, rgba(7,7,7,.96), transparent 60%);
            }
          }

          @media (max-width: 600px) {
            .harsha-cover {
              min-height: 780px;
              min-height: max(780px, 100svh);
            }

            .cover-content {
              padding: 25px 22px 28px;
            }

            .cover-topline {
              grid-template-columns: 1fr 1fr;
              font-size: 8px;
            }

            .cover-location {
              text-align: right;
            }

            .cover-discipline {
              display: none;
            }

            .cover-main {
              padding: 95px 0 75px;
            }

            .cover-eyebrow {
              font-size: 8px;
              letter-spacing: .19em;
              margin-bottom: 35px;
            }

            .cover-heading {
              font-size: clamp(69px, 16vw, 100px);
              line-height: .85;
            }

            .cover-heading .heading-second {
              margin-left: .42em;
            }

            .cover-description {
              margin-top: 35px;
            }

            .cover-description p {
              font-size: 11px;
            }

            .cover-actions {
              gap: 25px;
              margin-top: 38px;
            }

            .cover-link {
              font-size: 8px;
              gap: 10px;
            }

            .cover-bottom {
              grid-template-columns: 1fr 1fr;
              font-size: 8px;
              gap: 12px;
            }

            .cover-scroll {
              display: none;
            }

            .cover-coordinate {
              text-align: right;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .cover-image,
            .cover-intro,
            .cover-side-note,
            .cover-bottom,
            .scroll-line {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </main>
    </PortfolioPage>
  );
}
