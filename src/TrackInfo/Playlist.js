import React from "react";
import styles from "../Stylings/Styles.module.css";

export default function Playlist (props) {
    
    const {songList, removeSong, name, handleChange, showPreview} = props; 
   
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
            <div className={styles.Playlist}>
                <div aria-label="Playlist">
                {songList.map((track) => (
                    <div className={styles.PlaylistTracks}
                         key={track.id}
                         >
                        <h3>{track.name}</h3> 
                        <h4><i>{track.artists.map((artist, i) => (i? ", ": "") + artist.name)}</i></h4> 
                        <h4>Album - {track.album.name}</h4>
                        <div className={styles.TracksBtnCont}>
                            <button aria-label="Remove-Song"
                                    className={styles.removeSongBtn}
                                    onClick={handleRemoveClick}
                                    value={track.id}
                                    >
                                RMV
                            </button>
                        
                            <button aria-label="Preview-Btn"
                                    className={styles.PreviewBtn}
                                    onClick={()=>{showPreview(track)}}
                                    value={track.id}
                                    >
                                Preview
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
      </div>
    );

};