import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, X } from 'lucide-react';
import './TipsBar.css';

const TipsBar = ({ openRiskGame }) => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const tips = [
    { text: "Try typing =HIRE in the formula bar!", action: null },
    { text: "Click KPI cards to mark sign-offs ✓", action: null },
    { text: "Play the Risk Game to test your audit skills!", action: openRiskGame },
    { text: "Type =AUDIT for a surprise stamp effect", action: null },
    { text: "Toggle dark mode with =DARK", action: null },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [tips.length]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="tips-bar"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
    >
      <div className="tips-bar-icon">
        <Lightbulb size={16} />
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTip}
          className="tips-bar-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <span className="tips-bar-text">{tips[currentTip].text}</span>
          {tips[currentTip].action && (
            <button 
              className="tips-bar-action"
              onClick={tips[currentTip].action}
            >
              Try it →
            </button>
          )}
        </motion.div>
      </AnimatePresence>

      <button className="tips-bar-close" onClick={() => setIsVisible(false)}>
        <X size={14} />
      </button>

      <div className="tips-bar-dots">
        {tips.map((_, i) => (
          <span 
            key={i} 
            className={`tips-dot ${i === currentTip ? 'active' : ''}`}
            onClick={() => setCurrentTip(i)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TipsBar;
