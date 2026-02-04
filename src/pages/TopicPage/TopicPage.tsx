import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './TopicPage.css';

// Using lorem ipsum for demo content, but structure mimics a real news feed
const TopicPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const [topicName, setTopicName] = useState('');

    useEffect(() => {
        let currentTopic = '';

        if (slug) {
            currentTopic = slug;
        } else {
            // Determine topic from the pathname (e.g., "/world" -> "world")
            const path = location.pathname.substring(1); // remove leading slash
            currentTopic = path;
        }

        // Convert slug/path to readable title (e.g., "climate-change" -> "Climate Change")
        const formatted = currentTopic
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        setTopicName(formatted);
    }, [slug, location.pathname]);

    // Generate MORE pseudo-random articles to satisfy "dher sare content"
    const articles = Array.from({ length: 24 }).map((_, idx) => ({
        id: idx,
        title: `${topicName} Watch: Significant Global Event #2026-${idx + 300} - Key Developments`,
        excerpt: `Breaking news regarding ${topicName}. Our correspondents on the ground report major shifts in the ongoing narrative. Experts from the International Council weigh in on what this means for the future.`,
        author: ['Sarah Jenkins', 'Marcus Vane', 'Dr. Aris Thorne', 'Elena Rodriguez', 'David Kim', 'Priya Singh'][idx % 6],
        time: `${idx + 1} hours ago`,
        imageColor: ['#1e40af', '#166534', '#b91c1c', '#7e22ce', '#c2410c', '#0f172a'][idx % 6]
    }));

    return (
        <div className="topic-page">
            <header className="topic-header">
                <span className="topic-breadcrumb">Home / Topics / {topicName}</span>
                <h1>{topicName}</h1>
                <p className="topic-description">
                    Comprehensive coverage, analysis, and exclusive reports on {topicName}.
                    Follow this page for the latest updates, expert opinions, and in-depth stories.
                </p>
                <button className="follow-btn">Follow {topicName}</button>
            </header>

            <div className="topic-content-grid">
                {/* Main Feed */}
                <div className="topic-feed">
                    {articles.map((article) => (
                        <div key={article.id} className="topic-article-card">
                            <div className="topic-article-image" style={{ backgroundColor: article.imageColor }}></div>
                            <div className="topic-article-info">
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <div className="topic-meta">
                                    <span className="author">By {article.author}</span>
                                    <span className="dot">•</span>
                                    <span className="time">{article.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <aside className="topic-sidebar">
                    <div className="sidebar-widget">
                        <h3>Popular in {topicName}</h3>
                        <ol>
                            <li>Top 5 reasons why {topicName} is trending</li>
                            <li>Interview: The future of {topicName} explained</li>
                            <li>Video: A timeline of recent events</li>
                            <li>Analysis: What the data says about {topicName}</li>
                        </ol>
                    </div>

                    <div className="sidebar-widget newsletter-widget">
                        <h3>{topicName} Weekly</h3>
                        <p>Get the best stories delivered to your inbox.</p>
                        <input type="email" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default TopicPage;
