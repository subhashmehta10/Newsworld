import React from 'react';
import './Technology.css';

const Technology = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <div className="article-badge">TECHNOLOGY & FUTURE</div>
                <h1 className="article-title">The State of Technology 2026</h1>
                <div className="article-meta">
                    <span className="author">By Sarah Jenkins</span>
                    <span className="dot">•</span>
                    <span className="date">February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Technology</strong> has transcended its role as a toolset to become the primary environment in which human life takes place. From hyper-connected cities to neural interfaces, we are witnessing the seamless integration of biology and silicon.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Tech Frontiers</div>
                        <ul>
                            <li><a href="#definition">1. Definition and Usage</a></li>
                            <li><a href="#history">2. History of Innovation</a></li>
                            <li><a href="#ethics">3. Digital Ethics</a></li>
                            <li><a href="#future">4. Future Trends</a></li>
                        </ul>
                    </div>

                    <h2 id="definition">Definition and Usage</h2>
                    <p>
                        The word "technology" is evolving. In 2026, it no longer just implies hardware or software but "cognitive-ware"—systems that think, learn, and adapt alongside their human counterparts. It implies a symbiotic relationship between user and tool.
                    </p>

                    <h2 id="history">History of Innovation</h2>
                    <p>
                        From the stone tools of the Paleolithic era to the Quantum Processors of today, the history of technology is the history of human capability expansion. The acceleration of this timeline has been exponential, with the last 5 years producing more data than all previous history combined.
                    </p>

                    <h2 id="ethics">Digital Ethics</h2>
                    <p>
                        As algorithms make more life-altering decisions, the field of "Technological Ethics" has become critical. We find ourselves asking not just what we *can* build, but what we *should* build to preserve human agency in an automated world.
                    </p>

                    <h2 id="future">Future Trends</h2>
                    <p>
                        We stand on the precipice of the "Post-Screen Era," where information is overlaid directly onto reality via AR and neural links. The boundary between the physical and digital worlds will effectively dissolve by 2030.
                    </p>

                    <div className="references-section">
                        <h2>Tech Sources</h2>
                        <ol>
                            <li>MIT Technology Review, Vol 154.</li>
                            <li>Jenkins, S. (2025). The Synaptic Web. Future Press.</li>
                            <li>Global Innovation Index Report 2026.</li>
                        </ol>
                    </div>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Tech Sector Pulse</div>
                    <div className="infobox-stat">
                        <span className="stat-label">Global R&D Spend</span>
                        <span className="stat-value">$3.8T</span>
                        <div className="stat-trend up">▲ 8.1% YOY</div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Top Sector</th>
                                <td>Quantum Computing</td>
                            </tr>
                            <tr>
                                <th>Key Driver</th>
                                <td>AI Alignment</td>
                            </tr>
                            <tr>
                                <th>Major Shift</th>
                                <td>Post-Silicon Chips</td>
                            </tr>
                            <tr>
                                <th>Adoption Rate</th>
                                <td>94% (Global Internet)</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default Technology;
