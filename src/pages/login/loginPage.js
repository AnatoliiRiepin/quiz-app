import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../utils/firebase';
import google from './../../components/icons/google-icon-svgrepo-com.svg';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await
                signInWithEmailAndPassword(auth, email, password);
            if (userCredential.user.emailVerified) {
                setMessage('Login successful.');
                // Redirect to the desired page
            } else {
                setMessage('Please verify your email before logging in.');
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Login to Your Account</h1>
            <form onSubmit={handleLogin}>
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
                    <button type="button"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </label>
                <label>
                    Remember me:
                    <input type="checkbox" />
                </label>
                <button type="submit">Login</button>
                {message && <p>{message}</p>}
                <button type="button" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={google} alt="Google Icon" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
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