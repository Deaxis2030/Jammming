import React from "react";
import styles from "../Stylings/Styles.module.css";

export default function Playlist (props) {
    
    const {songList, removeSong, name, handleChange} = props; 

   
    const handleTextChange = ({target}) => {
        handleChange(target.value);
    };

    const handleRemoveClick = ({target}) => {
        removeSong(target.value);
    };

    return (
        <div>
            <h1>My Playlists</h1>
             <input aria-label="Name-of-Playlist"
                    className="playlistTitleBtn"
                    value={name}
                    type="text"
                    name="PlaylistName"
                    onChange={handleTextChange}
                >
                </input>
            <div className={styles.PlaylistTracks}
                 
            >
                <div aria-label="Playlist"
                     data-testid="Playlist">
                {songList.map((track) => (
                    <div key={track.id}>
                        <h3>{track.name}</h3> 
                        <h4><i>{track.artists.map((artist, i) => (i? ", ": "") + artist.name)}</i></h4> 
                        <h4>Album - {track.album.name}</h4>
                        <button aria-label="Remove-Song"
                                className={styles.removeSongBtn}
                                onClick={handleRemoveClick}
                                value={track.id}
                                >
                            &times;
                        </button>
                    </div>
                ))}
                </div>
            </div>
      </div>
    );

};