import React, { useState } from 'react';
import './ViratKohli.css';

const ViratKohli = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = {
        matches: "558",
        runs: "27,342",
        centuries: "81",
        average: "53.12",
        fifties: "140",
        topScore: "254*"
    };

    const news = [
        {
            id: 1,
            title: "Kohli scripts history with 81st International Century against England",
            date: "Nov 15, 2025",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Virat_Kohli_batting_2018.jpg",
            excerpt: "In a masterclass at Lord's, Virat Kohli surpassed another milestone, guiding India to a memorable victory with an unbeaten 112."
        },
        {
            id: 2,
            title: "Virat Kohli's Diet and Training Regimen Revealed",
            date: "Oct 28, 2025",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
            excerpt: "How the fitness icon maintains peak performance at the highest level of cricket."
        },
        {
            id: 3,
            title: "RCB retains Kohli for record sum ahead of 2026 IPL Auction",
            date: "Dec 05, 2025",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Virat_Kohli_fielding_IPL_2013.jpg",
            excerpt: "Royal Challengers Bangalore make their intentions clear by securing their talisman for another season as they hunt for the elusive trophy."
        },
        {
            id: 4,
            title: "Interview: 'My hunger for runs is same as it was in 2008'",
            date: "Jan 10, 2026",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Virat_Kohli_at_New_Delhi.jpg",
            excerpt: "In an exclusive chat with NewsWorld, Virat opens up about longevity, family life, and his plans for the upcoming T20 World Cup."
        },
        {
            id: 5,
            title: "Analysis: How Kohli adapted his technique against spin in 2025",
            date: "Nov 20, 2025",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
            excerpt: "Cricket experts breakdown the subtle changes in his stance that led to a resurgence of dominance on turning tracks."
        },
        {
            id: 6,
            title: "Viral Video: Kohli gifting his bat to young fan wins internet",
            date: "Jan 02, 2026",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli_batting_2013.jpg",
            excerpt: "A heartwarming moment from the Eden Gardens stands goes viral as Kohli makes a young fan's dream come true."
        }
    ];

    const history = [
        { year: "1988", event: "Born in Delhi, India on November 5." },
        { year: "2006", event: "Played crucial Ranji Trophy match for Delhi day after father's death, scoring 90." },
        { year: "2008", event: "Captained India to victory in U-19 World Cup; Made ODI debut vs Sri Lanka." },
        { year: "2011", event: "Won ICC Cricket World Cup with India; Test debut vs West Indies." },
        { year: "2012", event: "Vice-Captain of ODI team; ICC ODI Player of the Year." },
        { year: "2013", event: "Won ICC Champions Trophy." },
        { year: "2014", event: "Appointed Test Captain after Dhoni's retirement." },
        { year: "2017", event: "Appointed Captain for all formats." },
        { year: "2018", event: "Swept ICC Awards: Cricketer of the Year, Test Player, and ODI Player." },
        { year: "2023", event: "Broke Tendulkar's record for most ODI centuries (50) during World Cup." },
        { year: "2024", event: "Won T20 World Cup; Retired from T20 Internationals." },
        { year: "2025", event: "Surpassed 27,000 international runs; Lead India to WTC Finals." }
    ];

    return (
        <div className="kohli-page">
            {/* Hero Section */}
            <div className="kohli-hero">
                <div className="hero-content">
                    <span className="hero-tag">Cricket Legend</span>
                    <h1>Virat Kohli</h1>
                    <p>The "King" of modern cricket, former Indian captain, and a global sporting icon.</p>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="kohli-nav">
                <button
                    className={activeTab === 'overview' ? 'active' : ''}
                    onClick={() => setActiveTab('overview')}
                >
                    Latest News
                </button>
                <button
                    className={activeTab === 'stats' ? 'active' : ''}
                    onClick={() => setActiveTab('stats')}
                >
                    Career Stats
                </button>
                <button
                    className={activeTab === 'bio' ? 'active' : ''}
                    onClick={() => setActiveTab('bio')}
                >
                    Biography
                </button>
            </div>

            <div className="kohli-container">
                {activeTab === 'overview' && (
                    <div className="news-grid">
                        {news.map(item => (
                            <div key={item.id} className="news-card">
                                <div className="news-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                                <div className="news-info">
                                    <span className="news-date">{item.date}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.excerpt}</p>
                                    <button className="read-more">Read Full Story</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'stats' && (
                    <div className="stats-section">
                        <h2>Career Highlights</h2>
                        <div className="stats-cards">
                            <div className="stat-box">
                                <h3>{stats.matches}</h3>
                                <p>Matches Played</p>
                            </div>
                            <div className="stat-box">
                                <h3>{stats.runs}</h3>
                                <p>Total Runs</p>
                            </div>
                            <div className="stat-box">
                                <h3>{stats.centuries}</h3>
                                <p>Centuries</p>
                            </div>
                            <div className="stat-box">
                                <h3>{stats.average}</h3>
                                <p>Batting Avg</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'bio' && (
                    <div className="bio-section">
                        <h2>The Journey</h2>
                        <div className="timeline">
                            {history.map((item, idx) => (
                                <div key={idx} className="timeline-item">
                                    <div className="year">{item.year}</div>
                                    <div className="event">{item.event}</div>
                                </div>
                            ))}
                        </div>
                        <div className="bio-text">
                            <p>Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He currently plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Widely regarded as one of the greatest batter of all time.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViratKohli;
