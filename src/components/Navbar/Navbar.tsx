import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

interface NavbarProps {
    onMenuClick: () => void;
    isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, isMenuOpen }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false); // For mobile search toggling
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
        }
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo-section">
                    <button className="mobile-menu-btn" onClick={onMenuClick} aria-label="Menu">
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>

                    <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <div className="logo-icon">
                            <span>W</span>
                        </div>
                        <span className="logo-text">NewsWorld</span>
                    </div>
                </div>

                {/* Desktop Search */}
                <form className="navbar-search desktop-only" onSubmit={handleSearch}>
                    <button type="submit" className="search-icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    <input
                        type="text"
                        placeholder="Search for articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>

                <div className="navbar-actions">
                    <button className="mobile-search-btn mobile-only" onClick={toggleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>

                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" className="nav-link desktop-only">Log in</Link>
                            <Link to="/login" className="nav-btn-primary">Account</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/account" className="nav-btn-primary" style={{ marginRight: '10px' }}>Profile</Link>
                            <button onClick={logout} className="nav-link logout-btn" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit' }}>Log out</button>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Search Bar (Expandable) */}
            {isSearchOpen && (
                <div className="mobile-search-bar">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus
                        />
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </form>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
