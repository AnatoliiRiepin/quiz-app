import React, { useState } from 'react';
import google from './../../components/icons/google-icon-svgrepo-com.svg';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <h1>Create an Account</h1>
            <form>
                <label>
                    Name:
                    <input type="text" required />
                </label>
                <label>
                    Email:
                    <input type="email" required />
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
                    I accept the terms of use:
                    <input type="checkbox" required />
                </label>
                <button type="submit">Sign Up</button>
                <button type="button"
                    style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={google}
                        alt="Google Icon"
                        style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                    Sign up with Google
                </button>
                <div>
                    <a href="/login">Already have an account? Login</a>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;