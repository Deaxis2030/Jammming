import React from "react";

export default function Playlist (props) {
    const {song} = props;

    return (
        <li>
           <button aria-label="Remove Song"
                    className="removeSongBtn"
                    onClick={handleRemoveClick}
            >
                &times;
            </button>
            <div>{song.songName} - {song.artist} - {song.album}</div>
        </li>
    );

};