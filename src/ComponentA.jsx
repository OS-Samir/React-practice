import ComponentC from "./ComponentC"
 import ComponentB from "./ComponentB"
 const ComponentA = () => {
   return (
     <div className="box">
       <h1>Component A</h1>
       <ComponentB />
     </div>
   )
 }
 
 export default ComponentA
