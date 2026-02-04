import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
        console.log('Login attempt', { email, password });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                {/* Left Side - Visual */}
                <div className="login-visual">
                    <div className="visual-content">
                        <h2>Knowledge is Power.</h2>
                        <p>Join millions of readers who rely on NewsWorld for unbiased, in-depth reporting.</p>
                        <div className="testimonial">
                            <p>"The only news source I trust implicitly."</p>
                            <span>- Sarah Mitchell, Reader since 2021</span>
                        </div>
                    </div>
                    <div className="visual-overlay"></div>
                </div>

                {/* Right Side - Form */}
                <div className="login-form-wrapper">
                    <div className="form-header">
                        <h1>Welcome Back</h1>
                        <p>Please enter your details to sign in.</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
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

                        <div className="form-actions">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <Link to="#" className="forgot-password">Forgot password?</Link>
                        </div>

                        <button type="submit" className="login-btn">Sign In</button>

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
                        <p>Don't have an account? <Link to="#">Subscribe now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
