
import React, { useState } from 'react'
const Mycomponents = () => {
    
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0); 
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () => {
       setName("Samir Adhikari");
    }

    const incrementAge = () => {
       setAge(age+ 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
   
return(
    <div>
        <p>Name: {name} </p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age} </p>
        <button onClick={incrementAge }>Increment Age</button>


        <p>Age: {isEmployed ? "Yes" : "No"} </p>
        <button onClick={toggleEmployedStatus }>Toggle status</button>
    </div>
  );
}

export default Mycomponents;
