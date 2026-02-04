import React from 'react';
import './ArtCulture.css';

const ArtCulture = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Art & Culture</h1>
                <div className="article-meta">
                    <span>The expression of human creativity, skill, and imagination</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Art</strong> is a diverse range of (and product of) human activities involving creative imagination to express technical proficiency, beauty, emotional power, or conceptual ideas.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#visual">1. Visual Arts</a></li>
                            <li><a href="#performing">2. Performing Arts</a></li>
                            <li><a href="#literature">3. Literature</a></li>
                            <li><a href="#global">4. Global Culture</a></li>
                        </ul>
                    </div>

                    <h2 id="visual">Visual Arts</h2>
                    <p>
                        The visual arts are art forms such as painting, drawing, printmaking, sculpture, ceramics, photography, video, filmmaking, design, crafts and architecture. Many artistic disciplines such as performing arts, conceptual art and textile arts also involve aspects of visual arts as well as arts of other types.
                    </p>
                    <p>
                        Drawing is a means of making an image, using any of a wide variety of tools and techniques. It generally involves making marks on a surface by applying pressure from a tool, or moving a tool across a surface using dry media such as graphite pencils, charcoal, and pastels.
                    </p>

                    <h2 id="performing">Performing Arts</h2>
                    <p>
                        Performing arts are a form of art in which artists use their voices, bodies or inanimate objects to convey artistic expression. It is different from visual arts, which is when artists use paint, canvas or various materials to create physical or static art objects.
                    </p>
                    <p>
                        Performing arts include a range of disciplines which are performed in front of a live audience, including theatre, music, and dance.
                    </p>

                    <h2 id="literature">Literature</h2>
                    <p>
                        Literature broadly is any body of written works, but it is also used more narrowly for writings specifically considered to be an art form, especially prose fiction, drama, and poetry. In recent centuries, the definition has expanded to include oral literature, much of which has been transcribed.
                    </p>

                    <h2 id="global">Global Culture</h2>
                    <p>
                        Culture is an umbrella term which encompasses the social behavior and norms found in human societies, as well as the knowledge, beliefs, arts, laws, customs, capabilities, and habits of the individuals in these groups.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Art & Culture</div>
                    <div className="infobox-image">
                        <div className="placeholder-logo art-icon">
                            <svg viewBox="0 0 24 24" width="80" height="80" fill="#db2777"><path d="M12 21a9 9 0 110-18 9 9 0 010 18zM12 7v10M7 12h10"></path></svg>
                        </div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Forms</th>
                                <td>Visual, Performing, Literary</td>
                            </tr>
                            <tr>
                                <th>Period</th>
                                <td>Prehistoric to Contemporary</td>
                            </tr>
                            <tr>
                                <th>Impact</th>
                                <td>Emotional, Social, Political</td>
                            </tr>
                            <tr>
                                <th>Key Movements</th>
                                <td>Renaissance, Modernism, Pop Art</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default ArtCulture;
