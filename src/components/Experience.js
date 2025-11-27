import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      year: '2022',
      role: 'Assistant Manager, Audit & Assurance',
      company: 'S.R. Batliboi & Associates LLP (Associate firm of EY)',
      location: 'Bangalore, India',
      type: 'Assurance & Audit',
      status: 'In Progress',
      statusColor: 'warning',
      summary: 'Orchestrated and managed complex statutory and external audit engagements for multiple clients mainly within the IT sector, overseeing full-cycle financial compliance, advanced risk assessment and team leadership to ensure precise, timely and regulatory-compliant financial reporting.',
      bullets: [
        'Directed and executed over 10 external audit engagements for multiple IT sector entities, ensuring comprehensive compliance with Companies Act, FEMA, and other regulatory requirements, effectively mitigating financial and operational risks.',
        'Spearheaded rigorous Internal Controls over Financial Reporting (ICFR) evaluations across 5+ critical financial processes (Payroll, Procure-to-Pay, Revenue Recognition, Treasury, Financial Statement Closure), significantly enhancing control effectiveness and the reliability of financial statement accuracy.',
        'Implemented and institutionalized robust risk assessment frameworks, including the development of detailed control matrices and advanced Segregation of Duties (SoD) analyses, to proactively identify and mitigate potential fraud risks and strengthen preventive and detective control environments.',
        'Directed and managed the central US GAAP audit workstream for a multinational technology corporation. Functioning as the Team Lead/Manager, I oversaw and led a team of up to 15 professionals and served as the Single Point of Contact (SPOC) across 9 international entities/jurisdictions, ensuring seamless compliance with US GAAP for timely handover to local statutory auditors.',
        'Mentored engagement teams in the execution of audit procedures, ensuring consistent adherence to stringent EY quality standards and deadlines, which directly contributed to 100% on-time project delivery. Developed and conducted several knowledge transfer and training sessions for peers and junior staff.'
      ]
    },
    {
      year: '2017',
      role: 'Article Assistant, Direct Tax',
      company: 'Baker Tilly DHC',
      location: 'New Delhi, India',
      type: 'Taxation & Advisory',
      status: 'Completed',
      statusColor: 'success',
      summary: 'Assisted in direct tax litigation, managed tax compliance, and developed comprehensive research for diverse clients, ensuring regulatory adherence and successful representation.',
      bullets: [
        'Assisted in 15+ direct tax litigation matters before various authorities (AO, CIT(A), ITAT), providing critical research, documentation, and hearing representation that supported favorable outcomes.',
        'Managed tax compliance engagements including return filing for diverse clients and transfer pricing submissions.',
        'Developed comprehensive research notes on complex tax provisions and case laws, preparing detailed submissions that strengthened litigation proceedings and informed strategic tax planning for clients.'
      ]
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.div 
          className="section-header-styled"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <Briefcase size={24} />
          </div>
          <div className="section-title-group">
            <h2 className="section-title-main">
              Experience <span className="title-ampersand">&</span> <span className="title-accent">Journey</span>
            </h2>
            <p className="section-subtitle">General Ledger • Historical Transactions</p>
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

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              className="exp-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="exp-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <div className="exp-header-left">
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-meta">{exp.year} – {exp.status === 'Completed' ? '2021' : 'Present'} | {exp.location}</p>
                  </div>
                  <div className="exp-header-right">
                    <span className={`exp-status ${exp.statusColor}`}>
                      {exp.statusColor === 'success' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                      {exp.status}
                    </span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>

                <p className="exp-summary">{exp.summary}</p>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + j * 0.05 }}
                    >
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Experience Value */}
        <motion.div 
          className="exp-total"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="exp-total-label">Total Experience Value</span>
          <span className="exp-total-value">Invaluable Asset (Growing YoY)</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
