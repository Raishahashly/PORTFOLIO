import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ROLES = [
  'Full-Stack Developer',
  'Python Enthusiast',
  'React Developer',
  'Hackathon Winner',
  'Problem Solver',
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIdx];
    let timeout;
    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIdx((roleIdx + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse repulsion
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x += dx / dist * 1.5;
          p.y += dy / dist * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: '5rem',
        position: 'relative',
        maxWidth: '100%',
        padding: '5rem 5% 0',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <div
            className="badge badge-emerald"
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem', gap: '0.6rem' }}
          >
            <span className="glow-dot" />
            Open to opportunities
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              color: 'var(--accent-purple)',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Hello, I'm
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 9vw, 7rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-3px',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            Raisha
            <span
              style={{
                display: 'block',
                background: 'var(--gradient-main)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Hashly
            </span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
              marginBottom: '2rem',
            }}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>{'<'}</span>
            <span>{displayed}</span>
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '1.4em',
                background: 'var(--accent-purple)',
                borderRadius: '2px',
                animation: 'blink 1s step-end infinite',
              }}
            />
            <span style={{ color: 'var(--accent-cyan)' }}>{'/>'}</span>
          </div>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--text-secondary)',
              maxWidth: '580px',
              margin: '0 auto 3rem',
              lineHeight: 1.8,
            }}
          >
            Computer Science student at <strong style={{ color: 'var(--text-primary)' }}>CEC, Chengannur</strong> —
            building high-impact web applications, winning hackathons, and pushing boundaries one commit at a time.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="https://github.com/Raishahashly" target="_blank" rel="noreferrer" className="btn-secondary">
            <FaGithub size={18} /> GitHub
          </a>
          <a href="mailto:hashlinairah@gmail.com" className="btn-secondary">
            <Mail size={18} /> hashlinairah@gmail.com
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '5rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Projects Built', value: '5+' },
            { label: 'Hackathon Wins', value: '1st 🏆' },
            { label: 'CGPA (approx)', value: 'B.Tech CSE' },
            { label: 'Internship', value: '1 ✓' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  background: 'var(--gradient-main)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span>Scroll</span>
        <ChevronDown size={20} />
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
};

export default Hero;
