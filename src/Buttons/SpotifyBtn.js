import React from "react";
import { postPlaylist, addSongToPlaylist } from "../TrackInfo/Tracks";

export default function SpotifyBtn (props) {
   
    const {name, token, uriList, userId, resetPlaylist} = props;
    
    const handleSaveClick = async () => {
        const playlistId = await postPlaylist (token, userId, name);
        addSongToPlaylist(token, playlistId, uriList);
        resetPlaylist();
    };

    return (
        <div>
            <button className="SpotifyBtn"
                    onClick={handleSaveClick}
            >
                Save to Spotify
            </button>
        </div>
    );

};