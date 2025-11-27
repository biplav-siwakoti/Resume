import React from 'react';
import { motion } from 'framer-motion';
import './DoodleBackground.css';

const DoodleBackground = () => {
  // Floating animation variants
  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatAnimationSlow = {
    animate: {
      y: [0, -10, 0],
      x: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.06, 0.1, 0.06],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const drawAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.15,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <div className="doodle-background">
      {/* Floating Balance Sheet Doodle */}
      <motion.div 
        className="doodle doodle-balance-sheet"
        variants={floatAnimation}
        animate="animate"
      >
        <svg viewBox="0 0 200 150" fill="none">
          <rect x="10" y="10" width="180" height="130" rx="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="10" y1="40" x2="190" y2="40" stroke="currentColor" strokeWidth="1" />
          <line x1="100" y1="40" x2="100" y2="140" stroke="currentColor" strokeWidth="1" />
          <text x="50" y="28" fontSize="10" fill="currentColor" fontFamily="var(--font-handwritten)">Assets</text>
          <text x="130" y="28" fontSize="10" fill="currentColor" fontFamily="var(--font-handwritten)">Liabilities</text>
          <rect x="20" y="50" width="60" height="8" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="20" y="65" width="45" height="8" rx="2" fill="currentColor" opacity="0.2" />
          <rect x="110" y="50" width="50" height="8" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="110" y="65" width="35" height="8" rx="2" fill="currentColor" opacity="0.2" />
        </svg>
      </motion.div>

      {/* P&L Doodle */}
      <motion.div 
        className="doodle doodle-pnl"
        variants={floatAnimationSlow}
        animate="animate"
      >
        <svg viewBox="0 0 180 200" fill="none">
          <rect x="10" y="10" width="160" height="180" rx="8" stroke="currentColor" strokeWidth="1.5" />
          <text x="90" y="35" textAnchor="middle" fontSize="11" fill="currentColor" fontFamily="var(--font-handwritten)">Income Statement</text>
          <line x1="20" y1="45" x2="160" y2="45" stroke="currentColor" strokeWidth="0.5" />
          <text x="25" y="65" fontSize="9" fill="currentColor" opacity="0.6">Revenue</text>
          <text x="140" y="65" fontSize="9" fill="currentColor" opacity="0.6">$100k</text>
          <text x="25" y="85" fontSize="9" fill="currentColor" opacity="0.6">Expenses</text>
          <text x="140" y="85" fontSize="9" fill="currentColor" opacity="0.6">($60k)</text>
          <line x1="20" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <text x="25" y="120" fontSize="10" fill="currentColor" fontWeight="bold">Net Profit</text>
          <text x="140" y="120" fontSize="10" fill="currentColor" fontWeight="bold">$40k</text>
        </svg>
      </motion.div>

      {/* Calculator Doodle */}
      <motion.div 
        className="doodle doodle-calculator"
        variants={floatAnimation}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <svg viewBox="0 0 80 120" fill="none">
          <rect x="5" y="5" width="70" height="110" rx="8" stroke="currentColor" strokeWidth="1.5" />
          <rect x="12" y="12" width="56" height="25" rx="4" fill="currentColor" opacity="0.15" />
          <text x="58" y="30" textAnchor="end" fontSize="12" fill="currentColor" fontFamily="var(--font-mono)">1,234</text>
          {[0, 1, 2].map(row => (
            [0, 1, 2, 3].map(col => (
              <rect key={`${row}-${col}`} x={12 + col * 15} y={45 + row * 20} width="12" height="12" rx="2" fill="currentColor" opacity="0.2" />
            ))
          ))}
        </svg>
      </motion.div>

      {/* Pie Chart Doodle */}
      <motion.div 
        className="doodle doodle-pie"
        variants={pulseAnimation}
        animate="animate"
      >
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M50 10 A40 40 0 0 1 90 50 L50 50 Z" fill="currentColor" opacity="0.3" />
          <path d="M90 50 A40 40 0 0 1 50 90 L50 50 Z" fill="currentColor" opacity="0.2" />
          <path d="M50 90 A40 40 0 0 1 10 50 L50 50 Z" fill="currentColor" opacity="0.15" />
        </svg>
      </motion.div>

      {/* Bar Chart Doodle */}
      <motion.div 
        className="doodle doodle-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 120 80" fill="none">
          <line x1="20" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="70" x2="20" y2="10" stroke="currentColor" strokeWidth="1" />
          <motion.rect 
            x="30" y="30" width="15" height="40" 
            fill="currentColor" opacity="0.3"
            initial={{ height: 0, y: 70 }}
            animate={{ height: 40, y: 30 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.rect 
            x="55" y="20" width="15" height="50" 
            fill="currentColor" opacity="0.25"
            initial={{ height: 0, y: 70 }}
            animate={{ height: 50, y: 20 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.rect 
            x="80" y="40" width="15" height="30" 
            fill="currentColor" opacity="0.2"
            initial={{ height: 0, y: 70 }}
            animate={{ height: 30, y: 40 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </svg>
      </motion.div>

      {/* Animated Checkmarks */}
      <motion.div className="doodle doodle-check-1" variants={floatAnimationSlow} animate="animate">
        <svg viewBox="0 0 40 40" fill="none">
          <motion.path 
            d="M10 20 L17 27 L30 12" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
        </svg>
      </motion.div>

      <motion.div className="doodle doodle-check-2" variants={floatAnimation} animate="animate">
        <svg viewBox="0 0 40 40" fill="none">
          <motion.path 
            d="M10 20 L17 27 L30 12" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          />
        </svg>
      </motion.div>

      {/* Floating Symbols */}
      {['$', '₹', '%', '∑', '±'].map((symbol, i) => (
        <motion.div 
          key={symbol}
          className={`doodle doodle-symbol doodle-symbol-${i + 1}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Squiggly Lines */}
      <motion.svg 
        className="doodle doodle-squiggle-1"
        viewBox="0 0 200 50" 
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.path 
          d="M10 25 Q30 10 50 25 T90 25 T130 25 T170 25 T190 25"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </motion.svg>

      <motion.svg 
        className="doodle doodle-squiggle-2"
        viewBox="0 0 150 40" 
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ delay: 1 }}
      >
        <motion.path 
          d="M10 20 Q25 5 40 20 T70 20 T100 20 T130 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      </motion.svg>

      {/* Handwritten Notes */}
      <motion.div 
        className="doodle doodle-note-1"
        variants={floatAnimationSlow}
        animate="animate"
      >
        <span>Dr. Assets</span>
      </motion.div>

      <motion.div 
        className="doodle doodle-note-2"
        variants={floatAnimation}
        animate="animate"
      >
        <span>Cr. Liabilities</span>
      </motion.div>

      {/* Blob Shapes */}
      <div className="doodle-blob doodle-blob-1" />
      <div className="doodle-blob doodle-blob-2" />
      <div className="doodle-blob doodle-blob-3" />
    </div>
  );
};

export default DoodleBackground;
