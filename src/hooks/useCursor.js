import { useEffect, useRef } from 'react';

export function useCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMouseMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const animRing = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.13;
      p.ry += (p.my - p.ry) * 0.13;
      ring.style.left = p.rx + 'px';
      ring.style.top = p.ry + 'px';
      rafRef.current = requestAnimationFrame(animRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animRing);

    const hoverEls = () =>
      document.querySelectorAll('a, button, .project-card, .about-card, .tech-chip, .social-item');

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.8)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
      ring.style.borderColor = 'rgba(0,245,255,0.6)';
    };
    const onLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.borderColor = 'rgba(0,245,255,0.35)';
    };

    const attachHovers = () => {
      hoverEls().forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachHovers();

    // Re-attach on DOM mutations (for dynamic content)
    const observer = new MutationObserver(attachHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return { cursorRef, ringRef };
}
