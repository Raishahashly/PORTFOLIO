import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, X, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'SmartRail',
    type: 'Full-Stack Train Booking System',
    description:
      'A visual seat booking website for trains featuring an AI chatbot. It has dedicated portals for Admin, TTE, and Users. I built the interactive frontend and booked the workflow with a fully functioning backend.',
    link: 'https://smartrail-26.vercel.app/',
    github: 'https://github.com/Albiin777/CSD-334-S6-23-27BATCH-SMARTRAIL.git',
    badge: 'Mini Project',
    badgeClass: 'badge-purple',
    techStack: 'React, Node.js, Express, MongoDB, Tailwind CSS',
    tags: ['React', 'Node.js', 'MongoDB', 'AI Chatbot'],
    color: '#3b82f6',
    featured: true,
  },
  {
    title: 'HelpMate 2.0',
    type: 'Emergency Response Platform',
    description:
      'An interactive first-aid and emergency response platform. It offers a highly user-friendly interface to quickly find help. This project was built during the TINK-HER-HUB 18-hour hackathon, where Team Bizzare won 1st Place.',
    link: 'https://helpmate-2-0.vercel.app',
    github: 'https://github.com/Raishahashly/HELPMATE-2.0.git',
    badge: '🏆 1st Place Hackathon',
    badgeClass: 'badge-yellow',
    techStack: 'HTML, CSS, JavaScript, Flask',
    tags: ['HTML', 'CSS', 'JavaScript', 'UX Design'],
    color: '#ef4444',
    featured: true,
  },
  {
    title: 'College Helper Chatbot',
    type: 'Python AI Project',
    description:
      'A Python-powered chatbot designed to assist students with their common college queries. It uses structured keyword-based response handling, and I plan to integrate it into a web interface soon.',
    link: null,
    github: null,
    badge: 'Ongoing',
    badgeClass: 'badge-emerald',
    techStack: 'Python, Natural Language Processing (NLP)',
    tags: ['Python', 'NLP', 'Chatbot'],
    color: '#8b5cf6',
    featured: false,
  },
  {
    title: 'Expense Notifier',
    type: 'Personalized Tracker',
    description:
      'A personalized expense tracking website that actively alerts users when they are overspending. It also features clear charts to visually compare income against expenses.',
    link: null,
    github: 'https://github.com/Govindjs5805/JAGuaR.git',
    badge: 'Team: JAGuaR',
    badgeClass: 'badge-cyan',
    techStack: 'JavaScript, Chart.js, HTML, CSS',
    tags: ['JavaScript', 'Charts', 'Finance'],
    color: '#10b981',
    featured: false,
  },
  {
    title: 'Nee Ente, Njaan Ninte',
    type: 'Animal Matrimony',
    description:
      'This is a fun loving project created for Useless Projects 2.0! It is a playful animal matrimony app designed to bring your furry friends together for a lifetime of happiness.',
    link: null,
    github: null,
    badge: 'Team: Blind',
    badgeClass: 'badge-pink',
    techStack: 'React, Tailwind CSS, Firebase',
    tags: ['React', 'Fun', 'Creative'],
    color: '#f59e0b',
    featured: false,
  },
];

const FILTERS = ['All', 'Featured', 'Hackathon', 'Ongoing'];

