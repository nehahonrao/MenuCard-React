import React, { useState } from "react";
import MenuCard from "./component/MenuCard";
import Menu from "./component/menuApi.js"
import Navbar from "./component/Navbar";
import "./component/style.css";



const Restro = () => {

  // use of hook

 const[menuData,setMenuData]=useState(Menu);
//  console.log(menuData);
  return(
    <>
    <h1 className="heading">Welcome to our Resturant</h1>
  <Navbar/>
  <MenuCard menuData={menuData}/>
    </>

  );
}

export default Restro;


