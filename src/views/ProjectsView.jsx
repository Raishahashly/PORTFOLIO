import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectsView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="section-header">Projects</h2>
      
      <div className="project-list">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="project-item">
            <div className="project-header">
              <div>
                <h3 className="project-title">{proj.title}</h3>
                <span className="project-type">{proj.type}</span>
              </div>
              <div className="project-links">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={16} /> Code
                  </a>
                )}
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>
            </div>
            
            <p className="project-problem">Problem: {proj.problem}</p>
            <p className="project-impact">{proj.impact}</p>
            
            <div className="tech-stack">
              {proj.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsView;
