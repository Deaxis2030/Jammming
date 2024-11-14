import React, { useState } from "react";
import SearchResults from "./SearchResults";
import { getTracks } from "../TrackInfo/Tracks";

export default function SearchBar () {

    const [text, setText] = useState("");
    const handleTextChange = ({target}) => {
        setText(target.value);
    };

    const [results, setResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.length) {
          setResults (getTracks(text));
        }
        
    };

    return (
        <div className="searchBar">
            <form class="example" action="action_page.php" onSubmit={handleSubmit}>
                <input  type="text" 
                        value={text}
                        placeholder="Search..." 
                        name="search"
                        onChange={handleTextChange}
                        aria-label="search"
                ></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
            <div className="results">
                <SearchResults results={results} />
            </div>
        </div>
    );
};