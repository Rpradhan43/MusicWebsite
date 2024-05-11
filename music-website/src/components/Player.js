import React, { useState, useEffect } from 'react';
import '../styles/Player.css'; 

function Player({ currentTrack, audioRef, onNext, onPrev }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    // Update progress as the song plays
    useEffect(() => {
        const updateProgress = () => {
            if (!audioRef.current) return;
            const prog = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(prog);
        };

        audioRef.current.addEventListener('timeupdate', updateProgress);
        return () => audioRef.current.removeEventListener('timeupdate', updateProgress);
    }, [audioRef]);

    // Toggle play and pause functionality
    const togglePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!audioRef.current.paused);
    };

    // If no track is loaded, render nothing
    if (!currentTrack) return null;

    return (
        <div className="player">
            <div className="track-info">
                <h4>{currentTrack.name} - {currentTrack.artist}</h4>
            </div>
            <div className="controls-and-volume">
                <div className="controls">
                    <button onClick={onPrev} className="control-button"><i className="fas fa-backward"></i></button>
                    <button onClick={togglePlayPause} className="control-button">
                        {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                    </button>
                    <button onClick={onNext} className="control-button"><i className="fas fa-forward"></i></button>
                </div>
                <div className="volume-control">
                    <input type="range" min="0" max="1" step="0.01" value={audioRef.current.volume}
                           onChange={(e) => audioRef.current.volume = e.target.value} />
                </div>
            </div>
            <div className="track-progress">
                <input type="range" min="0" max="100" value={progress}
                       onChange={(e) => {
                           const newTime = (e.target.value / 100) * audioRef.current.duration;
                           audioRef.current.currentTime = newTime;
                           setProgress(e.target.value);
                       }} />
            </div>
        </div>
    );
}

export default Player;
