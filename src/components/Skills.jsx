import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Paintbrush, Users } from 'lucide-react';

const Skills = () => {
  const techSkills = [
    { title: 'Python', color: '#3b82f6' },
    { title: 'C', color: '#8b5cf6' },
    { title: 'Java', color: '#f59e0b' },
    { title: 'JavaScript (ES6)', color: '#eab308' },
    { title: 'React', color: '#06b6d4' },
    { title: 'HTML & CSS', color: '#ef4444' },
    { title: 'Flask (Basic)', color: '#34d399' },
    { title: 'Figma', color: '#ec4899' }
  ];

  const softSkills = ['Problem Solving', 'Communication', 'Teamwork', 'Leadership'];

  return (
    <section id="skills">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Technical Knowledge
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
        
        <motion.div 
          className="glass-panel" 
          style={{ padding: '3rem', width: '100%', maxWidth: '800px', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <Terminal size={32} color="#4f46e5" />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {techSkills.map((skill, idx) => (
              <motion.div 
                key={idx}
                className="pill-badge"
                whileHover={{ scale: 1.05, borderColor: skill.color, color: skill.color }}
                style={{ fontSize: '1.1rem', padding: '0.8rem 1.5rem' }}
              >
                {skill.title}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '2rem 3rem', width: '100%', maxWidth: '800px', textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <Users size={32} color="#ec4899" />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {softSkills.map((skill, idx) => (
              <span key={idx} className="pill-badge" style={{ background: 'transparent', border: '1px solid rgba(0,0,0,0.1)' }}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
