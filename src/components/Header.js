import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Printer } from 'lucide-react';
import './Header.css';

const Header = ({ darkMode, setDarkMode, showToast }) => {
  const [formulaValue, setFormulaValue] = useState('');
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  
  const suggestions = ['=HIRE()', '=AUDIT()', '=HELP()', '=CONTACT()', '=SKILLS()'];
  const currentSuggestion = suggestions[currentSuggestionIndex];

  // Typewriter effect for suggestions
  useEffect(() => {
    if (isTyping) {
      if (charIndex < currentSuggestion.length) {
        const timeout = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        // Pause at end of word
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Move to next suggestion
      const timeout = setTimeout(() => {
        setCurrentSuggestionIndex(prev => (prev + 1) % suggestions.length);
        setCharIndex(0);
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isTyping, currentSuggestion, suggestions.length]);

  const handleFormulaSubmit = (e) => {
    if (e.key === 'Enter') {
      const cmd = formulaValue.toLowerCase().replace(/[=()]/g, '');
      if (cmd === 'hire') {
        showToast('✓ Great choice! Scroll to Contact section');
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'audit') {
        showToast('📊 Viewing Audit Experience...');
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'help') {
        showToast('💡 Try: =HIRE(), =AUDIT(), =SKILLS(), =CONTACT()');
      } else if (cmd === 'skills') {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'contact') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'dark') {
        setDarkMode(!darkMode);
        showToast(darkMode ? '☀️ Light mode activated' : '🌙 Dark mode activated');
      } else {
        showToast('#REF! Command not recognized');
      }
      setFormulaValue('');
    }
  };

  const handleDownloadCV = () => {
    showToast('📄 Downloading Resume...');
    const link = document.createElement('a');
    link.href = '/Biplav_Siwakoti_Resume.pdf';
    link.download = 'Biplav_Siwakoti_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        {/* Logo */}
        <motion.div 
          className="header-logo"
          whileHover={{ scale: 1.02 }}
        >
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none">
              <rect x="2" y="2" width="28" height="28" rx="6" fill="var(--primary)"/>
              <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="var(--font-display)">BS</text>
            </svg>
          </div>
          <span className="logo-text">Biplav & Co.</span>
        </motion.div>

        {/* Formula Bar */}
        <div className="formula-bar">
          <span className="formula-fx">fx</span>
          <div className="formula-input-wrapper">
            <input
              type="text"
              className="formula-input"
              placeholder=""
              value={formulaValue}
              onChange={(e) => setFormulaValue(e.target.value)}
              onKeyDown={handleFormulaSubmit}
            />
            {!formulaValue && (
              <div className="formula-suggestions">
                <motion.span
                  key={currentSuggestionIndex}
                  className="suggestion-text"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                >
                  {currentSuggestion.substring(0, charIndex)}
                  <span className="typing-cursor">|</span>
                </motion.span>
              </div>
            )}
          </div>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          <motion.button 
            className="header-btn"
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Download CV"
          >
            <Printer size={18} />
          </motion.button>
          
          <motion.button 
            className="header-btn theme-toggle"
            onClick={() => {
              setDarkMode(!darkMode);
              showToast(darkMode ? '☀️ Light mode' : '🌙 Dark mode');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Column Letters Bar */}
      <div className="column-bar">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
          <span key={letter} className="column-letter">{letter}</span>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
