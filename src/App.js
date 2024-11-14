import React, {useState} from 'react';
import SearchBar from './Search/SearchBar';
import './App.css';
import Tracklist from './TrackInfo/Tracklist';
import SearchResults from './Search/SearchResults';
import {getTracks} from './TrackInfo/Tracks'
import SpotifyBtn from './Buttons/SpotifyBtn';

function App() {

  const [songList, setSongList] = useState ([]);

  const addSong = (song) => {
      setSongList ((prev) => [song, ...prev]);
  };

  const removeSong = (songToRemove) => {
      setSongList ((songList) => {
          songList.filter((song) => song.id !== songToRemove)
      });
  };

  return (
    <div>
      <header>
        Jammming
      </header>
      <body>
        <div>
          <SearchBar getTracks={getTracks}/>
        </div>
        
        <div className='playList'>

        </div>

      </body>
    </div>
  );
}

export default App;