const ProjectCard = ({ proj, idx, onClick }) => (
  <motion.div
    layout
    className="glass-card"
    style={{
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
    }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: idx * 0.07 }}
    whileHover={{ y: -6 }}
    onClick={() => onClick(proj)}
  >
    {/* Top row */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
      <div style={{
        background: `${proj.color}18`,
        border: `1px solid ${proj.color}30`,
        padding: '0.7rem',
        borderRadius: '12px',
      }}>
        <FolderGit2 size={22} color={proj.color} />
      </div>
      <span className={`badge ${proj.badgeClass}`}>{proj.badge}</span>
    </div>

    <h3 style={{
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: '0.3rem',
    }}>
      {proj.title}
    </h3>
    <p style={{ color: proj.color, fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.9rem', fontFamily: 'var(--font-mono)' }}>
      {proj.type}
    </p>

    <div style={{ marginBottom: '1.2rem', fontSize: '0.85rem' }}>
      <strong style={{ color: 'var(--text-primary)' }}>Tech Stack:</strong> <span style={{ color: 'var(--accent-cyan)' }}>{proj.techStack}</span>
    </div>

    <p style={{
      color: 'var(--text-secondary)',
      fontSize: '0.92rem',
      lineHeight: 1.7,
      flex: 1,
      marginBottom: '1.5rem',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    }}>
      {proj.description}
    </p>

    {/* Tags */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.4rem' }}>
      {proj.tags.map((tag, i) => (
        <span key={i} style={{
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--border-subtle)',
          padding: '0.2rem 0.6rem',
          borderRadius: '4px',
        }}>
          {tag}
        </span>
      ))}
    </div>

    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap' }}>
      {proj.github && (
        <a
          href={proj.github}
          target="_blank"
          rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
          onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <FaGithub size={15} /> Code
        </a>
      )}
      {proj.link && (
        <a
          href={proj.link}
          target="_blank"
          rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: proj.color, transition: 'opacity 0.2s' }}
          onMouseOver={e => e.currentTarget.style.opacity = '0.75'}
          onMouseOut={e => e.currentTarget.style.opacity = '1'}
        >
          <ExternalLink size={15} /> Live Demo
        </a>
      )}
      <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
        Details <ChevronRight size={14} />
      </span>
    </div>
  </motion.div>
);

const Modal = ({ proj, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '1rem',
    }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        background: '#0d0d1f',
        border: `1px solid ${proj.color}30`,
        borderRadius: '24px',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        maxWidth: '600px',
        width: '100%',
        boxShadow: `0 0 60px ${proj.color}20, 0 25px 60px rgba(0,0,0,0.6)`,
      }}
      onClick={e => e.stopPropagation()}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
        <div>
          <span className={`badge ${proj.badgeClass}`} style={{ marginBottom: '0.8rem', display: 'inline-flex' }}>
            {proj.badge}
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800 }}>
            {proj.title}
          </h2>
          <p style={{ color: proj.color, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
            {proj.type}
          </p>
        </div>
        <button
          onClick={onClose}
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '0.5rem', cursor: 'pointer', color: 'var(--text-secondary)', flexShrink: 0, marginLeft: '1rem' }}
        >
          <X size={18} />
        </button>
      </div>

      <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        <strong style={{ color: 'var(--text-primary)' }}>Tech Stack:</strong> <span style={{ color: 'var(--accent-cyan)' }}>{proj.techStack}</span>
      </div>

      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        {proj.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {proj.tags.map((t, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', padding: '0.25rem 0.7rem', borderRadius: '6px' }}>
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {proj.github && (
          <a href={proj.github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.7rem 1.5rem' }}>
            <FaGithub size={16} /> View Code
          </a>
        )}
        {proj.link && (
          <a href={proj.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.7rem 1.5rem' }}>
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured;
    if (filter === 'Hackathon') return p.badge.toLowerCase().includes('hackathon') || p.badge.toLowerCase().includes('team') || p.badge.toLowerCase().includes('🏆');
    if (filter === 'Ongoing') return p.badge === 'Ongoing';
    return true;
  });

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <FolderGit2 size={14} /> Portfolio
        </div>
        <h2 className="section-title">
          Projects &amp; <span className="gradient-text">Works</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          A collection of things I've built — from hackathon wins to real-world apps. Browse the cards below to see my tech stack in action.
        </p>
      </motion.div>

      {/* Filter pills */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '0.5rem 1.2rem',
              borderRadius: '50px',
              border: '1px solid',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.88rem',
              fontWeight: 600,
              transition: 'all 0.2s ease',
              borderColor: filter === f ? 'var(--accent-purple)' : 'var(--border-subtle)',
              background: filter === f ? 'rgba(139,92,246,0.2)' : 'transparent',
              color: filter === f ? 'var(--neon-purple)' : 'var(--text-secondary)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: '1.5rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((proj, idx) => (
            <ProjectCard key={proj.title} proj={proj} idx={idx} onClick={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* GitHub link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{ textAlign: 'center', marginTop: '3rem' }}
      >
        <a
          href="https://github.com/Raishahashly"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
          style={{ display: 'inline-flex' }}
        >
          <FaGithub size={18} /> View All on GitHub
        </a>
      </motion.div>

      <AnimatePresence>
        {selected && <Modal proj={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
