import React, { useState } from 'react';
// import { useNavigate, Link } from "react-router-dom";
import './LoginSignUp.css';
import Swal from 'sweetalert2';
import { loginUser, signUpUser } from '../../../services/authService';

const LoginSignUp = () => {
  // const navigate = useNavigate()
  const [action, setAction] = useState('Sign Up');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const toggleAction = (newAction) => {
    setAction(newAction);
    if (newAction === 'Sign Up') {
      setShowConfirmPassword(true);
    } else {
      setShowConfirmPassword(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (action === 'Sign Up') {
      if (password !== confirmPassword) {
        Swal.fire({
          title: 'Error!',
          text: 'The passwords do not match',
          icon: 'error',
          confirmButtonText: 'Accept',
        });
      } else {
        try {
          await signUpUser(username, password);
          console.log('success');
        } catch(error) {
          Swal.fire({
            title: 'Error!',
            text: 'There was a problem with registration',
            icon: 'error',
            confirmButtonText: 'Accept'
          });
        }
      }
    } else {
      try {
        const response = await loginUser(username, password);
        if (response) {
          console.log(response);
          // localStorage.setItem('userId', response.data.id);
          // navigate('/dashboard');
        } else {
          console.error();
          Swal.fire({
            title: 'Error!',
            text: 'Incorrect Credentials.',
            icon: 'error',
            confirmButtonText: 'Accept',
          });
        }
      } catch (error) {
        console.error('Error during login:', error);
        Swal.fire({
          title: 'Error!',
          text: 'There was a problem to login.',
          icon: 'error',
          confirmButtonText: 'Accept',
        });
      }
    }
  };

  return (
    <main>
      <div className='form-container'>
        <div className='container-title'>{action}</div>
        <form action="">
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
          {showConfirmPassword && (
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
            <button type='submit' className='submit' onClick={handleLogin}>Enter</button>
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