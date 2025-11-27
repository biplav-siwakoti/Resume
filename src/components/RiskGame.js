import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Trophy, CheckCircle } from 'lucide-react';
import './RiskGame.css';

const RiskGame = ({ onClose, showToast }) => {
  const [score, setScore] = useState(0);
  const [foundRisks, setFoundRisks] = useState({});
  const [showWin, setShowWin] = useState(false);

  const data = [
    { row: 1, type: 'header', cells: ['📊 INCOME STATEMENT - FY 2024 (DRAFT)'] },
    { row: 2, type: 'subheader', cells: ['Description', 'Amount (USD)'] },
    { row: 3, cells: ['Revenue from Operations', '$ 1,000,000'], risks: [] },
    { row: 4, cells: ['Travel & Entertainment', '$ 400,000'], risks: [1] },
    { row: 5, cells: ['Consultancy Charges', '$ 50,000'], risks: [] },
    { row: 6, cells: ['Donation', '$ 15,000'], risks: [0] },
    { row: 7, cells: ['Net Profit', '$ 535,000'], risks: [] },
    { row: 8, type: 'spacer' },
    { row: 9, type: 'header', cells: ['📋 BALANCE SHEET EXTRACT'] },
    { row: 10, cells: ['Cash & Bank Balance', '-$ 25,000'], risks: [1], isNegative: true },
    { row: 11, cells: ['Accounts Receivable', '$ 250,000'], risks: [] },
  ];

  const checkCell = (rowNum, cellIdx, isRisk) => {
    const key = `${rowNum}-${cellIdx}`;
    if (foundRisks[key]) return;
    if (isRisk) {
      setFoundRisks(prev => ({ ...prev, [key]: true }));
      setScore(prev => {
        const newScore = prev + 1;
        showToast('✓ Risk identified!');
        if (newScore === 3) setTimeout(() => setShowWin(true), 800);
        return newScore;
      });
    } else {
      showToast('✗ No risk detected here');
    }
  };

  return (
    <motion.div className="risk-game-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="risk-game-header">
        <div className="risk-game-title"><AlertTriangle size={20} /><span>Spot the Audit Risk</span></div>
        <div className="risk-game-score"><span>Risks Found:</span><span className="score-value">{score}/3</span></div>
        <button className="risk-game-close" onClick={onClose}><X size={20} /></button>
      </div>
      <div className="risk-game-instructions"><span>💡</span><span>Click on cells that contain audit risks. Find all 3 to pass!</span></div>
      <div className="risk-game-container">
        <div className="risk-game-spreadsheet">
          <table className="risk-game-table">
            <thead><tr><th style={{ width: 50 }}></th><th>A</th><th>B</th></tr></thead>
            <tbody>
              {data.map((row) => {
                if (row.type === 'header') return <tr key={row.row}><td className="row-num">{row.row}</td><td colSpan={2} className="section-header">{row.cells[0]}</td></tr>;
                if (row.type === 'subheader') return <tr key={row.row}><td className="row-num">{row.row}</td><td className="subheader-cell">{row.cells[0]}</td><td className="subheader-cell">{row.cells[1]}</td></tr>;
                if (row.type === 'spacer') return <tr key={row.row}><td className="row-num">{row.row}</td><td colSpan={2} style={{ height: 20 }}></td></tr>;
                return (
                  <tr key={row.row}>
                    <td className="row-num">{row.row}</td>
                    {row.cells.map((cell, idx) => {
                      const isRisk = row.risks.includes(idx);
                      const key = `${row.row}-${idx}`;
                      const isFound = foundRisks[key];
                      return (
                        <td key={idx} className={`risk-cell ${isFound ? 'found' : ''} ${row.isNegative && idx === 1 ? 'negative' : ''}`} onClick={() => checkCell(row.row, idx, isRisk)}>
                          {cell}
                          {isFound && <motion.span className="cell-tick" initial={{ scale: 0 }} animate={{ scale: 1 }}><CheckCircle size={16} /></motion.span>}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <AnimatePresence>
        {showWin && (
          <motion.div className="risk-win-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="risk-win-content" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
              <div className="risk-win-icon"><Trophy size={60} /></div>
              <h3 className="risk-win-title">Audit Complete!</h3>
              <p className="risk-win-subtitle">You have the eye of a Senior Manager</p>
              <div className="risk-win-badge">✓ Quality Review Passed</div>
              <motion.button className="risk-win-btn" onClick={onClose} whileHover={{ scale: 1.02 }}>Continue →</motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RiskGame;
