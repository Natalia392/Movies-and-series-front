import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginSignUp.css';
import Swal from 'sweetalert2';
import { loginUser, signUpUser } from '../../../services/authService';

const LoginSignUp = () => {
  const navigate = useNavigate()
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const toggleAction = (newAction) => {
    setAction(newAction);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (action === 'Sign Up') {
        await handleSignUp();
      } else {
        await handleLogin();
      }
    } catch (error) {
      handleError(error);
    }
  };
  
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      throw new Error('The passwords do not match');
    }
    await signUpUser(username, password);
    setAction('Login');
    Swal.fire({
      title: 'Success!',
      text: 'User created, now you can Login',
      icon: 'success',
      confirmButtonText: 'Accept'
    });
  };
  
  const handleLogin = async () => {
    const response = await loginUser(username, password);
    if (response) {
      console.log(response);
      navigate('/home');
    } else {
      throw new Error('Incorrect Credentials.');
    }
  };
  
  const handleError = (error) => {
    console.error('Error:', error);
    Swal.fire({
      title: 'Error!',
      text: error.message || 'There was a problem',
      icon: 'error',
      confirmButtonText: 'Accept'
    });
  };

  return (
    <main>
      <div className='form-container'>
        <div className='container-title'>{action}</div>
        <form onSubmit={handleSubmit} action="">
          <div className='input-sign-in-container'>
            <label htmlFor="username"></label>
            <input
              id='username'
              className='inputs'
              type="text"
              name='username'
              placeholder='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required />
          </div>
          <div className='input-sign-in-container'>
            <label htmlFor="password"></label>
            <input id='password'
              className='inputs'
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required />
          </div>
          {action === 'Sign Up' && (
            <div className='input-sign-in-container'>
              <label htmlFor="confirmPassword"></label>
              <input
                className='inputs'
                type='password'
                name='confirmPassword'
                placeholder='confirm password'
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required />
            </div>
          )}
          <div>
            <button type='submit' className='submit'>Enter</button>
          </div>
          <div className='submit-container'>
            <button
              type='button'
              className={action === 'Login' ? 'toggle grey' : 'toggle'}
              onClick={() => toggleAction('Sign Up')}
            >
              Sign Up
            </button>

            <button
              type='button'
              className={action === 'Sign Up' ? 'toggle grey' : 'toggle'}
              onClick={() => toggleAction('Login')}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default LoginSignUp;