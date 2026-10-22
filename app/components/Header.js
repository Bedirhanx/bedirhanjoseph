'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
    >
      <a href="#top" className="logo">bedirhan✦</a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? 'close' : 'menu'}
      </button>
      <nav className={`nav ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
