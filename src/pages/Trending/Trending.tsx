import React from 'react';
import { Link } from 'react-router-dom';
import './Trending.css';

const Trending = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Trending Articles</h1>
                <div className="article-meta">
                    <span>Most viewed and updated topics in the last 24 hours</span>
                </div>
            </div>

            <div className="trending-grid">
                <Link to="/trending/ai" className="trending-card">
                    <div className="trending-rank">#1</div>
                    <div className="trending-info">
                        <h3>Artificial Intelligence</h3>
                        <p>Developments in generative AI and large language models continue to dominate global interest.</p>
                        <span className="views">2.4M views today</span>
                    </div>
                </Link>

                <Link to="/trending/climate-change" className="trending-card">
                    <div className="trending-rank">#2</div>
                    <div className="trending-info">
                        <h3>Climate Change</h3>
                        <p>New reports on ocean temperature increases and renewable energy adaptation strategies.</p>
                        <span className="views">1.8M views today</span>
                    </div>
                </Link>

                <Link to="/trending/space-exploration" className="trending-card">
                    <div className="trending-rank">#3</div>
                    <div className="trending-info">
                        <h3>Space Exploration</h3>
                        <p>Updates on Mars rover missions and the deployment of new orbital telescopes.</p>
                        <span className="views">1.5M views today</span>
                    </div>
                </Link>

                <Link to="/trending/quantum-computing" className="trending-card">
                    <div className="trending-rank">#4</div>
                    <div className="trending-info">
                        <h3>Quantum Computing</h3>
                        <p>Significant milestones reached in error correction for quantum processors.</p>
                        <span className="views">1.2M views today</span>
                    </div>
                </Link>
            </div>

            <div className="article-body">
                <h2>Why These Topics?</h2>
                <p>Trending topics are determined by a combination of view counts, edit frequency, and social media engagement. These articles represent the subjects that people are most curious about right now.</p>

                <h2>Recent Sharp Rises</h2>
                <ul>
                    <li><strong>Micro-LED Technology:</strong> Interest has surged following announcements from major display manufacturers.</li>
                    <li><strong>Ancient Silk Road:</strong> New archaeological findings in Central Asia have brought this historical topic back to the forefront.</li>
                    <li><strong>Sustainable Urban Planning:</strong> Cities worldwide are implementing new 'green' initiatives, driving research.</li>
                </ul>
            </div>
        </div>
    );
};

export default Trending;
