
// import styles from "./Button.module.css";
// const Button = () => {

//   const styles = {
    
//       backgroundColor:  "hsl(200, 100%, 50%)",
//       color: "black",
//       padding: "10px 20px",
//       borderRadius: "10px",
//       cursor: "pointer",
//       border:"none"
      
//   }
  
  
  
  
//   return (
//     <>
//       <button style={styles}> Click me</button>
//     </>
//   )
// }

// export default Button;


import React from 'react'

const Button = () => {

  // let count = 0;

  // const handleClick = (name) => {
  //   if (count < 3){
  //     count++;
  //     console.log(`${name} you clicked me ${count} times`);
  //   }
  //   else{
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  const handleClick = (e) => e.target.textContent = 'OUCH! OUCH!';  

  return (
  <button onDoubleClick={(e) => handleClick(e)}>
    Click me 😀
  </button>
  )
}

export default Button
