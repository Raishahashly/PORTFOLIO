import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Shield, Award } from 'lucide-react';

const achievements = [
  {
    title: '1st Place – TINK-HER-HUB Hackathon',
    desc: 'Won first place in the 18-hour web developmental hackathon with HelpMate, representing Team Bizzare at CEC.',
    icon: <Trophy size={24} />,
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)',
    badge: '🏆 Champion',
    badgeClass: 'badge-yellow',
    year: '2024',
  },
  {
    title: 'Best Campus Ambassador',
    desc: 'Awarded Best Campus Ambassador for DHISHNA — the prestigious tech fest organized by CUSAT.',
    icon: <Star size={24} />,
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.12)',
    badge: 'Award',
    badgeClass: 'badge-pink',
    year: '2024',
  },
  {
    title: 'Debate Champion – VERBATTLE',
    desc: 'Secured the championship in VERBATTLE, a pre-event of EXODIA, demonstrating strong communication and critical thinking.',
    icon: <Medal size={24} />,
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)',
    badge: '1st Place',
    badgeClass: 'badge-cyan',
    year: '2024',
  },
  {
    title: 'NCC Cadet',
    desc: 'Active NCC cadet demonstrating exceptional leadership, discipline, and teamwork in national service.',
    icon: <Shield size={24} />,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
    badge: 'Leadership',
    badgeClass: 'badge-emerald',
    year: 'Ongoing',
  },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <Award size={14} /> Recognition
        </div>
        <h2 className="section-title">
          Achievements &amp; <span className="gradient-text">Milestones</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Beyond code — leadership, competition, and community.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
        gap: '1.5rem',
      }}>
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            className="glass-card"
            style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            {/* Icon + badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
              <div style={{
                background: item.bg,
                border: `1px solid ${item.color}25`,
                padding: '0.9rem',
                borderRadius: '14px',
                color: item.color,
              }}>
                {item.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {item.year}
                </span>
              </div>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
              marginBottom: '0.8rem',
            }}>
              {item.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              {item.desc}
            </p>

            {/* Color accent bar at bottom */}
            <div style={{
              marginTop: '1.5rem',
              height: '3px',
              borderRadius: '2px',
              background: `linear-gradient(to right, ${item.color}, transparent)`,
              opacity: 0.5,
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
