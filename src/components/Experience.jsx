import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const bullets = [
  'Worked on software testing processes using Generative AI tools to improve accuracy and efficiency.',
  'Contributed to curriculum design and structured educational content development.',
  'Assisted in improving system functionality, usability, and overall user experience.',
  'Gained hands-on exposure to real-world software workflows, agile methods, and quality assurance practices.',
];

const Experience = () => {
  return (
    <section id="experience">
      <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <Briefcase size={14} /> Work Experience
        </div>
        <h2 className="section-title">
          Where I've <span className="gradient-text">Contributed</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Real-world experience shaping my perspective as a developer.
        </p>
      </motion.div>

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical timeline line */}
        <div style={{
          position: 'absolute',
          left: '24px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-pink), transparent)',
          borderRadius: '2px',
        }} />

        <motion.div
          {...fadeUp(0.1)}
          style={{ paddingLeft: '70px', position: 'relative' }}
        >
          {/* Timeline dot */}
          <div style={{
            position: 'absolute',
            left: '14px',
            top: '32px',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            background: 'var(--bg-primary)',
            border: '2px solid var(--accent-purple)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(139,92,246,0.5)',
            zIndex: 1,
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
          </div>

          <div className="glass-card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '0.4rem',
                }}>
                  Software Testing &amp; Curriculum Design Intern
                </h3>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--accent-purple)',
                  marginBottom: '0.8rem',
                }}>
                  Edurupt Technologies Pvt. Ltd.
                </h4>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <CalendarDays size={14} color="var(--accent-cyan)" />
                    Sep 2023 – Dec 2023
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} color="var(--accent-pink)" />
                    Remote
                  </div>
                </div>
              </div>
              <span className="badge badge-emerald" style={{ whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>
                Internship
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--border-subtle)', marginBottom: '1.5rem' }} />

            {/* Bullets */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}
                >
                  <CheckCircle2
                    size={16}
                    color="var(--accent-emerald)"
                    style={{ flexShrink: 0, marginTop: '3px' }}
                  />
                  <span style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.97rem' }}>{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* Skills used */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                SKILLS APPLIED
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Generative AI', 'Software Testing', 'Content Design', 'QA', 'Documentation'].map((s, i) => (
                  <span key={i} className="badge badge-purple" style={{ fontSize: '0.78rem' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future placeholder */}
        <motion.div
          {...fadeUp(0.3)}
          style={{ paddingLeft: '70px', marginTop: '2rem', position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            left: '14px',
            top: '24px',
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            background: 'var(--bg-secondary)',
            border: '2px dashed var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>+</span>
          </div>
          <div
            className="glass-card"
            style={{
              padding: '1.5rem',
              borderStyle: 'dashed',
              borderColor: 'var(--border-subtle)',
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
            }}
          >
            🚀 Next opportunity loading... Open to internships &amp; collaborations!
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
