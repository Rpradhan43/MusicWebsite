import React from 'react';

function Playlist({ playlists, onPlaylistSelect }) {
  return (
    <div className="playlist">
      <h2>Playlists</h2>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>
            <button 
              className="playlist-button" 
              onClick={() => onPlaylistSelect(playlist)}
            >
              {playlist.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
