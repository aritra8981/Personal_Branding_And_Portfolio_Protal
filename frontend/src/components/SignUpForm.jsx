// 

import React, { useState } from 'react';
import '../components/style/SignUpForm.css';

const SignUpForm = () => {
  // State variables for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear previous messages
    setError('');
    setSuccess('');

    // Create user object
    const user = {
      username,
      email,
      password,
    };

    try {
      // Send POST request to the server
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Handle successful signup
        setSuccess('Sign up successful! You can now log in.');
        // Clear input fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        // Handle server errors
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong');
      }
    } catch (err) {
      setError('An error occurred while signing up');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
      </div>
      <form onSubmit={handleSubmit} className="inputSignUpData">
        <div className="input">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btnn">SignUp</button>
        <div className="loginlink">
        Already have an account?<a href="#">Click here!</a>
      </div>
      <div>
        <a href="#">Privacy Policy</a><span>|</span><a href="#">Terms and Conditions</a>
      </div>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        
      </form>
      
    </div>
  );
};

export default SignUpForm;