import { useState } from "react";
import MyContext from "./MyContext.jsx";
const MyProvider = ({ children }) => {
   const orders = [
    {
      orderNo:1293,
      Product:"Sample Book Name",
      Date:"10/04/2021",
      address:"R107,AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGLORE, INDIA PIN:846009"
    },
    {
      orderNo:1293,
      Product:"Sample Book Name",
      Date:"10/04/2021",
      address:"R107,AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGLORE, INDIA PIN:846009"
    },

  ]
    const [value, setValue] = useState(1);
  
    return (
      <MyContext.Provider value={{ orders }}>
        {children}
      </MyContext.Provider>
    );
  };
  export default MyProvider