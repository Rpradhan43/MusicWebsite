import React from 'react';
import '../styles/TopBar.css';

function TopBar({ showSearch }) {
    return (
        <div className="top-bar">
            <div className={`search-container ${showSearch ? 'open' : ''}`}>
                <input type="search" placeholder="Search" className="search-input" />
            </div>
        </div>
    );
}

export default TopBar;
