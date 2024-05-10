import React from 'react';
import '../styles/ArtistHeader.css';

function ArtistHeader({ artist }) {
    if (!artist) return null; // Don't render anything if no artist is selected

    return (
        <div className="artist-header" style={{ backgroundImage: `url(${artist.imageUrl})` }}>
            <div className="artist-info">
                <h1>{artist.name}</h1>
                <p>{artist.listeners} monthly listeners</p>
            </div>
        </div>
    );
}

export default ArtistHeader;
