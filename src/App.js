import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Copilot from './components/Copilot';
import RiskGame from './components/RiskGame';
import Toast from './components/Toast';
import TipsBar from './components/TipsBar';
import DoodleBackground from './components/DoodleBackground';
import ExcelGrid from './components/ExcelGrid';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showCopilot, setShowCopilot] = useState(false);
  const [showRiskGame, setShowRiskGame] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [activeSection, setActiveSection] = useState('summary');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll spy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['summary', 'experience', 'skills', 'education', 'awards', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 2500);
  };

  const handleFormulaSubmit = (formula) => {
    const f = formula.toUpperCase().trim();
    if (f === '=HIRE' || f === '=HIRE()') {
      showToast('🎉 You should hire Biplav!');
    } else if (f === '=DARK' || f === '=DARK()') {
      setDarkMode(!darkMode);
      showToast(darkMode ? '☀️ Light mode' : '🌙 Dark mode');
    } else if (f === '=AUDIT' || f === '=AUDIT()') {
      showToast('✅ Audit Complete - True & Fair View!');
    } else if (f === '=GAME' || f === '=RISKGAME') {
      setShowRiskGame(true);
    } else if (f === '=HELP' || f === '=HELP()') {
      showToast('Try: =HIRE, =AUDIT, =DARK, =GAME');
    } else if (f.startsWith('=')) {
      showToast('❓ Unknown formula. Try =HELP');
    }
  };

  return (
    <div className="app">
      {/* Cursor Glow Effect */}
      <div ref={cursorGlowRef} className="cursor-glow" />
      
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <ExcelGrid />
          <DoodleBackground />
          
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            onFormulaSubmit={handleFormulaSubmit}
            openRiskGame={() => setShowRiskGame(true)}
            showToast={showToast}
          />

          <main style={{ marginLeft: '28px', marginTop: '20px' }}>
            <Hero showToast={showToast} />
            <Experience />
            <Skills />
            <Education />
            <Awards />
            <Contact darkMode={darkMode} />
          </main>

          <Navigation 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            openCopilot={() => setShowCopilot(true)}
            openRiskGame={() => setShowRiskGame(true)}
          />

          <TipsBar openRiskGame={() => setShowRiskGame(true)} />

          <AnimatePresence>
            {showCopilot && (
              <Copilot onClose={() => setShowCopilot(false)} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showRiskGame && (
              <RiskGame 
                onClose={() => setShowRiskGame(false)} 
                showToast={showToast}
              />
            )}
          </AnimatePresence>

          <Toast show={toast.show} message={toast.message} />
        </>
      )}
    </div>
  );
}

export default App;
