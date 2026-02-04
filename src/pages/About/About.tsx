import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">About NewsWorld</h1>
                <div className="article-meta">
                    <span>The organization and mission behind the free knowledge base</span>
                </div>
            </div>

            <div className="article-body">
                <p className="lead-paragraph">
                    <strong>NewsWorld</strong> is a non-profit project whose mission is to empower and engage people around the world to collect and develop educational content under a free license or in the public domain, and to disseminate it effectively and globally.
                </p>

                <h2>Our Mission</h2>
                <p>The mission of NewsWorld is to provide the world with a reliable, neutral, and comprehensive source of knowledge. We believe that access to information is a fundamental human right and that knowledge should be shared freely and openly.</p>

                <h2>How We Work</h2>
                <p>NewsWorld is built by a global community of volunteers. Anyone with an internet connection can contribute to our articles, provided they follow our community guidelines and maintain a neutral point of view.</p>

                <h3>Core Principles</h3>
                <ul>
                    <li><strong>Neutrality:</strong> We strive to represent all significant views fairly and without bias.</li>
                    <li><strong>Verifiability:</strong> Every piece of information in NewsWorld must be backed by reliable, published sources.</li>
                    <li><strong>No Original Research:</strong> We summarize existing knowledge rather than publishing new, unverified theories.</li>
                    <li><strong>Civility:</strong> Our community members treat each other with respect and work collaboratively.</li>
                </ul>

                <h2>Community and Governance</h2>
                <p>While NewsWorld is supported by a core team of developers and administrators, the content is entirely governed by its community. Peer review, discussion pages, and consensus-building are the cornerstones of our editorial process.</p>
            </div>
        </div>
    );
};

export default About;
