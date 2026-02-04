import React from 'react';
import './QuantumComputing.css';

const QuantumComputing = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Quantum Computing</h1>
                <div className="article-meta">
                    <span>From NewsWorld, the free knowledge base · Last updated: February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Quantum computing</strong> is a type of computing whose operations can harness the phenomena of quantum mechanics, such as superposition, interference, and entanglement. Devices that perform quantum computations are known as quantum computers.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#principles">1. Fundamental Principles</a></li>
                            <li><a href="#qubits">2. Qubits and Hardware</a></li>
                            <li><a href="#supremacy">3. Quantum Supremacy</a></li>
                            <li><a href="#algorithms">4. Quantum Algorithms</a></li>
                            <li><a href="#limitations">5. Current Limitations</a></li>
                        </ul>
                    </div>

                    <h2 id="principles">Fundamental Principles</h2>
                    <p>
                        Unlike classical computers which use bits (0 or 1), quantum computers use quantum bits, or <strong>qubits</strong>. Due to <em>superposition</em>, a qubit can exist in a state representing both 0 and 1 simultaneously. <em>Entanglement</em> allows qubits that are separated by large distances to be perfectly correlated, such that the state of one cannot be described independently of the others.
                    </p>

                    <h2 id="qubits">Qubits and Hardware</h2>
                    <p>
                        Building a quantum computer requires maintaining qubits in a stable state, often at temperatures close to absolute zero (-273.15°C). Various technologies are being explored to create qubits, including superconducting loops, trapped ions, and topological qubits.
                    </p>

                    <h2 id="supremacy">Quantum Supremacy</h2>
                    <p>
                        Quantum supremacy (or quantum advantage) is the point at which a quantum computer can perform a calculation that is practically impossible for any classical computer. Google announced reaching this milestone in 2019 with its Sycamore processor, though the results have been subject to ongoing debate in the scientific community.
                    </p>

                    <h2 id="algorithms">Quantum Algorithms</h2>
                    <p>
                        Quantum computers are not just faster versions of classical computers; they are fundamentally different. Algorithms like <strong>Shor's algorithm</strong> could theoretically break most modern encryption, while <strong>Grover's algorithm</strong> can search unorganized databases significantly faster than classical methods.
                    </p>

                    <h2 id="limitations">Current Limitations</h2>
                    <p>
                        The major challenge in quantum computing is <strong>decoherence</strong>—the loss of quantum states due to environmental noise. Error correction is a major area of research, with "logical qubits" being developed to mitigate these errors.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Quantum Computing</div>
                    <div className="infobox-image">
                        <img src="/quantum.png" alt="Quantum Computer" style={{ width: '100%', borderRadius: '4px' }} />
                        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px' }}>Fig 4.0: Dilution Refrigerator & Qubit Chamber</p>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Basic Unit</th>
                                <td>Qubit</td>
                            </tr>
                            <tr>
                                <th>Key Phenomena</th>
                                <td>Superposition, Entanglement</td>
                            </tr>
                            <tr>
                                <th>Operating Temp.</th>
                                <td>~0.01 Kelvin</td>
                            </tr>
                            <tr>
                                <th>Major Developers</th>
                                <td>IBM, Google, Microsoft, IonQ</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default QuantumComputing;
