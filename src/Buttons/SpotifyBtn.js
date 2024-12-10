import React from "react";
import postPlaylist from "../PostPlaylist/postPlaylist";
import saveSongsToPlaylist from "../SaveSongsToPlaylist/saveSongToPlaylist";
import styles from "../Stylings/Styles.module.css";

export default function SpotifyBtn (props) {
   
    const {name, token, uriList, userId, resetPlaylist} = props;
    
    const handleSaveClick = async () => {

        if (name && (uriList.length > 0)) { 
            const playlistId = await postPlaylist (token, userId, name);
            saveSongsToPlaylist(token, playlistId, uriList);
            resetPlaylist();
        } else {
            alert("Please enter name of playist or add songs to list to save it!");
        }
    };

    return (
        <div>
            <button aria-label="Save-Playlist-Button"
                    className={styles.SpotifyBtn}
                    onClick={handleSaveClick}
            >
                Save to Spotify
            </button>
        </div>
    );

};