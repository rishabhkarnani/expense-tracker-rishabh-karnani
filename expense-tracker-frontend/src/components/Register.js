import React, { useState } from 'react';

// Registration Form Component
const Register = ({ onRegister }) => {
  const [name, setName] = useState('');                     // Name state
  const [email, setEmail] = useState('');                   // Email state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email });                            
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
