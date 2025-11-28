import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, GraduationCap, Building2, Download, ArrowRight, Check, Heart } from 'lucide-react';
import './Hero.css';

// ============================================
// DR & CR → CONTENT ANIMATION (Fast, no hold)
// ============================================
const DrCrToContentAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState('entering');
  // Phases: entering -> dancing -> merging -> complete

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('dancing'), 200),
      setTimeout(() => setPhase('merging'), 2200), // +1 second hold
      setTimeout(() => {
        setPhase('complete');
        onComplete?.();
      }, 2800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, [onComplete]);

  if (phase === 'complete') return null;

  const isMerging = phase === 'merging';

  return (
    <motion.div 
      className="dr-cr-anim-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: isMerging ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="dr-cr-stage">
        {/* Dr. Text - Theme Green */}
        <motion.span
          className="dr-text-anim"
          initial={{ x: -100, opacity: 0, scale: 1 }}
          animate={{
            x: phase === 'entering' ? -100 :
               phase === 'dancing' ? -60 :
               0, // merging - go to center
            opacity: isMerging ? 0 : 1,
            scale: isMerging ? 0.1 : 1, // shrink to tiny!
            rotate: phase === 'dancing' ? [-5, 5, -5] : 0,
          }}
          transition={{
            x: { type: "spring", stiffness: 150, damping: 12 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            rotate: phase === 'dancing' ? { duration: 0.25, repeat: Infinity, ease: "easeInOut" } : { duration: 0.15 },
          }}
        >
          Dr.
        </motion.span>

        {/* Cr. Text - Theme Green */}
        <motion.span
          className="cr-text-anim"
          initial={{ x: 100, opacity: 0, scale: 1 }}
          animate={{
            x: phase === 'entering' ? 100 :
               phase === 'dancing' ? 60 :
               0, // merging - go to center
            opacity: isMerging ? 0 : 1,
            scale: isMerging ? 0.1 : 1, // shrink to tiny!
            rotate: phase === 'dancing' ? [5, -5, 5] : 0,
          }}
          transition={{
            x: { type: "spring", stiffness: 150, damping: 12 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            rotate: phase === 'dancing' ? { duration: 0.25, repeat: Infinity, ease: "easeInOut", delay: 0.08 } : { duration: 0.15 },
          }}
        >
          Cr.
        </motion.span>

        {/* Quick "✓ Balanced" flash as they shrink */}
        {isMerging && (
          <motion.span
            className="balanced-flash"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.8] }}
            transition={{ duration: 0.5 }}
          >
            ✓ Balanced
          </motion.span>
        )}
      </div>

      {/* Status text - minimal */}
      <motion.div className="anim-status">
        {phase === 'dancing' && (
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.6 }}
            className="status-harmonizing"
          >
            Harmonizing...
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

// ============================================
// ANIMATED LINE REVEAL - Line by Line
// ============================================
const AnimatedLineReveal = ({ lines, startDelay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: startDelay,
      },
    },
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      filter: 'blur(6px)',
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="lines-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="animated-line"
          variants={lineVariants}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// FLOATING HEARTS (Background decoration)
