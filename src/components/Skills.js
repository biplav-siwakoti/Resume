import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setAnimated(true), 200);
    }
  }, [isInView]);

  const skills = [
    { name: 'Financial Reporting & Analysis', level: 'Expert' },
    { name: 'Statutory Audit & Assurance', level: 'Expert' },
    { name: 'Internal Controls (ICFR)', level: 'Expert' },
    { name: 'Direct Taxation & Transfer Pricing', level: 'Advanced' },
    { name: 'Team Leadership & Mentoring', level: 'Expert' },
    { name: 'Client Relationship Management', level: 'Expert' },
    { name: 'US GAAP / IFRS', level: 'Advanced' },
    { name: 'Time & Project Management', level: 'Expert' },
  ];

  const levelWidth = {
    'Expert': 95,
    'Advanced': 85,
    'Proficient': 75
  };

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header-styled"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <TrendingUp size={24} />
          </div>
          <div className="section-title-group">
            <h2 className="section-title-main">
              Skills <span className="title-ampersand">&</span> <span className="title-accent">Expertise</span>
            </h2>
            <p className="section-subtitle">Competency Matrix</p>
          </div>
          <div className="section-decoration">
            <svg viewBox="0 0 120 40" fill="none">
              <motion.path 
                d="M10 30 Q40 10 60 20 T110 15" 
                stroke="var(--primary)" 
                strokeWidth="2" 
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="skill-row"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ 
                x: 4, 
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'rgba(253, 224, 71, 0.03)'
              }}
            >
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar-wrapper">
                <div className="skill-bar-bg">
                  <motion.div 
                    className="skill-bar"
                    initial={{ width: 0 }}
                    animate={{ width: animated ? `${levelWidth[skill.level]}%` : 0 }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  />
                </div>
                <div className="skill-level">
                  <span className={`level-badge ${skill.level.toLowerCase()}`}>{skill.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
