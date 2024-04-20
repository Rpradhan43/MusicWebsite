import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import TrackList from './components/TrackList';

function App() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { id: 1, name: 'Song One', artist: 'Artist One', url: '/path-to-song-1.mp3' },
    { id: 2, name: 'Song Two', artist: 'Artist Two', url: '/path-to-song-2.mp3' },
    // ... more tracks
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Player</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          {/* sidebar content */}
        </aside>
        <main className="main-view">
          <TrackList tracks={tracks} onTrackChange={setCurrentTrack} />
          <Player currentTrack={currentTrack} />
        </main>
      </div>
    </div>
  );
}

export default App;
