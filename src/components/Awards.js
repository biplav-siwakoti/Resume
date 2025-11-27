import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import './Awards.css';

const Awards = () => {
  const awards = [
    { icon: '🥇', title: 'EY Kudos Awards', desc: 'Multiple Kudos awards from Partners at EY for extraordinary performance in audit assignments' },
    { icon: '🏅', title: 'ICAI Best Communicator', desc: 'Secured First Prize for Best Communicator in GMCS training conducted by ICAI' },
    { icon: '📝', title: 'Documentation Excellence', desc: 'Consistently recognized for establishing documentation standards that optimized the review cycle' },
    { icon: '🏆', title: 'Dance & Sports Awards', desc: 'Won several awards in dancing and cricket at various corporate and cultural events' }
  ];

  return (
    <section className="section awards-section" id="awards">
      <div className="container">
        <motion.div 
          className="section-header-styled"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <Trophy size={24} />
          </div>
          <div className="section-title-group">
            <h2 className="section-title-main">
              Awards <span className="title-ampersand">&</span> <span className="title-accent">Recognition</span>
            </h2>
            <p className="section-subtitle">Achievements • Milestones</p>
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

        <div className="awards-grid">
          {awards.map((award, i) => (
            <motion.div 
              key={i} 
              className="award-card" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              whileHover={{ 
                y: -6,
                backgroundColor: 'rgba(253, 224, 71, 0.03)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 0 40px rgba(253, 224, 71, 0.05)'
              }}
            >
              <div className="award-icon">{award.icon}</div>
              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-desc">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
