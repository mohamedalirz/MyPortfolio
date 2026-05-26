import { useEffect, useRef } from 'react';

function animateCount(el, target, suffix, duration) {
  let start = null;
  (function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * ease) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  })(performance.now());
}

export function useCounters(stats, delay = 2700) {
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const timer = setTimeout(() => {
      stats.forEach(({ id, target, suffix }) => {
        if (!id || target === undefined) return;
        const el = document.getElementById(id);
        if (el) animateCount(el, target, suffix, 2000);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [stats, delay]);
}
