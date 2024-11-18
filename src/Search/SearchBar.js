import React from "react";
import styles from "../Stylings/searchBarStyles.module.css"

export default function SearchBar (props) {

    const {handleSubmit, handleTextChange, text} = props;

    const onSubmitfunc = (event) => {
      handleSubmit(event);  
    } ;

    const handleTextChangefunc = (event) => {
        handleTextChange (event);
    };
    

    return (
        <div className={styles.searchBar}>
            <form className="example" action="action_page.php" onSubmit={onSubmitfunc}>
                <input  type="text" 
                        value={text}
                        placeholder="Search..." 
                        name="search"
                        onChange={handleTextChangefunc}
                        aria-label="search"
                ></input>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
};