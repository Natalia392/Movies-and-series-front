import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [action, setAction] = useState('Sign Up');
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const toggleAction = (newAction) => {
    setAction(newAction);
    if (newAction === 'Sign Up') {
      setShowConfirmPassword(true);
    } else {
      setShowConfirmPassword(false);
    }
  };

  return (
    <div className='form-container'>
      <div className='container-title'>{action}</div>
      <form action="">
        <div className='input-sign-in-container'>
          <label htmlFor="username">Username</label> <br />
          <input className='inputs' type="text" name='username' required />
        </div>
        <div className='input-sign-in-container'>
          <label htmlFor="password">Password</label> <br />
          <input className='inputs' type="password" name='password' required />
        </div>
        {showConfirmPassword && (
          <div className='input-sign-in-container'>
            <label htmlFor="confirmPassword">Confirm Password</label> <br />
            <input className='inputs' type="password" name='confirmPassword' required />
          </div>
        )}
        <div className='submit-container'>
          <button className={action === 'Login' ? 'submit grey' : 'submit'} onClick={() => toggleAction('Sign Up')}>Sign Up</button>
          <button className={action === 'Sign Up' ? 'submit grey' : 'submit'} onClick={() => toggleAction('Login')}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginSignUp;