import React from 'react';

function TrackList({ tracks, onTrackChange }) {
  return (
    <ul>
      {tracks.map((track, index) => (
        <li key={index} onClick={() => onTrackChange(track)}>
          {track.name} by {track.artist}
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
