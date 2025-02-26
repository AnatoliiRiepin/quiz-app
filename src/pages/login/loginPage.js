import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './../../utils/firebase';
import google from './../../components/icons/google-icon-svgrepo-com.svg';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user.emailVerified) {
        setMessage('Login successful.');
        // Redirect to the desired page
      } else {
        setMessage('Please verify your email before logging in.');
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          setMessage('Invalid email address.');
          break;
        case 'auth/user-disabled':
          setMessage('User account is disabled.');
          break;
        case 'auth/user-not-found':
          setMessage('No user found with this email.');
          break;
        case 'auth/wrong-password':
          setMessage('Incorrect password.');
          break;
        default:
          setMessage(`Error: ${error.message}`);
          break;
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await setPersistence(auth, browserLocalPersistence);
      const result = await signInWithPopup(auth, provider);
      setMessage(`Login successful. Welcome, ${result.user.displayName}!`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Login to Your Account</h1>
      <form onSubmit={handleLogin}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Username or Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </label>
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
        <button
          type="button"
          onClick={handleGoogleLogin}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={google}
            alt="Google Icon"
            style={{
              width: '16px',
              height: '16px',
              marginRight: '8px',
            }}
          />
          Sign in with Google
        </button>
        <div>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <div>
          <a href="/sign-up">Don't have an account? Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
