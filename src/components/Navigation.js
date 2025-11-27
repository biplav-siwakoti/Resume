import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Briefcase, TrendingUp, GraduationCap, Trophy, Gamepad2, Sparkles } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection, openCopilot, openRiskGame }) => {
  const tabs = [
    { id: 'summary', label: 'Summary', icon: <BarChart3 size={16} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
    { id: 'skills', label: 'Skills', icon: <TrendingUp size={16} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={16} /> },
    { id: 'awards', label: 'Awards', icon: <Trophy size={16} /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <motion.nav className="nav-tabs" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
      {tabs.map((tab) => (
        <motion.button key={tab.id} className={`nav-tab ${activeSection === tab.id ? 'active' : ''}`} onClick={() => scrollToSection(tab.id)} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
          <span className="nav-tab-icon">{tab.icon}</span>
          <span className="nav-tab-label">{tab.label}</span>
        </motion.button>
      ))}
      <div className="nav-divider" />
      <motion.button className="nav-tab game" onClick={openRiskGame} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
        <Gamepad2 size={16} />
        <span className="nav-tab-label">Risk Game</span>
      </motion.button>
      <motion.button className="nav-tab copilot" onClick={openCopilot} whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.95 }}>
        <Sparkles size={16} />
        <span className="nav-tab-label">Copilot</span>
      </motion.button>
    </motion.nav>
  );
};

export default Navigation;
