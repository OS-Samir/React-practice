 
import ComponentD from './ComponentD'
import { useContext } from "react";
import { UserContext } from "./ComponentA";
 const ComponentC = () => {

  const user = useContext(UserContext);
   return (
     <div className="box">
       <h1>Component C</h1>
       <h2>{`See you ${useContext(UserContext)}`}</h2>
       <ComponentD/>
     </div>
   )
 }
 
 export default ComponentC
 