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
            <div>Song: {song.name} - Artist: {artistName} - Album: {song.album.name}</div>
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