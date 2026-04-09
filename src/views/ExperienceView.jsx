import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data';

const ExperienceView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="section-header">Experience</h2>
      
      <div>
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="exp-item">
            <div className="exp-header">
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-meta">{exp.period} • {exp.location}</div>
            </div>
            
            <ul className="exp-bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            
            <div className="tech-stack" style={{ marginTop: '1.5rem' }}>
              {exp.skills.map((skill, i) => (
                <span key={i} className="tech-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceView;
