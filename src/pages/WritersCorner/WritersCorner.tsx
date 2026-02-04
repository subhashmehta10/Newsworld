import React from 'react';
import './WritersCorner.css';

const WritersCorner = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Writers' Corner</h1>
                <div className="article-meta">
                    <span>Resources and guidelines for NewsWorld contributors</span>
                </div>
            </div>

            <div className="article-body">
                <p className="lead-paragraph">
                    The <strong>Writers' Corner</strong> is a central hub for all editors and contributors of NewsWorld. Whether you are a seasoned writer or a new contributor, this page provides the tools and information you need to create high-quality content.
                </p>

                <h2>Getting Started</h2>
                <p>Before you start writing, we recommend reading through our basic guidelines. These are designed to ensure consistency and quality across the entire knowledge base.</p>

                <div className="guidelines-card">
                    <h3>The Five Pillars</h3>
                    <ul>
                        <li>NewsWorld is an encyclopedia.</li>
                        <li>NewsWorld is written from a neutral point of view.</li>
                        <li>NewsWorld is free content that anyone can use, edit, and distribute.</li>
                        <li>Editors should treat each other with respect and civility.</li>
                        <li>NewsWorld has no firm rules beyond these principles.</li>
                    </ul>
                </div>

                <h2>Core Tasks</h2>
                <div className="tasks-grid">
                    <div className="task-item">
                        <h4>Article Creation</h4>
                        <p>Learn how to start a new article from scratch, including research and formatting.</p>
                    </div>
                    <div className="task-item">
                        <h4>Fact Checking</h4>
                        <p>Help us maintain accuracy by verifying claims and adding reliable citations.</p>
                    </div>
                    <div className="task-item">
                        <h4>Copy Editing</h4>
                        <p>Improve the clarity, grammar, and flow of existing articles.</p>
                    </div>
                    <div className="task-item">
                        <h4>Image Uploads</h4>
                        <p>Contribute visual content and diagrams to enhance our descriptions.</p>
                    </div>
                </div>

                <h2>Writing Style Guide</h2>
                <p>We aim for a formal, objective tone. Avoid using "I" or "we" unless you are quoting someone. Focus on clarity and concise language.</p>

                <h3>Formatting Highlights</h3>
                <ul>
                    <li>Use <strong>bold</strong> for the first instance of the article subject.</li>
                    <li>Use <em>italics</em> for book titles, movie titles, and foreign words.</li>
                    <li>Use hierarchical headings (H2, H3) to organize content.</li>
                </ul>
            </div>
        </div>
    );
};

export default WritersCorner;
