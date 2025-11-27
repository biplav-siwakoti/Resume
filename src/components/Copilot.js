import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Send, Sparkles, User } from 'lucide-react';
import './Copilot.css';

const Copilot = ({ onClose }) => {
  const [messages, setMessages] = useState([{ type: 'copilot', text: "Hi! I'm your AI assistant. Ask me anything about Biplav! 🚀" }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const responses = {
    experience: "3+ years at EY (Big Four) as Assistant Manager. Previously 4 years at Baker Tilly DHC. Led 10+ statutory audits across 9 jurisdictions.",
    skills: "Core: Financial Reporting, Statutory Audit, ICFR, Direct Taxation. Expert in US GAAP/IFRS.",
    hire: "✓ Big Four pedigree\n✓ 100% on-time delivery\n✓ Audit + Tax expertise\n✓ EY Kudos winner\n✓ Led 15+ member teams",
    contact: "📧 biplav.siwakoti@gmail.com\n📞 +91 8375099047\n📍 Bangalore, India"
  };

  const chips = [{ label: 'Experience?', key: 'experience' }, { label: 'Skills?', key: 'skills' }, { label: 'Why hire?', key: 'hire' }, { label: 'Contact?', key: 'contact' }];

  const sendMessage = (text, key) => {
    const userMessage = text || input;
    if (!userMessage.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      let response = "Try asking about: experience, skills, hire, or contact!";
      const lower = (key || userMessage).toLowerCase();
      if (lower.includes('hire') || lower.includes('why')) response = responses.hire;
      else if (lower.includes('experience') || lower.includes('work')) response = responses.experience;
      else if (lower.includes('skill')) response = responses.skills;
      else if (lower.includes('contact') || lower.includes('email')) response = responses.contact;
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'copilot', text: response }]);
    }, 1000);
  };

  return (
    <motion.div className="copilot-panel" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
      <div className="copilot-header">
        <div className="copilot-title"><Sparkles size={18} /><span>Copilot</span></div>
        <button className="copilot-close" onClick={onClose}><X size={18} /></button>
      </div>
      <div className="copilot-suggestions">
        <div className="copilot-suggestions-label">Ask about Biplav</div>
        <div className="copilot-chips">
          {chips.map((chip) => (<motion.button key={chip.key} className="copilot-chip" onClick={() => sendMessage(chip.label, chip.key)} whileHover={{ scale: 1.05 }}>{chip.label}</motion.button>))}
        </div>
      </div>
      <div className="copilot-chat">
        {messages.map((msg, i) => (
          <motion.div key={i} className={`chat-message ${msg.type}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className={`chat-avatar ${msg.type}`}>{msg.type === 'copilot' ? <Sparkles size={14} /> : <User size={14} />}</div>
            <div className={`chat-bubble ${msg.type}`}>{msg.text.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</div>
          </motion.div>
        ))}
        {isTyping && <div className="chat-message copilot"><div className="chat-avatar copilot"><Sparkles size={14} /></div><div className="chat-bubble copilot"><div className="typing-indicator"><span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" /></div></div></div>}
      </div>
      <div className="copilot-input-area">
        <input type="text" className="copilot-input" placeholder="Ask something..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} />
        <motion.button className="copilot-send" onClick={() => sendMessage()} whileHover={{ scale: 1.05 }}><Send size={18} /></motion.button>
      </div>
    </motion.div>
  );
};

export default Copilot;
