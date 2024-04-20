import React from 'react';

function Player({ currentTrack }) {
  if (!currentTrack) {
    return (
      <div className="player">
        <p>No track selected</p>
      </div>
    );
  }

  return (
    <div className="player">
      <div className="track-info">
        <h4>Playing Now: {currentTrack.name}</h4>
        <p>Artist: {currentTrack.artist}</p>
      </div>
      <audio controls autoPlay>
        <source src={currentTrack.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Player;