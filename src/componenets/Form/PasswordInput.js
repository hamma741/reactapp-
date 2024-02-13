import React from 'react';

const PasswordInput = ({ value, onChange }) => {
  return (
    <div className="input-container">
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PasswordInput;
