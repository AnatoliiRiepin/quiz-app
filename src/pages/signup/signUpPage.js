import React, { useState } from 'react';

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
                <button type="button">
                    <img src="path/to/google-icon.png" alt="Google Icon" />
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