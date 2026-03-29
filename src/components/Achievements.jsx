import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Shield } from 'lucide-react';

const Achievements = () => {
  const achievementsList = [
    {
      title: '1st Place – TINK-HER-HUB Hackathon',
      desc: 'Won first place in the 18-hour web developmental hackathon with the project HelpMate, representing Team Bizzare.',
      icon: <Trophy size={32} color="#f59e0b" />
    },
    {
      title: 'Best Campus Ambassador',
      desc: 'Awarded Best Campus Ambassador for DHISHNA (CUSAT Tech Fest).',
      icon: <Star size={32} color="#ec4899" />
    },
    {
      title: 'Debate Champion',
      desc: 'Secured the championship in VERBATTLE (EXODIA Pre-event).',
      icon: <Medal size={32} color="#3b82f6" />
    },
    {
      title: 'NCC Cadet',
      desc: 'Active member demonstrating leadership, discipline, and teamwork.',
      icon: <Shield size={32} color="#10b981" />
    }
  ];

  return (
    <section id="achievements">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Achievements & Extracurriculars
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {achievementsList.map((item, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <div style={{ background: 'rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '50%', flexShrink: 0, boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              {item.icon}
            </div>
            <div>
              <h3 className="outfit-font" style={{ fontSize: '1.3rem', marginBottom: '0.4rem', lineHeight: 1.2 }}>{item.title}</h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
