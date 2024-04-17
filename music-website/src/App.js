import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import TrackList from './components/TrackList';

function App() {
  const tracks = [
    { id: 1, name: 'Song One', artist: 'Artist One', url: '/path-to-song-1.mp3' },
    { id: 2, name: 'Song Two', artist: 'Artist Two', url: '/path-to-song-2.mp3' },
    // Add more tracks as needed
  ];

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Player</h1>
      </header>
      <TrackList tracks={tracks} onTrackChange={setCurrentTrack} />
      <Player currentTrack={currentTrack} />
    </div>
  );
}

export default App;
