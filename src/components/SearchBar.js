import React from "react";

function SearchBar ({ onSearch }) {
    return (
        <div className="search-bar">

            <input 
            placeholder="Search type of Transaction.."
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            required
            />

        </div>
    );
};

export default SearchBar;