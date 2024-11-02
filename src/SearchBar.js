import React from "react";

export default function SearchBar () {

    return (
        <div>
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    );
};