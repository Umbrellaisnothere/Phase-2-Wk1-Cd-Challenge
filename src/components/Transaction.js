import React from "react";

function Transaction ({ transtion, onDelete }) {
    return (
        <tr className= "Transaction-list">
            <td className="tableData">{transtion.date}</td>
            <td className="tableData">{transtion.description}</td>
            <td className="tableData">{transtion.category}</td>
            <td className="tableData">{transtion.amount}</td>
            <td className="tableData">
             <button className="delete-btn" onClick={() => onDelete(transtion.id)}>
                Delete
             </button>
            </td>
        </tr>
        
    );
}


export default Transaction;