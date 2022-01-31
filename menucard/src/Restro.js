import React, { useState } from "react";
import MenuCard from "./component/MenuCard";
import Menu from "./component/menuApi.js"
import Navbar from "./component/Navbar";
import "./component/style.css";

// get unique items from array 
const uniqueItem =[
...new Set(Menu.map((currentElem)=>{
return currentElem.category;
})),
"All",
];
// console.log(uniqueItem);

const Restro = () => {

// use of hook

const[menuData,setMenuData]=useState(Menu);
// console.log(menuData);
const[uniqueData,setUniqueData]=useState(uniqueItem);
// console.log(uniqueData);

const filterItem=(category)=>{
if((category)==="All"){
return setMenuData(Menu);
}

const updateList=Menu.filter((currentElem)=>{
return currentElem.category===category;
});
setMenuData(updateList);
};

return(
<>
  <h1 className="heading">Welcome to our Resturant</h1>
  <Navbar filterItem={filterItem} uniqueData={uniqueData } />
  <MenuCard menuData={menuData} />
</>

);
}

export default Restro;