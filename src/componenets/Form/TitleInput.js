import React from 'react';

const TitleInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Title of the Session:</label>
      <input
        type="text"
        placeholder="Title of training"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TitleInput;
