import React from "react";
import Tracklist from "../TrackInfo/Tracklist";



export default function SearchResults (props) {

    const {results, addSong} = props;
    return (
        <div className='trackList'>
          {results.map((track) => (
            <Tracklist addSong={addSong} song={track} key={track.id}/>
          ))}
        </div>
    );

};