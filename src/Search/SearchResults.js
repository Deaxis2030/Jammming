import React from "react";
import Tracklist from "../TrackInfo/Tracklist";



export default function SearchResults (props) {

    const {results, addSong, showPreview} = props;
    return (
        <div className='trackList'>
          {results.map((track) => (
            <Tracklist addSong={addSong} song={track} showPreview={showPreview} key={track.id}/>
          ))}
        </div>
    );

};