'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Scene = dynamic(() => import('./Scene'), { ssr: false });

const lines = ['Bedirhan', 'Yusuf', 'Erdemli'];

function AnimatedLine({ word, lineIndex, outline }) {
  return (
    <span className={`name-line ${outline ? 'outline' : ''}`}>
      {word.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="name-letter"
          initial={{ y: 120, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 0.4 + lineIndex * 0.25 + i * 0.04 }}
          whileHover={{ y: -18, rotate: (i % 2 ? 1 : -1) * 12, scale: 1.2 }}
          style={{ pointerEvents: 'auto' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-canvas">
        <Scene />
      </div>

      <div className="hero-content">
        <motion.span
          className="badge"
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: -3 }}
          transition={{ type: 'spring', delay: 0.2 }}
        >
          👋 hey bestie, it&apos;s me
        </motion.span>

        <h1 className="big-name">
          {lines.map((w, i) => (
            <AnimatedLine key={w} word={w} lineIndex={i} outline={i === 1} />
          ))}
        </h1>

        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          21 ✦ data scientist ✦ business minor @ De Anza College ✦ turning messy
          data into decisions that actually slap 📊🔥
        </motion.p>

        <motion.div
          className="cta-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <a href="#projects" className="btn btn-primary">see my work ↓</a>
          <a href="#contact" className="btn btn-ghost">let&apos;s talk 💬</a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