// Yellow when cursor is NEAR (not just on)
// ============================================
const FloatingHearts = () => {
  const [nearbyHeart, setNearbyHeart] = useState(null);

  const hearts = [
    { id: 1, size: 24, top: '25%', left: '42%', delay: 0, duration: 5 },
    { id: 2, size: 14, top: '15%', left: '38%', delay: 0.5, duration: 3.5 },
    { id: 3, size: 11, top: '20%', left: '46%', delay: 1, duration: 4.2 },
    { id: 4, size: 16, top: '35%', left: '40%', delay: 0.3, duration: 4.5 },
    { id: 5, size: 10, top: '40%', left: '44%', delay: 0.8, duration: 3.8 },
    { id: 6, size: 12, top: '45%', left: '38%', delay: 1.2, duration: 4 },
  ];

  return (
    <div className="floating-hearts-area">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart-wrapper"
          style={{ top: heart.top, left: heart.left }}
          onMouseEnter={() => setNearbyHeart(heart.id)}
          onMouseLeave={() => setNearbyHeart(null)}
        >
          {/* Larger invisible hover area */}
          <div className="heart-hover-zone" />
          <motion.div
            className="floating-heart"
            animate={{
              y: [0, -12, 0],
              x: [0, 4, -4, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart 
              size={heart.size} 
              fill={nearbyHeart === heart.id ? "#FDE047" : "#BFDBFE"} 
              color={nearbyHeart === heart.id ? "#EAB308" : "#93C5FD"}
              style={{ 
                opacity: nearbyHeart === heart.id ? 0.9 : 0.4,
                transition: 'all 0.3s ease',
                filter: nearbyHeart === heart.id ? 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.6))' : 'none'
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// ============================================
// MAIN HERO COMPONENT
// ============================================
const Hero = ({ showToast }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [tickedKpis, setTickedKpis] = useState({});
  const [hoveredCell, setHoveredCell] = useState(null);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

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
    { metric: 'Review Notes (EQR)', value: 'Zero (Clean!)' },
    { metric: 'Coffee Consumed', value: '∞ Liters' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  // Text lines for the description reveal
  const descriptionLines = [
    <span key="line1">
      Specializing in counseling accounts — ensuring{' '}
      <span className="dr-text-inline">Dr.</span> and <span className="cr-text-inline">Cr.</span>
      {' '}finally agree to live in harmony.
    </span>,
    <span key="line2" className="practice-line">My practice? Make the books whole again.</span>,
    <span key="line3" className="warning-line">
      <em>*Side effects include <span className="highlighter-text">unreasonable attention to detail</span>.</em>
    </span>,
  ];

  return (
    <section className="hero section" id="summary">
      {/* SVG Filter for hand-drawn effects */}
      <svg className="svg-filters" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="hand-drawn-highlight">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FloatingHearts />

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
                <motion.path 
                  d="M2 8 Q50 2 100 6 T198 4" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            </motion.h2>

            <motion.div className="hero-desc" variants={itemVariants}>
              <span className="hero-highlight">
                The Financial Relationship Expert.
                <motion.span 
                  className="main-heart"
                  animate={{ y: [0, -4, 0], rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart size={16} fill="#BFDBFE" color="#93C5FD" style={{ opacity: 0.6 }} />
                </motion.span>
              </span>

              {/* Animation + Content Area - seamless transition */}
              <div className="dr-cr-content-area">
                {/* Dr. Cr. Animation - shrinks into where content appears */}
                {!animationComplete && (
                  <DrCrToContentAnimation onComplete={handleAnimationComplete} />
                )}
                
                {/* Content ZOOMS OUT from same spot */}
                <AnimatePresence>
                  {animationComplete && (
                    <motion.div
                      className="content-reveal"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.34, 1.56, 0.64, 1], // spring-like overshoot
                      }}
                    >
                      <AnimatedLineReveal lines={descriptionLines} startDelay={0.05} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div className="hero-tags" variants={itemVariants}>
              <span className="hero-tag"><MapPin size={14} /> Bangalore, India</span>
              <span className="hero-tag"><GraduationCap size={14} /> Chartered Accountant</span>
              <span className="hero-tag"><Building2 size={14} /> EY</span>
            </motion.div>

            <motion.div className="hero-ctas" variants={itemVariants}>
              <motion.a 
                href="/Biplav_Siwakoti_Resume.pdf"
                download="Biplav_Siwakoti_Resume.pdf"
                className="btn btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} /> Download Financials (CV)
              </motion.a>
              <motion.a 
                href="#experience" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Audit Matrix <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Metrics Card */}
          <motion.div className="metrics-wrapper" variants={itemVariants}>
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
                      transition={{ delay: 0.6 + i * 0.08 }}
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

            {/* Verified Stamp */}
            <motion.div 
              className="red-pen-annotation"
              initial={{ opacity: 0, y: -50, rotate: -10, scale: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.p 
                className="annotation-text"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Verified by Partners! ✓
              </motion.p>
              <p className="annotation-signature">— Biplav</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div 
          className="kpi-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.id}
              className={`kpi-card ${tickedKpis[kpi.id] ? 'ticked' : ''}`}
              onClick={() => toggleKpi(kpi.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              whileHover={{ 
                y: -4, 
                boxShadow: '0 20px 40px rgba(33, 115, 70, 0.15), 0 0 60px rgba(253, 224, 71, 0.1)',
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
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
