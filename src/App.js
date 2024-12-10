import React, {useState, useEffect} from 'react';
import SearchBar from './Search/SearchBar';
import styles from "./Stylings/Styles.module.css";
import SearchResults from './Search/SearchResults';
import getTracks from './TrackInfo/Tracks';
import getUserId from './GetUserId/GetUserId';
import SpotifyBtn from './Buttons/SpotifyBtn';
import Playlist from './TrackInfo/Playlist';
import GetAccessToken from './Requests/GetAccessToken';

function App() {

  const urlParams = new URLSearchParams(window.location.hash);
  const token = urlParams.get("#access_token");
  const tokenExpireTime = urlParams.get("expires_in")*1000;
 
  // Function below gets access token and user ID and refreshes token after 1 hour 
  useEffect(() => {
      const fetchToken = () => {
        GetAccessToken();
      };
      if (!token) {
        fetchToken();
      } else {
        setId();
        setTimeout(() => {
          document.location = "http://localhost:3000/";
        }, tokenExpireTime);
      }
     }, []); 
  
    // Function below stores userID 
    const [userId, setUserId] = useState("");
    const setId = async () => {
      const id = await getUserId(token); 
      setUserId(id);
     };
   
     // Function below stores value for typed input
    const [text, setText] = useState("");
    const handleTextChange = ({target}) => {
        setText(target.value);
    };
    
    // Function below stores typed input for naming a playlist
    const [name, setName] = useState("");
    const handleChange = (text) => {
        setName(text);
    };
    
    // Function below stores list of songs returned searched
    const [results, setResults] = useState([]);
    const handleSubmit = async(event) => {
      event.preventDefault();
      if (text.length) {
            const list = await getTracks(text, token)
            setResults(list);
          }
    };

    // Function below adds song to a list for creating the playlist
    const [songList, setSongList] = useState ([]);
    const addSong = (song) => {
      results.forEach((track) => {
        if (song === track.id) {
          setSongList ((prev) => {
            if (!prev.includes(track)){
             return [track, ...prev];
            } else {
              alert("Already added this song");
              return prev;
            }
           });
        }
      });   
  };

  // Function below stores URI for songs in playlist
  const [uriList, setUriList] = useState([]);
  useEffect(() => {
    const newUriList = songList.map(track => `spotify:track:${track.id}`);
    setUriList(newUriList);
  }, [songList]);

  // Function below removes song from playlist
  const removeSong = (songToRemove) => {
    setSongList ((songList) => songList.filter((song) => song.id !== songToRemove))
  };

  //Function below clears playlist name and songs. Used after playlist is saved.
  const resetPlaylist = () => {
    setSongList([]);
    setName("");
  }
  
  return (
    <div>
      <header className={styles.mainHeader}>
        Jammming
      </header>
      <main className={styles.mainBody}>
        <div className={styles.searchBarContainer}>
          <div>
            <SearchBar text={text} handleSubmit={handleSubmit} handleTextChange={handleTextChange}/>
          </div>
          <div className={styles.SearchResults}>
            <SearchResults addSong={addSong} results={results} token={token}/>
          </div>
        </div>
        <div className={styles.playlistContainer}>
          <div>
              <Playlist name={name} handleChange={handleChange} removeSong={removeSong} songList={songList}/>
          </div>
          <div className={styles.SpotifyBtnContainer}>
              <SpotifyBtn resetPlaylist={resetPlaylist} name={name} userId={userId} token={token} uriList={uriList} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
