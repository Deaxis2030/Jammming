import React from "react";

export default function Tracklist (props) {

    
    const {song, addSong} = props;
    const handleAddclick = ({target}) => {
        addSong(target.value);
    };


    return (

        <div className="Tracklist">
          
            <div>{song.name} - {song.artists.name} - {song.album.name}</div>
            <button aria-label="Add Song"
                    className="addSongBtn"
                    onClick={handleAddclick}
                    value={song.id}
            >
                &#43;{text}
            </button>
        </div>

    );

};