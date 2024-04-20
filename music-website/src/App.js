import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import TrackList from './components/TrackList';
import Playlist from './components/Playlist';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [playlists, setPlaylists] = useState([
    { 
      id: 1, 
      name: 'Playlist 1', 
      tracks: [
        { id: 1, name: 'One Dance', artist: 'Drake', url: '/onedance.mp3' },
        { id: 0, name: 'One Dance2', artist: 'Drake2', url: '/onedance.mp3' },
        // ... other tracks
      ] 
    },
    { 
      id: 2, 
      name: 'Playlist 2', 
      tracks: [
        { id: 1, name: 'Test', artist: 'Test', url: '/onedance.mp3' },
        // ... other tracks
      ] 
    },
    // ... more playlists
  ]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0]);

  // Function to change the current track
  const handleTrackChange = (track) => {
    setCurrentTrack(track);
  };

  // The tracks for the TrackList component are taken from the selected playlist
  const tracks = selectedPlaylist.tracks;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Player</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          <Playlist playlists={playlists} onPlaylistSelect={setSelectedPlaylist} />
        </aside>
        <main className="main-view">
          <TrackList tracks={tracks} onTrackChange={handleTrackChange} />
          <Player currentTrack={currentTrack} />
        </main>
      </div>
    </div>
  );
}

export default App;
