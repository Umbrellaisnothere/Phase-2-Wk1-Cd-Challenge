import React, { useState } from "react";

function FilterTransactions ({ onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
    const term = e.target.value();
    setSearchTerm(term);

    const filteredTransactions = transactions.filter((transtion) => {
        return transtion.description.toLowerCase().includes(term.toLowerCase());
    });

        onFilter(filteredTransactions);
    };

    return (
        <input
        placeholder="Search for a transaction"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        />
    );
}


export default FilterTransactions;