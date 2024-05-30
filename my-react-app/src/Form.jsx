import React, {useState} from "react";

const MyForm = () =>{

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shiping, setShiping] = useState("Delivery");

    let handleChange = (e, set)=> set(prev => e.target.value);

    return(
        <form className="list-container">
            <h1>Shiping Form</h1>
            <input value={name} onChange={(e) =>handleChange(e,setName)}/>
            <p>What is my name?: {name}</p>
            <input value={quantity} type="number" min="0" onChange={(e) =>handleChange(e, setQuantity)}/>
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={(e) =>handleChange(e,setComment)} placeholder="Your comment"/>
            <p>What did you say?: {comment}</p>
            <select onChange={(e) => handleChange(e, setPayment)}>
                <option value="">Plz select payment</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>You've selected: {payment}</p>
            <div className="radio-conatiner">
                <label htmlFor="pick-up">Pick-up </label>
                <input type ="radio" id="pick-up" checked={shiping === "Pick-up"} value="Pick-up" onChange={(e) =>handleChange(e,setShiping)}/><br/>
                <label htmlFor="delivery">Delivery </label>
                <input type ="radio" id="delivery" checked={shiping === "Delivery"} value="Delivery" onChange={(e) =>handleChange(e,setShiping)}/>
                <p>You chose: {shiping}</p>
            </div> 
        </form>
    );
}

export default MyForm