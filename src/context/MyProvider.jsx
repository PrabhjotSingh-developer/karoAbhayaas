import { useState } from "react";
import MyContext from "./MyContext.jsx";
const MyProvider = ({ children }) => {
  const orders = [
    {
      orderNo: 1293,
      Product: "Sample Book Name",
      Date: "10/04/2021",
      address:
        "R107,AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGLORE, INDIA PIN:846009",
    },
    {
      orderNo: 1293,
      Product: "Sample Book Name",
      Date: "10/04/2021",
      address:
        "R107,AJMERA INFINITY, KARUNA NAGAR, ELECTRONIC CITY, BANGLORE, INDIA PIN:846009",
    },
  ];
  const sampleVideoTitles = [
    {
      title: "Sample video title",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      btnName: "Practice",
    },
    {
      title: "Sample video title",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      btnName: "Practice",
    },
    {
      title: "Sample video title",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      btnName: "Practice",
    },
    {
      title: "Sample video title",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      btnName: "Practice",
    },
    {
      title: "Sample video title",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      btnName: "Practice",
    },
    {
      title: "Sample video title",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      btnName: "Practice",
    },
  ];
  const [value, setValue] = useState(1);

  return <MyContext.Provider value={{ orders,sampleVideoTitles }}>{children}</MyContext.Provider>;
};
export default MyProvider;
