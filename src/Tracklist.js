import React from "react";
import TrackData from "./Tracks.js";

export default function Tracklist (Track) {

  
    const rawJson = JSON.parse(TrackData)
    return (

        <div>
            <ul>
                {rawJson.map((item, i) => (
                    <li key={i}>{item.songName}{item.artist}{item.album}</li>
                ))}
            </ul>
        </div>

    );

};