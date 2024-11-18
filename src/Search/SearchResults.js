import React, {useState} from "react";
import Tracklist from "../TrackInfo/Tracklist";
import Playlist from '../TrackInfo/Playlist';


export default function SearchResults (props) {

    const {results} = props;

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
        <div className='trackList'>
          {results.map((track) => (
            <Tracklist addSong={addSong} song={track} key={track.id}/>
          ))}
         <div>
            <Playlist removeSong={removeSong} songList={songList}/>
         </div>
        </div>
    );

};