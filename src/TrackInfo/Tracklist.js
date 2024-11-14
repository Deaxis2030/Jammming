import React from "react";

export default function Tracklist (props) {

    
    const {song, removeSong, addSong} = props;

    const handleRemoveClick = () => {
        removeSong(song.id);
    };

    const handleAddclick = () => {
        addSong(song.id)
    };

    let text ="";
    const handleHover = () => {
        text="Add Song to Playlist?" 
    };

    return (

        <div className="Tracklist">
            <button aria-label="Remove Song"
                    className="removeSongBtn"
                    onClick={handleRemoveClick}
            >
                &times;
            </button>
            <div key={song.id}>{song.songName} - {song.artist} - {song.album}</div>
            <button aria-label="Add Song"
                    className="addSongBtn"
                    onclick={handleAddclick}
                    onMouseOver={handleHover}
            >
                &#43;{text}
            </button>
        </div>

    );

};