import React, {useState} from 'react';
import SearchBar from './Search/SearchBar';
import './App.css';
import SearchResults from './Search/SearchResults';
import {getTracks} from './TrackInfo/Tracks'
import SpotifyBtn from './Buttons/SpotifyBtn';
import styles from './Stylings/App.module.css'
import Playlist from './TrackInfo/Playlist';


function App() {

  const [text, setText] = useState("");
    const handleTextChange = ({target}) => {
        setText(target.value);
    };

    const [results, setResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.length) {
          setResults (getTracks(text));
        }
        
    };

    const [songList, setSongList] = useState ([]);
    const addSong = (song) => {
      console.log (song);
      results.forEach((track) => {
        if (song === track.id) {
          setSongList ((prev) => {
            if (!prev.includes(track)){
              console.log("maybe this one?")
             return [track, ...prev];
            } else {
              alert("Already added this song");
              return [prev];
            }
           });
        }
      });   
  };

  const removeSong = (songToRemove) => {

    setSongList ((songList) => songList.filter((song) => song.id !== songToRemove))

  };

  return (
    <div>
      <header className={styles.mainHeader}>
        Jammming
      </header>
      <main>
        <div>
          <SearchBar text={text} handleSubmit={handleSubmit} handleTextChange={handleTextChange} getTracks={getTracks}/>
        </div>
        <div className="results">
          <SearchResults addSong={addSong} results={results} />
        </div>
        <div>
            <Playlist removeSong={removeSong} songList={songList}/>
         </div>
      </main>
    </div>
  );
}

export default App;
