import React from 'react';
import "./style.css";


const MenuCard=({menuData})=> {
return(
<>

{/* array map method */}



<section className="main-card--cointainer">
{menuData.map((currentElem)=>{

// destructuring of an array 
 const{id,image,name,price,category,description}= currentElem;
  return(
  <>
  <div className="card-container">
      <div className="card ">
        <div className="card-body">
          <span className="card-number card-circle subtle">{id}</span>
          <span className="card-author subtle">{category} </span>
          <h2 className="card-title">{name} </h2>
          <span className="card-description subtle">
           {description}
          </span>
          <div className="card-read">{price}</div>
        </div>
        <img src={image} alt="images" className="card-media" />

        <span className="card-tag  subtle">Order Now</span>
      </div>
    </div>
   
</>
  );
})}
 </section>

</>
);
};

export default MenuCard;