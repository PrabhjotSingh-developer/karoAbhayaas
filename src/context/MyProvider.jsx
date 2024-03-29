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
  const products = [
    {
      name:"Product Name",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrabled it to make a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price:1500,

    },
    {
      name:"Product Name",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrabled it to make a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price:1500,

    },
    {
      name:"Product Name",
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrabled it to make a specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      price:1500,

    },
  ]
  const abouts = [
    {
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      desc: "lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ]
  // we take simple array of object bcz we have constant values if we have to get value from database then we use the array of object but we can use 
  // useState
  const [showCheckout,setShowCheckout] = useState(false);
  const [showDelete,setShowDelete] = useState(false);
  return <MyContext.Provider value={{ orders,sampleVideoTitles,products,abouts ,showCheckout,setShowCheckout,showDelete,setShowDelete}}>{children}</MyContext.Provider>;
};
export default MyProvider;
