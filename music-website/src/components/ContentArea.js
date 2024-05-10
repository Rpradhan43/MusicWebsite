import React from 'react';
import '../styles/ContentArea.css';

function ContentArea({ tracks, onPlayTrack }) {
    return (
        <div className="content-area">
            <div className="tracks-header">
                <div>#</div>
                <div>Title</div>
                <div>Album</div>
                <div>Date Added</div>
            </div>
            {tracks.map((track, index) => (
                <div key={track.id} className="track-item" onClick={() => onPlayTrack(track.url)}>
                    <div>{index + 1}</div>
                    <div>{track.name}</div>
                    <div>{track.album}</div>
                    <div>{track.dateAdded}</div>
                </div>
            ))}
        </div>
    );
}

export default ContentArea;
