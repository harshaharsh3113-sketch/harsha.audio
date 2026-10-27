import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop with mouse/trackpad)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    // Add class to body to enable custom cursor styles
    document.body.classList.add('has-custom-cursor');

    // Pointer targets
    const mouse = { x: -100, y: -100 };
    const dot = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };

    let isDocumentActive = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isDocumentActive) {
        isDocumentActive = true;
        dot.x = mouse.x;
        dot.y = mouse.y;
        ring.x = mouse.x;
        ring.y = mouse.y;
        setIsVisible(true);
      }
    };

    const onMouseLeave = () => {
      isDocumentActive = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isDocumentActive = true;
      setIsVisible(true);
    };

    // Global event delegation for interactive elements & contextual labels
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest<HTMLElement>(
        'a, button, [data-cursor], [data-cursor-hover], input, textarea, select, [role="button"]'
      );

      if (interactive) {
        setIsHovered(true);
        const label = interactive.getAttribute('data-cursor');
        setCursorLabel(label || null);
      } else {
        setIsHovered(false);
        setCursorLabel(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth physical interpolation loop
    const render = () => {
      if (isDocumentActive) {
        // Dot tracks immediately / with very tight follow
        dot.x += (mouse.x - dot.x) * 0.75;
        dot.y += (mouse.y - dot.y) * 0.75;

        // Ring follows with subtle, buttery inertia (lerp factor ~0.16)
        ring.x += (mouse.x - ring.x) * 0.16;
        ring.y += (mouse.y - ring.y) * 0.16;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
        }

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden no-print transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Primary Dot - 5px crisp indicator */}
      <div
        ref={dotRef}
        className={`pointer-events-none absolute -left-[2.5px] -top-[2.5px] h-[5px] w-[5px] rounded-full bg-white transition-opacity duration-200 ${
          isHovered ? 'opacity-40' : 'opacity-90'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Secondary Ring - Inertial follower with contextual expansion */}
      <div
        ref={ringRef}
        className={`pointer-events-none absolute flex items-center justify-center rounded-full border border-white/40 transition-[width,height,border-color,background-color,margin] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          cursorLabel
            ? 'h-[52px] w-[52px] -ml-[26px] -mt-[26px] border-white/60 bg-white/[0.06] backdrop-blur-[2px]'
            : isHovered
            ? 'h-[44px] w-[44px] -ml-[22px] -mt-[22px] border-white/70 bg-white/[0.04]'
            : 'h-[32px] w-[32px] -ml-[16px] -mt-[16px] border-white/30 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorLabel && (
          <span
            ref={labelRef}
            className="animate-in fade-in zoom-in-95 pointer-events-none select-none text-[8px] font-semibold tracking-[0.2em] text-white duration-200"
          >
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}

