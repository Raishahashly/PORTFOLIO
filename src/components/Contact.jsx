import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <footer id="contact" style={{ textAlign: 'center', padding: '6rem 5% 3rem', position: 'relative', marginTop: '4rem' }}>
      
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)' }}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Let's Connect</h2>
        <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '3rem' }}>
          Passionate about solving real-world problems using technology. <br/> Feel free to reach out to me below!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <a href="mailto:hashlinairah@gmail.com" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#111827' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.7)', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.05)' }} className="pill-badge">
              <Mail size={28} />
            </div>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>Email</span>
          </a>
          <a href="http://linkedin.com/in/raisha-hashly-53a89431a" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#111827' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.7)', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.05)' }} className="pill-badge">
              <FaLinkedinIn size={28} />
            </div>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>LinkedIn</span>
          </a>
          <a href="https://github.com/Raishahashly" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#111827' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.7)', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.05)' }} className="pill-badge">
              <FaGithub size={28} />
            </div>
            <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>GitHub</span>
          </a>
        </div>

        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Raisha Hashly. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Contact;
