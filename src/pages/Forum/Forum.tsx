import React from 'react';
import './Forum.css';

const Forum = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Community Forum</h1>
                <div className="article-meta">
                    <span>Discussion, feedback, and community coordination</span>
                </div>
            </div>

            <div className="forum-container">
                <div className="forum-actions">
                    <button className="new-topic-btn">Start New Discussion</button>
                    <div className="forum-filters">
                        <span className="active">All</span>
                        <span>News</span>
                        <span>Help</span>
                        <span>Proposals</span>
                    </div>
                </div>

                <div className="discussion-list">
                    <div className="discussion-item">
                        <div className="discussion-main">
                            <h3>Proposal: Updating the Technology article structure</h3>
                            <p>Requested by <strong>TechGuru</strong> · 5 hours ago</p>
                        </div>
                        <div className="discussion-stats">
                            <span>12 replies</span>
                            <span>240 views</span>
                        </div>
                    </div>

                    <div className="discussion-item">
                        <div className="discussion-main">
                            <h3>Community Welcome: New members of Feb 2026</h3>
                            <p>Started by <strong>Admin_Wiki</strong> · 1 day ago</p>
                        </div>
                        <div className="discussion-stats">
                            <span>45 replies</span>
                            <span>890 views</span>
                        </div>
                    </div>

                    <div className="discussion-item">
                        <div className="discussion-main">
                            <h3>Bug Report: Search bar not responsive on mobile</h3>
                            <p>Started by <strong>User123</strong> · 2 days ago</p>
                        </div>
                        <div className="discussion-stats">
                            <span>8 replies</span>
                            <span>150 views</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="article-body">
                <h2>Forum Guidelines</h2>
                <ul>
                    <li>Please be polite and respectful to all community members.</li>
                    <li>Use descriptive titles for your discussion topics.</li>
                    <li>Keep discussions relevant to the section they are posted in.</li>
                    <li>Avoid redundancy: Check if a similar topic already exists before posting.</li>
                </ul>
            </div>
        </div>
    );
};

export default Forum;
