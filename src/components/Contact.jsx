import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageSquare, Copy, Check } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  {
    label: 'Email',
    value: 'hashlinairah@gmail.com',
    href: 'mailto:hashlinairah@gmail.com',
    icon: <Mail size={20} />,
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)',
    copyable: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/Raishahashly',
    href: 'https://github.com/Raishahashly',
    icon: <FaGithub size={20} />,
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.12)',
    copyable: false,
  },
  {
    label: 'LinkedIn',
    value: 'Raisha Hashly',
    href: 'http://linkedin.com/in/raisha-hashly-53a89431a',
    icon: <FaLinkedinIn size={20} />,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.12)',
    copyable: false,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hashlinairah@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Opens default mail client with pre-filled info
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Hi Raisha,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
    window.open(`mailto:hashlinairah@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ paddingBottom: '6rem' }}>
      {/* Top divider */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--border-subtle), transparent)', marginBottom: '6rem' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <MessageSquare size={14} /> Get In Touch
        </div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Have a project, an idea, or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <div className="glass-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
              Raisha Hashly
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              CS Student · Developer · Hackathon Winner
              <br />
              College of Engineering, Chengannur (2023–2027)
            </p>
            <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="glow-dot" />
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)' }}>Available for opportunities</span>
            </div>
          </div>

          {socials.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass-card"
              style={{
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', flex: 1, minWidth: 0 }}>
                <div style={{ background: s.bg, padding: '0.7rem', borderRadius: '10px', color: s.color, flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.15rem' }}>
                    {s.label}
                  </p>
                  <a
                    href={s.href}
                    target={s.label !== 'Email' ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      display: 'block',
                      transition: 'color 0.2s',
                    }}
                    onMouseOver={e => e.currentTarget.style.color = s.color}
                    onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    {s.value}
                  </a>
                </div>
              </div>
              {s.copyable && (
                <button
                  onClick={copyEmail}
                  style={{ background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '0.5rem', cursor: 'pointer', color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)', transition: 'all 0.2s', flexShrink: 0 }}
                  title="Copy email"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card"
          style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {[
              { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
              { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {sent ? <><Check size={18} /> Message Sent!</> : <><Send size={18} /> Send Message</>}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{ textAlign: 'center', marginTop: '5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}
      >
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--border-subtle), transparent)', marginBottom: '2rem' }} />
        <p style={{ fontFamily: 'var(--font-mono)' }}>
          Designed &amp; Built with ❤️ by{' '}
          <span style={{ background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', fontWeight: 700 }}>
            Raisha Hashly
          </span>
          {' '}· © {new Date().getFullYear()}
        </p>
        <p style={{ marginTop: '0.4rem', fontSize: '0.78rem' }}>
          React · Framer Motion · Vite
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
