import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email1 = "abc@amdocs.com"
    const password1 = "12345678"
    if(email == email1 && password ==  password1) {
      alert("Login Successful");
      console.log('Login form submitted:', email, password);
    }
    
  };
  
  return (
    <div className='form-container'>
      <h2 className='form-header'>Login Form</h2>
      <marquee> Please Provide all the details Carefully!!</marquee>
      <form onSubmit={handleSubmit}>
        <div className='form-group' >
            <label htmlFor="email" className="form-label">Email:</label>
            <input 
            type="email"
            id="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
            />
        </div>
        <div className='form-group' >
            <label htmlFor="password" className='form-label'>Password:</label>
            <input
            type="password"
            id="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
            />
        </div> 
        <button type="submit" className="form-button">Login</button>
    </form>
    </div>
  );
};

export default LoginForm;
