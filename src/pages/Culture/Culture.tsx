import './Culture.css';

const Culture = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <div className="article-badge">ARTS & SOCIETY</div>
                <h1 className="article-title">The Digital Renaissance of 2026</h1>
                <div className="article-meta">
                    <span className="author">By Elena Rodriguez</span>
                    <span className="dot">•</span>
                    <span className="date">February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        Human <strong>Culture</strong> is experiencing a massive shift as traditional arts merge with generative AI, and virtual spaces become the new galleries of the 21st century. We are witnessing a global remix of heritage and high-tech.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Cultural Trends</div>
                        <ul>
                            <li><a href="#digital-art">1. The Generative Art Movement</a></li>
                            <li><a href="#virtual-society">2. Society in the Metaverse</a></li>
                            <li><a href="#heritage">3. Digital Preservation of Heritage</a></li>
                            <li><a href="#future-creativity">4. Defining Human Creativity</a></li>
                        </ul>
                    </div>

                    <h2 id="digital-art">The Generative Art Movement</h2>
                    <p>
                        The distinction between "human-made" and "AI-assisted" art has blurred, leading to a new aesthetic characterized by high-dimensional patterns and impossible geometries. Artists are now curators of complex systems, guiding algorithms to explore new creative territories.
                    </p>

                    <h2 id="virtual-society">Society in the Metaverse</h2>
                    <p>
                        Social interactions have moved beyond the flat screens of the previous decade. Virtual communities now host their own festivals, economies, and legal structures, creating a parallel cultural identity for millions of digital citizens.
                    </p>

                    <div className="article-quote">
                        "Art is not just what we see, it is the bridge between human intent and machine possibility."
                        <span>— Elena Rodriguez, Cultural Critic</span>
                    </div>

                    <h2 id="heritage">Digital Preservation of Heritage</h2>
                    <p>
                        Using high-resolution lidar and 3D scanning, cultural organizations are building "Digital Twins" of endangered historic sites, ensuring that human history remains accessible even if physical structures are lost.
                    </p>

                    <div className="references-section">
                        <h2>Cultural Archives</h2>
                        <ol>
                            <li>The Digital Arts Manifesto, 2026.</li>
                            <li>Global Society Review: Virtual Communities.</li>
                            <li>Rodriguez, E. (2025). The Virtual Vibe. Avant Press.</li>
                        </ol>
                    </div>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Cultural Pulse</div>
                    <div className="infobox-stat">
                        <span className="stat-label">Digital Art Adoption</span>
                        <span className="stat-value">62%</span>
                        <div className="stat-trend up">▲ 15% from 2025</div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Top Trend</th>
                                <td>Post-AI Realism</td>
                            </tr>
                            <tr>
                                <th>Next Gen Hub</th>
                                <td>Creative Sprints</td>
                            </tr>
                            <tr>
                                <th>Global Event</th>
                                <td>Meta-Expo 2026</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default Culture;
