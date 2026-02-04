import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Reusing the aesthetic login styles

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Get existing users
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

        // Check if email already exists
        if (registeredUsers.some((u: any) => u.email === email)) {
            setError('Email is already registered. Please login.');
            return;
        }

        // Register new user
        const newUser = { name, email, password };
        localStorage.setItem('registeredUsers', JSON.stringify([...registeredUsers, newUser]));

        // Redirect to login
        alert('Registration successful! Please log in.');
        navigate('/login');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                {/* Left Side - Visual */}
                <div className="login-visual">
                    <div className="visual-content">
                        <h2>Join the Community.</h2>
                        <p>Create an account to personalize your news feed and engage with top stories.</p>
                        <div className="testimonial">
                            <p>"NewsWorld has changed how I consume information daily."</p>
                            <span>- David Chen, Reader since 2022</span>
                        </div>
                    </div>
                    <div className="visual-overlay"></div>
                </div>

                {/* Right Side - Form */}
                <div className="login-form-wrapper">
                    <div className="form-header">
                        <h1>Create Account</h1>
                        <p>Enter your details to register.</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="login-btn">Register</button>

                        <div className="divider">
                            <span>or continue with</span>
                        </div>

                        <div className="social-login">
                            <button type="button" className="social-btn google">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1H12v3.8h5.6c-.5 2.5-2.6 4.3-5.6 4.3-3.3 0-6-2.7-6-6s2.7-6 6-6c1.5 0 2.9.5 4 1.4l2.8-2.8C17.1 3.5 14.7 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.6 0-.6-.1-1.2-.2-1.7z" /></svg>
                                Google
                            </button>
                            <button type="button" className="social-btn apple">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 10.6c-.1-2.9 2.4-4.3 2.5-4.4-.1 0-2-2.1-4.7-2.1-1.3 0-2.5.8-3.2.8-.7 0-1.8-.8-3-.8-3 0-6.1 2.3-6.1 6.5 0 2.9 1 5.9 4.3 5.9 1.2 0 1.8-.8 3.2-.8.1 0 .2-.1.3-.1 1.4 0 1.9.8 3.2.8 3 0 4.1-2.6 4.3-3-.1 0-2.5-1.4-2.6-4.2l.1-1.4zm-3-6.8c.7-.7 1.1-1.8 1-2.8-1 0-2.2.6-2.9 1.4-.6.7-1.1 1.7-1 2.8.2 0 .1 0 .1 0 1 0 2.1-.6 2.8-1.4z" /></svg>
                                Apple
                            </button>
                        </div>
                    </form>

                    <div className="form-footer">
                        <p>Already have an account? <Link to="/login">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
