
import React, { useState } from 'react';
import './App.css';
import CookingConsultationForm from './components/register';
import LoginForm from './components/login';

function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleShowRegisterForm = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const handleShowLoginForm = () => {
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };


  return (
    <div className='form-body'>
      <h1>Cooking Consultation</h1>
        <button className="button" onClick={handleShowLoginForm}>
          Login
        </button>
        <button className="button1" onClick={handleShowRegisterForm}>
          Register
        </button>
    
        {showLoginForm && <LoginForm />}
      {showRegisterForm && <CookingConsultationForm />}
  </div>
    
  );
}

export default App;