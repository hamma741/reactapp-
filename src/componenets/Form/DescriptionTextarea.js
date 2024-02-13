import React from 'react';

const DescriptionTextarea = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Brief Description:</label>
      <textarea
        placeholder="Brief description"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DescriptionTextarea;
