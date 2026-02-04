import React from 'react';
import './AI.css';

const AI = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Artificial Intelligence</h1>
                <div className="article-meta">
                    <span>From NewsWorld, the free knowledge base · Last updated: February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Artificial intelligence</strong> (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#history">1. History</a></li>
                            <li><a href="#types">2. Types of AI</a></li>
                            <li><a href="#generative-ai">3. Generative AI</a></li>
                            <li><a href="#ethics">4. Ethics and Safety</a></li>
                            <li><a href="#future">5. Future Outlook</a></li>
                        </ul>
                    </div>

                    <h2 id="history">History</h2>
                    <p>
                        The field of AI was founded at a workshop held on the campus of Dartmouth College during the summer of 1956. Those who attended would become the leaders of AI research for decades. Many of them predicted that a machine as intelligent as a human being would exist in no more than a generation, and they were given millions of dollars to make this vision come true.
                    </p>
                    <p>
                        Progress in the late 20th and early 21st centuries led to the development of deep learning, which enabled breakthroughs in image recognition, natural language processing, and strategic games like Go.
                    </p>

                    <h2 id="types">Types of AI</h2>
                    <p>
                        AI is often categorized based on its capabilities and its similarity to human intelligence:
                    </p>
                    <ul>
                        <li><strong>Artificial Narrow Intelligence (ANI):</strong> Also known as "Weak AI," these systems are designed to perform a single task. Examples include voice assistants like Siri or recommendation algorithms on Netflix.</li>
                        <li><strong>Artificial General Intelligence (AGI):</strong> "Strong AI" that could perform any intellectual task that a human can do. AGI remains a theoretical goal of AI research.</li>
                        <li><strong>Artificial Superintelligence (ASI):</strong> AI that surpasses human intelligence across all fields, including scientific creativity, general wisdom, and social skills.</li>
                    </ul>

                    <h2 id="generative-ai">Generative AI</h2>
                    <p>
                        Generative AI refers to algorithms that can be used to create new content, including audio, code, images, text, simulations, and videos. Recent breakthroughs in Large Language Models (LLMs) like GPT-4 and Claude 3 have brought generative AI into widespread public use.
                    </p>

                    <h2 id="ethics">Ethics and Safety</h2>
                    <p>
                        As AI systems become more powerful, ethical concerns have grown regarding bias, privacy, job displacement, and the potential for autonomous weapons. The "Alignment Problem" explores how to ensure that AI systems act in accordance with human values and intentions.
                    </p>

                    <h2 id="future">Future Outlook</h2>
                    <p>
                        In 2026, AI integration into daily life has reached unprecedented levels. From AI-assisted surgery to personalized education, the technology continues to reshape human society.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Artificial Intelligence</div>
                    <div className="infobox-image">
                        <img src="/ai.png" alt="AI Concept" style={{ width: '100%', borderRadius: '4px' }} />
                        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px' }}>Fig 1.0: Neural Network Architecture Simulation</p>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Founder(s)</th>
                                <td>John McCarthy, Marvin Minsky, et al.</td>
                            </tr>
                            <tr>
                                <th>Founded</th>
                                <td>1956 (Dartmouth Workshop)</td>
                            </tr>
                            <tr>
                                <th>Key Technologies</th>
                                <td>Deep Learning, LLMs, Neural Networks</td>
                            </tr>
                            <tr>
                                <th>Major Fields</th>
                                <td>NLP, Computer Vision, Robotics</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default AI;
