'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-big"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 60 }}
      >
        let&apos;s build ✦
      </motion.div>
      <div className="footer-row">
        <span>© {new Date().getFullYear()} Bedirhan Yusuf Erdemli · Data Science @ De Anza College · made with Next.js + 💖</span>
        <span>
          <a href="https://www.linkedin.com/in/bedirhan-yusuf-erdemli" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Bedirhanx" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.instagram.com/rawtusk/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#top">top ↑</a>
        </span>
      </div>
    </footer>
  );
}
