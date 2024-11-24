import React from "react";

export default function Tracklist (props) {

    
    const {song, addSong} = props;
    const handleAddclick = ({target}) => {
        addSong(target.value);
    };

    let text ="";
    const handleHover = () => {
        text="Add Song to Playlist?" 
    };

    return (

        <div className="Tracklist">
          
            <div>{song.name} - {song.artists.name} - {song.album.name}</div>
            <button aria-label="Add Song"
                    className="addSongBtn"
                    onClick={handleAddclick}
                    onMouseOver={handleHover}
                    value={song.id}
            >
                &#43;{text}
            </button>
            <div id="alreadyAdded" style={{display: "hidden"}}>
                Song already added
            </div>
        </div>

    );

};