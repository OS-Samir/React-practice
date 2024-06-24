// import React, { useState } from 'react'
// const Mycomponents = () => {

//     const [name, setName] = useState("Guest");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);
//     const updateName = () => {
//        setName("Samir Adhikari");
//     }

//     const incrementAge = () => {
//        setAge(age+ 1);
//     }

//     const toggleEmployedStatus = () => {
//         setIsEmployed(!isEmployed);
//     }

// return(
//     <div>
//         <p>Name: {name} </p>
//         <button onClick={updateName}>Set Name</button>

//         <p>Age: {age} </p>
//         <button onClick={incrementAge }>Increment Age</button>

//         <p>Age: {isEmployed ? "Yes" : "No"} </p>
//         <button onClick={toggleEmployedStatus }>Toggle status</button>
//     </div>
//   );
// }

// export default Mycomponents;

import { useState } from "react";
import propTypes from 'prop-types'
const Mycomponents = (props) => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [payment , setPayment] = useState("Visa");
  const [shipping, setShipping] = useState('');
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  function handlePaymentChange(event){
    setPayment(event.target.value);
  }

  function handleShippingChange(event){
    setShipping(event.target.value);
  }
  
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} type="number" />
    <p>Quantity: {quantity}</p>

    <textarea value={comment} onChange={handleCommentChange} placeholder='pass the delivery instruction'/>
    <p>Comment: {comment}</p>

    <select value={payment} onChange={handlePaymentChange}>
      <option value='' >Select an option </option>
      <option value='Cash'>Cash</option>
      <option value='Mastercard'>Mastercard</option>
      <option value='Visa'>Visa</option>


    </select>

    <p>Payment: {payment}</p>

    <label>
      <input type="radio" value="pickup" checked={shipping === "pickup"}  onChange={handleShippingChange} />
      Pickup
    </label>
    <br/>
    <label>
    <input type="radio" value="delivery" checked={shipping === "delivery"}  onChange={handleShippingChange} />
   
      Delivery
    </label>

    <p>shipping : {shipping}</p>
    </div>);

  }




export default Mycomponents;
