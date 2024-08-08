import React from "react";

function searchBar ({ search }) {
    return (
        <div className="search-bar">
            <input 
            placeholder="Search type of Transaction.."
            type="text"
            required
            />

        </div>
    );
};

export default searchBar;