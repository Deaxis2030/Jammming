import React from "react";

export default function SpotifyBtn (props) {

    

    return (
        <div>
            <button onClick={props.handleClick} className="SpotifyBtn">
                Save to Spotify
            </button>
        </div>
    );

};