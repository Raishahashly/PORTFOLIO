import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EDUCATION, SKILLS } from '../data';

const AboutView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="section-header">About</h2>
      
      <div className="info-block" style={{ marginBottom: '4rem' }}>
        <h3 className="info-label">Biography</h3>
        {PERSONAL_INFO.bio.map((paragraph, i) => (
          <p key={i} style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="info-block" style={{ marginBottom: '4rem' }}>
        <h3 className="info-label">Education</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {EDUCATION.map((edu, idx) => (
            <div key={idx}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{edu.degree}</h4>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{edu.institution}</div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {edu.period} • {edu.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-block">
        <h3 className="info-label">Technical Skills</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                {skillGroup.category}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {skillGroup.tech.map((tech, i) => (
                  <li key={i} style={{ padding: '0.3rem 0', color: 'var(--text-primary)' }}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutView;
