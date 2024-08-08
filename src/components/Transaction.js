import React from "react";

function Transaction ({ transtion }) {
    return (
        <tr className= "Transaction-list">
            <td className="tableData">{transtion.date}</td>
            <td className="tableData">{transtion.description}</td>
            <td className="tableData">{transtion.category}</td>
            <td className="tableData">{transtion.amount}</td>
        </tr>
        
    );
}


export default Transaction;