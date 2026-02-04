import './Economy.css';

const Economy = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <div className="article-badge">MARKETS & TRENDS</div>
                <h1 className="article-title">The New Economic Paradigm</h1>
                <div className="article-meta">
                    <span className="author">By Marcus Sterling</span>
                    <span className="dot">•</span>
                    <span className="date">February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        Global <strong>Economy</strong> is currently navigating through a "Perfect Storm" of automation, central bank digital currencies (CBDCs), and the total integration of sustainability metrics into core financial reporting.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Financial Analysis</div>
                        <ul>
                            <li><a href="#digital-finance">1. The Digital Finance Revolution</a></li>
                            <li><a href="#circular-economy">2. Transitioning to Circularity</a></li>
                            <li><a href="#labor-market">3. The Future of Labor</a></li>
                            <li><a href="#gdp-alternatives">4. Beyond GDP</a></li>
                        </ul>
                    </div>

                    <h2 id="digital-finance">The Digital Finance Revolution</h2>
                    <p>
                        As of early 2026, over 40 countries have fully integrated Central Bank Digital Currencies into their commercial banking systems. This shift has eliminated traditional transaction delays and opened up micro-lending opportunities to billions of previously unbanked individuals.
                    </p>

                    <h2 id="circular-economy">Transitioning to Circularity</h2>
                    <p>
                        Investment firms are now prioritizing "Circular Economy" business models—where waste is designed out of the system. Traditional linear models (extract, make, dispose) are facing higher capital costs as global carbon taxes begin to hit supply chains.
                    </p>

                    <h2 id="labor-market">The Future of Labor</h2>
                    <p>
                        The "Great Automation" of the mid-2020s has shifted the focus from job quantity to work quality. Soft skills like emotional intelligence, complex problem-solving, and creative synthesis are now the most valuable assets in the global labor market.
                    </p>

                    <div className="references-section">
                        <h2>Economic Sources</h2>
                        <ol>
                            <li>IMF Global Economic Outlook, Jan 2026.</li>
                            <li>The Circular Wealth Report, 2025 Edition.</li>
                            <li>Sterling, M. (2026). The Alchemy of Bits. Nexus Finance.</li>
                        </ol>
                    </div>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Economic Indicators</div>
                    <div className="infobox-stat">
                        <span className="stat-label">Global GDP Growth</span>
                        <span className="stat-value">3.2%</span>
                        <div className="stat-trend up">▲ 0.4% from Q4</div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Top Asset</th>
                                <td>Energy Credits</td>
                            </tr>
                            <tr>
                                <th>Top Market</th>
                                <td>Southeast Asia Hub</td>
                            </tr>
                            <tr>
                                <th>Inflation Rate</th>
                                <td>2.1% (Avg)</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default Economy;
