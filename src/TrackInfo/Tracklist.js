import React from "react";
import styles from "../Stylings/Styles.module.css";

export default function Tracklist (props) {
    const {song, addSong, showPreview} = props;
   
    const handleAddClick = ({target}) => {
        addSong(target.value);
    };
    
    const handlePreviewClick = (() => {
        showPreview(song)
    })
 
    const artistName = song.artists.map((artist, i) => (i? ", ": "") + artist.name);
   
    return (
        <div className={styles.Tracklist}>
            <div>
                <h3>{song.name}</h3>
                <h4><i>{artistName}</i></h4>
                <h4>Album - {song.album.name}</h4>
            </div>
           <div className={styles.TracksBtnCont}>
                <button aria-label="Add-Song"
                        className={styles.addSongBtn}
                        onClick={handleAddClick}
                        value={song.id}
                    >
                   Add
                </button>
                <button aria-label="Preview-Btn"
                        className={styles.PreviewBtn}
                        onClick={handlePreviewClick}
                        value={song.id}
                >
                    Preview
                </button>
           </div>
        </div>
    );

};