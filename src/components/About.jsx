import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, User, MapPin } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

const About = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science Engineering',
      institution: 'College of Engineering, Chengannur',
      period: '2023 – 2027',
      note: 'Currently Pursuing',
      color: 'var(--accent-purple)',
    },
    {
      degree: 'Higher Secondary Examination',
      institution: 'WOVHSS Muttil, Wayanad',
      period: '2021 – 2023',
      note: '100% · 1200/1200',
      color: 'var(--accent-pink)',
    },
    {
      degree: 'CBSE Board Examination',
      institution: 'Mount Tabor English School, Meppady',
      period: '2020 – 2021',
      note: '96%',
      color: 'var(--accent-cyan)',
    },
  ];

  return (
    <section id="about">
      <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <User size={14} /> Who I Am
        </div>
        <h2 className="section-title">
          Building with <span className="gradient-text">passion</span> &amp; purpose
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          A CS student who transforms ideas into elegant digital experiences, one line of code at a time.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Bio card */}
        <motion.div
          {...fadeUp(0.1)}
          className="glass-card"
          style={{ padding: '2.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{
              background: 'rgba(139,92,246,0.15)',
              border: '1px solid rgba(139,92,246,0.25)',
              padding: '0.9rem',
              borderRadius: '14px',
            }}>
              <Code2 size={22} color="var(--accent-purple)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}>
              Profile
            </h3>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Motivated Computer Science student with a strong interest in Python development and full-stack web
            applications. Experienced in building and deploying real-world projects, including a full-stack
            train booking system with AI integration.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '2rem' }}>
            Completed an internship involving software testing and generative AI. Passionate about solving
            real-world problems and continuously leveling up my technical skills.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <MapPin size={14} color="var(--accent-pink)" />
            Kerala, India
          </div>
        </motion.div>

        {/* Education card */}
        <motion.div
          {...fadeUp(0.2)}
          className="glass-card"
          style={{ padding: '2.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{
              background: 'rgba(236,72,153,0.12)',
              border: '1px solid rgba(236,72,153,0.2)',
              padding: '0.9rem',
              borderRadius: '14px',
            }}>
              <GraduationCap size={22} color="var(--accent-pink)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700 }}>
              Education
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', position: 'relative', paddingLeft: '1.5rem' }}>
            <div style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-pink), var(--accent-cyan))', borderRadius: '2px' }} />

            {education.map((edu, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-1.75rem',
                  top: '4px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: edu.color,
                  boxShadow: `0 0 10px ${edu.color}`,
                }} />
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                }}>
                  {edu.degree}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                  {edu.institution}
                </p>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-purple" style={{ fontSize: '0.72rem' }}>{edu.period}</span>
                  <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>{edu.note}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
