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
        } else if (artist === 'Abba') {
            setCurrentArtist({
                name: 'Abba',
                imageUrl: '/Artists/Abba/abba.jpg', 
                listeners: '31,500,000'
            });
            setTracks([
                { id: 5, name: 'Dancing Queen', url: '/Artists/Abba/dancingqueen.mp3', album: 'Dancing Queen', dateAdded: 'Aug 10, 1976' },
                { id: 6, name: 'Gimme! Gimme! Gimme!', url: '/Artists/Abba/gimmegimmegimme.mp3', album: 'The King Has Lost His Crown', dateAdded: 'Oct 12, 1979' },
            ]);
        } else if (artist === 'Bob Marley') {
            setCurrentArtist({
                name: 'Bob Marley',
                imageUrl: '/Artists/BobMarley/bobmarley.jpg', 
                listeners: '308,600'
            });
            setTracks([
                { id: 7, name: 'Jamming', url: '/Artists/BobMarley/jamming.mp3', album: 'Exodus', dateAdded: 'Jun 3, 1977' },
                { id: 8, name: 'Waiting In Vain', url: '/Artists/BobMarley/waitinginvain.mp3', album: 'Exodus', dateAdded: 'Jun 3, 1977' },
            ]);
        } else if (artist === 'Earth Wind and Fire') {
            setCurrentArtist({
                name: 'Earth Wind and Fire',
                imageUrl: '/Artists/EarthWindAndFire/earthwindandfire.jpg', 
                listeners: '22,500,000'
            });
            setTracks([
                { id: 9, name: 'Boogie Wonderland', url: '/Artists/EarthWindAndFire/boogiewonderland.mp3', album: 'I Am', dateAdded: 'Jun 9, 1979' },
                { id: 10, name: 'September', url: '/Artists/EarthWindAndFire/september.mp3', album: 'September', dateAdded: 'Jun 15, 1978' },
            ]);
        } else if (artist === 'UB40') {
            setCurrentArtist({
                name: 'UB40',
                imageUrl: '/Artists/UB40/ub40.jpg', 
                listeners: '9,200,000'
            });
            setTracks([
                { id: 11, name: 'Kingston Town', url: '/Artists/UB40/kiingstontown.mp3', album: 'Labour of Love II', dateAdded: 'Nov 27, 1989' },
                { id: 12, name: 'Red, Red Wine', url: '/Artists/UB40/redredwine.mp3', album: 'Red, Red Wine', dateAdded: 'Aug 8, 1983' },
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
