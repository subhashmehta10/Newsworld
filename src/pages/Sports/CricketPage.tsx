import { useState, useEffect } from 'react';
import './CricketPage.css';

const CricketPage = () => {
    const [activeTab, setActiveTab] = useState('international');
    const [matchFilter, setMatchFilter] = useState('live');
    const [selectedMatch, setSelectedMatch] = useState<any | null>(null);
    const [selectedTeamSquad, setSelectedTeamSquad] = useState<any | null>(null);

    // --- 1. TOURNAMENT / SEASON INFO DATA ---
    const tournamentInfo: any = {
        international: { title: "ICC Future Tours Programme 2026", season: "2025-26 Season", totalMatches: "85 Scheduled", live: 3, remaining: "Year-round", finalDate: "N/A (Series based)", teams: 12, description: "The peak of cricket. Featuring the ongoing Test Championship and preparations for the T20 World Cup." },
        ipl: { title: "TATA IPL 2026", season: "Season 19", totalMatches: "74 Matches", live: 0, remaining: "Starts Match 22", finalDate: "May 26, 2026", teams: 10, description: "The biggest T20 league returns. 10 Teams fighting for the coveted trophy.", startDate: "March 22, 2026" },
        wpl: { title: "TATA WPL 2026", season: "Season 4", totalMatches: "22 Matches", live: 1, remaining: "1 Match (Final)", finalDate: "Feb 5, 2026", teams: 5, description: "The Grand Finale is here! Mumbai Indians vs RCB Women for the trophy.", startDate: "February 23, 2026" }
    };

    const currentInfo = tournamentInfo[activeTab] || tournamentInfo.international;

    // --- 2. MATCHES DATA ---
    const allMatches = [
        // WPL FINAL
        {
            id: 299, category: 'wpl', format: "WPL Final", statusType: "upcoming",
            team1: { name: "Delhi Capitals", score: "", overs: "" },
            team2: { name: "RCB Women", score: "", overs: "" },
            status: "Tomorrow, 7:30 PM", details: "GRAND FINAL: DC vs RCB at Arun Jaitley Stadium, Delhi. The ultimate showdown for the 2026 title.", date: "Feb 5, 2026"
        },
        // INTERNATIONAL
        {
            id: 1, category: 'international', format: "T20I", statusType: "live",
            team1: { name: "India", score: "185/3", overs: "18.2" },
            team2: { name: "Australia", score: "Did not bat", overs: "" },
            status: "India batting", details: "2nd T20I, MCG. India aiming for a series win."
        },
        {
            id: 11, category: 'international', format: "ODI", statusType: "upcoming",
            team1: { name: "Pakistan", score: "", overs: "" },
            team2: { name: "Sri Lanka", score: "", overs: "" },
            status: "Tomorrow, 2:30 PM", details: "Asia Cup Opener"
        },
        // WPL Matches
        {
            id: 2, category: 'wpl', format: "WPL", statusType: "live",
            team1: { name: "Delhi Capitals", score: "145/8", overs: "20.0" },
            team2: { name: "UP Warriorz", score: "50/1", overs: "6.0" },
            status: "UPW need 96 runs", details: "Eliminator Match - Winner meets RCB in Final."
        },
        {
            id: 22, category: 'wpl', format: "WPL", statusType: "completed",
            team1: { name: "RCB Women", score: "190/2", overs: "20.0" },
            team2: { name: "Gujarat Giants", score: "165/8", overs: "20.0" },
            status: "RCB won by 25 runs", details: "Qualifier 1: Mandhana 95(50) powers RCB to final."
        },
        // IPL Matches
        {
            id: 31, category: 'ipl', format: "IPL", statusType: "upcoming",
            team1: { name: "CSK", score: "", overs: "" },
            team2: { name: "RCB", score: "", overs: "" },
            status: "Mar 22, 7:30 PM", details: "Season Opener 2026: Rivalry Week begins with the Classics."
        },
        {
            id: 32, category: 'ipl', format: "IPL", statusType: "upcoming",
            team1: { name: "Mumbai Indians", score: "", overs: "" },
            team2: { name: "KKR", score: "", overs: "" },
            status: "Mar 23, 7:30 PM", details: "Match 2 at Wankhede: Can KKR defend their title?"
        }
    ];

    const filteredMatches = allMatches.filter(m =>
        (activeTab === 'rankings' || activeTab === 'stats' ? true : m.category === activeTab) &&
        (matchFilter === 'all' || m.statusType === matchFilter)
    );

    const wplTeams = [
        {
            name: "Mumbai Indians",
            captain: "Harmanpreet Kaur",
            players: 18,
            champions: "2023",
            squadList: ["Harmanpreet Kaur (C)", "Yastika Bhatia", "Hayley Matthews", "Nat Sciver-Brunt", "Pooja Vastrakar", "Amelia Kerr", "Shabnim Ismail", "Saika Ishaque", "Amanjot Kaur"]
        },
        {
            name: "Delhi Capitals",
            captain: "Meg Lanning",
            players: 18,
            champions: "-",
            squadList: ["Meg Lanning (C)", "Shafali Verma", "Jemimah Rodrigues", "Marizanne Kapp", "Shikha Pandey", "Radha Yadav", "Arundhati Reddy", "Taniya Bhatia", "Alice Capsey"]
        },
        {
            name: "RCB Women",
            captain: "Smriti Mandhana",
            players: 18,
            champions: "2024",
            squadList: ["Smriti Mandhana (C)", "Ellyse Perry", "Sophie Devine", "Renuka Singh", "Richa Ghosh", "Shreyanka Patil", "Asha Sobhana", "Georgia Wareham", "Ekta Bisht"]
        },
        {
            name: "UP Warriorz",
            captain: "Alyssa Healy",
            players: 16,
            champions: "-",
            squadList: ["Alyssa Healy (C)", "Deepti Sharma", "Tahila McGrath", "Grace Harris", "Sophie Ecclestone", "Rajeshwari Gayakwad", "Shweta Sehrawat", "Kiran Navgire"]
        },
        {
            name: "Gujarat Giants",
            captain: "Beth Mooney",
            players: 17,
            champions: "-",
            squadList: ["Beth Mooney (C)", "Ashleigh Gardner", "Laura Wolvaardt", "Harleen Deol", "Sneh Rana", "Tanuja Kanwar", "Mannat Kashyap", "Phoebe Litchfield"]
        }
    ];

    const newsData = {
        international: [
            { id: 101, title: "T20 World Cup 2026: Venues Announced", category: "World Cup", image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2105", time: "2h ago" },
            { id: 102, title: "Ashes 2026: Squads Announced", category: "Test", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067", time: "5h ago" }
        ],
        ipl: [
            { id: 201, title: "IPL 2026: Season 19 Schedule Released", category: "IPL News", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Indian_Premier_League_Official_Logo.svg/1200px-Indian_Premier_League_Official_Logo.svg.png", time: "1d ago" },
            { id: 202, title: "Auction Review: Who bought whom?", category: "Auction", image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070", time: "2d ago" }
        ],
        wpl: [
            { id: 301, title: "WPL Points Table: MI Reclaim Top Spot", category: "Standings", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Harmanpreet_Kaur_%28cropped%29.jpg", time: "1h ago" },
            { id: 302, title: "Shafali Verma breaks record for fastest 50", category: "Records", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Smriti_Mandhana_during_the_2017_Women%27s_Cricket_World_Cup_%28cropped%29.jpg", time: "3h ago" }
        ]
    };

    const rankingsData = [
        { rank: 1, team: "India", points: 265 },
        { rank: 2, team: "Australia", points: 258 },
        { rank: 3, team: "England", points: 252 },
        { rank: 4, team: "South Africa", points: 245 },
        { rank: 5, team: "New Zealand", points: 240 }
    ];

    const wplPointsTable = [
        { pos: 1, team: "Delhi Capitals", matches: 8, won: 6, lost: 2, nrr: "+1.250", pts: 12, status: "Finalist (Q)", qualifyClass: "qualified-final" },
        { pos: 2, team: "RCB Women", matches: 8, won: 5, lost: 3, nrr: "+0.850", pts: 10, status: "Finalist (Q)", qualifyClass: "qualified-final" },
        { pos: 3, team: "Mumbai Indians", matches: 8, won: 5, lost: 3, nrr: "+0.720", pts: 10, status: "Eliminator", qualifyClass: "qualified-elim" },
        { pos: 4, team: "UP Warriorz", matches: 8, won: 3, lost: 5, nrr: "-0.450", pts: 6, status: "Eliminated", qualifyClass: "eliminated" },
        { pos: 5, team: "Gujarat Giants", matches: 8, won: 1, lost: 7, nrr: "-1.300", pts: 2, status: "Eliminated", qualifyClass: "eliminated" }
    ];

    const getNews = () => {
        const news = (newsData as any)[activeTab] || newsData.international;
        return news;
    };

    useEffect(() => {
        const hasLive = allMatches.some(m => m.category === activeTab && m.statusType === 'live');
        if (hasLive) setMatchFilter('live');
        else setMatchFilter('upcoming');
    }, [activeTab]);

    return (
        <div className="cricket-page">
            <div className="cricket-header">
                <h1>{currentInfo.title || "Cricket World"}</h1>

                {activeTab !== 'rankings' && activeTab !== 'stats' && (
                    <div className="stats-summary-panel">
                        <div className="stat-item"><span className="label">Season</span><span className="value">{currentInfo.season}</span></div>
                        <div className="stat-item"><span className="label">Start Date</span><span className="value">{currentInfo.startDate || "Ongoing"}</span></div>
                        <div className="stat-item"><span className="label">Total Teams</span><span className="value">{currentInfo.teams} Teams</span></div>
                        <div className="stat-item"><span className="label">Final Match</span><span className="value live">{currentInfo.finalDate}</span></div>
                    </div>
                )}

                <div className="cricket-nav">
                    {['international', 'ipl', 'wpl', 'rankings', 'stats'].map(tab => (
                        <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div className="cricket-layout">
                {/* LEFT CONTENT */}
                <div className="main-content">
                    {activeTab !== 'rankings' && activeTab !== 'stats' && (
                        <section className="live-scores-section">
                            <div className="section-header-row">
                                <h2>{activeTab.toUpperCase()} Matches</h2>
                                <div className="match-filters">
                                    {['live', 'upcoming', 'completed'].map(f => (
                                        <button key={f} className={matchFilter === f ? 'active' : ''} onClick={() => setMatchFilter(f)}>
                                            {f.charAt(0).toUpperCase() + f.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="scores-grid">
                                {filteredMatches.length > 0 ? filteredMatches.map(match => (
                                    <div key={match.id} className="score-card clickable" onClick={() => setSelectedMatch(match)}>
                                        <div className="match-header">
                                            <span className="match-format">{match.format}</span>
                                            <span className={`status-tag ${match.statusType}`}>{match.statusType.toUpperCase()}</span>
                                        </div>
                                        <div className="match-teams">
                                            <div className="team"><span>{match.team1.name}</span> <span className="score">{match.team1.score}</span></div>
                                            <div className="team"><span>{match.team2.name}</span> <span className="score">{match.team2.score}</span></div>
                                        </div>
                                        <div className="match-status">{match.status}</div>
                                        {/* Click hint for clarity */}
                                        <div className="click-hint">Click for details</div>
                                    </div>
                                )) : (
                                    <div className="no-matches-card">
                                        <p>No {matchFilter} matches found for {activeTab.toUpperCase()}.</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {activeTab === 'wpl' && (
                        <>
                            <section className="wpl-points-section">
                                <h2>WPL 2026 Points Table</h2>
                                <div className="table-responsive">
                                    <table className="points-table">
                                        <thead>
                                            <tr>
                                                <th>Pos</th>
                                                <th>Team</th>
                                                <th>P</th>
                                                <th>W</th>
                                                <th>L</th>
                                                <th>NRR</th>
                                                <th>Pts</th>
                                                <th>Qualification</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wplPointsTable.map((row) => (
                                                <tr key={row.pos} className={row.qualifyClass}>
                                                    <td>{row.pos}</td>
                                                    <td className="team-name-cell">
                                                        <span className="team-logo-placeholder"></span>
                                                        {row.team}
                                                    </td>
                                                    <td>{row.matches}</td>
                                                    <td>{row.won}</td>
                                                    <td>{row.lost}</td>
                                                    <td>{row.nrr}</td>
                                                    <td><strong>{row.pts}</strong></td>
                                                    <td><span className={`qualify-badge ${row.qualifyClass}`}>{row.status}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section className="wpl-teams-section">
                                <h2>WPL 2026 Teams & Squads (5 Teams)</h2>
                                <div className="wpl-teams-grid">
                                    {wplTeams.map((team, idx) => (
                                        <div key={idx} className="team-card">
                                            <h3>{team.name}</h3>
                                            <div className="team-detail"><strong>Captain:</strong> {team.captain}</div>
                                            <div className="team-detail"><strong>Squad Size:</strong> {team.players} Players</div>
                                            <div className="team-detail"><strong>Titles:</strong> {team.champions}</div>
                                            <button className="view-squad-btn" onClick={() => setSelectedTeamSquad(team)}>View Squad</button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {activeTab === 'ipl' && (
                        <section className="ipl-info-section">
                            <h2>IPL History & Format</h2>
                            <div className="info-card-large">
                                <p>The Indian Premier League (IPL) 2026 marks the <strong>19th Season</strong> of the tournament. First held in 2008.</p>
                                <div className="info-stats-row">
                                    <div className="info-stat"><strong>Most Runs:</strong> Virat Kohli (8000+)</div>
                                    <div className="info-stat"><strong>Most Wickets:</strong> Yuzvendra Chahal (200+)</div>
                                    <div className="info-stat"><strong>Defending Champs:</strong> KKR (2024)</div>
                                </div>
                            </div>
                        </section>
                    )}

                    {activeTab !== 'rankings' && activeTab !== 'stats' && (
                        <section className="latest-news-section">
                            <h2>Latest Updates</h2>
                            <div className="news-feed">
                                {getNews().map((item: any) => (
                                    <div key={item.id} className="feed-item">
                                        <div className="feed-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <div className="feed-content">
                                            <span className="feed-cat">{item.category}</span>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* RIGHT SIDEBAR (Filled with data) */}
                <aside className="cricket-sidebar">
                    <div className="rankings-widget">
                        <h3>ICC Quick Rankings</h3>
                        <table>
                            <thead><tr><th>Rank</th><th>Team</th><th>Pts</th></tr></thead>
                            <tbody>
                                {rankingsData.map(r => (
                                    <tr key={r.rank}><td>{r.rank}</td><td>{r.team}</td><td>{r.points}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="featured-video-widget">
                        <h3>Trending Videos</h3>
                        <div className="video-card"><div className="video-thumb"></div><p>Final Moments: WPL 2025 Match</p></div>
                        <div className="video-card"><div className="video-thumb"></div><p>Best Catches of the Month</p></div>
                        <div className="video-card"><div className="video-thumb"></div><p>Kohli's Masterclass Analysis</p></div>
                    </div>

                    <div className="poll-widget">
                        <h3>Fan Poll</h3>
                        <p>Who will win WPL 2026?</p>
                        <div className="poll-options">
                            <button className="poll-option">Mumbai Indians</button>
                            <button className="poll-option">Delhi Capitals</button>
                            <button className="poll-option">RCB Women</button>
                        </div>
                    </div>
                </aside>
            </div>

            {/* MATCH MODAL */}
            {selectedMatch && (
                <div className="match-modal-overlay" onClick={() => setSelectedMatch(null)}>
                    <div className="match-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedMatch(null)}>&times;</button>
                        <div className="modal-header">
                            <h2>Match Details</h2>
                            <span className={`status-badge ${selectedMatch.statusType}`}>{selectedMatch.statusType.toUpperCase()}</span>
                        </div>
                        <div className="modal-teams">
                            <div className="modal-team">
                                <h3>{selectedMatch.team1.name}</h3>
                                <div className="big-score">{selectedMatch.team1.score || "-"}</div>
                                <div className="overs">{selectedMatch.team1.overs && `(${selectedMatch.team1.overs})`}</div>
                            </div>
                            <div className="vs">VS</div>
                            <div className="modal-team">
                                <h3>{selectedMatch.team2.name}</h3>
                                <div className="big-score">{selectedMatch.team2.score || "-"}</div>
                                <div className="overs">{selectedMatch.team2.overs && `(${selectedMatch.team2.overs})`}</div>
                            </div>
                        </div>
                        <div className="modal-status">{selectedMatch.status}</div>
                        <div className="modal-info">
                            <p><strong>Date:</strong> {selectedMatch.date || "Today"}</p>
                            <p><strong>Detail:</strong> {selectedMatch.details}</p>
                        </div>
                        <div className="modal-actions">
                            <button className="primary-btn">Full Scorecard</button>
                            <button className="secondary-btn">Highlights</button>
                        </div>
                    </div>
                </div>
            )}

            {/* TEAM SQUAD MODAL */}
            {selectedTeamSquad && (
                <div className="match-modal-overlay" onClick={() => setSelectedTeamSquad(null)}>
                    <div className="match-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedTeamSquad(null)}>&times;</button>
                        <div className="modal-header">
                            <h2>{selectedTeamSquad.name} Squad</h2>
                        </div>
                        <div className="squad-list">
                            <ul>
                                {selectedTeamSquad.squadList.map((player: string, index: number) => (
                                    <li key={index} className="squad-player">
                                        {player}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CricketPage;
