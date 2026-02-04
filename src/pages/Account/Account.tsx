import React, { useState } from 'react';
import './Account.css';

const Account = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const userInfo = {
        name: "Subhash Kumar",
        email: "subhash.kumar@example.com",
        memberSince: "Jan 2026",
        plan: "Premium Digital"
    };

    return (
        <div className="account-page">
            <div className="account-layout">
                {/* Sidebar Navigation */}
                <aside className="account-sidebar">
                    <div className="user-mini-profile">
                        <div className="profile-avatar">
                            {userInfo.name.charAt(0)}
                        </div>
                        <div className="profile-details">
                            <h3>{userInfo.name}</h3>
                            <span>{userInfo.plan}</span>
                        </div>
                    </div>

                    <nav className="account-nav">
                        <button
                            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'subscription' ? 'active' : ''}`}
                            onClick={() => setActiveTab('subscription')}
                        >
                            Subscription
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile & Settings
                        </button>
                        <button
                            className={`nav-item ${activeTab === 'saved' ? 'active' : ''}`}
                            onClick={() => setActiveTab('saved')}
                        >
                            Saved Articles
                        </button>
                    </nav>

                    <button className="logout-btn">Log Out</button>
                </aside>

                {/* Main Content Area */}
                <main className="account-content">
                    {activeTab === 'overview' && (
                        <div className="tab-pane">
                            <h1 className="pane-title">Account Overview</h1>

                            <div className="stats-grid">
                                <div className="stat-card">
                                    <span className="stat-label">Member Since</span>
                                    <span className="stat-value">{userInfo.memberSince}</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-label">Saved Articles</span>
                                    <span className="stat-value">12</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-label">Comments Posted</span>
                                    <span className="stat-value">5</span>
                                </div>
                            </div>

                            <div className="recent-activity">
                                <h2>Continue Reading</h2>
                                <div className="activity-list">
                                    <div className="activity-item">
                                        <div className="activity-icon read"></div>
                                        <div className="activity-info">
                                            <h4>The Future of Quantum Computing</h4>
                                            <span>Stopped at 45% • Yesterday</span>
                                        </div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="activity-icon read"></div>
                                        <div className="activity-info">
                                            <h4>Global Markets Rally on Tech News</h4>
                                            <span>Stopped at 10% • 2 days ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'subscription' && (
                        <div className="tab-pane">
                            <h1 className="pane-title">Manage Subscription</h1>
                            <div className="subscription-card active-plan">
                                <div className="plan-header">
                                    <div>
                                        <h2>Premium Digital</h2>
                                        <span className="status-badge">Active</span>
                                    </div>
                                    <span className="plan-price">$4.99/mo</span>
                                </div>
                                <ul className="plan-features">
                                    <li>✓ Unlimited access to all articles</li>
                                    <li>✓ Ad-free experience</li>
                                    <li>✓ Exclusive newsletters</li>
                                </ul>
                                <div className="plan-actions">
                                    <button className="manage-btn">Change Plan</button>
                                    <button className="cancel-text">Cancel Subscription</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'saved' && (
                        <div className="tab-pane">
                            <h1 className="pane-title">Saved For Later</h1>
                            <div className="saved-articles-grid">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="saved-article-card">
                                        <div className="saved-img"></div>
                                        <div className="saved-content">
                                            <span className="saved-cat">Technology</span>
                                            <h3>AI breakthroughs in 2026 that change everything</h3>
                                            <button className="remove-saved">Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Account;
