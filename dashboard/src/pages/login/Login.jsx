import React, { useState } from 'react';
import { useFetch } from 'use-http';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { post, loading, error } = useFetch('http://localhost:8000/login');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = { email, password };
    const data = await post('/login', loginData);

    if (data) {
      localStorage.setItem('authToken', data.authToken);
      window.location.href = '/users';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />

      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {error && <div className="error-message">{error.message}</div>}
    </form>
  );
}

export default LoginForm;
