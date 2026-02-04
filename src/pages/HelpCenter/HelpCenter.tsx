import React from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Help Center</h1>
                <div className="article-meta">
                    <span>Finding your way around NewsWorld</span>
                </div>
            </div>

            <div className="help-search-box">
                <h2>How can we help you?</h2>
                <div className="search-wrapper">
                    <input type="text" placeholder="Search for help articles..." />
                    <button>Search</button>
                </div>
            </div>

            <div className="help-grid">
                <div className="help-category">
                    <h3>Browsing NewsWorld</h3>
                    <ul>
                        <li>Finding articles</li>
                        <li>Using the search bar</li>
                        <li>Mobile app access</li>
                        <li>Accessibility features</li>
                    </ul>
                </div>

                <div className="help-category">
                    <h3>Editing & Contributing</h3>
                    <ul>
                        <li>Your first edit</li>
                        <li>How to use the editor</li>
                        <li>Uploading images</li>
                        <li>Article naming conventions</li>
                    </ul>
                </div>

                <div className="help-category">
                    <h3>Account & Profiles</h3>
                    <ul>
                        <li>Creating an account</li>
                        <li>Changing your password</li>
                        <li>Setting preferences</li>
                        <li>Privacy settings</li>
                    </ul>
                </div>

                <div className="help-category">
                    <h3>Community & Rules</h3>
                    <ul>
                        <li>Community portal</li>
                        <li>Dispute resolution</li>
                        <li>Reporting vandalism</li>
                        <li>Copyright policies</li>
                    </ul>
                </div>
            </div>

            <div className="article-body">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h4>Is NewsWorld free to use?</h4>
                    <p>Yes, all content on NewsWorld is free to access and use under our Creative Commons license.</p>
                </div>
                <div className="faq-item">
                    <h4>Can I use NewsWorld for school?</h4>
                    <p>While NewsWorld is a great starting point for research, we always recommend citing our primary sources for academic work.</p>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
