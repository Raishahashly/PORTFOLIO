import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, RESUME_LINK } from '../data';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="section-header">Contact</h2>
      
      <p style={{ fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px' }}>
        I'm currently looking for new opportunities as a Software Engineer. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem' }}
        >
          <Mail size={20} />
          {PERSONAL_INFO.email}
        </a>
        
        <a 
          href={PERSONAL_INFO.github} 
          target="_blank" 
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem' }}
        >
          <FaGithub size={20} />
          GitHub Profile
        </a>

        {/* Using a placeholder for LinkedIn as it wasn't in the original text but standard for developers */}
        <a 
          href="https://linkedin.com/in/raishahashly" 
          target="_blank" 
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem' }}
        >
          <FaLinkedin size={20} />
          LinkedIn Profile
        </a>

        <a 
          href={RESUME_LINK} 
          target="_blank" 
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', color: 'var(--accent)', marginTop: '2rem' }}
        >
          <FileText size={20} />
          View Full Resume
        </a>
      </div>
    </motion.div>
  );
};

export default ContactView;
