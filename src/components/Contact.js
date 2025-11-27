import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, ArrowUpRight, Calculator, FileSpreadsheet, PieChart } from 'lucide-react';
import './Contact.css';

const Contact = ({ darkMode }) => {
  const contacts = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'biplav.siwakoti@gmail.com',
      href: 'mailto:biplav.siwakoti@gmail.com'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/biplavsiwakoti'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 8375099047',
      href: 'tel:+918375099047'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg">
        {/* Decorative elements */}
        <div className="contact-deco deco-1">
          <Calculator size={60} />
        </div>
        <div className="contact-deco deco-2">
          <FileSpreadsheet size={50} />
        </div>
        <div className="contact-deco deco-3">
          <PieChart size={45} />
        </div>
        
        {/* Grid pattern */}
        <svg className="contact-grid-pattern" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="contactGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(33,115,70,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
        </svg>
      </div>

      <div className="container contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="contact-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            📊 Open for Opportunities
          </motion.div>

          <motion.h2 
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's balance the books.
          </motion.h2>

          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Looking for a detail-oriented auditor who delivers quality?
            <br />I'm ready for the next challenge.
          </motion.p>

          <div className="contact-cards">
            {contacts.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="contact-card-icon">{contact.icon}</div>
                <div className="contact-card-content">
                  <span className="contact-card-label">{contact.label}</span>
                  <span className="contact-card-value">{contact.value}</span>
                </div>
                <ArrowUpRight size={18} className="contact-card-arrow" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Designed with 📊 & ✏️ — Biplav Siwakoti © 2024
          </p>
          <div className="footer-links">
            <a href="mailto:biplav.siwakoti@gmail.com">Email</a>
            <a href="https://linkedin.com/in/biplavsiwakoti" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#summary">Back to Top</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
