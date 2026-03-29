import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <motion.div 
        className="glass-panel" 
        style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', position: 'relative' }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div style={{ position: 'absolute', top: '-25px', left: '50px', background: '#fff', padding: '15px', borderRadius: '50%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <Briefcase size={32} color="#4f46e5" />
        </div>
        
        <div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
          <span style={{ color: '#4f46e5', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Sep 2023 – Dec 2023
          </span>
          <h3 className="outfit-font" style={{ fontSize: '2rem', marginTop: '0.5rem', lineHeight: 1.2 }}>
            Software Testing & Curriculum Design Intern
          </h3>
          <h4 className="playfair-font" style={{ fontSize: '1.3rem', color: '#4b5563', marginBottom: '2rem', marginTop: '0.5rem' }}>
            Edurupt Technologies Pvt. Ltd. (Remote)
          </h4>
          
          <ul style={{ listStylePosition: 'inside', color: '#374151', fontSize: '1.1rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li>Worked on software testing processes using Generative AI tools.</li>
            <li>Contributed to curriculum design and content development.</li>
            <li>Assisted in improving system functionality and usability.</li>
            <li>Gained exposure to real-world software workflows and quality assurance.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
