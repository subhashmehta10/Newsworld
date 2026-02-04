import React from 'react';
import './Geography.css';

const Geography = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Geography</h1>
                <div className="article-meta">
                    <span>The study of places and the relationships between people and their environments</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Geography</strong> (from Greek γεωγραφία, geographia, meaning "earth description") is a field of science devoted to the study of the lands, features, inhabitants, and phenomena of Earth.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#branches">1. Branches of Geography</a></li>
                            <li><a href="#continents">2. Continents</a></li>
                            <li><a href="#oceans">3. Oceans</a></li>
                            <li><a href="#climate">4. Climate and Environment</a></li>
                        </ul>
                    </div>

                    <h2 id="branches">Branches of Geography</h2>
                    <p>
                        Geography is a broad discipline that is divided into two main branches: physical geography and human geography.
                    </p>
                    <ul>
                        <li><strong>Physical geography:</strong> focuses on the study of the natural environment, including climate, landforms, and biological systems.</li>
                        <li><strong>Human geography:</strong> focuses on the study of human societies and their relationships with the physical environment.</li>
                    </ul>

                    <h2 id="continents">Continents</h2>
                    <p>
                        Earth's surface is divided into several large landmasses known as continents. The number of continents is often debated, but most systems recognize seven: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.
                    </p>
                    <p>
                        Asia is the largest continent by both land area and population. Africa is the second-largest, followed by North America and South America.
                    </p>

                    <h2 id="oceans">Oceans</h2>
                    <p>
                        Approximately 71% of Earth's surface is covered by oceans. The five major oceans are the Pacific, Atlantic, Indian, Southern, and Arctic Oceans. The Pacific Ocean is the largest and deepest of the world's oceans.
                    </p>
                    <p>
                        The oceans play a crucial role in regulating Earth's climate and supporting life. They are home to a vast array of marine species and provide essential resources for human societies.
                    </p>

                    <h2 id="climate">Climate and Environment</h2>
                    <p>
                        Climate refers to the long-term patterns of temperature, precipitation, and other weather conditions in a particular region. Geography plays a significant role in determining climate, through factors such as latitude, altitude, and proximity to water bodies.
                    </p>
                    <p>
                        Environmental geography is a branch of geography that focuses on the interactions between humans and the natural environment. It explores issues such as climate change, deforestation, and biodiversity loss.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Geography</div>
                    <div className="infobox-image">
                        <div className="placeholder-logo geography-icon">
                            <svg viewBox="0 0 24 24" width="80" height="80" fill="#2563eb"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z"></path><path d="M12 4a8 8 0 00-7.3 4.7l1.4.8A6.5 6.5 0 0112 5.5v-1.5z"></path></svg>
                        </div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Focus</th>
                                <td>Earth, places, people</td>
                            </tr>
                            <tr>
                                <th>Branches</th>
                                <td>Physical, Human</td>
                            </tr>
                            <tr>
                                <th>Key Themes</th>
                                <td>Location, Region, Movement</td>
                            </tr>
                            <tr>
                                <th>Tools</th>
                                <td>Maps, GIS, Remote Sensing</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default Geography;
