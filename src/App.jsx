import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PERSONAL_INFO, RESUME_LINK } from './data';
import { FileText } from 'lucide-react';
import './index.css';

// Views
import ProjectsView from './views/ProjectsView';
import ExperienceView from './views/ExperienceView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

const VIEWS = {
  PROJECTS: 'Projects',
  EXPERIENCE: 'Experience',
  ABOUT: 'About',
  CONTACT: 'Contact',
};

function App() {
  const [activeView, setActiveView] = useState(VIEWS.PROJECTS);
  const [showIntro, setShowIntro] = useState(true);

  // Intro Sequence Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500); // 2.5 seconds intro
    return () => clearTimeout(timer);
  }, []);

  const renderView = () => {
    switch (activeView) {
      case VIEWS.PROJECTS:
        return <ProjectsView key="projects" />;
      case VIEWS.EXPERIENCE:
        return <ExperienceView key="experience" />;
      case VIEWS.ABOUT:
        return <AboutView key="about" />;
      case VIEWS.CONTACT:
        return <ContactView key="contact" />;
      default:
        return <ProjectsView key="projects" />;
    }
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontSize: '2.5rem', fontWeight: 700 }}
            >
              <img src="/favicon.png" alt="R Logo" style={{ width: '250px', height: 'auto', display: 'block', margin: '0 auto' }} />
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ 
                fontFamily: 'monospace', 
                color: 'var(--text-muted)',
                marginTop: '0.5rem',
                letterSpacing: '0.1em'
              }}
            >
              {PERSONAL_INFO.role.toUpperCase()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="app-container">
        {/* Navigation Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header" style={{ textAlign: 'center' }}>
            <img src="/favicon.png" alt="R Logo" style={{ width: '120px', height: 'auto', display: 'block', margin: '0 auto 1rem' }} />
            <div className="sidebar-role">{PERSONAL_INFO.role}</div>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-menu">
            {Object.values(VIEWS).map((view) => (
              <button
                key={view}
                className={`nav-item ${activeView === view ? 'active' : ''}`}
                onClick={() => setActiveView(view)}
                style={{ textAlign: 'left', background: 'none', border: 'none', padding: '0.4rem 0', fontFamily: 'inherit', fontSize: '1rem', cursor: 'pointer' }}
              >
                {view}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <a href={RESUME_LINK} target="_blank" rel="noreferrer" className="resume-btn">
              <FileText size={16} /> Resume
            </a>
          </div>
        </aside>

        {/* Mobile Horizontal Nav (Displayed only on small screens via CSS) */}
        <nav className="mobile-nav">
          {Object.values(VIEWS).map((view) => (
            <button
              key={view}
              className={`nav-item ${activeView === view ? 'active' : ''}`}
              onClick={() => setActiveView(view)}
              style={{ textAlign: 'left', background: 'none', border: 'none', fontFamily: 'inherit', fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              {view}
            </button>
          ))}
        </nav>

        {/* Main Content Pane */}
        <main className="main-content">
          <div className="content-scroll-container">
            <AnimatePresence mode="wait">
              {renderView()}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
