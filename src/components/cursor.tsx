'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const spring = { stiffness: 350, damping: 28, mass: 0.5 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const bindInteractives = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    bindInteractives();

    // Re-bind when new interactive elements are added to the DOM
    const observer = new MutationObserver(bindInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, [x, y]);

  return (
    <motion.div
      className="cursor-dot fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{ x: springX, y: springY }}
      animate={{ scale: isHovering ? 2.8 : 1 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      aria-hidden="true"
    />
  );
}
