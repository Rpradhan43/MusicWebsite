import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar({ onSearchClick, onSelectArtist }) {
    const [showArtists, setShowArtists] = useState(false);
    const [showPlaylists, setShowPlaylists] = useState(false);

    const toggleArtists = () => setShowArtists(!showArtists);
    const togglePlaylists = () => setShowPlaylists(!showPlaylists);

    return (
        <div className="sidebar">
            <div className="logo">SPOTIFY</div>
            <ul>
                <li onClick={onSearchClick}>Search</li>
                <li>Home</li>
                <li>Your Library</li>
            </ul>
            <div className="section">
                <strong onClick={toggleArtists}>ARTISTS</strong>
                <ul className={`dropdown-list ${showArtists ? 'open' : ''}`}>
                    <li onClick={() => onSelectArtist('Travis Scott')}>Travis Scott</li>
                    <li onClick={() => onSelectArtist('Keshi')}>Keshi</li>
                    <li onClick={() => onSelectArtist('Artist_3')}>Artist_3</li>
                    {/* Add more artists here as needed */}
                </ul>
            </div>
            <div className="section">
                <strong onClick={togglePlaylists}>PLAYLISTS</strong>
                <ul className={`dropdown-list ${showPlaylists ? 'open' : ''}`}>
                    <li>Playlist 1</li>
                    <li>Playlist 2</li>
                    <li>Playlist 3</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
