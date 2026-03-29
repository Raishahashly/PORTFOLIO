import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SmartRail',
      type: 'Full-Stack Train Booking System',
      description: 'Visual seat booking train website with an AI chat bot. Features dedicated Admin, TTE, and User pages. Built interactive UI using React and integrated complete frontend-backend booking workflow.',
      link: 'https://smartrail-26.vercel.app/',
      github: 'https://github.com/Albiin777/CSD-334-S6-23-27BATCH-SMARTRAIL.git',
      color: '#3b82f6',
      badge: 'Mini Project'
    },
    {
      title: 'College Helper Chatbot',
      type: 'Python / AI Project',
      description: 'Currently focusing on developing a chatbot using Python to assist students with common queries. Implementing structured response handling using keyword-based logic and planning web interface integration.',
      link: null,
      github: null,
      color: '#8b5cf6',
      badge: 'Ongoing'
    },
    {
      title: 'HelpMate 2.0',
      type: 'Emergency Response Platform',
      description: 'Built an interactive first-aid website using HTML, CSS, and JS with a highly user-friendly interface. Won 1st Place in the TINK-HER-HUB 18-hour Hackathon. (Integrated by me, not original template).',
      link: 'https://helpmate-2-0.vercel.app',
      github: 'https://github.com/Raishahashly/HELPMATE-2.0.git',
      color: '#ef4444',
      badge: 'Team: Bizzare'
    },
    {
      title: 'Expense Notifier',
      type: 'Personalized Tracker',
      description: 'Problem: Most people face issues managing daily expenses. Solution: A personalized expense tracking website that features alert messages for overspending and visual comparisons of income vs expenses.',
      link: null,
      github: 'https://github.com/Govindjs5805/JAGuaR.git',
      color: '#10b981',
      badge: 'Team: JAGuaR (Hackathon Build)'
    },
    {
      title: 'Nee Ente, Njaan Ninte',
      type: 'Animal Matrimony',
      description: 'A fun-loving animal matrimony app for Useless Projects 2.0. Bringing your furry friends together for a lifetime of happiness!',
      link: null,
      github: null,
      color: '#f59e0b',
      badge: 'Team: Blind'
    }
  ];

  return (
    <section id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Projects & Works
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, boxShadow: `0 15px 40px rgba(0,0,0,0.08)`, border: `1px solid ${proj.color}40` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ background: `${proj.color}20`, padding: '0.8rem', borderRadius: '15px' }}>
                <FolderGit2 size={28} color={proj.color} />
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, background: '#f3f4f6', padding: '0.3rem 0.8rem', borderRadius: '20px', color: '#4b5563' }}>
                {proj.badge}
              </span>
            </div>
            
            <h3 className="outfit-font" style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>{proj.title}</h3>
            <p style={{ color: proj.color, fontWeight: 500, fontSize: '0.9rem', marginBottom: '1rem' }}>{proj.type}</p>
            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>{proj.description}</p>
            
            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#374151', paddingBottom: '2px', borderBottom: '2px solid transparent', transition: ' border-color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.borderColor='#374151'} onMouseOut={(e)=>e.currentTarget.style.borderColor='transparent'}>
                  <Terminal size={18} /> GitHub
                </a>
              )}
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: proj.color, paddingBottom: '2px', borderBottom: '2px solid transparent', transition: ' border-color 0.2s' }} onMouseOver={(e)=>e.currentTarget.style.borderColor=proj.color} onMouseOut={(e)=>e.currentTarget.style.borderColor='transparent'}>
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
