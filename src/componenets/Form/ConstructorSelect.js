import React from 'react';

const ConstructorSelect = ({ options, selectedOption, onChange }) => {
  return (
    <div className="input-container">
      <label>Constructor:</label>
      <select value={selectedOption} onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default ConstructorSelect;
