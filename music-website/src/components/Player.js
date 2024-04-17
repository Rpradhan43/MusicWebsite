import React from 'react';

function Player({ currentTrack }) {
  return (
    <div className="player">
      <audio controls autoPlay>
        <source src={currentTrack.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="track-info">
        <h4>Playing Now: {currentTrack.name}</h4>
        <p>Artist: {currentTrack.artist}</p>
      </div>
    </div>
  );
}

export default Player;
