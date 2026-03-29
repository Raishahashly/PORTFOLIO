import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', paddingTop: '6rem' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', display: 'block' }}>
          Hello there, I am
        </span>
        <h1 className="outfit-font" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1rem', fontWeight: 800, letterSpacing: '-2px' }}>
          Raisha Hashly
        </h1>
        <p className="playfair-font" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#4b5563', marginBottom: '2rem', fontStyle: 'italic' }}>
          Full-Stack Web & Python Developer
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}
      >
        <a href="#projects" className="primary-btn">
          View My Work <ArrowRight size={20} />
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '2rem', color: '#9ca3af' }}
      >
        <ChevronDown size={32} />
      </motion.div>

    </section>
  );
};

export default Hero;
