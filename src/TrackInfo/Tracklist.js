import React from "react";
import styles from "../Stylings/Styles.module.css";

export default function Tracklist (props) {
    const {song, addSong} = props;
   
    const handleAddclick = ({target}) => {
        addSong(target.value);
    };
 
    const artistName = song.artists.map((artist, i) => (i? ", ": "") + artist.name);
   
    return (
        <div className={styles.Tracklist}>
            <div>
                <h3>{song.name} </h3>
                <h4><i>{artistName}</i></h4>
                <h4>Album - {song.album.name}</h4>
            </div>
            <button aria-label="Add-Song"
                    className={styles.addSongBtn}
                    onClick={handleAddclick}
                    value={song.id}
            >
                &#43;
            </button>
        </div>
    );

};