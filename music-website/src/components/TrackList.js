import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Assuming you use react-icons for play button

function TrackList({ tracks, onTrackChange }) {
  return (
    <ul className="track-list">
      {tracks.map((track, index) => (
        <li key={track.id} onClick={() => onTrackChange(track)}>
          <span>{track.name} by {track.artist}</span>
          <button className="play-button">
            <FaPlay />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
