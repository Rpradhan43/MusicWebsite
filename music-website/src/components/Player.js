// Player.js
function Player({ currentTrack }) {
  if (!currentTrack) {
    return (
      <div className="player">
        <p>No track selected</p>
      </div>
    );
  }

  // Make sure the URL starts with a process.env.PUBLIC_URL if you're using CRA and the file is in the public folder
  const trackSrc = process.env.PUBLIC_URL + currentTrack.url;

  return (
    <div className="player">
      <div className="track-info">
        <h4>Playing Now: {currentTrack.name}</h4>
        <p>Artist: {currentTrack.artist}</p>
      </div>
      <audio controls autoPlay>
        <source src={trackSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Player;
