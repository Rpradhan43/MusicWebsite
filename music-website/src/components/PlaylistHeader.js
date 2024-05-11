import React from 'react';

function PlaylistHeader({ playlist }) {
    return (
        <div className="playlist-header">
            <img src={playlist.imageUrl} alt={playlist.name} />
            <h1>{playlist.name}</h1>
        </div>
    );
}

export default PlaylistHeader;
