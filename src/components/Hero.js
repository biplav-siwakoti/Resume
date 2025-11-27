import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Building2, Globe, Download, ArrowRight, Check } from 'lucide-react';
import './Hero.css';

const Hero = ({ showToast }) => {
  const [tickedKpis, setTickedKpis] = useState({});
  const [hoveredCell, setHoveredCell] = useState(null);

  const toggleKpi = (id) => {
    setTickedKpis(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      showToast(newState[id] ? '✓ Reviewed' : '✗ Unmarked');
      return newState;
    });
  };

  const kpis = [
    { id: 1, value: '3+', label: 'Years Big Four', comment: 'Sleep depreciated; Skills appreciated' },
    { id: 2, value: '10+', label: 'Statutory Audits', comment: 'Trust, but verify. Then verify again.' },
    { id: 3, value: '3', label: 'Quality Reviews', comment: 'EQR couldn\'t find a query!' },
    { id: 4, value: '9', label: 'Global Entities', comment: 'Dream in IFRS, wake in US GAAP' },
    { id: 5, value: '15+', label: 'Team Size Led', comment: 'Happy team during busy season!' },
  ];

  const metrics = [
    { metric: 'Experience', value: '3+ Years (Big 4)' },
    { metric: 'Statutory Audits', value: '10+ Delivered' },
    { metric: 'Global Entities', value: '9 Jurisdictions' },
    { metric: 'Review Notes', value: 'Zero (Clean!)' },
    { metric: 'Coffee Consumed', value: '∞ Liters' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="hero section" id="summary">
      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="hero-content">
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="hero-badge-dot" />
              Available
            </motion.div>

            <motion.h1 className="hero-name" variants={itemVariants}>
              Biplav Siwakoti
            </motion.h1>

            <motion.h2 className="hero-title" variants={itemVariants}>
              CA & Auditor
              <svg className="title-underline" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 Q50 2 100 6 T198 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </motion.h2>

            <motion.p className="hero-desc" variants={itemVariants}>
              <span className="hero-desc-highlight">The Financial Relationship Expert.</span> Specializing in the delicate art of counseling accounts, ensuring Debits and Credits finally agree to live in perfect harmony. My practice is simple: make the books feel whole again. <span className="hero-desc-warning">Warning:</span> This therapeutic process requires an unreasonable attention to detail and zero tolerance for numerical drama.
            </motion.p>

            <motion.div className="hero-tags" variants={itemVariants}>
              <span className="hero-tag"><MapPin size={14} /> Bangalore, India</span>
              <span className="hero-tag"><GraduationCap size={14} /> Chartered Accountant</span>
              <span className="hero-tag"><Building2 size={14} /> EY (Big Four)</span>
              <span className="hero-tag"><Globe size={14} /> EN | HI | NE</span>
            </motion.div>

            <motion.div className="hero-ctas" variants={itemVariants}>
              <motion.a 
                href="https://raw.githubusercontent.com/biplav-siwakoti/Resume/main/Biplav_Siwakoti_Resume.pdf"
                download="Biplav_Siwakoti_Resume.pdf"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} /> Download Financials (CV)
              </motion.a>
              <motion.a 
                href="#experience" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Audit Matrix <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Metrics Card with Red Pen Annotation */}
          <motion.div className="metrics-wrapper" variants={itemVariants}>
            <svg className="metrics-arrow" viewBox="0 0 80 60" fill="none">
              <path 
                d="M5 50 Q25 25 50 35 T75 15" 
                stroke="var(--primary)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                fill="none"
                strokeDasharray="5,5"
              />
              <path 
                d="M68 8 L75 15 L70 24" 
                stroke="var(--primary)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none"
              />
            </svg>

            <div className="metrics-card">
              <div className="metrics-header">
                <div className="metrics-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="metrics-filename">Performance.xlsx</span>
              </div>

              <table className="metrics-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((item, i) => (
                    <motion.tr 
                      key={i}
                      className={`${i === 0 ? 'highlighted' : ''} ${hoveredCell === i ? 'cell-hovered' : ''}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      onMouseEnter={() => setHoveredCell(i)}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      <td>{item.metric}</td>
                      <td className="metric-value">{item.value}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Red Pen Annotation replacing sticky note */}
            <motion.div 
              className="red-pen-annotation"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <svg className="annotation-arrow" viewBox="0 0 60 40" fill="none">
                <motion.path 
                  d="M5 35 Q20 20 40 25 Q55 28 55 15" 
                  stroke="#DC2626" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                />
                <motion.path 
                  d="M50 10 L55 15 L52 22" 
                  stroke="#DC2626" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                />
              </svg>
              <motion.p 
                className="annotation-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Verified by Partners! ✓
              </motion.p>
              <motion.p 
                className="annotation-signature"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                — Biplav
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* KPI Cards with hover glow */}
        <motion.div 
          className="kpi-grid"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.id}
              className={`kpi-card ${tickedKpis[kpi.id] ? 'ticked' : ''}`}
              onClick={() => toggleKpi(kpi.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              whileHover={{ 
                y: -4, 
                boxShadow: '0 20px 40px rgba(33, 115, 70, 0.15), 0 0 60px rgba(253, 224, 71, 0.1)',
                backgroundColor: 'rgba(253, 224, 71, 0.04)'
              }}
            >
              <div className="kpi-comment-indicator" />
              <div className="kpi-value">{kpi.value}</div>
              <div className="kpi-label">{kpi.label}</div>
              {tickedKpis[kpi.id] && (
                <motion.div 
                  className="kpi-tick"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Check size={20} />
                </motion.div>
              )}
              <div className="kpi-tooltip">{kpi.comment}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Card */}
        <motion.div 
          className="summary-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <p>
            Chartered Accountant with 3+ years of progressive Big Four experience (EY), focused on statutory and global group audits for Tier 1 Technology sector clients. Specialist in advanced financial risk assessment, the design and evaluation of Internal Controls over Financial Reporting (ICFR), and direct taxation. Proven track record of leading and coordinating complex, multi-locational engagements to ensure precise and timely regulatory compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
