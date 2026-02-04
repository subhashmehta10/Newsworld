import React from 'react';
import './Article.css';

const Article = () => {
    return (
        <main className="article-container">
            <div className="article-header">
                <div className="breadcrumbs">Technology / Web Development / Libraries</div>
                <h1 className="article-title">React (software)</h1>
                <div className="article-meta">
                    <div className="meta-left">
                        <span className="badge">Featured Article</span>
                    </div>
                    <div className="meta-right">
                        <span>Last edited 2 hours ago by <strong>WikiBot</strong></span>
                    </div>
                </div>
            </div>

            <div className="article-actions">
                <div className="action-tabs">
                    <button className="tab active">Article</button>
                    <button className="tab">Discussion</button>
                </div>
                <div className="action-buttons">
                    <button className="btn-action active">Read</button>
                    <button className="btn-action">Edit Source</button>
                    <button className="btn-action">View History</button>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>React</strong> (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#history">1. History</a></li>
                            <li><a href="#features">2. Features</a></li>
                            <li><a href="#virtual-dom">3. Virtual DOM</a></li>
                            <li><a href="#ecosystem">4. Ecosystem</a></li>
                            <li><a href="#references">5. References</a></li>
                        </ul>
                    </div>

                    <h2 id="history">History</h2>
                    <p>
                        React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype called "FaxJS". He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.
                    </p>
                    <p>
                        In May 2013, at a JSConf US, Facebook announced that React was being open-sourced.
                    </p>

                    <h2 id="features">Features</h2>
                    <div className="feature-block">
                        <h3>Declarative</h3>
                        <p>
                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        </p>
                    </div>
                    <div className="feature-block">
                        <h3>Component-Based</h3>
                        <p>
                            Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                        </p>
                    </div>

                    <h2 id="virtual-dom">Virtual DOM</h2>
                    <p>
                        Another notable feature is the use of a virtual Document Object Model, or virtual DOM. React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently. This process is called <strong>reconciliation</strong>.
                    </p>

                    <h2 id="ecosystem">Ecosystem</h2>
                    <p>
                        React is only concerned with the state management and rendering of that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">React</div>
                    <div className="infobox-image">
                        <div className="placeholder-logo">
                            <svg viewBox="0 0 24 24" width="80" height="80" fill="#0ea5e9"><circle cx="12" cy="12" r="2"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse cx="12" cy="12" rx="10" ry="4"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse></g></svg>
                        </div>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Original author</th>
                                <td>Jordan Walke</td>
                            </tr>
                            <tr>
                                <th>Developer(s)</th>
                                <td>Meta and community</td>
                            </tr>
                            <tr>
                                <th>Initial release</th>
                                <td>May 29, 2013</td>
                            </tr>
                            <tr>
                                <th>Written in</th>
                                <td>JavaScript</td>
                            </tr>
                            <tr>
                                <th>Platform</th>
                                <td>Web platform</td>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <td>JavaScript library</td>
                            </tr>
                            <tr>
                                <th>License</th>
                                <td>MIT License</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </main>
    );
};

export default Article;
