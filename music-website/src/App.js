import React, { useState, useRef } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import TopBar from './components/TopBar';
import ContentArea from './components/ContentArea';
import ArtistHeader from './components/ArtistHeader';
import PlaylistHeader from './components/PlaylistHeader';

function App() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [currentArtist, setCurrentArtist] = useState(null);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
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
                { id: 2, name: 'Highest in the Room', url: '/Artists/TravisScott/highest.mp3', album: 'Single', dateAdded: 'Dec 1, 2023' },
            ]);
        } else if (artist === 'Keshi') {
            setCurrentArtist({
                name: 'Keshi',
                imageUrl: '/Artists/Keshi/keshibanner.jpg', // Update with correct image path
                listeners: '25,000,000'
            });
            setTracks([
                { id: 3, name: 'The Reaper', url: '/Artists/Keshi/The_reaper.mp3', album: 'The Reaper', dateAdded: 'Nov 9, 2018' },
                { id: 4, name: 'Skeletons', url: '/Artists/Keshi/Skeletons.mp3', album: 'Skeletons', dateAdded: 'July 16, 2019' },
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

    const playlists = [
        {
            id: 1,
            name: 'Chill Vibes',
            imageUrl: '',
            tracks: [
                { id: 13, name: 'Ocean Eyes', url: '/Tracks/oceaneyes.mp3', album: 'Dont Smile At Me' },
                { id: 14, name: 'Sicko Mode', url: '/Artists/TravisScott/sickomode.mp3', album: 'ASTROWORLD', dateAdded: 'Nov 1, 2023' },
                { id: 15, name: 'Highest in the Room', url: '/Artists/TravisScott/highest.mp3', album: 'Single', dateAdded: 'Dec 1, 2023' },
                { id: 16, name: 'The Reaper', url: '/Artists/Keshi/The_reaper.mp3', album: 'The Reaper', dateAdded: 'Nov 9, 2018' },
                { id: 17, name: 'Skeletons', url: '/Artists/Keshi/Skeletons.mp3', album: 'Skeletons', dateAdded: 'July 16, 2019' },
                // More tracks...
            ],
        },
        // More playlists...
    ];

    const handleSelectPlaylist = (playlistId) => {
        const playlist = playlists.find(p => p.id === playlistId);
        setCurrentPlaylist(playlist);
        setTracks(playlist.tracks);
    };


    const playTrack = (trackUrl) => {
        const track = tracks.find(t => t.url === trackUrl);
        setCurrentTrack(track);
        audioRef.current.src = trackUrl;
        audioRef.current.play();
    };

    return (
        <div className="app">
            <Sidebar onSearchClick={() => {}} onSelectArtist={handleSelectArtist} onSelectPlaylist={handleSelectPlaylist} />
            <div className="main-content">
                <TopBar />
                {currentArtist && <ArtistHeader artist={currentArtist} />}
                {currentPlaylist && <PlaylistHeader playlist={currentPlaylist} />}
                <ContentArea tracks={tracks} onPlayTrack={playTrack} />
                <Player currentTrack={currentTrack} audioRef={audioRef} />
            </div>
        </div>
    );
}

export default App;
