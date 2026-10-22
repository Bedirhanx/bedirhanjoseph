'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 25 });
  const ringY = useSpring(y, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y, translateX: '-50%', translateY: '-50%' }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }} />
    </>
  );
}
