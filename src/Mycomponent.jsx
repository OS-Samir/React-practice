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

// import { useState } from "react";

// function Mycomponent () {
//   const [car, setCar] = useState({
//     year: 2020,
//     make: "Ford",
//     model: "Mustang",
//   });

//   function handleYearChange(event) {
//     setCar(c => ({ ...c, year: event.target.value }));
//   }

//   function handleMakeChange(event) {
//     setCar(c => ({ ...c, make: event.target.value }));
//   }
//     function handleModelChange(event) {
//       setCar(c => ({ ...c, model: event.target.value }));
//     }
//     return (
//       <div>
//         <p>
//           Your favourite car is : {car.year} {car.make} {car.model}
//         </p>
//         <input type="number" value={car.year} onChange={handleYearChange} />
//         <br />
//         <input type="text" value={car.make} onChange={handleMakeChange} />
//         <br />
//         <input type="text" value={car.model} onChange={handleModelChange} />
//         <br/>
//       </div>
//     );
//   };
// export default Mycomponent;
// import { useState } from "react";

// import React from "react";
// import List from "./Components/List";

// const Mycomponent = () => {
//   const [food, setFood] = useState(["Apple", "Potato", "Banana"]);

//   function handleAddFood(event) {
//     const newFood = document.getElementById("foodInput").value;
//     document.getElementById("foodInput").value = "";

//     setFood((f) => [...food, newFood]);
//   }

//   function handleRemoveFood(index) {
//       setFood(food.filter((_, i) => i !== index));
//   }
//   return (
//     <div>
//       <h2>List of food</h2>
//       <ul>
//         {food.map((food, index) => (
//           <li key={index} onClick = {() => handleRemoveFood(index)}>{food}</li>
//         ))}
//       </ul>

//       <input type="text" id="foodInput" placeholder="Enter food name" />
//       <button onClick={handleAddFood}> Add food</button>
//     </div>
//   );
// };

// export default Mycomponent;

// import { useState } from "react";

// const Mycomponent = () => {
//   const [cars, setCars] = useState([]);
//   const [carYear, setCarYear] = useState(new Date().getFullYear());
//   const [carMake, setCarMake] = useState("");
//   const [carModel, setCarModel] = useState("");

//   function handleAddCar() {
//     const newCar = { year: carYear, make: carMake, model: carModel };

//     setCars((c) => [...c, newCar]);
//     setCarYear(new Date().getFullYear())
//     setCarMake("");
//     setCarModel("");
//   }

//   function handleRemoveCar(index) {
//     setCars(c => c.filter((_, i)=> i !== index));

//   }

//   function handleYearChange(event) {
//     setCarYear(event.target.value);
//   }

//   function handleMakeChange(event) {
//     setCarMake(event.target.value);
//   }

//   function handleModelChange(event) {
//     setCarModel(event.target.value);
//   }
//   return (
//     <div>
//       <h2>List of car objects</h2>
//       <ul>
//         {cars.map((car, index) =>
//           <li key={index} onClick={() => handleRemoveCar(index)}>
//             {car.year} {car.make} {car.model}
//           </li>)}
//       </ul>

//       <input type="number" value={carYear} onChange={handleYearChange} />
//       <br />
//       <input
//         type="text"
//         value={carMake}
//         onChange={handleMakeChange}
//         placeholder="Enter car make"
//       />
//       <br />
//       <input
//         type="text"
//         value={carModel}
//         onChange={handleModelChange}
//         placeholder="Enter car model"
//       />
//       <br />
//       <button onClick={handleAddCar}>Add car</button>
//     </div>
//   );
// };

// export default Mycomponent;

// import { useState, useEffect } from "react";

// const Mycomponent = () => {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("red");

//   useEffect(() => {
//     document.title = `Count: ${count} ${color}`;
//   }, [count, color]);

//   function increment() {
//     setCount((c) => c + 1);
//   }
//   function decrement() {
//     setCount((c) => c - 1);
//   }

//   function changeColor() {
//     setColor(c => c === "green" ? "red" : "green");
//   }

//   return (
//     <div>
//       <h1 style={{ color: color }}>Count : {count}</h1>
//       <button onClick={increment}>Add count</button>
//       <br />
//       <br />

//       <button onClick={decrement}> Subtract Count</button>
//       <br />
//       <br />
//       <button onClick={changeColor}> Change colour</button>
//     </div>
//   );
// };

// export default Mycomponent;

// import { useState, useEffect } from "react";

// const Mycomponent = () => {

//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() =>{

//   window.addEventListener("resize", handleResize);
//   console.log("Event listener added");
//   return () => {
//     window.removeEventListener("resize", handleResize);
//     console.log("Event listener removed");
//   }

//   },[]);

//   useEffect(() => {

//     document.title = `Size: ${width} x ${height}`
//   }, [width, height]);

//   function handleResize() {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   }
//   return (<>
//     <p>Window width: {width}px</p>
//     <p>Window height: {height}px</p>

//   </>)
// };

// export default Mycomponent;

import { useState, useEffect, useRef } from "react";

const Mycomponent = () => {
  

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  
  useEffect(()=> {
    console.log("COMPONENETS RENDERED");
    
  })

  function handleClick1() {
    inputRef1.current.focus() ;
    inputRef1.current.style.backgroundColor = 'yellow';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = '';


    // setNumber((n) => n + 1);
  }

  function handleClick2() {
    inputRef2.current.focus() ;
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = 'yellow';
    inputRef3.current.style.backgroundColor = '';


    // setNumber((n) => n + 1);
  }

  function handleClick3() {
    inputRef3.current.focus() ;
    inputRef1.current.style.backgroundColor = '';
    inputRef2.current.style.backgroundColor = '';
    inputRef3.current.style.backgroundColor = 'yellow';
    


    // setNumber((n) => n + 1);
  }
  return (
    <div>
      <button onClick={handleClick1}>Click me 1</button>

      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2</button>

      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3</button>

      <input ref={inputRef3} />
    </div>
  );
};

export default Mycomponent;
