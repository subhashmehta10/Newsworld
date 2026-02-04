import React from 'react';
import './Science.css';

const Science = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <div className="article-badge">SCIENCE & DISCOVERY</div>
                <h1 className="article-title">Frontiers of Science</h1>
                <div className="article-meta">
                    <span className="author">By Dr. Alan Grant</span>
                    <span className="dot">•</span>
                    <span className="date">February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Science</strong> remains the candle in the dark—our systematic enterprise to build and organize knowledge in the form of testable explanations. In this decade, we are seeing the unification of macro-physics and quantum mechanics closer than ever before.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Scientific Study</div>
                        <ul>
                            <li><a href="#branches">1. Major Branches</a></li>
                            <li><a href="#method">2. The New Scientific Method</a></li>
                            <li><a href="#cosmos">3. Understanding the Cosmos</a></li>
                            <li><a href="#society">4. Science in Society</a></li>
                        </ul>
                    </div>

                    <h2 id="branches">Major Branches</h2>
                    <p>
                        Modern science has expanded beyond the traditional trio of Natural, Social, and Formal sciences. We now recognize "Computational Science" and "Complexity Science" as distinct pillars, essential for understanding systems too complex for analytical reductionism.
                    </p>

                    <h2 id="method">The New Scientific Method</h2>
                    <p>
                        While observation and hypothesis remain core, AI-driven simulations allow us to run millions of virtual experiments in seconds. This "High-Throughput Science" is accelerating discovery rates in materials science and pharmacology by orders of magnitude.
                    </p>

                    <h2 id="cosmos">Understanding the Cosmos</h2>
                    <p>
                        With the deployment of the Lunar Far-Side Telescope array, we are peering back to the "Dark Ages" of the universe before the first stars ignited. These observations are challenging our fundamental understanding of dark matter and energy.
                    </p>

                    <h2 id="society">Science in Society</h2>
                    <p>
                        Science is not just for the lab. It is a way of thinking—a skepticism of authority and a reliance on evidence. In an age of misinformation, scientific literacy is the most effective vaccine against deception.
                    </p>

                    <div className="references-section">
                        <h2>References</h2>
                        <ol>
                            <li>Nature: The Next 100 Years of Science.</li>
                            <li>Grant, A. (2025). The Evidence Based World. Oxford Press.</li>
                            <li>The Royal Society Journals, 2026 Archive.</li>
                        </ol>
                    </div>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Scientific Index</div>
                    <div className="infobox-stat">
                        <span className="stat-label">Paper Output</span>
                        <span className="stat-value">4.2M</span>
                        <div className="stat-trend up">▲ 3.5% (Preprints)</div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Primary Focus</th>
                                <td>Unified Theory</td>
                            </tr>
                            <tr>
                                <th>Key Method</th>
                                <td>AI Simulation</td>
                            </tr>
                            <tr>
                                <th>Breakthrough</th>
                                <td>Room-Temp Superconductors</td>
                            </tr>
                            <tr>
                                <th>Global Collab</th>
                                <td>Level 5 (Max)</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default Science;
