import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Users, Zap } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const techSkills = [
  { title: 'Python', level: 85, color: '#3b82f6' },
  { title: 'JavaScript (ES6+)', level: 80, color: '#eab308' },
  { title: 'React', level: 78, color: '#06b6d4' },
  { title: 'HTML & CSS', level: 90, color: '#ef4444' },
  { title: 'Java', level: 65, color: '#f59e0b' },
  { title: 'C', level: 70, color: '#8b5cf6' },
  { title: 'Flask', level: 55, color: '#34d399' },
  { title: 'Figma', level: 60, color: '#ec4899' },
];

const tools = ['Git & GitHub', 'VS Code', 'Vite', 'Vercel', 'Postman', 'Firebase', 'Node.js (Basic)'];
const softSkills = ['Problem Solving', 'Communication', 'Leadership', 'Teamwork', 'Adaptability', 'Creativity'];

const SkillBar = ({ skill, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: '1.4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
          {skill.title}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: skill.color }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar-container">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
          style={{ width: `${skill.level}%`, background: `linear-gradient(to right, ${skill.color}99, ${skill.color})` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <Zap size={14} /> Technical Arsenal
        </div>
        <h2 className="section-title">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          A growing toolkit of languages, frameworks, and tools I use to bring ideas to life.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
        gap: '2rem',
      }}>
        {/* Skill bars */}
        <motion.div {...fadeUp(0.1)} className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(139,92,246,0.15)', padding: '0.7rem', borderRadius: '12px' }}>
              <Cpu size={20} color="var(--accent-purple)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
              Languages &amp; Frameworks
            </h3>
          </div>
          {techSkills.map((skill, i) => (
            <SkillBar key={i} skill={skill} delay={i * 0.06} />
          ))}
        </motion.div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Tools */}
          <motion.div {...fadeUp(0.2)} className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(6,182,212,0.12)', padding: '0.7rem', borderRadius: '12px' }}>
                <Zap size={20} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
                Tools &amp; Platforms
              </h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {tools.map((t, i) => (
                <motion.span
                  key={i}
                  className="badge badge-cyan"
                  style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.07 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Soft skills */}
          <motion.div {...fadeUp(0.3)} className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(236,72,153,0.12)', padding: '0.7rem', borderRadius: '12px' }}>
                <Users size={20} color="var(--accent-pink)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
                Soft Skills
              </h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {softSkills.map((s, i) => (
                <motion.span
                  key={i}
                  className="badge badge-pink"
                  style={{ fontSize: '0.85rem', padding: '0.4rem 0.9rem' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  whileHover={{ scale: 1.07 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
