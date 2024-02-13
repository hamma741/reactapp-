import React from 'react';

const TrainingCourseSelect = ({ options, selectedOption, onChange }) => {
  return (
    <div className="input-container">
      <label>Training Course:</label>
      <select value={selectedOption} onChange={onChange}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default TrainingCourseSelect;
