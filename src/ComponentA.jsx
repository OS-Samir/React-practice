
import ComponentB from "./ComponentB";

import { useState, createContext } from "react";

export const UserContext = createContext();
const ComponentA = () => {
  const [user, setUser] = useState("Samir Adhikari");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}> <ComponentB user={user} /> </UserContext.Provider>
     
    </div>
  );
};

export default ComponentA;
