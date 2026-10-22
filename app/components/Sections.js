'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const reveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: 'spring', stiffness: 80, damping: 16 },
};

function Heading({ label, children }) {
  return (
    <motion.div {...reveal}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{children}</h2>
    </motion.div>
  );
}

/* ---------------- About ---------------- */

const stats = [
  { n: '21', t: 'years old' },
  { n: 'DS', t: 'data science major' },
  { n: '📈', t: 'business minor' },
  { n: '∞', t: 'cups of coffee' },
];

export function About() {
  return (
    <section className="section" id="about">
      <Heading label="01 — about me">
        who&apos;s <span className="grad">this guy?</span>
      </Heading>
      <div className="about-grid">
        <motion.div className="about-text" {...reveal}>
          <p>
            Yo! I&apos;m <strong>Bedirhan Yusuf Erdemli</strong> — a 21-year-old{' '}
            <strong>Data Science</strong> student with a <strong>Business minor</strong> at{' '}
            <strong>De Anza College</strong> in Cupertino.
          </p>
          <p>
            I live where numbers meet strategy: cleaning messy datasets, training models,
            and turning the results into stories a business can actually act on. Plus I
            build web stuff like this site with <strong>Node.js</strong> &amp;{' '}
            <strong>Next.js</strong>. ✨
          </p>
        </motion.div>
        <div className="about-side">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            whileHover={{ scale: 1.04, rotate: -2 }}
          >
            <Image
              src="/me.jpg"
              alt="Portrait of Bedirhan Yusuf Erdemli"
              width={800}
              height={800}
              sizes="(max-width: 900px) 80vw, 400px"
              priority
            />
          </motion.div>
          <div className="stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.t}
                className="stat"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: i * 0.1 }}
                whileHover={{ scale: 1.08, rotate: 0 }}
              >
                <b>{s.n}</b>
                {s.t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */

const skills = [
  { emoji: '🐍', name: 'Python', desc: 'pandas, NumPy, notebooks', level: 90, glow: 'linear-gradient(135deg,#ffe53b,#2b86c5)' },
  { emoji: '🗄️', name: 'SQL', desc: 'queries, joins, databases', level: 85, glow: 'linear-gradient(135deg,#3dfcff,#2b86c5)' },
  { emoji: '🤖', name: 'Machine Learning', desc: 'scikit-learn, models, eval', level: 78, glow: 'linear-gradient(135deg,#ff3cac,#784ba0)' },
  { emoji: '📊', name: 'Data Viz', desc: 'matplotlib, Tableau, dashboards', level: 85, glow: 'linear-gradient(135deg,#c6ff3d,#3dfcff)' },
  { emoji: '📐', name: 'Statistics', desc: 'probability, A/B testing', level: 82, glow: 'linear-gradient(135deg,#784ba0,#3dfcff)' },
  { emoji: '💼', name: 'Business', desc: 'analytics, strategy, Excel', level: 80, glow: 'linear-gradient(135deg,#ffe53b,#ff3cac)' },
  { emoji: '🟢', name: 'Node.js', desc: 'APIs & servers', level: 70, glow: 'linear-gradient(135deg,#c6ff3d,#2b86c5)' },
  { emoji: '▲', name: 'Next.js', desc: 'web apps like this one', level: 70, glow: 'linear-gradient(135deg,#ffffff,#784ba0)' },
];

export function Skills() {
  return (
    <section className="section" id="skills">
      <Heading label="02 — skills">
        my <span className="grad">tech stack</span> 🛠️
      </Heading>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill"
            style={{ '--glow': s.glow }}
            initial={{ opacity: 0, y: 50, rotateY: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 90, damping: 14, delay: i * 0.06 }}
            whileHover={{ y: -10, rotate: i % 2 ? 2 : -2, scale: 1.04 }}
          >
            <motion.span
              className="emoji"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
            >
              {s.emoji}
            </motion.span>
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <div className="bar">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

const projects = [
  {
    emoji: '🛒',
    title: 'Customer Churn Predictor',
    desc: 'ML model that flags customers likely to leave, with insights a business team can act on.',
    tags: ['Python', 'scikit-learn', 'Business'],
    art: 'radial-gradient(circle at 30% 20%, #ff3cac, transparent 60%), radial-gradient(circle at 80% 40%, #784ba0, transparent 60%)',
  },
  {
    emoji: '📈',
    title: 'Sales Dashboard',
    desc: 'Interactive dashboard tracking revenue, trends and KPIs from raw sales data.',
    tags: ['SQL', 'Tableau', 'Analytics'],
    art: 'radial-gradient(circle at 70% 20%, #3dfcff, transparent 60%), radial-gradient(circle at 20% 50%, #2b86c5, transparent 60%)',
  },
  {
    emoji: '💬',
    title: 'Sentiment Analyzer',
    desc: 'NLP project that reads product reviews and scores how people really feel.',
    tags: ['Python', 'NLP', 'pandas'],
    art: 'radial-gradient(circle at 50% 20%, #c6ff3d, transparent 55%), radial-gradient(circle at 90% 60%, #ffe53b, transparent 50%)',
  },
  {
    emoji: '🌐',
    title: 'This Portfolio',
    desc: '3D, animated personal site with a Node.js contact API. Yes, the blob is real.',
    tags: ['Next.js', 'Node.js', 'Three.js'],
    art: 'radial-gradient(circle at 25% 25%, #ffe53b, transparent 55%), radial-gradient(circle at 75% 45%, #ff3cac, transparent 55%)',
  },
];

function TiltCard({ p, i }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      className="project"
      style={{ rotateX, rotateY, '--art': p.art }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 80, damping: 15, delay: (i % 2) * 0.15 }}
    >
      <div className="project-art" />
      <motion.span
        className="project-emoji"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 + i * 0.3 }}
      >
        {p.emoji}
      </motion.span>
      <div className="project-body">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <Heading label="03 — projects">
        stuff i <span className="grad">cooked</span> 🍳
      </Heading>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <TiltCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
