import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <motion.div 
          className="glass-panel" 
          style={{ padding: '2.5rem' }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#4f46e5', padding: '0.8rem', borderRadius: '15px', color: '#fff' }}>
              <Code2 size={24} />
            </div>
            <h3 className="outfit-font" style={{ fontSize: '1.8rem' }}>Profile</h3>
          </div>
          <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.8 }}>
            Motivated Computer Science student with strong interest in Python development and full-stack web applications. 
            Experienced in building and deploying real-world projects, including a full-stack train booking system. 
            Completed an internship involving software testing and generative AI. Passionate about solving real-world problems and continuously improving technical skills.
          </p>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '2.5rem' }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ec4899', padding: '0.8rem', borderRadius: '15px', color: '#fff' }}>
              <GraduationCap size={24} />
            </div>
            <h3 className="outfit-font" style={{ fontSize: '1.8rem' }}>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>College Of Engineering, Chengannur</h4>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>B.Tech Computer Science Engineering (2023–2027)</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>WOVHSS Muttil, Wayanad</h4>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Higher Secondary Examination – 100% (1200/1200)</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Mount Tabor English School, Meppady</h4>
              <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>CBSE Board Exam – 96%</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
