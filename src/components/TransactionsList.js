import React, { useEffect, useState } from "react";
import FilterTransactions from "./FilterTransactions";
import Transactions from "./Transaction";

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

    const handleDelete = (id) => {
        console.log("Delete transaction with id:", id);
        setFilteredTransactions(filteredTransactions.filter(transtion => transtion.id !== id));
    };
    
    return (
            <div>

              <h1 className="transaction-form">
                Transaction List
              </h1>

              <FilterTransactions 
              transactions={transactions} 
              onFilter={setFilteredTransactions} 
              />
              
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTransactions.map((transtion) => (
                    <Transactions 
                    key={transtion.id} 
                    transtion={transtion} 
                    onDelete={handleDelete} 
                    />
                  ))}
                </tbody>
                
              </table>

            </div>
          );
}


export default TransactionsList;