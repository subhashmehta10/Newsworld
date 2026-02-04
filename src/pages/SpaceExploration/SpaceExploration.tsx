import React from 'react';
import './SpaceExploration.css';

const SpaceExploration = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Space Exploration</h1>
                <div className="article-meta">
                    <span>From NewsWorld, the free knowledge base · Last updated: February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Space exploration</strong> is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#history">1. History of Spaceflight</a></li>
                            <li><a href="#robotic">2. Robotic Exploration</a></li>
                            <li><a href="#human">3. Human Spaceflight</a></li>
                            <li><a href="#commercial">4. Commercial Space Age</a></li>
                            <li><a href="#future">5. Future Missions</a></li>
                        </ul>
                    </div>

                    <h2 id="history">History of Spaceflight</h2>
                    <p>
                        The first successful human-made object to orbit the Earth was the Soviet Union's Sputnik 1, launched on October 4, 1957. The first human in space was Yuri Gagarin, who orbited the Earth in April 1961. The United States' Apollo 11 mission brought the first humans to the Moon in July 1969.
                    </p>
                    <p>
                        The "Space Race" between the US and USSR drove rapid advancements in rocket technology and satellite communication during the late 20th century.
                    </p>

                    <h2 id="robotic">Robotic Exploration</h2>
                    <p>
                        Unmanned missions have provided us with most of our knowledge about the solar system. Probes like Voyager 1 and 2 have traveled beyond the heliosphere, while rovers like Curiosity and Perseverance continue to search for signs of ancient life on Mars.
                    </p>

                    <h2 id="human">Human Spaceflight</h2>
                    <p>
                        Currently, the International Space Station (ISS) is the only permanently inhabited laboratory in orbit. However, new stations like the Tiangong space station and the planned Lunar Gateway are expanding human presence in space.
                    </p>

                    <h2 id="commercial">Commercial Space Age</h2>
                    <p>
                        Companies like SpaceX, Blue Origin, and Rocket Lab have revolutionized the industry by developing reusable rockets and lowering the cost of access to space. Starlink, a satellite constellation by SpaceX, now providing global high-speed internet.
                    </p>

                    <h2 id="future">Future Missions</h2>
                    <p>
                        The Artemis program aims to return humans to the Moon by the late 2020s, establishing a sustainable presence. Beyond the Moon, Mars remains the primary target for human exploration, with missions being planned for the 2030s and 2040s.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Space Exploration</div>
                    <div className="infobox-image">
                        <img src="/space.png" alt="Space Exploration" style={{ width: '100%', borderRadius: '4px' }} />
                        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px' }}>Fig 3.0: Orion-X Class "Pathfinder" Simulation</p>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>First Satellite</th>
                                <td>Sputnik 1 (1957)</td>
                            </tr>
                            <tr>
                                <th>First Human</th>
                                <td>Yuri Gagarin (1961)</td>
                            </tr>
                            <tr>
                                <th>Current Agencies</th>
                                <td>NASA, ESA, Roscosmos, CNSA</td>
                            </tr>
                            <tr>
                                <th>Key Target</th>
                                <td>Moon, Mars, Asteroids</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default SpaceExploration;
