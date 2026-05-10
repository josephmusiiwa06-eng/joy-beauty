'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, textarea, select, label')) {
        ring.classList.add('hover');
      } else {
        ring.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    let animId: number;
    const animateRing = () => {
      ringX += (mouseX - 20 - ringX) * 0.12;
      ringY += (mouseY - 20 - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animId = requestAnimationFrame(animateRing);
    };
    animateRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden="true" />
    </>
  );
}
