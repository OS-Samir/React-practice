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

// import { useState } from "react";
// import propTypes from 'prop-types'
// const Mycomponents = (props) => {
//   const [name, setName] = useState("Guest");
//   const [quantity, setQuantity] = useState(1);
//   const [comment, setComment] = useState('');
//   const [payment , setPayment] = useState("Visa");
//   const [shipping, setShipping] = useState('');
//   function handleNameChange(event) {
//     setName(event.target.value);
//   }

//   function handleQuantityChange(event) {
//     setQuantity(event.target.value);
//   }

//   function handleCommentChange(event){
//     setComment(event.target.value);
//   }

//   function handlePaymentChange(event){
//     setPayment(event.target.value);
//   }

//   function handleShippingChange(event){
//     setShipping(event.target.value);
//   }

//   return (
//     <div>
//       <input value={name} onChange={handleNameChange} />
//       <p>Name: {name}</p>
//       <input value={quantity} onChange={handleQuantityChange} type="number" />
//     <p>Quantity: {quantity}</p>

//     <textarea value={comment} onChange={handleCommentChange} placeholder='pass the delivery instruction'/>
//     <p>Comment: {comment}</p>

//     <select value={payment} onChange={handlePaymentChange}>
//       <option value='' >Select an option </option>
//       <option value='Cash'>Cash</option>
//       <option value='Mastercard'>Mastercard</option>
//       <option value='Visa'>Visa</option>

//     </select>

//     <p>Payment: {payment}</p>

//     <label>
//       <input type="radio" value="pickup" checked={shipping === "pickup"}  onChange={handleShippingChange} />
//       Pickup
//     </label>
//     <br/>
//     <label>
//     <input type="radio" value="delivery" checked={shipping === "delivery"}  onChange={handleShippingChange} />

//       Delivery
//     </label>

//     <p>shipping : {shipping}</p>
//     </div>);

//   }

// export default Mycomponents;

// import { useState } from "react";

// import React from "react";

// const Mycomponents = () => {
//   const [count, setCount] = useState(0);
//   function increment() {
//     setCount((c) => c + 1);
//     setCount((c) => c + 1);
//     setCount((c) => c + 1);
//     setCount((c) => c + 1);
//   }
//   function decrement() {
//     setCount(c => c - 1);
//     setCount(c => c - 1);
//     setCount(c => c - 1);

//   }

//   function reset() {
//     setCount(0);
//   }

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default Mycomponents;

import { useState } from "react";

const Mycomponents = () => {
  const [car, setCar] = useState({
    year: 2020,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar(c => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar(c => ({ ...c, make: event.target.value }));

    function handleModelChange(event) {
      setCar(c => ({ ...c, model: event.target.value }));
    }
    return (
      <div>
        <p>
          Your favourite car is : {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />

        <input type="text" value={car.make} onChange={handleMakeChange} />

        <input type="text" value={car.model} onChange={handleModelChange} />
      </div>
    );
  };
};
export default Mycomponents;
