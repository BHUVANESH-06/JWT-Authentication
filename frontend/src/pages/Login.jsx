import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = () => {
    alert('Google login coming soon...');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-form-section">
          <h2 className="login-title">Welcome Back</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {error && <p className="error-message">{error}</p>}
            <button type="button" onClick={handleGoogleLogin} className="google-button">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="google-icon"
              />
              <span>Login with Google</span>
            </button>
            <p className="signup-link">
              Don’t have an account?{' '}
              <span onClick={() => navigate('/signup')}>Signup</span>
            </p>
          </form>
        </div>

        <div className="login-animation">
          <iframe
            src="https://lottie.host/embed/eb9fe18c-d0c5-4c11-bcec-ee46ccad8c1c/BtfI6ip74r.lottie"
            className="animation-frame"
            title="Lottie Animation"
          />
          <div className="animation-title">TaskPro</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
