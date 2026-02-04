import React from 'react';
import './ClimateChange.css';

const ClimateChange = () => {
    return (
        <div className="article-view">
            <div className="article-header">
                <h1 className="article-title">Climate Change</h1>
                <div className="article-meta">
                    <span>From NewsWorld, the free knowledge base · Last updated: February 4, 2026</span>
                </div>
            </div>

            <div className="article-content-wrapper">
                <div className="article-body">
                    <p className="lead-paragraph">
                        <strong>Climate change</strong> includes both global warming driven by human-induced emissions of greenhouse gases and the resulting large-scale shifts in weather patterns. Though there have been previous periods of climatic change, since the mid-20th century humans have had an unprecedented impact on Earth's climate system and caused change on a global scale.
                    </p>

                    <div className="toc">
                        <div className="toc-header">Contents</div>
                        <ul>
                            <li><a href="#causes">1. Causes of Climate Change</a></li>
                            <li><a href="#impacts">2. Impacts on Nature</a></li>
                            <li><a href="#society">3. Impacts on Society</a></li>
                            <li><a href="#mitigation">4. Mitigation and Adaptation</a></li>
                            <li><a href="#policies">5. International Policies</a></li>
                        </ul>
                    </div>

                    <h2 id="causes">Causes of Climate Change</h2>
                    <p>
                        The climate system experiences various cycles on its own, but the current change is primarily driven by human activity, specifically the burning of fossil fuels (coal, oil, and natural gas). This releases greenhouse gases like carbon dioxide (CO2) and methane into the atmosphere.
                    </p>
                    <p>
                        Deforestation and industrial processes also contribute by reducing the planet's ability to absorb carbon and by releasing other harmful pollutants.
                    </p>

                    <h2 id="impacts">Impacts on Nature</h2>
                    <p>
                        Environmental effects of climate change are broad and far-reaching. They include:
                    </p>
                    <ul>
                        <li><strong>Ocean Heating:</strong> The oceans have absorbed over 90% of the excess heat from global warming.</li>
                        <li><strong>Melting Ice:</strong> Arctic sea ice, glaciers, and ice sheets are rapidly disappearing, contributing to sea-level rise.</li>
                        <li><strong>Extreme Weather:</strong> Increased frequency and intensity of heatwaves, droughts, and heavy rainfall.</li>
                        <li><strong>Biodiversity Loss:</strong> Many species are at risk of extinction as their habitats change faster than they can adapt.</li>
                    </ul>

                    <h2 id="society">Impacts on Society</h2>
                    <p>
                        Climate change is not just an environmental issue; it is a profound threat to human health, security, and the economy. Displacement of populations (climate refugees), food insecurity due to crop failure, and the spread of infectious diseases are major concerns in 2026.
                    </p>

                    <h2 id="mitigation">Mitigation and Adaptation</h2>
                    <p>
                        Mitigation involves reducing the flow of greenhouse gases into the atmosphere. This includes transitioning to renewable energy sources like wind and solar, improving energy efficiency, and protecting forests.
                    </p>
                    <p>
                        Adaptation involves adjusting to life in a changing climate—such as building sea walls, developing drought-resistant crops, and creating early-warning systems for extreme weather events.
                    </p>

                    <h2 id="policies">International Policies</h2>
                    <p>
                        The Paris Agreement, adopted in 2015, remains the primary international framework for climate action. Countries commit to limiting global warming to well below 2°C, preferably to 1.5°C, compared to pre-industrial levels.
                    </p>
                </div>

                <aside className="infobox">
                    <div className="infobox-header">Climate Change</div>
                    <div className="infobox-image">
                        <img src="/climate.png" alt="Climate Change" style={{ width: '100%', borderRadius: '4px' }} />
                        <p style={{ fontSize: '11px', color: '#64748b', marginTop: '8px' }}>Fig 2.0: The Climate Crisis Illustration</p>
                    </div>
                    <table className="infobox-data">
                        <tbody>
                            <tr>
                                <th>Main Drivers</th>
                                <td>Fossil fuels, Deforestation</td>
                            </tr>
                            <tr>
                                <th>Key Gases</th>
                                <td>CO2, Methane, Nitrous Oxide</td>
                            </tr>
                            <tr>
                                <th>Global Warming</th>
                                <td>+1.2°C since 1880</td>
                            </tr>
                            <tr>
                                <th>Key Goal</th>
                                <td>Net Zero by 2050</td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
    );
};

export default ClimateChange;
