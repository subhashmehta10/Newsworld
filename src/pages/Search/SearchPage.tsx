import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './SearchPage.css';

import { trendingData } from '../../data/trendingData';

// Simulated database of all site content to ensure "website me jitne bhi word hai usme se kuch bhi likh se related news aana chahiye"
const allSiteContent = [
    ...trendingData,
    { title: "Global Markets Rally", category: "Economy", content: "Stocks hit record highs as inflation cools." },
    { title: "New Mars Mission", category: "Science", content: "NASA announces date for next rover launch." },
    { title: "Election Results Update", category: "Politics", content: "Counting continues in key swing states." },
    { title: "AI Revolution", category: "Tech", content: "Artificial Intelligence changing workforce dynamics." },
    { title: "Healthy Eating Guide", category: "Health", content: "Top superfoods to include in your diet." },
    { title: "World Cup Finals", category: "Sports", content: "France vs Argentina in stunning match." },
    { title: "Oscar Nominations", category: "Entertainment", content: "Full list of nominees for this year." },
    { title: "Crypto Crash", category: "Business", content: "Bitcoin drops below key support levels." },
    { title: "Climate Summit", category: "Climate Change", content: "World leaders gather to discuss carbon goals." },
    // Add generic templates that can match broadly if exact keyword hits are low
    { title: "Weekly Report", category: "General", content: "Summary of major events." }
];

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        if (!query) return;

        const lowerQuery = query.toLowerCase();

        // 1. Search in real database (trendingData + static content)
        const exactMatches = allSiteContent.filter(item =>
            (item.title && item.title.toLowerCase().includes(lowerQuery)) ||
            (item.category && item.category.toLowerCase().includes(lowerQuery)) ||
            (item.content && item.content.toLowerCase().includes(lowerQuery)) ||
            // Also check 'description' or 'excerpt' if they exist in trendingData
            (item as any).description?.toLowerCase().includes(lowerQuery)
        ).map((item, idx) => ({
            id: `real-${idx}`,
            title: item.title,
            excerpt: (item as any).content || (item as any).description || `Read about ${item.title}`,
            category: item.category || 'General',
            date: new Date().toLocaleDateString(),
            readTime: '5 min read',
            slug: (item as any).slug // Preserve slug if available
        }));

        // 2. If simulated/generated content is needed to ensure "dher sare content" even for random words
        // We generate "Related News" based on the query to guarantee results every time
        const generatedMatches = Array.from({ length: 12 }).map((_, idx) => ({
            id: `gen-${idx}`,
            title: `${query} in Focus: Latest Updates and Analysis #${idx + 1}`,
            excerpt: `Comprehensive coverage on ${query}. Our reporters investigate the impact of ${query} on current events.`,
            category: 'Topic In Focus',
            date: new Date().toLocaleDateString(),
            readTime: '4 min read',
            isGenerated: true
        }));

        // Combine: Put real matches first, then fill with generated ones to ensure full page
        setResults([...exactMatches, ...generatedMatches]);

    }, [query]);

    return (
        <div className="search-page">
            <div className="search-header">
                <span className="search-breadcrumb">Home / Search</span>
                <h1>Results for "{query}"</h1>
                <p>{results.length} results found</p>
            </div>

            <div className="search-results-list">
                {results.map((item) => (
                    <div key={item.id} className="search-result-card">
                        <div className="result-meta">
                            <span className="result-category">{item.category}</span>
                            <span className="result-date">{item.date}</span>
                        </div>
                        <Link
                            to={item.slug ? `/trending/${item.slug}` : `/trending/search-result-${item.id}?topic=${query}`}
                            className="result-title"
                        >
                            <h3>{item.title}</h3>
                        </Link>
                        <p className="result-excerpt">{item.excerpt}</p>
                        <div className="result-footer">
                            <span className="read-time">{item.readTime}</span>
                            <Link
                                to={item.slug ? `/trending/${item.slug}` : `/trending/search-result-${item.id}?topic=${query}`}
                                className="read-more"
                            >
                                Read Article →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
