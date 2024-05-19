import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/color_transparent.png'; // Assurez-vous que le chemin vers le logo est correct
import '../styles/Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Ajouter la logique de connexion ici
    if (email === "admin@test.com" && password === "admin") {
      navigate('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  /*return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form> 
    </div>
  );
};*/

return (
  <div className="login-container">
    <img src={logo} alt="Logo" className="login-logo" />
    <h2>Login</h2>
    <form onSubmit={handleLogin} className="login-form">
      <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  </div>
);
};

export default Login;
