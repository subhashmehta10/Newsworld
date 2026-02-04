import './Politics.css';

const Politics = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <div className="article-badge">SPECIAL REPORT</div>
                <h1 className="article-title">Global Politics in 2026</h1>
                <div className="article-meta">
                    <span className="author">By Jonathan Reed</span>
                    <span className="dot">•</span>
                    <span className="date">February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <div className="article-hero-image">
                        <div className="image-caption">World leaders gathered for the Global Governance Summit in Geneva, facing unprecedented challenges in digital sovereignty and climate migration.</div>
                    </div>

                    <p className="lead-paragraph">
                        As we enter the mid-2020s, the landscape of <strong>Global Politics</strong> is undergoing its most significant transformation since the end of the Cold War. The traditional power structures are being challenged by the rise of digital-first nations, decentralized governance models, and the urgent necessity of planetary-scale cooperation.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Inside this Report</div>
                        <ul>
                            <li><a href="#digital-sovereignty">1. The Rise of Digital Sovereignty</a></li>
                            <li><a href="#climate-geopolitics">2. Climate Geopolitics</a></li>
                            <li><a href="#polarization">3. Addressing Social Polarization</a></li>
                            <li><a href="#future-forecast">4. 2030 Political Forecast</a></li>
                        </ul>
                    </div>

                    <h2 id="digital-sovereignty">The Rise of Digital Sovereignty</h2>
                    <p>
                        In 2026, many nations have begun to treat their digital infrastructure with the same importance as physical borders. The concept of "Digital Sovereignty" has moved from a theoretical debate to a core pillar of national defense. Large-scale cloud clusters and state-sponsored fiber networks are now the primary assets in geopolitical negotiations.
                    </p>
                    <p>
                        "A nation that does not own its data does not own its future," stated the representative of the European Digital Alliance during the recent summit. This sentiment is driving a new wave of localized technology production and data protection laws that are reshaping trade agreements globally.
                    </p>

                    <h2 id="climate-geopolitics">Climate Geopolitics</h2>
                    <p>
                        Environmental policy has evolved from domestic regulation into the primary driver of international relations. The "Green Tier" of countries—those achieving net-zero ahead of schedule—are now exerting significant economic influence over their neighbors through carbon tariffs and technological leverage.
                    </p>

                    <div className="article-quote">
                        "The geography of power is being redrawn by the geography of renewables."
                        <span>— Dr. Elena Voss, Geopolitical Analyst</span>
                    </div>

                    <h2 id="polarization">Addressing Social Polarization</h2>
                    <p>
                        Domestic politics in many democracies remains focused on bridging the divide created by algorithmic social structures. New experiments in "Quadratic Voting" and "Digital Town Halls" are being tested in several countries to see if technology can help heal the fractures it helped create.
                    </p>

                    <div className="references-section">
                        <h2>References & Further Reading</h2>
                        <ol>
                            <li>The Journal of Digital Diplomacy, Vol 12, Issue 4.</li>
                            <li>Global Governance Review: The Geneva Protocols (2025).</li>
                            <li>Voss, E. (2026). The Renewable Frontier. New Haven Press.</li>
                        </ol>
                    </div>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Politics Dashboard</div>
                    <div className="infobox-stat">
                        <span className="stat-label">Global Stability Index</span>
                        <span className="stat-value">6.4 / 10</span>
                        <div className="stat-trend down">▼ 0.2 from 2025</div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Primary Conflict</th>
                                <td>Resource Scarcity</td>
                            </tr>
                            <tr>
                                <th>Top Alliance</th>
                                <td>Green Tech Bloc</td>
                            </tr>
                            <tr>
                                <th>Rising Power</th>
                                <td>Decentralized City-States</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default Politics;
