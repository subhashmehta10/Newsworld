import './Health.css';

const Health = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <div className="article-badge">HEALTH & WELLNESS</div>
                <h1 className="article-title">Longevity and the Bio-Revolution</h1>
                <div className="article-meta">
                    <span className="author">Dr. Sarah Chen</span>
                    <span className="dot">•</span>
                    <span className="date">February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        In 2026, <strong>Health</strong> is no longer just about curing disease—it is about optimizing the human biological system through personalized genomics, AI-driven diagnostics, and the convergence of technology and biology.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Medical Frontiers</div>
                        <ul>
                            <li><a href="#genomic-medicine">1. Genomic Medicine</a></li>
                            <li><a href="#mental-health">2. The Mental Health Renaissance</a></li>
                            <li><a href="#preventative">3. Proactive Preventative Care</a></li>
                            <li><a href="#bio-ethics">4. Ethics of Enhancement</a></li>
                        </ul>
                    </div>

                    <h2 id="genomic-medicine">Genomic Medicine</h2>
                    <p>
                        The drop in sequencing costs has allowed genomic medicine to become part of standard primary care. Doctors can now prescribe medications based on an individual's specific metabolic profile, virtually eliminating adverse drug reactions.
                    </p>

                    <h2 id="mental-health">The Mental Health Renaissance</h2>
                    <p>
                        2026 marks a turning point in mental health awareness. New digital therapies and a deeper understanding of the gut-brain axis have provided new tools for managing stress and anxiety in an increasingly complex world.
                    </p>

                    <div className="article-quote">
                        "We are moving from a 'sick-care' system to a 'well-care' ecosystem."
                        <span>— Dr. Sarah Chen, Chief Medical Officer</span>
                    </div>

                    <h2 id="preventative">Proactive Preventative Care</h2>
                    <p>
                        Wearable technology now monitors over 50 biological markers in real-time, alerting users and their clinicians to potential health issues weeks—or even months—before symptoms appear.
                    </p>

                    <div className="references-section">
                        <h2>Medical Journals</h2>
                        <ol>
                            <li>The Lancet: The Bio-Digital Frontier 2026.</li>
                            <li>Journal of Genomic Medicine: Case Studies in Longevity.</li>
                            <li>Chen, S. (2025). The Optimized Self. Wellspring Press.</li>
                        </ol>
                    </div>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Vital Stats 2026</div>
                    <div className="infobox-stat">
                        <span className="stat-label">Avg Life Expectancy</span>
                        <span className="stat-value">84.2 Years</span>
                        <div className="stat-trend up">▲ 1.1 Year from 2024</div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Top Innovation</th>
                                <td>mRNA Cancer Vaccines</td>
                            </tr>
                            <tr>
                                <th>Focus Area</th>
                                <td>Personalized Nutrition</td>
                            </tr>
                            <tr>
                                <th>Global Challenge</th>
                                <td>Aging Populations</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default Health;
