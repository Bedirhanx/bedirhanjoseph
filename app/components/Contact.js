'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const contacts = [
  { ico: '📧', label: 'Email', value: 'phantomfaber@gmail.com', href: 'mailto:phantomfaber@gmail.com' },
  { ico: '💼', label: 'LinkedIn', value: 'bedirhan-yusuf-erdemli', href: 'https://www.linkedin.com/in/bedirhan-yusuf-erdemli' },
  { ico: '🐙', label: 'GitHub', value: '@Bedirhanx', href: 'https://github.com/Bedirhanx' },
  { ico: '📸', label: 'Instagram', value: '@rawtusk', href: 'https://www.instagram.com/rawtusk/' },
];

export default function Contact() {
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setStatus({ type: '', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'something broke');
      setStatus({ type: 'ok', msg: 'message received, i’ll hit you back soon ✌️' });
      form.reset();
    } catch (err) {
      setStatus({ type: 'err', msg: `oops: ${err.message} 💀` });
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 80, damping: 16 }}
      >
        <span className="section-label">04 — contact</span>
        <h2 className="section-title">
          slide into my <span className="grad">DMs</span> 📩
        </h2>
      </motion.div>

      <div className="contact-wrap">
        <div className="contact-links">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-link"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: i * 0.1 }}
            >
              <span className="ico">{c.ico}</span>
              <span>
                {c.label}
                <small>{c.value}</small>
              </span>
            </motion.a>
          ))}
        </div>

        <motion.form
          className="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, rotateY: -30, x: 60 }}
          whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 70, damping: 14 }}
        >
          <label>
            your name
            <input name="name" required maxLength={100} placeholder="main character" />
          </label>
          <label>
            email
            <input name="email" type="email" required maxLength={200} placeholder="you@cool.com" />
          </label>
          <label>
            message
            <textarea name="message" required maxLength={3000} placeholder="spill the tea ☕" />
          </label>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? 'sending…' : 'send it 🚀'}
          </button>
          <p className={`form-status ${status.type}`} role="status">{status.msg}</p>
        </motion.form>
      </div>
    </section>
  );
}
