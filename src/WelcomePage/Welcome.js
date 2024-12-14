import React from "react";
import styles from "../Stylings/Styles.module.css";
import GetAccessToken from "../Requests/GetAccessToken";


export default function Welcome () {

    const handleClick = () => {
        GetAccessToken()
    }

    return (
        <div className={styles.Welcome}>
            <header className={styles.WelcomeHeader}>
                Welcome<br/> to <br/>Jammming
            </header>
            <body>
                <div className={styles.WelcomeButtonContainer}>
                    <button className={styles.WelcomeButton}
                            aria-label="Welcome-button"
                            onClick={handleClick}
                    >
                        Click here to enter
                    </button>
                </div>
            </body>
        </div>
    );
}