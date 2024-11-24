import React from "react";

export default function Tracklist (props) {

    
    const {song, addSong} = props;
    const handleAddclick = ({target}) => {
        addSong(target.value);
    };
 
    const artistName = song.artists.map((artist, i) => (i? ", ": "") + artist.name);
    console.log("artist name", artistName)
    return (
        <div className="Tracklist">
            <div>Song: {song.name} - Artist: {artistName} - Album: {song.album.name}</div>
            <button aria-label="Add Song"
                    className="addSongBtn"
                    onClick={handleAddclick}
                    value={song.id}
            >
                &#43;
            </button>
        </div>
    );

};