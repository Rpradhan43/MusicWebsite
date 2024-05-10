import React from 'react';

function Player({ currentTrack, audioRef }) {
    if (!currentTrack) return null; // Hide player if no track is selected

    return (
        <div className="player">
            <div className="track-info">
                <img src={currentTrack.cover} alt={currentTrack.name} className="track-cover" />
                <div>
                    <h4>{currentTrack.name}</h4>
                    <p>{currentTrack.artist}</p>
                </div>
            </div>
            <div className="controls">
                <button onClick={() => audioRef.current.play()}>Play</button>
                <button onClick={() => audioRef.current.pause()}>Pause</button>
                <input type="range" min="0" max="1" step="0.01" 
                    value={audioRef.current.volume}
                    onChange={(e) => audioRef.current.volume = e.target.value} />
            </div>
            <div className="volume-control">
                <input type="range" min="0" max="1" step="0.01" 
                    value={audioRef.current.volume}
                    onChange={(e) => audioRef.current.volume = e.target.value} />
            </div>
        </div>
    );
}

export default Player;
