import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SubHeader from '../SubHeader/SubHeader';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={`app ${isMobileMenuOpen ? 'sidebar-open' : ''}`}>
            <Navbar onMenuClick={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} />
            <SubHeader />
            <div className="content-wrapper">
                <Sidebar isOpen={isMobileMenuOpen} onLinkClick={closeMobileMenu} />
                <main className="main-content">
                    <Outlet />
                    <Footer />
                </main>
            </div>
            {isMobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}
        </div>
    );
};

export default Layout;
