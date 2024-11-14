import React from "react";

export default function SpotifyBtn (props) {

    const {handleSaveClick} = props;

    return (
        <div>
            <button onClick={props.handleSaveClick} className="SpotifyBtn">
                Save to Spotify
            </button>
        </div>
    );

};