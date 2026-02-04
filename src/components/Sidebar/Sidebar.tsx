import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
    isOpen: boolean;
    onLinkClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onLinkClick }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-section">
                <h3 className="sidebar-title">Main Menu</h3>
                <ul className="sidebar-list">
                    <li onClick={onLinkClick}>
                        <NavLink to="/home" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
                            <span className="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </span>
                            Home
                        </NavLink>
                    </li>
                    <li onClick={onLinkClick}>
                        <NavLink to="/trending" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
                            <span className="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 9 6 12 2 6"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
                            </span>
                            Trending
                        </NavLink>
                    </li>
                    <li onClick={onLinkClick}>
                        <NavLink to="/about" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>
                            <span className="sidebar-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            </span>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Knowledge Base</h3>
                <ul className="sidebar-list">
                    <li onClick={onLinkClick}><NavLink to="/politics" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Politics</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/technology" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Technology</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/science" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Science</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/economy" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Economy</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/health" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Health</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/culture" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Culture</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/history" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>History</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/geography" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Geography</NavLink></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-title">Community</h3>
                <ul className="sidebar-list">
                    <li onClick={onLinkClick}><NavLink to="/writers-corner" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Writers Corner</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/forum" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Forum</NavLink></li>
                    <li onClick={onLinkClick}><NavLink to="/help-center" className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}>Help Center</NavLink></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
