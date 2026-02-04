import { Link } from 'react-router-dom';
import './Home.css';
import { trendingData } from '../../data/trendingData';

// Import images
import quantumImg from '../../assets/news/quantum.png';
import aiImg from '../../assets/news/ai.png';
import climateImg from '../../assets/news/climate.png';

const Home = () => {

    const topStories = [
        {
            id: 1,
            title: "Quantum Computing Reaches 'Nirvana' Point",
            excerpt: "Researchers at the Global Quantum Initiative have achieved stable error correction, paving the way for practical quantum supremacy.",
            author: "Dr. Aris Thorne",
            date: "Feb 4, 2026",
            category: "Technology",
            image: quantumImg,
            link: "/trending/quantum-computing"
        },
        {
            id: 2,
            title: "The Silent Rise of Artificial General Intelligence",
            excerpt: "New benchmarks suggest that the latest neural models are beginning to exhibit cross-domain reasoning once thought impossible.",
            author: "Sarah Jenkins",
            date: "Feb 3, 2026",
            category: "AI",
            image: aiImg,
            link: "/trending/ai"
        },
        {
            id: 3,
            title: "Global South Leads the Green Revolution",
            excerpt: "Surprising data shows developing nations are adopting solar and wind technologies at twice the speed of the G7.",
            author: "Marcus Vane",
            date: "Feb 2, 2026",
            category: "Environment",
            image: climateImg,
            link: "/trending/climate-change"
        }
    ];

    const categories = [
        { name: "Politics", color: "#e11d48" },
        { name: "Technology", color: "#2563eb" },
        { name: "Science", color: "#059669" },
        { name: "Economy", color: "#d97706" },
        { name: "Health", color: "#7c3aed" },
        { name: "Culture", color: "#db2777" }
    ];

    const latestArticles = [
        {
            title: "The Forgotten History of Silk Road Cities",
            author: "Elena Rodriguez",
            time: "2 hours ago",
            category: "History"
        },
        {
            title: "Future of Urban Farming in Tokyo",
            author: "Kenji Sato",
            time: "4 hours ago",
            category: "Sustainability"
        },
        {
            title: "Understanding the New Crypto Regulations",
            author: "David Miller",
            time: "5 hours ago",
            category: "Finance"
        },
        {
            title: "Space Exploration: Next Decade's Goals",
            author: "Dr. Lora Vance",
            time: "7 hours ago",
            category: "Space"
        }
    ];

    const deepDiveArticles = [
        {
            id: 1,
            title: "The Neuro-Link Revolution: Connecting Minds",
            excerpt: "As brain-computer interfaces move from science fiction to reality, we explore the ethical and societal implications of a connected humanity.",
            image: aiImg,
            category: "Technology"
        },
        {
            id: 2,
            title: "Mars: The First 100 Days of Settlement",
            excerpt: "Exclusive report from the Alpha Base. How the first settlers are coping with the harsh environment and psychological isolation.",
            image: quantumImg,
            category: "Space"
        },
        {
            id: 3,
            title: "Crypto-Economics in the Post-Fiat Era",
            excerpt: "With national currencies fluctuating, decentralized finance is becoming the new standard for international trade.",
            image: quantumImg,
            category: "Economy"
        },
        {
            id: 4,
            title: "Rewilding the Amazon: A Global Effort",
            excerpt: "How a coalition of nations and indigenous tribes are successfully restoring the lungs of the Earth.",
            image: climateImg,
            category: "Environment"
        }
    ];

    const worldFocusData = {
        tech: [
            { title: "New battery tech doubles EV range", date: "FEB 4" },
            { title: "AI judges now legal in small claims courts", date: "FEB 3" },
            { title: "Apple unveils holographic iPhone 18", date: "FEB 1" }
        ],
        economy: [
            { title: "Asian markets rally on chip news", date: "FEB 4" },
            { title: "Oil prices drop as fusion goes online", date: "FEB 4" },
            { title: "Global trade pact signed in Geneva", date: "FEB 2" }
        ],
        culture: [
            { title: "Digital art sales surpass traditional", date: "JAN 30" },
            { title: "The rise of neo-classical architecture", date: "JAN 28" },
            { title: "Virtual concerts: The new normal?", date: "JAN 25" }
        ]
    };

    const mustReadArticles = [
        { title: "How to survive a digital blackout", image: climateImg },
        { title: "The best books of 2026 so far", image: aiImg },
        { title: "Interview: The woman who stopped time", image: quantumImg },
        { title: "Cooking with synthetic proteins", image: climateImg }
    ];

    return (
        <div className="home-container">
            {/* Breaking News Ticker */}
            <div className="ticker-wrap">
                <div className="ticker-label">BREAKING</div>
                <div className="ticker">
                    <div className="ticker-item">SpaceX successfully lands Starship on Mars base • </div>
                    <div className="ticker-item">Global stock markets reach all-time highs • </div>
                    <div className="ticker-item">New AI safety regulations passed by International Council • </div>
                    <div className="ticker-item">Breakthrough in fusion energy efficiency reported • </div>
                </div>
            </div>

            {/* Hero Section */}
            <header className="home-header">
                <div className="header-top">
                    <h1 className="main-logo-text">The NewsWorld Times</h1>
                    <div className="header-meta">
                        <span>Tuesday, February 4, 2026</span>
                        <span>Edition: Global Digital</span>
                    </div>
                </div>

                <nav className="category-nav">
                    {categories.map(cat => (
                        <Link key={cat.name} to={`/${cat.name.toLowerCase()}`}>{cat.name}</Link>
                    ))}
                </nav>
            </header>

            <main className="home-grid">
                {/* Left Column: Top Stories */}
                <div className="main-content">
                    <section className="hero-story">
                        <Link to={topStories[0].link} className="hero-card">
                            <div className="hero-image-wrap">
                                <img src={topStories[0].image} alt={topStories[0].title} />
                                <span className="cat-tag" style={{ backgroundColor: '#2563eb' }}>{topStories[0].category}</span>
                            </div>
                            <div className="hero-content">
                                <h2>{topStories[0].title}</h2>
                                <p>{topStories[0].excerpt}</p>
                                <div className="article-meta">
                                    <span className="author">By {topStories[0].author}</span>
                                    <span className="dot">•</span>
                                    <span className="date">{topStories[0].date}</span>
                                </div>
                            </div>
                        </Link>
                    </section>

                    <section className="secondary-stories">
                        {topStories.slice(1).map(story => (
                            <Link to={story.link} key={story.id} className="secondary-card">
                                <img src={story.image} alt={story.title} />
                                <div className="card-content">
                                    <span className="cat-text" style={{ color: '#2563eb' }}>{story.category}</span>
                                    <h3>{story.title}</h3>
                                    <div className="article-meta">
                                        <span>{story.author}</span>
                                        <span>•</span>
                                        <span>{story.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </section>

                    <section className="opinion-section">
                        <div className="section-title">
                            <h3>Editor's Picks</h3>
                            <div className="title-line"></div>
                        </div>
                        <div className="opinion-grid">
                            <div className="opinion-item">
                                <h4>Why we should stop fearing AGI and start building it</h4>
                                <span>Opinion | Dr. Aris Thorne</span>
                            </div>
                            <div className="opinion-item">
                                <h4>The beauty of decentralized knowledge bases</h4>
                                <span>Opinion | Sarah Jenkins</span>
                            </div>
                            <div className="opinion-item">
                                <h4>How the digital world is reshaping our physical reality</h4>
                                <span>Opinion | Marcus Vane</span>
                            </div>
                        </div>
                    </section>

                    {/* Deep Dive Section */}
                    <section className="deep-dive-section">
                        <div className="section-title">
                            <h3>Deep Dive</h3>
                            <div className="title-line"></div>
                        </div>
                        <div className="deep-dive-grid">
                            {deepDiveArticles.map(article => (
                                <Link to="#" key={article.id} className="deep-dive-card">
                                    <div className="deep-dive-img-wrap">
                                        <img src={article.image} alt={article.title} />
                                        <span className="cat-tag" style={{ backgroundColor: '#000' }}>{article.category}</span>
                                    </div>
                                    <div className="deep-dive-content">
                                        <h3>{article.title}</h3>
                                        <p className="deep-dive-excerpt">{article.excerpt}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* World Focus Section */}
                    <section className="world-focus-section">
                        <div className="section-title">
                            <h3>World in Focus</h3>
                            <div className="title-line"></div>
                        </div>
                        <div className="focus-grid">
                            <div className="focus-column">
                                <h4>Technology</h4>
                                {worldFocusData.tech.map((item, idx) => (
                                    <Link to="#" key={idx} className="focus-item">
                                        <div>
                                            <h5>{item.title}</h5>
                                            <span className="focus-date">{item.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="focus-column">
                                <h4>Economy</h4>
                                {worldFocusData.economy.map((item, idx) => (
                                    <Link to="#" key={idx} className="focus-item">
                                        <div>
                                            <h5>{item.title}</h5>
                                            <span className="focus-date">{item.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="focus-column">
                                <h4>Culture</h4>
                                {worldFocusData.culture.map((item, idx) => (
                                    <Link to="#" key={idx} className="focus-item">
                                        <div>
                                            <h5>{item.title}</h5>
                                            <span className="focus-date">{item.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Must Read Section */}
                    <section className="must-read-section">
                        <div className="section-title">
                            <h3>Weekend Must Reads</h3>
                            <div className="title-line"></div>
                        </div>
                        <div className="must-read-grid">
                            {mustReadArticles.map((article, idx) => (
                                <Link to="#" key={idx} className="must-read-card">
                                    <img src={article.image} alt={article.title} />
                                    <div className="must-read-content">
                                        <h4>{article.title}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Sidebars */}
                <aside className="home-sidebar">
                    <div className="sidebar-section trending">
                        <h3>Trending Right Now</h3>
                        <ul>
                            {trendingData.slice(0, 15).map((news, idx) => (
                                <li key={news.id}>
                                    <span className="trend-num">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                    <Link to={`/trending/${news.slug}`}>{news.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-section newsletter">
                        <h3>Morning Briefing</h3>
                        <p>Get the world's most important knowledge delivered to your inbox every morning.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="email@example.com" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div className="sidebar-section latest">
                        <h3>Latest Updates</h3>
                        <div className="latest-list">
                            {latestArticles.map((art, idx) => (
                                <div key={idx} className="latest-item">
                                    <span className="latest-cat">{art.category}</span>
                                    <h4>{art.title}</h4>
                                    <div className="latest-meta">
                                        <span>{art.author}</span>
                                        <span>{art.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </main>

            {/* Bottom Section: Categories */}
            <section className="category-section">
                <div className="section-title">
                    <h3>Explore by Category</h3>
                </div>
                <div className="cat-grid">
                    {categories.map(cat => (
                        <div key={cat.name} className="cat-card" style={{ borderTop: `4px solid ${cat.color}` }}>
                            <h4>{cat.name}</h4>
                            <ul>
                                <li>The latest in {cat.name} policies</li>
                                <li>Top researchers join {cat.name} forum</li>
                                <li>Why {cat.name} matters in 2026</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
