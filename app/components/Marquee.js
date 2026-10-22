'use client';

import { motion } from 'framer-motion';

export default function Marquee({ items, alt = false, reverse = false }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee ${alt ? 'alt' : ''}`}>
      <motion.div
        className="marquee-track"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 22 }}
      >
        {row.map((item, i) => (
          <span key={i}>{item} ✦</span>
        ))}
      </motion.div>
    </div>
  );
}
