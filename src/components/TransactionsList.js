import React, { useEffect, useState } from "react";
// import FilterTransactions from "./FilterTransactions";
// import Transaction from "./Transaction";

function TransactionsList() {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
        fetch("https://bank-of-flatiron-backend-three.vercel.app/transactions")
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data);
                setFilteredTransactions(data);
            })
            .catch((error) => console.log(error));
    }, []);
    
    return (
        <div>Transactions List</div>
    );
}


export default TransactionsList;