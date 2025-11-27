import React from 'react';

const ExcelGrid = () => {
  const rows = Array.from({ length: 60 }, (_, i) => i + 1);
  const cols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').slice(0, 26);

  return (
    <div className="excel-grid">
      <div className="excel-grid-lines" />
      
      {/* Row numbers */}
      <div className="excel-row-numbers">
        {rows.map(num => (
          <div key={num} className="excel-row-num">{num}</div>
        ))}
      </div>
      
      {/* Column letters */}
      <div className="excel-col-letters">
        {cols.map(letter => (
          <div key={letter} className="excel-col-letter">{letter}</div>
        ))}
      </div>
    </div>
  );
};

export default ExcelGrid;
