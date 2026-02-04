import React from 'react';
import './History.css';

const History = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">History</h1>
                <div className="article-meta">
                    <span>The study of the past as it is described in written documents</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>History</strong> (from Greek ἱστορία, historia, meaning "inquiry; knowledge acquired by investigation") is the study and the documentation of the past. Events occurring before the invention of writing systems are considered prehistory.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#etymology">1. Etymology</a></li>
                            <li><a href="#prehistory">2. Prehistory</a></li>
                            <li><a href="#ancient">3. Ancient History</a></li>
                            <li><a href="#medieval">4. Medieval History</a></li>
                            <li><a href="#modern">5. Modern History</a></li>
                        </ul>
                    </div>

                    <h2 id="etymology">Etymology</h2>
                    <p>
                        The word history comes from the Ancient Greek word ἱστορία (historia), which means "inquiry," "knowledge from inquiry," or "judge." It was in that sense that Aristotle used the word in his History of Animals.
                    </p>
                    <p>
                        The word entered the English language via the Old French word historie, meaning "history," "story," or "chronicle."
                    </p>

                    <h2 id="prehistory">Prehistory</h2>
                    <p>
                        Human history is the narrative of humanity's past. It is understood through archaeology, anthropology, genetics, linguistics, and other disciplines; and, for periods since the invention of writing, from recorded history and from secondary sources and studies.
                    </p>
                    <p>
                        Prehistory refers to the period of time before written records existed. It is generally divided into three stages: the Stone Age, the Bronze Age, and the Iron Age.
                    </p>

                    <h2 id="ancient">Ancient History</h2>
                    <p>
                        Ancient history covers all continents inhabited by humans in the period 3000 BC – AD 500. The broad term "ancient history" is not to be confused with classical antiquity. The term "classical antiquity" is often used for the period of Western history from the beginning of recorded Greek history in 776 BC (first Olympiad).
                    </p>
                    <p>
                        Key civilizations include Ancient Egypt, the Indus Valley Civilization, Ancient China, and the Roman Empire.
                    </p>

                    <h2 id="medieval">Medieval History</h2>
                    <p>
                        The Middle Ages (or medieval period) lasted from the 5th to the 15th century. It began with the fall of the Western Roman Empire and merged into the Renaissance and the Age of Discovery. The Middle Ages is the middle period of the three traditional divisions of Western history: classical antiquity, the medieval period, and the modern period.
                    </p>

                    <h2 id="modern">Modern History</h2>
                    <p>
                        Modern history, also referred to as the modern period or the modern era, is the chronological subset of world history describing the period transition from the Middle Ages to the present day. The early modern period began approximately at the start of the 16th century.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">History</div>
                    <div className="infobox-image">
                        <div className="placeholder-logo history-icon">
                            <svg viewBox="0 0 24 24" width="80" height="80" fill="#92400e"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 10"></path><circle cx="12" cy="12" r="10" stroke="#92400e" fill="none"></circle></svg>
                        </div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Focus</th>
                                <td>Past events, records</td>
                            </tr>
                            <tr>
                                <th>Sources</th>
                                <td>Documents, artifacts</td>
                            </tr>
                            <tr>
                                <th>Key Eras</th>
                                <td>Ancient, Medieval, Modern</td>
                            </tr>
                            <tr>
                                <th>Disciplines</th>
                                <td>Archaeology, Genealogy</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default History;
