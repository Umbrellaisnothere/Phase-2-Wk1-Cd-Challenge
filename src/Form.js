import React, { useState } from "react";

function Form() { // State variables
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");

    const handleOnChange = (set) => (e)=> set(e.target.value);

    const formData = {
        date,
        description,
        category,
        amount
    };

    // Fetch request
    fetch("")
    .then((response) => response.json())
    .then((data) => {
        console.log("Post s Successful", data);
    })
    .catch((error) => {
        console.error("Error", error);
    });



    
    }


}


export default Form;