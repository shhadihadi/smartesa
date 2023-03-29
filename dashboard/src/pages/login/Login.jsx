import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import useFetch from '../../useFetch';
import './login.scss'
import { toast } from "react-toastify";

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usenavigate=useNavigate();

  const { loading, error, data } = useFetch('http://localhost:8000/users');

  const handleLogin = () => {
    if (validate()) {
    const user = data.find(user => user.username === username && user.password === password);
    if (user) {
    //   alert('Login successful!');
      usenavigate('/')
    } else {
      alert('Invalid username or password');
    }
}
  }
  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
        result = false;
        toast.warning('Please Enter Username');
    }
    if (password === '' || password === null) {
        result = false;
        toast.warning('Please Enter Password');
    }
    return result;
}
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    
    <form onSubmit={handleLogin}>
        <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
