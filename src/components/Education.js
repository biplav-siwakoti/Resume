import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe2 } from 'lucide-react';
import './Education.css';

const Education = () => {
  const languages = [
    { flag: '🇬🇧', name: 'English' },
    { flag: '🇮🇳', name: 'Hindi' },
    { flag: '🇳🇵', name: 'Nepali' },
  ];

  const interests = [
    { icon: '🎸', label: 'Singing & Guitar' },
    { icon: '🏏', label: 'Cricket' },
    { icon: '🏸', label: 'Badminton' },
    { icon: '💃', label: 'Dancing' },
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">
        <motion.div 
          className="section-header-styled"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <GraduationCap size={24} />
          </div>
          <div className="section-title-group">
            <h2 className="section-title-main">
              Education <span className="title-ampersand">&</span> <span className="title-accent">Languages</span>
            </h2>
            <p className="section-subtitle">Certifications • Qualifications</p>
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

        <div className="edu-grid">
          <motion.div 
            className="edu-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, backgroundColor: 'rgba(253, 224, 71, 0.03)' }}
          >
            <div className="edu-icon"><GraduationCap size={28} /></div>
            <div className="edu-content">
              <h3 className="edu-title">Chartered Accountant (CA)</h3>
              <p className="edu-institution">ICAI - The Institute of Chartered Accountants of India</p>
              <span className="edu-date">May 2022</span>
            </div>
            <div className="edu-badge"><Award size={16} /> Certified</div>
          </motion.div>

          <motion.div 
            className="edu-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, backgroundColor: 'rgba(253, 224, 71, 0.03)' }}
          >
            <div className="edu-icon"><Globe2 size={28} /></div>
            <div className="edu-content">
              <h3 className="edu-title">Languages</h3>
              <div className="lang-tags">
                {languages.map((lang, i) => (
                  <span key={i} className="lang-tag">
                    <span>{lang.flag}</span> {lang.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="interests-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="interests-title"><span>🎯</span> Beyond Work</h3>
          <div className="interests-grid">
            {interests.map((item, i) => (
              <motion.div 
                key={i} 
                className="interest-tag" 
                whileHover={{ 
                  y: -3, 
                  backgroundColor: 'rgba(253, 224, 71, 0.08)',
                  boxShadow: '0 0 20px rgba(253, 224, 71, 0.1)'
                }}
              >
                <span className="interest-icon">{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
