import React, { useState } from 'react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h1>Login to Your Account</h1>
            <form>
                <label>
                    Username or Email:
                    <input type="text" required />
                </label>
                <label>
                    Password:
                    <input type={showPassword ? 'text' : 'password'}
                        required />
                    <button type="button" onClick={() =>
                        setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </label>
                <label>
                    Remember me:
                    <input type="checkbox" />
                </label>
                <button type="submit">Login</button>
                <button type="button">
                    <img src="path/to/google-icon.png" alt="Google Icon" />
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