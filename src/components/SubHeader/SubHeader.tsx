import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubHeader.css';

// Type definition for Mega Menu Data
type MegaMenuSection = {
    title: string;
    links: string[];
};

type MegaMenuContent = Record<string, MegaMenuSection[]>;

const SubHeader = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const navItems = [
        "World", "U.S.", "Politics", "N.Y.", "California", "Business",
        "Tech", "Science", "Health", "Sports", "Entertainment",
        "Style", "Travel", "Food", "Opinions", "Audio", "Games",
        "Cooking", "Wirecutter", "The Athletic", "Jobs", "Real Estate"
    ];

    // Generating "dher sare content" (lots of content) for the mega menus
    // Generating "dher sare content" (lots of content) for the mega menus
    const megaMenuData: MegaMenuContent = {
        "World": [
            { title: "Regions", links: ["Africa", "Americas", "Asia", "Australia", "Europe", "Middle East", "Polar"] },
            { title: "Global Topics", links: ["Climate Change", "Global Health", "Migration", "Conflicts", "Development"] },
            { title: "Featured", links: ["War in Europe", "Tensions in Asia", "Elections 2026", "Global Economy"] }
        ],
        "U.S.": [
            { title: "Regions", links: ["Northeast", "South", "Midwest", "West"] },
            { title: "Politics", links: ["Congress", "Supreme Court", "White House", "Elections"] },
            { title: "Issues", links: ["Education", "Immigration", "Healthcare", "Economy"] }
        ],
        "Politics": [
            { title: "Executive", links: ["Presidential Policies", "Cabinet News", "Executive Orders"] },
            { title: "Legislative", links: ["Senate Votes", "House Bills", "Committee Hearings"] },
            { title: "Judicial", links: ["Supreme Court Cases", "Federal Judges", "Legal Precedents"] }
        ],
        "N.Y.": [
            { title: "City Life", links: ["Transit", "Housing", "Events", "Dining"] },
            { title: "Boroughs", links: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"] },
            { title: "Government", links: ["Mayor's Office", "City Council", "State Albany News", "NYPD News"] }
        ],
        "California": [
            { title: "Regions", links: ["Los Angeles", "San Francisco", "San Diego", "Silicon Valley"] },
            { title: "Environment", links: ["Wildfires", "Drought", "Conservation", "Ocean Policy"] },
            { title: "Politics", links: ["Governor's Desk", "State Legislature", "Propositions", "Local Elections"] }
        ],
        "Business": [
            { title: "Markets", links: ["Stocks", "Bonds", "Currencies", "Crypto", "Commodities"] },
            { title: "Sector", links: ["Tech", "Energy", "Retail", "Automotive", "Banking"] },
            { title: "Personal Finance", links: ["Investing", "Retirement", "Taxes", "Credit Cards"] }
        ],
        "Tech": [
            { title: "Personal Tech", links: ["Smartphones", "Laptops", "Wearables", "Smart Home"] },
            { title: "Innovation", links: ["AI", "Quantum Computing", "Biotech", "Space Tech"] },
            { title: "Big Tech", links: ["Google", "Apple", "Microsoft", "Amazon", "Meta"] }
        ],
        "Science": [
            { title: "Space", links: ["NASA", "SpaceX", "Astronomy", "Mars Mission"] },
            { title: "Biology", links: ["Genetics", "Neuroscience", "Evolution", "Ecology"] },
            { title: "Physics", links: ["Quantum Mechanics", "Fusion Energy", "Astrophysics"] }
        ],
        "Health": [
            { title: "Wellness", links: ["Nutrition", "Fitness", "Mental Health", "Sleep"] },
            { title: "Medical", links: ["Disease Research", "Hospitals", "Insurance", "Public Health"] },
            { title: "Policy", links: ["FDA Approvals", "Global Health Initiatives", "Pandemic Prep", "Drug Prices"] }
        ],
        "Sports": [
            { title: "Major Leagues", links: ["Cricket", "NFL", "NBA", "MLB", "NHL", "Soccer"] },
            { title: "Star Players", links: ["Virat Kohli", "Lionel Messi", "LeBron James", "Cristiano Ronaldo"] },
            { title: "Events", links: ["Olympics", "World Cup", "Super Bowl", "Wimbledon"] },
            { title: "College", links: ["NCAA Football", "NCAA Basketball", "Recruiting", "Nil Deals"] }
        ],
        "Entertainment": [
            { title: "Movies", links: ["In Theaters", "Reviews", "Streaming", "Awards Season"] },
            { title: "Music", links: ["New Releases", "Concerts", "Reviews", "Charts"] },
            { title: "TV", links: ["Recaps", "What to Watch", "Streaming Services", "Cable News"] }
        ],
        "Style": [
            { title: "Fashion", links: ["Runway", "Street Style", "Trends", "Shopping Guide"] },
            { title: "Beauty", links: ["Skincare", "Makeup", "Hair", "Wellness"] },
            { title: "Living", links: ["Home Decor", "Weddings", "Relationships", "Work Life"] }
        ],
        "Travel": [
            { title: "Destinations", links: ["Europe", "Asia", "Caribbean", "National Parks"] },
            { title: "Tips", links: ["Budget Travel", "Solo Travel", "Family Trips", "Cruises"] },
            { title: "News", links: ["Airline Updates", "Visa Rules", "Travel Tech", "Hotel Reviews"] }
        ],
        "Food": [
            { title: "Cooking", links: ["Recipes", "Techniques", "Weeknight Meals", "Baking"] },
            { title: "Dining", links: ["Restaurant Reviews", "Chefs", "Food Trends", "Global Cuisine"] },
            { title: "Drinks", links: ["Wine", "Cocktails", "Coffee", "Beer"] }
        ],
        "Opinions": [
            { title: "Columnists", links: ["Politics", "Culture", "Economy", "Global Affairs"] },
            { title: "Guest Essays", links: ["Submit an Essay", "Archive", "Weekend Reads", "Top Rated"] },
            { title: "Editorials", links: ["The Board", "Letters to Editor", "Public Editor", "Corrections"] }
        ],
        "Audio": [
            { title: "Podcasts", links: ["The Daily", "Modern Love", "Tech Talk", "Book Review"] },
            { title: "Shows", links: ["Morning Edition", "Weekend Edition", "All Things Considered", "Radio Hour"] },
            { title: "Playlists", links: ["Focus", "Relax", "Workout", "Sleep"] }
        ],
        "Games": [
            { title: "Daily", links: ["Crossword", "Spelling Bee", "Wordle", "Sudoku"] },
            { title: "Logic", links: ["Chess", "Bridge", "Tiles", "Vertex"] },
            { title: "Archive", links: ["Past Puzzles", "Leaderboard", "How to Play", "Community"] }
        ],
        "Cooking": [
            { title: "Meals", links: ["Dinner", "Lunch", "Breakfast", "Brunch"] },
            { title: "Diet", links: ["Vegetarian", "Vegan", "Gluten-Free", "Low Carb"] },
            { title: "Occasion", links: ["Holidays", "Party", "Quick & Easy", "Date Night"] }
        ],
        "Wirecutter": [
            { title: "Electronics", links: ["Laptops", "Headphones", "TVs", "Cameras"] },
            { title: "Home", links: ["Kitchen", "Appliances", "Tools", "Furniture"] },
            { title: "Health", links: ["Exercise", "Sleep", "Personal Care", "Baby"] }
        ],
        "The Athletic": [
            { title: "Leagues", links: ["Premier League", "NFL", "NBA", "MLB"] },
            { title: "Teams", links: ["Manchester United", "Real Madrid", "Lakers", "Yankees"] },
            { title: "Features", links: ["Podcasts", "Fantasy", "Betting", "Analytics"] }
        ],
        "Jobs": [
            { title: "Search", links: ["Technology", "Finance", "Healthcare", "Remote"] },
            { title: "Advice", links: ["Resumes", "Interviews", "Salary Negotiation", "Career Swaps"] },
            { title: "Companies", links: ["Top Workplaces", "Salaries", "Reviews", "hiring Now"] }
        ],
        "Real Estate": [
            { title: "Buy", links: ["Homes for Sale", "New Construction", "Foreclosures", "Open Houses"] },
            { title: "Rent", links: ["Apartments", "Houses", "Rooms", "Short-term"] },
            { title: "Market", links: ["Mortgage Rates", "Home Values", "Trends", "News"] }
        ],
        "Other": [
            { title: "Trending", links: ["Most Popular", "Editors Picks", "Today's Briefing", "Video"] },
            { title: "Latest", links: ["Just In", "Live Updates", "Visual Stories", "Podcasts"] },
            { title: "Archives", links: ["2025", "2024", "2023", "Historical Data"] }
        ]
    };

    const handleMouseEnter = (item: string) => {
        setActiveCategory(item);
    };

    const handleMouseLeave = () => {
        setActiveCategory(null);
    };

    const getMenuContent = (category: string) => {
        return megaMenuData[category] || megaMenuData["Other"];
    };

    return (
        <div className="subheader-wrapper" onMouseLeave={handleMouseLeave}>
            <div className="subheader-container">
                <div className="subheader-scroll">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="nav-item-wrapper"
                            onMouseEnter={() => handleMouseEnter(item)}
                        >
                            <Link
                                to={`/${item.toLowerCase().replace('.', '')}`}
                                className={`subheader-link ${activeCategory === item ? 'active' : ''}`}
                            >
                                {item}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="subheader-fade"></div>
            </div>

            {/* Mega Menu Overlay */}
            <div className={`mega-menu ${activeCategory ? 'visible' : ''}`}>
                {activeCategory && (
                    <div className="mega-menu-content">
                        {getMenuContent(activeCategory).map((section, idx) => (
                            <div key={idx} className="mega-menu-column">
                                <h4>{section.title}</h4>
                                <ul>
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link to={`/topic/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {/* Adding generic extra columns to fill space left-to-right as requested */}
                        <div className="mega-menu-column featured-img">
                            <h4>Featured in {activeCategory}</h4>
                            <div className="dummy-img"></div>
                            <p>Top story headline for {activeCategory} goes here.</p>
                        </div>
                        <div className="mega-menu-column">
                            <h4>Latest Updates</h4>
                            <ul>
                                <li>Running updates: 10m ago</li>
                                <li>Analysis: Market shifts</li>
                                <li>Interview: Industry Leader</li>
                                <li>Opinion: Future outlook</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubHeader;
