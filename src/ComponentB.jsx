
import ComponentC from './ComponentC'
import { useContext } from "react";
import { UserContext } from "./ComponentA";
 const ComponentB = () => {
   return (
     <div className="box">
       <h1>Component B</h1>
       <h2>{`Hello ${useContext(UserContext)}`}</h2>
       <ComponentC/>
     </div>
   )
 }
 
 export default ComponentB
 