// import React from 'react';
// import'../components/style/login.css';
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//   return (
//     <div className="L-form">
//       <h2>Login Here</h2>
//       <input type="email" name="email" placeholder="Email Address" />
//       <input type="password" name="password" placeholder="Password" />
//       <p className="res">
//         Reset password? <a href="#">Click Here</a>
//       </p>
//       <button className="L-btnn">
//         <Link to="/dashboard">Login</Link>
//       </button>
//       <p className="link">
//         <span>Don't have an account</span><br />
//         <a href="signUp">Sign up</a> <span>Here</span>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/style/login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform your login logic here (e.g., API call)
    // For this example, we'll just navigate to the homepage
    if (email && password) {
      // Assuming login is successful
      navigate('/design');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="L-form">
      <h2>Login Here</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
          required
        />
        <p className="res">
          Reset password? <a href="#">Click Here</a>
        </p>
        <button type="submit" className="L-btnn">
          Login
        </button>
      </form>
      <p className="link">
        <span>Don't have an account?</span><br />
        <a href="signUp">Sign up</a> Here
      </p>
    </div>
  );
};

export default LoginForm;