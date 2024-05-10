import React, { useState, useRef } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import TopBar from './components/TopBar';
import ContentArea from './components/ContentArea';
import ArtistHeader from './components/ArtistHeader';

function App() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [currentArtist, setCurrentArtist] = useState(null);
    const audioRef = useRef(new Audio());

    const handleSelectArtist = (artist) => {
        if (artist === 'Travis Scott') {
            setCurrentArtist({
                name: 'Travis Scott',
                imageUrl: '/Artists/TravisScott/travisbanner.jpg',
                listeners: '69,084,021'
            });
            setTracks([
                { id: 1, name: 'Sicko Mode', url: '/Artists/TravisScott/sickomode.mp3', album: 'ASTROWORLD', dateAdded: 'Nov 1, 2023' },
                { id: 2, name: 'Highest in the Room', url: '/tracks/highest_in_the_room.mp3', album: 'Single', dateAdded: 'Dec 1, 2023' },
            ]);
        } else if (artist === 'Keshi') {
            setCurrentArtist({
                name: 'Keshi',
                imageUrl: '/Keshi/keshi-image.jpg', // Update with correct image path
                listeners: '25,000,000'
            });
            setTracks([
                { id: 3, name: 'test', url: '/Keshi/The_reaper.mp3', album: 'The Reaper', dateAdded: 'Jan 10, 2024' },
                { id: 4, name: 'test', url: '/Keshi/Skeletons.mp3', album: 'Skeletons', dateAdded: 'Feb 15, 2024' },
            ]);
        } else if (artist === 'Artist_3') {
            setCurrentArtist({
                name: 'Keshi',
                imageUrl: '/path/to/keshi-image.jpg', // Update with correct image path
                listeners: '25,000,000'
            });
            setTracks([
                { id: 3, name: 'test', url: '/tracks/test.mp3', album: 'The Reaper', dateAdded: 'Jan 10, 2024' },
                { id: 4, name: 'test', url: '/tracks/test.mp3', album: 'Skeletons', dateAdded: 'Feb 15, 2024' },
            ]);
        }
        
    };


    const playTrack = (trackUrl) => {
        const track = tracks.find(t => t.url === trackUrl);
        setCurrentTrack(track);
        audioRef.current.src = trackUrl;
        audioRef.current.play();
    };

    return (
        <div className="app">
            <Sidebar onSearchClick={() => {}} onSelectArtist={handleSelectArtist} />
            <div className="main-content">
                <TopBar />
                {currentArtist && <ArtistHeader artist={currentArtist} />}
                <ContentArea tracks={tracks} onPlayTrack={playTrack} />
                <Player currentTrack={currentTrack} audioRef={audioRef} />  // Ensures Player is always rendered
            </div>
        </div>
    );
}

export default App;
