import React, {useState} from "react";

export default function Playlist (props) {
    
    const {songList, removeSong} = props; 

    const [name, setName] = useState("");

    const handleChange = ({target}) => {
        setName(target.value);
    };

    const handleRemoveClick = ({target}) => {
        removeSong(target.value);
    };

    return (
      <div className="PlayList">
        <h1>My Playlists</h1>
        <input aria-label="Name-of-Playlist"
                className="playlistTitleBtn"
                value={name}
                type="text"
                name="PlaylistName"
                onChange={handleChange}
        >
        </input>
            <div>
               {songList.map((track) => (
                <div>
                    <h3 key={track.id}>{track.title} - {track.artist} - {track.album}</h3>
                    <button aria-label="Remove Song"
                            className="removeSongBtn"
                            onClick={handleRemoveClick}
                            value={track.id}
                            >
                        &times;
                    </button>
                </div>
               ))}
            </div>
      </div>
    );

};