import React, { useState } from "react";

function Form() { // State variables
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    const handleOnChange = (set) => (e)=> set(e.target.value);

    const handleSubmitForm = (e) => {
        e.preventDefault();

    const formData = {
        date,
        description,
        category,
        amount: parseFloat(amount)
    };

    // Fetch request
    fetch("https://bank-of-flatiron-backend-three.vercel.app/transactions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    })
    
    .then((response) => response.json())
    .then((data) => {
        console.log("Post is Successful", data);
    })
    .catch((error) => {
        console.error("Error", error);
    });

    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
};

return (
    <div className="form">
        <form className="form-blocks" onSubmit={handleSubmitForm}>
            
            <div>
                <h1 className="transaction-form">
                    Transaction Form
                </h1>
            </div>

            <input
                className="form-input"
                type="date"
                placeholder="Date"
                value={date}
                onChange={handleOnChange(setDate)}
            />

            <input
                className="form-input"
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleOnChange(setDescription)}
            />

            <input
                className="form-input"
                type="text"
                placeholder="Category"
                value={category}
                onChange={handleOnChange(setCategory)}
            />

            <input
                className="form-input"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={handleOnChange(setAmount)}
            />

            <input
            className="submit"
            type="submit"
            value="Add Transaction"
            />

        </form>        
    </div>
);

}

export default Form;