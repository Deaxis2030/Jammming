import React from "react";
import Tracklist from "../TrackInfo/Tracklist";


export default function SearchResults (props) {

    const {results} = props;

    return (
        <div className='trackList'>
          {results.map((track) => (
            <Tracklist song={track} key={track.id}/>
          ))}
        </div>
    );

};