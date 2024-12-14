import {React, useState} from "react";
import styles from "../Stylings/Styles.module.css";

export default function Preview (props) {

    const {preview, previewText} = props;
    

    return (
        <div className={styles.PreviewContainer}>
            <h1>Preview</h1>
            <div  className={styles.Preview}>
                <div className={styles.imgContainer}>    
                    <img src={preview.image}></img>
                </div>
                <div className={styles.AudioPlayerContainer}>
                  <audio src={preview.playback} controls />
                  <h6>{previewText}</h6>
                </div>
            </div>
        </div>
    );

};
