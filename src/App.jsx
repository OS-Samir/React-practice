// import Button from "./Button/Button.jsx";
// const App = () => {
//   return (
//     <>
//       <Button />
//     </>
//   );
// };

// export default App;

import Student from "./Student.jsx";

// const App = () => {
//   return (
//     <div>
//       <Student name="Hello" age={30} isStudent={true}/>
//       <Student name="John" age={20} isStudent={false}/>
//       <Student name="Samir" age={30} isStudent={true}/>
//       <Student name="Sarah" age={40} isStudent={false}/>
//       <Student name="Larry"/>

//     </div>
//   )
// }

// export default App

// conditional rendering = allows you to control what gets rendered in your application
// based on certain conditions (show, hide, or change components)

// import React from "react";
// import Usergreeting from "./Usergreeting.jsx";

// const App = () => {
//   return (
//     <div>
//       <Usergreeting isLoggedIn={true} username="Samir Adhikari" />
//     </div>
//   );
// };

// export default App;

// click event = An interaction when a user clicks on a button 
//               We can respond to clicks by passing a callback
//               to the onClick event handler

import List from "./Components/List.jsx";


// const App = () => {
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "banana", calories: 45 },
//     { id: 3, name: "orange", calories: 50 },
//     { id: 4, name: "pineapple", calories: 60 },
//     { id: 5, name: "strawberry", calories: 150 },
//     { id: 6, name: "kiwi", calories: 100 },
//   ];

//   const vegetables = [
//     { id: 6, name: "potatoes", calories: 110 },
//     { id: 7, name: "carrots", calories: 70 },
//     { id: 8, name: "onions", calories: 80 },
//     { id: 9, name: "broccoli", calories: 90 },
//     { id: 10, name: "ladyfinger", calories: 150 },
//     { id: 11, name: "mushrooms", calories: 150 },
//   ];

//   return (
//     <>
    
//      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
//       {vegetables.length > 0 && <List items={vegetables} category="Vegetables list" />}

//     </>
//   );
// };

// export default App;
export default function App() {
  return (
    <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
  )
}