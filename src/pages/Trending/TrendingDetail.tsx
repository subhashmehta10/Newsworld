import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { trendingData } from '../../data/trendingData';
import './TrendingDetail.css';

const TrendingDetail = () => {
    const { slug } = useParams();
    const article = trendingData.find(item => item.slug === slug);

    if (!article) {
        return (
            <div className="trending-not-found">
                <h2>Article not found</h2>
                <Link to="/" className="back-home-btn">Go Back Home</Link>
            </div>
        );
    }

    // Generate a random gradient based on the ID for the hero background
    const getGradient = (id: string) => {
        const colors = [
            'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
            'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
            'linear-gradient(135deg, #7c2d12 0%, #f97316 100%)',
            'linear-gradient(135deg, #4c1d95 0%, #8b5cf6 100%)',
            'linear-gradient(135deg, #831843 0%, #ec4899 100%)'
        ];
        return colors[parseInt(id) % colors.length];
    };

    return (
        <div className="trending-detail-page">
            <div className="trending-hero" style={{ background: getGradient(article.id) }}>
                <div className="trending-hero-content">
                    <span className="trending-category">{article.category}</span>
                    <h1>{article.title}</h1>
                    <div className="trending-meta">
                        <span>By {article.author}</span>
                        <span className="dot">•</span>
                        <span>{article.date}</span>
                    </div>
                </div>
            </div>

            <div className="trending-container">
                <article className="trending-article">
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                </article>

                <aside className="trending-sidebar">
                    <h3>More Trending Topics</h3>
                    <ul>
                        {trendingData.filter(item => item.slug !== slug).slice(0, 5).map(item => (
                            <li key={item.id}>
                                <Link to={`/trending/${item.slug}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default TrendingDetail;
