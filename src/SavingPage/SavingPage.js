import React from "react";
import styles from "../Stylings/Styles.module.css";


export default function SavingPage (props) {

    const {resetDataId} = props;
    const handleClick = () => {
        resetDataId();
    };

    return (
        <div className={styles.SavePage}>
            <header className={styles.SavedHeader}>
                Jammming
            </header>
            <div>
                <div className={styles.SavePageWord}>
                    Playlist Saved
                </div>
                <button onClick={handleClick}
                        className={styles.SavedButton}    
                >
                    Click Here to continue
                </button>
            </div>
        </div>
    );
}