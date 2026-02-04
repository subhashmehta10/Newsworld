import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="logo-icon"><span>W</span></div>
                            <span className="logo-text">NewsWorld</span>
                        </div>
                        <p className="footer-tagline">
                            Empowering the world with free, collaborative, and verifiable knowledge. Built by everyone, for everyone.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2-2 3c1.25 0 3-.5 3-.5s-1.5 2.5-3 3c0 9-11 15-18 9 0 0 4-1 4-4 0 0-3-.5-4-3 0 0 1 0 1.5-.5-3-1-3.5-3.5-3.5-3.5 1 0 2 .5 2 .5-3-2-2-5-2-5 3 4 7 6 12 6.5-.5-2.5 1.5-4.5 4-4.5 1.25 0 2.5.5 3.25 1.25z"></path></svg>
                            </a>
                            <a href="#" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Knowledge</h4>
                            <ul>
                                <li><Link to="/technology">Technology</Link></li>
                                <li><Link to="/science">Science</Link></li>
                                <li><Link to="/history">History</Link></li>
                                <li><Link to="/geography">Geography</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Community</h4>
                            <ul>
                                <li><Link to="/writers-corner">Writers Corner</Link></li>
                                <li><Link to="/forum">Forum</Link></li>
                                <li><Link to="/help-center">Help Center</Link></li>
                                <li><Link to="/about">Projects</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Cookie Policy</a></li>
                                <li><a href="#">Disclaimer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © 2026 NewsWorld Foundation. Text is available under the <a href="#">Creative Commons license</a>.
                    </div>
                    <div className="footer-badges">
                        <span className="badge">Open Source</span>
                        <span className="badge">Knowledge For All</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
