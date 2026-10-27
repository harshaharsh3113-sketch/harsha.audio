import { useEffect, useRef, type ReactNode, type MouseEvent } from 'react';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number; // Maximum translation in px (default 8px)
}

export default function Magnetic({
  children,
  className = '',
  strength = 8,
}: MagneticProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const el = elRef.current;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;
    let isHovering = false;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp between -1 and 1, multiply by strength (default 8px)
      targetX = Math.max(-1, Math.min(1, deltaX)) * strength;
      targetY = Math.max(-1, Math.min(1, deltaY)) * strength;
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      // Spring lerp
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05 || isHovering) {
        el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      } else if (!isHovering && (currentX !== 0 || currentY !== 0)) {
        currentX = 0;
        currentY = 0;
        el.style.transform = 'translate3d(0, 0, 0)';
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.style.transform = '';
    };
  }, [strength]);

  return (
    <div
      ref={elRef}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

