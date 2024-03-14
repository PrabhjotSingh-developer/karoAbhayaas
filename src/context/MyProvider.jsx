import { useState } from "react";
import MyContext from "./MyContext.jsx";
const MyProvider = ({ children }) => {
   const orders = [
    
  ]
    const [value, setValue] = useState(1);
  
    return (
      <MyContext.Provider value={{ value, setValue }}>
        {children}
      </MyContext.Provider>
    );
  };
  export default MyProvider