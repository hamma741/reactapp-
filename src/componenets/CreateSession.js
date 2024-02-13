import React, { useState } from 'react';
import axios from 'axios';
import PasswordInput from './Form/PasswordInput';
import DescriptionTextarea from './Form/DescriptionTextarea';
import TrainingCourseSelect from './Form/TrainingCourseSelect';
import ConstructorSelect from './Form/ConstructorSelect';
import TitleInput from './Form/TitleInput';
import '../css/CreateSession.css'; // Import your CSS file for styling

const CreateSession = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [constructorSelectedOption, setConstructorSelectedOption] = useState('');
  const options = ["Python", "C#", "AI intro"];
  const constructorOptions = ["Ahmed", "Med", "Saad"];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to login. Please try again.');
    }
  };

  return (
    <div className="create-session-container">
      <h2>New Session</h2>
      {/* Title input */}
      <TitleInput value={username} onChange={(e) => setUsername(e.target.value)} />

      {/* Password input */}
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

      {/* Description textarea */}
      <DescriptionTextarea value={description} onChange={(e) => setDescription(e.target.value)} />

      {/* Training Course select */}
      <TrainingCourseSelect options={options} selectedOption={selectedOption} onChange={handleOptionChange} />

      {/* Constructor select */}
      <ConstructorSelect options={constructorOptions} selectedOption={constructorSelectedOption} onChange={(e) => setConstructorSelectedOption(e.target.value)} />

      {/* Login button */}
      <button onClick={handleLogin}>Create Session</button>

      {/* Message display */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateSession;
